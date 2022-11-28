---
title: Angular
---

本集成指南向您展示了如何将 ZITADEL集成到您的角应用程序中。 它显示如何将用户登录添加到您的应用程序并从用户信息端点获取一些数据。

在指南末尾，您的应用程序具有登录功能，可以访问当前用户的个人资料。

> 此文档引用了我们在 GitHub 中的 [示例](https://github.com/zitadel/zitadel-angular)。 请注意，我们已经在Angular写了ZITADEL控制台，所以你也可以将它用作参考。

## 设置应用程序和获取密钥

在我们开始构建我们的应用程序之前，我们必须在ZITADEL控制台采取一些配置步骤。 您需要提供一些关于您的应用的信息。 我们建议创建一个新的应用程序从零开始。 导航到您的项目，然后在页面顶部添加一个新的应用程序。 选择 Web 应用程序类型并继续。 我们建议您在所有 web 应用程序中使用 [认证码](../../apis/openidoauth/grant-types#authorization-code) 与 [验证码交换(PKCE)](../../apis/openidoauth/grant-types#proof-key-for-code-exchange) 结合使用。

![在控制台中创建应用](/img/angular/app-create.png)

### 重定向 URI

使用重定向 URI 字段，您告诉ZITADEL，它可以在验证后将用户重定向到哪里。 为了开发，您可以将开发模式设置为 `true` ，以启用不安全的 HTTP 并重定向到 `本地主机` URI。

> 如果您正在与 [示例](https://github.com/zitadel/zitadel-angular)一起关注， 设置开发模式为 `true` 和 URL 重定向为 <http://localhost:4200/auth/callback>。

如果您想要将用户重定向到您的应用程序上的路由，他们已注销， 在帖子注销地址字段中添加可选的重定向。

继续创建应用程序。

### 客户端ID

成功创建应用后，弹出窗口将会出现，显示应用客户端ID。 复制客户端ID，因为您需要它来配置您的角度客户端。

## 角设置

现在您在 ZITADEL一侧配置了您的 web 应用程序，您可以继续进行并整合您的角度客户端。

### 安装角度依赖关系

您需要安装 OAuth / OIDC 客户端才能与 ZITADEL连接。 运行以下命令：

```bash
npm install angular-oauth2-oidc
```

### 创建并配置认证模块

在 _AppModule_ 中将 _OAuthModule_ 添加到您的角度导入，并在提供商部分提供 _Authconfig_ 另外，请确保您导入 _HTTPlientModule_。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/app.module.ts
```

设置 _openid_, _profile_ 和 _email_ 为范围 _代码_ 为 responseType和 oidc 到 _true_. 然后创建认证服务来提供验证您的用户。

您可以使用Angular的schematics这样做：

```bash
ng g service services/authentication
```

将以下代码复制到您的服务中。 此代码提供了一个函数 `身份验证()` ，将用户重定向到 ZITADEL。 登录成功后，ZITADEL会将用户重定向到在 _AuthModule_ 和 ZITADEL控制台中配置的重定向URI。 请确保两者对应，否则ZITADEL会产生一个错误。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/services/authentication.service.ts
```

我们的例子包括一个 _状态处理服务_ 来将用户重定向到他最初来自的路由。 如果你不需要这种行为，你可以从上面的 `身份验证()` 方法中省略以下行：

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/services/authentication.service.ts#L45
```

如果您决定使用 _StatelhandlerService_，请在 `app.module` 中提供它。 请确保它先使用 Angular 的 `APP_INITIALIZER` 初始化。 您在 [示例](https://github.com/zitadel/zitadel-angular) 中找到了服务实现。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/app.module.ts#L26-L30
```

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/app.module.ts#L55-L78
```

### 添加登录到您的应用程序

要登录用户，您需要一个组件或一个卫队。

- 组件可以提供一个按钮，在点击时开始登录流程。

- 当没有存储有效访问令牌的用户尝试访问受保护的路由时启动登录流程的护卫。

这些组件的使用严重依赖于您的应用。 在大多数情况下，你需要两者。

生成像这样的组件：

```bash
ng g component components/login
```

点击 _身份验证服务_ 并调用 `身份验证()` 一些事件。

护卫相同：

```bash
ng g guard guards/auth
```

此代码显示 _个作者护卫_ 用于ZITADEL控制台。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/guards/auth.guard.ts
```

将护卫添加到您的 _路由模块_ 中，类似于：

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/app-routing.module.ts#L9-L31
```

> 注意：请确保您将用户从回调URL重定向到一个守卫的页面， 所以 `身份验证()` 再次被调用，访问令牌被存储。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/app-routing.module.ts#L19-L21
```

### 将注销添加到您的应用程序

调用 `auth.signout()` 来记录当前用户。 注意，如果您希望用户在注销后被重定向，您也可以配置注销重定向URI。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/components/user/user.component.ts#L20-L22
```

### 显示用户信息

要获取用户数据，ZITADEL的用户信息端点必须被调用。 此数据包含了与当前用户身份和您在 _AuthConfig_ 中定义的范围相关的敏感信息和工艺品。 我们的 _身份验证服务_ 已经包含了一个名为 _getOIDCUser()_ 的方法。 您可以随时随地拨打电话给它。

```ts reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/components/user/user.component.ts
```

在您的 HTML 文件中：

```html reference
https://github.com/zitadel/zitadel-angular/blob/main/src/app/components/user/user.compon.html
```

## 完成

您已成功地将您的角应用程序与ZITADEL集成！

如果你被卡住了，请考虑查看我们的 [示例](https://github.com/zitadel/zitadel-angular) 应用程序。 它包括了上述这个快速启动的所有功能。 您可以从克隆存储库开始，然后用自己的配置替换 _AppModule_ 中的 _AuthConfig_。如果您遇到问题，请联系我们或在 [GitHub](https://github.com/zitadel/zitadel) 上提出问题。

![在控制台中应用](/img/angular/app-screen.png)

### 接下来是什么？

现在您已经启用了身份验证，现在是使用 ZITADEL API为您的应用程序添加授权的时候了。 请参阅 [docs](../../apis/introduction) 或查看我们在 [GitHub](https://github.com/zitadel/zitadel) 上使用gRPC 访问数据的 ZITADEL控制器。

欲了解更多关于创建角应用程序的信息，请参阅 [角度](https://angular.io/start) 以及上面使用的 OAuth/OIDC 库的更多信息。 考虑在 [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) 阅读他们的文档。
