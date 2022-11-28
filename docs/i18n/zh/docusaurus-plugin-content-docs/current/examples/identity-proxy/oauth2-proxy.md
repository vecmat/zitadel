---
title: OAuth 2.0 代理
---

<!-- //TODO Florian update this to zitadel.cloud-->

[OAuth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy) 是一个允许服务将身份验证流程委托给IDP的项目，例如 **ZITADEL**

## 配置 ZITADEL

### 设置应用程序和获取密钥

在我们开始构建应用程序之前，我们已经在ZITADEL控制台做了几个配置步骤。 您需要提供一些关于您的应用的信息。 我们建议创建一个新的应用程序从零开始。 导航到您的项目，并在页面顶部添加一个新的应用程序。 选择 Web 应用程序并继续。 我们建议您为 OAuth 2.0 Proxy 使用 [认证代码](../../apis/openidoauth/grant-types#authorization-code)。

> 请确保认证方法已设置为 `BASIC` 并且应用程序类型已设置为 `Web`。

### 重定向URL

重定向URL是您的应用程序中的 URL，ZITADEL在验证后重定向用户。 将您的URL设定为代理将被部署到或使用默认的 `http://127.0.0.1:4180/oauth2/callback` 的域。

> 如果您正在跟随从我们的模板下载的样本项目， 您应该将允许的回调URL设置为 <http://localhost:4200/auth/callback>。 您还必须将开发模式设置为 `true` ，因为这将在目前启用不安全的 http 。

如果您想要将用户重定向到您的应用程序上的路由，他们已注销， 在帖子重定向字段中添加可选的重定向。

继续并创建应用程序。

### 客户端ID和密钥

成功创建应用后，弹出窗口将显示您的客户端ID以及一个秘密。 复制您的客户端 ID 和机密，因为在下一步将需要它。

> 注意：如果你丢失了该密钥，你将能够稍后重新生成它。

## OAuth 2.0 代理设置程序

### 身份验证示例

```toml
provider = "oidc"
user_id_claim = "sub" #uses the subject as ID而不是email
provider_display_name = "ZITADEL"
reddirect_url = "http:/127. 0.0.1:4180/oauth2/callback”
oidc_issuer_url = "https://://{your_domain}.zitadel.cloud"
upstreams = [
    "https://example.corp. om"
]
email_domains = [
    "*"
]
client_id = "{ZITADEL_GENERATED_CLIENT_ID}"
client_secret = "{ZITADEL_GENERATED_CLIENT_SECRET}"
pass_access_token = true
cookie_secret = "{SUPPLY_SOME_SECRET_HERE}"
skip_provider_butch = true
cookie_secure = false #localdev only fals
http_address = "127. 0.1:4180" #localdev
```

> 测试版本 `oauth2-proxy v6.1.1 (built with go1.14.2)`

## 完成

您已成功地将ZITADEL纳入您的代理服务器！

### 接下来是什么？
