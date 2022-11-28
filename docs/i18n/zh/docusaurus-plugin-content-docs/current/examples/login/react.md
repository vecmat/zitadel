---
title: React
---

本集成指南向您展示了推荐的将 **ZITADEL** 融入你的React应用的方式。 它展示了如何将用户登录添加到您的应用程序并从用户信息端点获取一些数据。

在指南末尾，您应该有一个能够登录用户并读取用户配置文件的应用程序。

## 设置应用程序和获取密钥

在我们开始构建我们的应用程序之前，我们必须在ZITADEL控制台做几个配置步骤。 您需要提供一些关于您的应用的信息。 我们建议创建一个新的应用程序从零开始。 导航到您的项目，并在页面顶部添加一个新的应用程序。 选择用户代理并继续。 更多关于不同应用类型的信息，您可以在这里找到 [](../../guides/integrate/oauth-recommended-flows#different-client-profiles)。 我们建议您在所有网页应用程序中使用 [认证代码](../../apis/openidoauth/grant-types#authorization-code) 和 [验证码交换](../../apis/openidoauth/grant-types#proof-key-for-code-exchange)

### 重定向URL

重定向URL是您的应用程序中的 URL，ZITADEL在验证后重定向用户。 设置您的URL到应用程序将被部署到或使用 `http://localhost:3000/` 的域，因为这将是npm 的默认值。

> 您应该将开发模式设置为 `true` ，因为这将在目前启用不安全的 http 。

如果您想要将用户重定向到您的应用程序上的路由，他们已注销， 在帖子重定向字段中添加可选的重定向。

继续并创建应用程序。

### 客户端ID

成功创建应用后，弹出窗口将显示您的客户端ID。 复制您的客户端 ID 作为下一步所需的。

## React设置

### 创建React应用

创建一个新的React应用，命令如下。

```bash
npx create-react-app my-app
```

### 安装 oidc 客户端

您需要安装一个 oauth / oidc 客户端才能与 ZITADEL连接。 运行以下命令：

```bash
npm install oidc-react
```

这个库帮助整合ZITADEL认证到你的React应用。

### 创建和配置认证模块

在安装的 oidc pakage 后，您将需要一个包含OIDC 配置的 AuthProvider

oidc 配置应该包含 **openid**, **配置文件** 和 **电子邮件** 作为范围, **代码** 作为响应类型。 在下面的代码中，请务必将发行者更改为您的实例 url。 您可以在您的申请上在 ZITADEL控制台找到它。 将客户端Id 值“YOUR-CLIENT-ID”替换为 ZITADEL控制台应用程序生成的客户端ID。

```ts
import React from "react";
import { AuthProvider } from "oidc-react";
import "./App.css";
const oidcConfig = {
  onSignIn: async (response: any) => {
    alert(
      "You logged in :" +
        response.profile.given_name +
        " " +
        response.profile.family_name
    );
    window.location.hash = "";
  },
  authority: "https:/[your-domain]-[random-string].zitadel.cloud", // replace with your instance
  clientId: "YOUR-CLIENT-ID",
  responseType: "code",
  redirectUri: "http://localhost:3000/",
  scope: "openid profile email",
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
```

### 运行应用程序

使用以下命令启动您的反应应用程序

```bash
npm start
```

您的浏览器应该自动打开应用网站或者只是去 `http://localhost:3000/`。 在浏览器中打开应用程序时，您将被重定向到您的实例登录。 在成功验证您的用户后，您将回到您的应用程序。 它应该显示一个弹出窗口，说： **你登录了 {FirstName} {LastName}**

## 完成

你已成功地将ZITADEL集成到你的React应用程序中！

### 接下来？

现在您可以继续执行我们的 API 以包含授权。 您可以在这里找到我们的 API 文档 [](../../apis/introduction)

关于创建React应用程序的更多信息，请参阅 [React](https://reactjs.org/docs/getting-started.html) 以及关于使用的 oauth/oidc 库的更多信息，请考虑阅读他们的文档到 [oidc-response](https://www.npmjs.com/package/oidc-react)。
