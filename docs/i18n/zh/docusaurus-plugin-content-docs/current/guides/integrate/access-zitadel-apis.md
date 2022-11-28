---
title: 访问 ZITADEL APIs
---

:::note
本指南侧重于管理、 认证和管理 API。 要访问 ZITADEL系统 API，请签出 [本指南](./access-zitadel-system-api)。
:::

## ZITADEL管理器

ZITADEL管理员是拥有管理ZITADEL权限的用户。 管理人员有一些不同的层次。

- **IAM Managers**: 这是最高级别的。 具有IAM 管理器角色的用户能够管理整个实例。
- **Org Managers**: 组织级别中的管理人员能够管理授予组织内的一切。
- **Project Mangers**: 在这个级别上，用户能够管理一个项目。
- **Project Grant Manager**: Project grant manager is for project, which are accorded to other organizations.

在每个层面，我们都有一些不同的作用。 您可以在这里找到更多关于不同角色的信息： [ZITADEL管理员角色](../../guides/manage/console/managers#roles)

## 添加ORG_OWNER 到服务用户

请确保您有一个带有密钥的服务用户。 (关于创建服务用户的更详细信息转到 [服务用户](serviceusers.md))

1. 导航到组织详细信息
2. 单击控制台右侧的 **+** 按钮，管理员部分的详细信息
3. 搜索用户并选择
4. 选择角色ORG_OWNER

![添加 Org 管理器](/img/console_org_manager_add.gif)

## 验证服务用户

在 ZITADEL中，我们使用 `urn:ietf:params:oauth:grant-type:jwt-berer` (**"JWT 持有者令牌使用私钥"**, [RFC7523](https://tools.ietf.org/html/rfc7523)授予这种非交互式认证的授权。 [服务用户](serviceusers.md)已经描述了这一点，所以请确保您遵循本指南。

### 请求一个 OAuth 令牌, 和 ZITADEL的观看者

使用前一步骤编码的 JWT ，您需要制作一个 POST 请求到 ZITADEL的令牌端点：

要访问ZITADELAPI，您需要您的代币观众的 ZITADEL项目ID。 这可以通过为受众发送一个自定义范围。 更多关于 [个自定义范围](../../apis/openidoauth/scopes)

使用范围 `urn:zitadel:iam:org:project:id:zitadel:aud` 将ZITADEL项目ID包含在您的观众中

```bash
curl --request POST \
  --url {your_domain}/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer \
  --data scope='openid profile email urn:zitadel:iam:org:project:id:zitadel:aud' \
  --data assertion=eyJ0eXAiOiJKV1QiL...
```

- `grant_type` 必须设置为 `urn:ietf:params:oauth:grant-type:jwt-berr`
- `scope` 应该包含任意 [scope](../../apis/openidoauth/scopes) 您想要包含，但必须包含 `openid`。 这个示例请包含 `个人资料` 和 `电子邮件`
- `assertion` 是用您的私钥从前一步签名的 JWT 编码值

您应该收到一个成功的响应， `access_token`, `token_type` 以及到期时间为 `expires_in`

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "MtjHodGy4zxKylDOhg6kW90WeEQs2q...",
  "token_type": "Bearer",
  "expires_in": 43199
}
```

通过这个令牌，您可以访问 [ZITADEL API](../../apis/introduction)。

## Summary

- 为 ZITADEL授予用户
- 因为没有交互登录，您需要使用使用您的私钥签名的 JWT 授权用户
- 使用自定义范围`urn:zitadel:iam:org:project:id:zitadel:aud`你可以访问 ZITADEL API。

从哪里出发：

- [ZITADEL API 文档](../../apis/introduction)
