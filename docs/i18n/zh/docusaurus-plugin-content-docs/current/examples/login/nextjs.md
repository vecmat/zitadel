---
title: Next.js
---

这是我们的Zitadel [Next.js](https://nextjs.org/) 模板。 它显示如何验证用户身份并从OIDC 端口检索用户信息。

> 模板代码是我们zitadel-next js仓库的一部分。 看看看 [这里](https://github.com/zitadel/zitadel-nextjs).

## 正在开始

首先，我们首先创建一个新的NextJS应用程序与 `npx create-nex-next app`，它将自动为您设置一切。 要创建一个项目，请运行：

```bash
npx create-next-app --typescript
# or
yarn create next-app --typescript
```

### 安装身份验证库

为了尽可能轻松地保持模板，我们使用 [下一个身份验证](https://next-auth.js.org/) 作为我们的主要身份验证库。 要安装，请运行：

```bash
npm i next-auth
# or
yarn add next-auth
```

要运行应用，请输入：

```bash
npm run dev
```

然后打开 [http://localhost:3000](http://localhost:3000) 与您的浏览器一起查看结果。

## 设置应用程序和获取密钥

在我们开始构建我们的应用程序之前，我们必须在ZITADEL控制台采取一些配置步骤。 您需要提供一些关于您的应用的信息。 导航到您的项目，然后在页面顶部添加一个新的应用程序。 选择 Web 应用程序类型并继续。 我们建议您在所有 web 应用程序中使用 [认证码](../../apis/openidoauth/grant-types#authorization-code) 与 [验证码交换(PKCE)](../../apis/openidoauth/grant-types#proof-key-for-code-exchange) 结合使用。

![在控制台中创建应用](/img/nextjs/app-create.png)

### 重定向 URI

使用重定向 URI 字段，您告诉ZITADEL，它可以在验证后将用户重定向到哪里。 为了开发，您可以将开发模式设置为 `true` ，以启用不安全的 HTTP 并重定向到 `本地主机` URI。

> 如果您正在与 [示例](https://github.com/zitadel/zitadel-examples/tree/main/angular)一起关注， 设置开发模式为 `true` 和 URL 重定向为 <http://localhost:300/api/auth/callback/zitadel>。

如果您想要将用户重定向到您的应用程序上的路由，他们已注销， 在帖子注销地址字段中添加可选的重定向。

继续创建应用程序。

### 客户端ID

成功创建应用后，弹出窗口将会出现，显示应用客户端ID。 复制客户端ID，因为您需要它来配置您的NextJS应用。

## 下一步设置

现在您在 ZITADEL一侧配置了您的 web 应用程序，您可以继续并整合您的 NextJS 应用程序。

### 配置

NextAuth.js 暴露了您客户端使用的REST API。 要设置您的配置，请在 `页面/api/auth` 中创建一个名为 [...nextauth].tsx的文件。 您可以直接从 [下次验证](https://next-auth.js.org/providers/zitadel) 导入ZITADEL提供商。

```ts reference
https://github.com/zitadel/zitadel-next js/blob/main/pages/api/auth/%5B...nextauth%5D.tsx
```

您可以覆盖默认回调，只需将它们附加到 ZITADEL提供商。

```ts
...
ZitadelProvider({
    issuer: process.env.ZITADEL_ISSUER,
    clientId: process.env.ZITADEL_CLIENT_ID,
    clientSecret: process.env.ZITADEL_CLIENT_SECRET,
    async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          loginName: profile.preferred_username,
          image: profile.picture,
        };
    },
}),
...
```

我们建议使用由PKCE 安全的身份验证代码流来进行身份验证。 要能连接到 ZITADEL，导航到您的控制台项目，创建或选择一个现有项目，并添加您的应用程序选择WEB。 然后PKCE，然后添加 `http://localhost:3000/api/auth/callback/zitadel` 作为重定向URL到您的应用。

出于简单的原因，我们将默认设置为下一次认证为我们提供的默认。 你可以稍后更改重定向，如果你想要的话。

点击创建，然后在应用程序的详细视图中确保启用开发模式。 开发模式确保您可以从非HTTPs端口启动认证流。

> 请注意，我们得到一个客户端ID，但没有客户端保密，因为我们的认证流程不需要它。

现在前往令牌设置，检查ID令牌中 **用户信息** 的复选框，直接获取您的用户名。

### 环境

在项目根目录中创建一个文件 `.env` 并添加以下密钥。 您可以在控制台的应用程序详细页面上找到您的发行者URL。

```env reference
https://github.com/zitadel/zitadel-nextjs/blob/main/.env
```

下一次认证需要所有提供者的保密，所以只是在此定义一个随机的值。

### 用户界面

现在我们可以通过修改 `pages/index.tsx` 来开始编辑主页。 在主页上显示您已验证的用户或登录按钮。

添加以下组件来渲染界面元素：

```ts reference

https://github.com/zitadel/zitadel-next js/blob/main/components/profile.tsx#L4-L38
```

请注意，签名方法需要我们提供商的ID，就我们的情况来说是 `zitadel`。

### 会话状态

允许会话状态在页面之间共享，可以提高性能。 在渲染时减少网络流量并避免组件状态更改 - 您可以使用下一步Auth。 s 提供者在 `/pages/_app.tsx` 中。 在模板 `_app.tsx` 上采集一次掠夺。

```ts reference
https://github.com/zitadel/zitadel-next js/blob/main/pages/_app.tsx
```

最后一件事：在 /pages 中创建一个 `配置文件.tsx` 来打开回调页面。

```ts reference
https://github.com/zitadel/zitadel-next js/blob/main/pages/profile.tsx
```
