---
title: 访问 ZITADEL系统 API
---

:::note
本指南侧重于ZITADEL系统 API。 要访问其他 API (管理员、 Auth Management)，请签出 [本指南](./access-zitadel-apis)。 ZITADEL系统 API 目前仅供ZITADEL自托部署使用。
:::

## 系统 API 用户

系统API在所有情况下都能超常工作。 因此，您需要定义一个单独的用户才能访问此API。 您可以通过自定义 [运行时间配置](/docs/guides/manage/self-hosted/configure#runtime-configuration) 来做到这一点。

为了认证用户，将创建和使用一个自签名的JWT。

您可以为您的用户定义任何ID。 本指南将假定它是 `system-user-1`。

## 生成 RSA 密钥对

生成一个 RSA 私钥与 2048 位模块：

```bash
openssl genrsa out system-user-1.pem 2048
```

并从新创建的私钥导出公钥：

```bash
openssl rsa -in system-user-1.pem -outform PEM-pubout system-user-1.pub
```

## 运行时配置

为 ZITADEL运行时配置提供 **公钥** 公钥。

键值的路径：

```yaml
SystemAPIUsers:
  - system-user-1:
      path: /system-user-1.pub
```

或者使用一个基准64编码的键值：

```yaml
SystemAPIUsers:
  - system-user-1:
      KeyData: <base64 encoded value of system-user-1.pub>
```

## 生成 JWT

类似于 OAuth 2.0 JWT 配置文件，我们将创建并签署一个 JWT。 对于此 API，JWT 不会被用于对 ZITADEL授权服务器进行身份验证，而是直接到 API 本身。

JWT 有效载荷将需要包含以下索赔：

```json
{
  "iss": "<userid>",
  "sub": "<userid>",
  "aud": "<https://your_domain>",
  "exp": <now+1h>,
  "iat": <now>
}
```

所以对于运行在 `custom-domain.com` 的实例来说，索赔看起来像这样：

```json
{
  "iss": "system-user-1",
  "sub": "system-user-1",
  "aud": "https://custom-domain.com",
  "iat": 1659957184,
  "exp": 1659960784
}
```

:::note
如果您的系统没有TLS或在一个专用端口上曝光，请务必在您的听众中提供这种信息，e。 . http://localhost:8080
:::

### ZITADEL工具

如果你想手动创建一个 JWT 进行测试，你也可以使用我们的 [ZITADEL工具](https://github.com/zitadel/zitadel-tools)。 下载最新版本并运行：

```bash
./key2jwt -auderence=https://custom-domain.com -key=system-user-1.pem -issuer=system-user-1
```

## 调用系统 API

现在您已经配置了ZITADEL并创建了一个 JWT，您可以调用 System API 并使用令牌进行身份验证：

```bash
curl --request POST \
  --url {your_domain}/system/v1/instances/_search \
  --header 'Authorization: Bearer {token}' \
  --header 'Content-Type: application/json'
```

您应该获得一个成功的响应，获得 `总计结果` 个数值以及您实例的详细信息：

```json
{
    "details": {
        "totalResult": "1"
    },
    "result": [
        {
            "id": "172698969497928101",
            "details": {
                "sequence": "102",
                "creationDate": "2022-08-02T09:30:10.781068Z",
                "changeDate": "2022-08-02T09:30:10.781068Z",
                "resourceOwner": "172698969497928101"
            },
            "state": "STATE_RUNNING",
            "name": "ZITADEL",
            "domains": [
                {
                    "details": {
                        "sequence": "108",
                        "creationDate": "2022-08-02T09:30:10.781068Z",
                        "changeDate": "2022-08-02T09:30:10.781068Z",
                        "resourceOwner": "172698969497928101"
                    },
                    "domain": "custom-domain.com",
                    "primary": true
                },
                {
                    "details": {
                        "sequence": "108",
                        "creationDate": "2022-08-02T09:30:10.781068Z",
                        "changeDate": "2022-08-02T09:30:10.781068Z",
                        "resourceOwner": "172698969497928101"
                    },
                    "domain": "zitadel-gnft7o.custom-domain.com",
                    "generated": true
                }
            ]
        }
    ]
}
```

通过这个令牌，您可以访问整个 [ZITADEL系统 API](../../apis/proto/system)。

## Summary

* 创建一个 RSA 密钥
* 使用运行时的配置向ZITADEL提供用户ID的公钥
* 授权使用您的私钥签名的JWT请求

从哪里出发：

* [ZITADEL API 文档](../../apis/introduction)
