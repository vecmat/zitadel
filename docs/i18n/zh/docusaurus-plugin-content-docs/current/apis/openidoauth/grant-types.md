---
title: 授予类型
---

对于支持或不支持的 `赠与类型` 的列表请查看下面的表格。

| 授予类型                     | 支持的   |
|:------------------------ |:----- |
| 授权码                      | 是的    |
| PKCE 授权码                 | 是的    |
| 客户端证书                    | 否     |
| 设备授权                     | 正在审议中 |
| 隐藏的                      | 是的    |
| JSON Web 令牌 (JWT) 配置文件   | 是的    |
| 刷新令牌                     | 是的    |
| 资源拥有者密码凭据                | 否     |
| 安全描述标记语言 (SAML) 2.0 配置文件 | 否     |
| 代币交易                     | 否     |

## 授权码

**链接到样本。** [OAuth 2.0 授权框架第1.3.1节](https://tools.ietf.org/html/rfc6749#section-1.3.1)

## 代码交换密钥证明

**链接到样本。** [OAuth 公开客户端的代码交换证明](https://tools.ietf.org/html/rfc7636)

## 隐藏的

**链接到样本。** [OAuth 2.0 授权框架第1.3.2节](https://tools.ietf.org/html/rfc6749#section-1.3.2)

## 客户端证书

**链接到样本。** [OAuth 2.0 授权框架第1.3.4节](https://tools.ietf.org/html/rfc6749#section-1.3.4)

## 刷新令牌

**链接到样本。** [OAuth 2.0 授权框架部分 1.5](https://tools.ietf.org/html/rfc6749#section-1.5)

## JSON Web 令牌 (JWT) 配置文件

**链接到旁观。** [JSON Web Token (JWT) Profile for OAuth 2.0 客户端认证和授权补助金](https://tools.ietf.org/html/rfc7523)

### 使用 JWTs 作为授权补助金

我们的服务用户使用JWT的个人资料来验证它们是否符合ZITADEL。

1. 创建或使用现有的服务用户
2. 创建一个新密钥并下载它
3. 生成一个具有下面结构的JWT并用下载的密钥签名它
4. 将 JWT Base64 编码发送到ZITADEL的令牌端点
5. 使用收到的访问令牌

---

Key JSON

| 关键字   | 示例                                                                  | 描述                |
|:----- |:------------------------------------------------------------------- |:----------------- |
| 类型    | `“服务帐户”`                                                            | 帐户类型，现在只有服务帐户是有效的 |
| keyId | `"81693565968772648"`                                               | 这是密钥唯一的 ID        |
| 密钥    | `“-----BEGIN RSA PRIVATE Key-----...-----END RSA PRIVATE Key-----”` | ZITADEL生成的私钥无法重生！ |
| 用户ID  | `78366401571647008`                                                 | 服务用户 ID，与令牌中的主题相同 |

```JSON
{
    "type": "serviceaccount",
    "keyId": "81693565968772648",
    "key": "-----BEGIN RSA PRIVATE KEY-----...-----END RSA PRIVATE KEY-----",
    "userId": "78366401571647008"
}
```

---

JWT

| Claim | 示例                          | 描述                                      |
|:----- |:--------------------------- |:--------------------------------------- |
| Aud   | `"https:////{your_domain}"` | 预定受众的字符串或数组。MUST 包括ZITADEL的签发域          |
| exp   | `1605183582`                | 过期的Unix 时间戳                             |
| iat   | `1605179982`                | JWT创建时间的Unix 时间戳, MUST 不能超过 1 小时        |
| 西文    | `"77479219772321307"`       | 代表请求方(密钥所有者)的字符串，通常来自json密钥文件的 `userId` |
| 子项    | `"77479219772321307"`       | 服务用户的主题ID，通常是 json 密钥文件的 `用户ID`         |

```JSON
{
    "iss": "77479219772321307",
    "sub": "77479219772321307",
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
>   "kid": "81693565968772648"
> }
> ```

---

有关用法，请参阅 [JWT授权配置Token](endpoints#token_endpoint) 。

### 使用 JWTs 客户端身份验证

看看如何从下载的密钥中为客户端身份验证构建一个 [JWT ](authn-methods#jwt-with-private-key)。

了解如何在 [令牌端点](endpoints#token_endpoint) 或 [内省端点](endpoints#introspection_endpoint) 上使用它。

## 代币交易

**链接到观看。** [OAuth 2.0 令牌交易](https://tools.ietf.org/html/rfc8693)

## 设备授权

**链接到观看。** [OAuth 2.0 设备授权授予](https://tools.ietf.org/html/rfc8628)

## 安全描述标记语言 (SAML) 2.0 配置文件

**链接到示例。** [OAuth 2.0 客户端认证和授权赠款的 安全声明标记语言 (SAML) 2.0 配置](https://tools.ietf.org/html/rfc7522)


## 不支持的授予类型

### 资源拥有者密码凭据

> 由于日益严重的安全关切，我们不支持这种赠款类型。 使用 OAuth 2.1 看来这笔补助金将被取消。

**链接到样本。** [OAuth 2.0 授权框架第1.3.3节](https://tools.ietf.org/html/rfc6749#section-1.3.3)