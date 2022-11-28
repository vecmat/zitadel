---
title: 身份验证方法
---

## 客户端秘密基础

当在令牌或反思端点上使用 `client_secret_basic` 时，提供一个`授权` 标题的基本认证值如下形式：

```markdown
Authorization: "Basic " + base64( formUrlEncode(client_id) + ":" + formUrlEncode(client_secret) )
```

给定客户端_id `783664015719522@amce` 和 client_secret `每个密钥！`, 这将导致以下结果 `authorization` header: `Basic NzgzNjY0MDE1NzE5MjA1MjINDBhbWNlOnZlcnl3ZWFrc2VjcmV0JTIx`

## 使用私钥JWT

当使用 `private_key_jwt` (`urn:ietf:params:oauth:client-claustion-type:jwt-berer`作为令牌或内省终点时使用 提供一个 JWT 作为使用以下结构生成并用下载的密钥签名的断言：

---

Key JSON

| 关键字      | 示例                                                                  | 描述                       |
|:-------- |:------------------------------------------------------------------- |:------------------------ |
| 类型       | `“应用程序”`                                                            | 帐户类型，现在只有应用程序有效          |
| keyId    | `"81693565968962154"`                                               | 这是密钥唯一的 ID               |
| 密钥       | `“-----BEGIN RSA PRIVATE Key-----...-----END RSA PRIVATE Key-----”` | ZITADEL生成的私钥无法重生！        |
| clientId | `78366401571920522@acme`                                            | 应用程序的客户端ID，这与令牌的主题相同     |
| 应用ID     | `78366403256846242`                                                 | 应用程序的 id (仅仅是完整性，不用于JWT) |

```JSON
{
    "type": "application",
    "keyId": "81693565968962154",
    "key": "-----BEGIN RSA PRIVATE KEY-----...-----END RSA PRIVATE KEY-----",
    "clientId": "78366401571920522@acme",
    "appId": "78366403256846242"
}
```

---

JWT

| Claim | 示例                          | 描述                                       |
|:----- |:--------------------------- |:---------------------------------------- |
| Aud   | `"https:////{your_domain}"` | 预定受众的字符串或数组。MUST 包括ZITADEL的签发域           |
| exp   | `1605183582`                | 过期的Unix 时间戳                              |
| iat   | `1605179982`                | JWT创建时间的Unix 时间戳, MUST 不能超过 1 小时         |
| 西文    | `“78366401571920522@acme”`  | 代表请求方的字符串 (密钥所有者)，通常是 json 密钥文件的 `客户端ID` |
| 子项    | `“78366401571920522@acme”`  | 应用程序的主题ID，通常是 json 密钥文件的 `客户端ID`         |

```JSON
{
    "iss": "78366401571920522@acme",
    "sub": "78366401571920522@acme",
    "aud": "https://{your_domain}",
    "exp": 1605183582,
    "iat": 1605179982
}
```

> 确认您的密钥， 您必须从Key JSON中提供一个 `kid` 标题，代表您的 keyId ：
> 
> ```json
> {
>   "alg": "RS256",
>   "kid": "81693565968962154"
> }
> ```
