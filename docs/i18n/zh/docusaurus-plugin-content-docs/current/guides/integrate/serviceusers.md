---
title: 服务用户
---

这是如何在ZITADEL中创建服务用户的指南。 您可以从 [这里](/docs/concepts/structure/users) 获取更多关于用户的信息
## 创建服务用户

1. 导航到服务用户
2. 点击 **新**
3. 输入用户名和显示名称

![创建新的服务用户](/img/console_serviceusers_create.gif)

## 验证服务用户

在 ZITADEL中，我们使用 `urn:ietf:params:oauth:grant-type:jwt-berer` (**"JWT 持有者令牌使用私钥"**, [RFC7523](https://tools.ietf.org/html/rfc7523)授予这种非交互式认证的授权。

您需要遵循这些步骤来验证服务用户并接收访问令牌：

1. 在 ZITADEL中生成公私密钥对
2. 创建 JSON Web 令牌(JWT) 并使用私钥登录
3. 通过这个JWT从 ZITADEL 请求一个 OAuth 令牌

使用此令牌，您可以像人类用户一样提出后续请求。

## 获取访问令牌

在这一步中，我们将对服务用户进行身份验证，并接收针对API使用的 access_token。

> **信息：** 您是否被卡住？ 请不要犹豫在 [Github 讨论](https://github.com/zitadel/zitadel/discussions) 或 [与我们私下联系](https://zitadel.com/contact/)

### 1. 在 ZITADEL中生成公私密钥对

选择您的服务用户，然后在 KeyS 中点击 **新**。 输入过期日期并点击 **添加**。 点击 **下载** 来确保下载json。

![创建私钥](/img/console_serviceusers_new_key.gif)

下载的json应该看起来像下面的概述。 `密钥` 的值包含了您服务账户的 *私钥* 密钥。 请确保将此密钥安全存储并谨慎处理。 公用钥匙自动保存在ZITADEL中。

```json
{
    "type":"serviceaccount",
    "keyId":"100509901696068329",
    "key":"-----BEGIN RSA PRIVATE KEY----- [...] -----END RSA PRIVATE KEY-----\n",
    "userId":"100507859606888466"
}
```

### 2. 创建一个JWT并使用私钥登录

您需要创建一个带有以下头部和有效载荷的JWT，并用Rs256算法签名。

标题

```json
{
    "alg": "RS256",
    "kid":"100509901696068329"
}
```

请务必将 `kid` 包含在标题中，其值为 `keyId` 从下载的 JSON 中。

有效载荷

```json
{
    "iss": "100507859606888466",
    "sub": "100507859606888466",
    "aud": "https://{your_domain}.zitadel.cloud",
    "iat": [Current UTC timestamp, e.g. 1605179982, max. 1 hour ago],
    "exp": [UTC timestamp, e.g. 1605183582]
}
```

* `iss` 代表请求方，即私人密钥的所有者。 在这种情况下，下载的 JSON 的 `用户ID` 的值。
* `子` 表示应用程序。 设置值为 `userid` 的值
* `aud` 必须是 ZITADEL的签发域
* `iat` 是JWT创建的一个完整的时间戳，e。 。现在且不能超过 1 小时前
* `exp` 是此断言过期的 unix 时间戳

详情请参考文档中的 [JWT_with_Private_Key](../../apis/openidoauth/authn-methods#jwt-with-private-key)

如果您使用Go，您可能想要使用 [提供的工具](https://github.com/zitadel/zitadel-tools) 从下载的json中生成JWT。 有许多 [库](https://jwt.io/#libraries-io) 用于生成和签名 JWT。

### 3. 通过这个JWT从 ZITADEL 请求一个 OAuth 令牌

使用前一步骤编码的 JWT ，您需要制作一个 POST 请求到 ZITADEL的令牌端点：

```bash
curl --request POST \
  --url https://{your_domain}.zitadel. loud/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded'
  --data grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer \
  --data scope='openid profile email'
  --data assertion=eyJ0eXAiOiJKV1QiL...
```

* `grant_type` 应该设置为 `urn:ietf:params:oauth:grant-type:jwt-berr`
* `范围` 应该包含任意 [范围](../../apis/openidoauth/scopes) 您想要包含，但必须包含 `openid`。 这个示例请包含 `个人资料` 和 `电子邮件`
* `断言` 是用您的私钥从前一步签名的 JWT 编码值

您应该收到一个成功的响应， `access_token`,  `token_type` 以及到期时间为 `expires_in`

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "MtjHodGy4zxKylDOhg6kW90WeEQs2q...",
  "token_type": "Bearer",
  "expires_in": 43199
}
```

### 4. 验证您有一个有效的访问令牌

对于这个示例，让我们调用 userinfo 端点来验证我们的访问令牌是否正常。

```bash
curl --request POST \
  --url https://{your_domain}.zitadel.cloud/oidc/v1/userinfo \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Authorization: Bearer MtjHodGy4zxKylDOhg6kW90WeEQs2q...'
```

您应该收到您服务用户信息的回复。

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{
  "name": "MyServiceUser",
  "preferred_username": "service_user@{your_domain}.zitadel.cloud",
  "updated_at": 1616417938
}
```

## Summary

* 有服务用户，您可以安全的机器对机通信。
* 因为没有交互登录，您需要使用使用您的私钥签名的 JWT 授权用户
* 成功授权后，您可以使用类似于人类用户的访问令牌。

从哪里出发：

* 管理 API
* 正在保护后端 API
