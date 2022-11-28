---
title: JWT IDP
---


# JWT IDP

JSON Web 令牌身份提供商 (JWT IDP) 让您可以使用一个 (现有) JWT 作为联邦身份。 想象您有一个Web 应用程序防火墙 (WAF) 可以处理您的会话以获取现有的应用程序。 您正在创建一个使用ZITADEL作为其IDP / 身份验证服务器的新应用程序。 新的应用程序甚至可能会从现有应用程序内打开，您想要重新使用新应用程序的会话信息。 这是JWT国内流离失所者的所在地。

您需要提供的只是ZITADEL能够接收JWT和一些签名验证信息的终点。

## 使用 JWT IDP 验证

当时的验证过程可能看起来像以下：

![JWT 国内流离失所者结构](/img/concepts/objects/jwt_idp.png)

1. 用户已登录到现有的应用程序，并且WAF 持有会话信息。 它甚至可能会向应用程序发送一个JWT。 通过点击现有应用程序中的链接打开新的应用程序。
2. 应用程序引导，由于找不到会话，它将创建一个IDC 授权请求给ZITADEL。 在这项请求中，它提供了直接请求JWT IDP的范围。
3. ZITADEL将这样做，并重定向到预配置的JWT端点。 虽然终点在WAF之后，但ZITADEL能够从定义的 http 头收到一个JWT。 然后它将验证其签名，这可能需要调用配置的密钥端点。 如果签名有效且令牌未过期， ZITADEL会使用令牌并使用所附 `子` 认证，仿佛它是从 OIDC 国内流离失所者返回的 id_token： 它会尝试匹配用户的外部身份，如果不可能的话。 创建一个带有提供令牌信息的新用户。 其前提条件是，IDP 设置 `自动注册` 设置为 `true`。
4. 然后，ZITADEL将重定向到其主要实例，登录流程将继续进行。
5. 用户将被重定向到新应用程序的回调端点，在这个端点中，应用程序将会交换代币代码。 用户最终登录了新的应用程序，没有任何直接的交互。

### 条款和示例值

为了进一步解释和说明联合工作小组的国内流离失所者是如何工作的，我们将假设：

- **现有应用程序** 已部署在 `apps.test.com/existing/`
- **新的应用程序** 部署在 `new.test.com`
- ZITADEL的 **登录 UI** 部署在 `accounts.test.com`

**JWT IDP 配置** 然后可能是：
  - **JWT 端点** (ZITADEL将重定向到的端点)：<br/>`https://apps.test.com/existing/auth-new`
  - **发行者** (JWT)：<br/>`https://issuer.test.internal`
  - **密钥端点** (可以收集JWT 签名的密钥)：<br/>`https://issuer.test.internal/key`
  - **标题名称** (JWT, 如果省略则授权)：<br/>`x-custom-tkn`

因此，如果用户从 ZITADEL重定向到 WAF 上的 JWT 端点(`https://apps.test.com/existing/auth-new`), WAF 先前发布的会话 cookie。 由于路径与退出应用程序在同一域名上，将由浏览器沿线发送。 WAF 将重新使用会话并在 HTTP 头 `x-custom-tkn` 中将JWT 发送到上游， ZITADEL JWT 端点(`https://accounts。 est.com/ui/login/login/jwt/authorization`)。

要验证签名，ZITADEL必须能够连接到密钥端点(`https://issuer.test.internal/keys`) 它将检查令牌是否已被定义的发行商签名( `iss`) (`https://issuer.test.internal`

