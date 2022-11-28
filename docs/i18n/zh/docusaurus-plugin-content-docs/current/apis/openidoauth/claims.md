---
title: 申请
---

ZITADEL根据相应的规格或项目和客户的情况在不同地点提出索赔。 请在下面检查矩阵以了解哪个范围被确定的概述。

| 申请                                                    | Userinfo | 反思中   | ID Token                  | 访问令牌        |
|:----------------------------------------------------- |:-------- | ----- | ------------------------- | ----------- |
| acr                                                   | 否        | 否     | 否                         | 否           |
| 地址                                                    | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 安                                                     | 否        | 否     | 否                         | 否           |
| Aud                                                   | 否        | 否     | 否                         | 当JWT        |
| auth_时间                                               | 否        | 否     | 否                         | 否           |
| 横向(内向时的客户端ID)                                         | 否        | 否     | 否                         | 当JWT        |
| 电子邮件地址                                                | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 电子邮件已验证                                               | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| exp                                                   | 否        | 否     | 否                         | 当JWT        |
| 家族名称                                                  | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 两性平等                                                  | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 指定名称                                                  | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| iat                                                   | 否        | 否     | 否                         | 当JWT        |
| 西文                                                    | 否        | 否     | 否                         | 当JWT        |
| jti                                                   | 否        | 否     | 否                         | 当JWT        |
| 区域设置                                                  | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 名称                                                    | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| nbf                                                   | 否        | 否     | 否                         | 当JWT        |
| nonce                                                 | 否        | 否     | 否                         | 否           |
| 电话                                                    | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 电话已验证                                                 | 当被请求时    | 当被请求时 | 当被请求的 amd 响应类型 `id_token` | 否           |
| 首选用户名(Introspect时用户名)                                 | 当被请求时    | 当被请求时 | 否                         | 否           |
| 子项                                                    | 否        | 否     | 否                         | 当JWT        |
| urn:zitadel:iam:org:domain:primary:{domainname}       | 当被请求时    | 当被请求时 | 当被请求时                     | 当JWT 并请求时   |
| urn:zitadel:iam:org:project:角色                        | 当被请求时    | 当被请求时 | 请求或配置时                    | 当JWT 请求或配置时 |
| urn:zitadel:iam:user:metade:metadata                  | 当被请求时    | 当被请求时 | 当被请求时                     | 当JWT 并请求时   |
| urn:zitadel:iam:user:resourceowners:id                | 当被请求时    | 当被请求时 | 当被请求时                     | 当JWT 并请求时   |
| urn:zitadel:iam:user:resourceowners:name              | 当被请求时    | 当被请求时 | 当被请求时                     | 当JWT 并请求时   |
| urn:zitadel:iam:user:resourceowners :primarary_domain | 当被请求时    | 当被请求时 | 当被请求时                     | 当JWT 并请求时   |

## 标准索赔

| 申请      | 示例                                       | 描述                                                                             |
|:------- |:---------------------------------------- | ------------------------------------------------------------------------------ |
| acr     | 待机                                       | 待机                                                                             |
| 地址      | `Teufener Strasse 19, 9000 St. Gallen`   | 待机                                                                             |
| 安       | `pwd mfa`                                | [RFC8176](https://tools.ietf.org/html/rfc8176) <br/> `密码` 值已废弃，请检查 `pwd` |
| Aud     | `69234237810729019`                      | 代币的观众默认包括所有客户端ID和项目 id                                                         |
| auth_时间 | `1311280969`                             | 身份验证的统一时间                                                                      |
| azp     | `69234237810729234`                      | 请求令牌的客户端ID                                                                     |
| 电子邮件地址  | `row.runner@acme.ch`                     | 主题的电子邮件地址                                                                      |
| 电子邮件已验证 | `true`                                   | 是否由 ZITADEL 验证电子邮件的布尔值                                                         |
| exp     | `1311281970`                             | 令牌到期时间(例如unix 时间)                                                              |
| 家族名称    | `运行器`                                    | 主体姓氏：                                                                          |
| 两性平等    | `其他`                                     | 主题的性别问题                                                                        |
| 指定名称    | `道路`                                     | 主题名称                                                                           |
| iat     | `1311280970`                             | 令牌的时间是在 (Unix 时间)                                                              |
| 西文      | `{your_domain}`                          | 正在发布令牌域                                                                        |
| jti     | `69234237813329048`                      | 令牌的唯一id                                                                        |
| 区域设置    | `中`                                      | 主题语言                                                                           |
| 名称      | `路由器`                                    | 主题全名                                                                           |
| nbf     | `1311280970`                             | 令牌不能在之前使用时间(例如unix 时间)                                                         |
| nonce   | `blQtVEJHNTF0WHhFQmhqZ0RqeHJsdzdkd2d...` | 客户端提供的nonce                                                                    |
| 电话      | `+41 79 XXX XX XX`                       | 用户提供的电话号码                                                                      |
| 电话已验证   | `true`                                   | 如果手机已被ZITADEL验证为布尔值                                                            |
| 首选用户名   | `row.runner@acme.caos.ch`                | ZITADEL用户的登录名。 `username@primarydomain`                                        |
| 子项      | `77776025198584418`                      | 用户的主题 ID                                                                       |

## 自定义补丁

> 此功能尚未发布

## 保留索赔

ZITADEL保留了一些声称某些数据的主张。 请签出 [个保留范围](scopes#reserved-scopes)。

| 申请                                                    | 示例                                                                                                   | 描述                                                               |
|:----------------------------------------------------- |:---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| urn:zitadel:iam:action:{actionname}:log               | `{"urn:zitadel:iam:action:appendCustomClaims:log": ["test log", "another test log"]}`                | 这个索赔在操作过程中被设置为日志，例如如果设置了两个具有相同密钥的自定义索赔。                          |
| urn:zitadel:iam:org:domain:primary:{domainname}       | `{"urn:zitadel:iam:org:domain:primarary": "acme.ch"}`                                                | 这一索赔是用户所属组织的主要领域。                                                |
| urn:zitadel:iam:org:project:角色                        | `{"urn:zitadel:iam:org:project:roles": [ {"user": {"id1": "acme.zitade.ch", "id2": "caos.ch"} } ] }` | 当确定角色时，ZITADEL通过提供角色下方的 `id` 和 `主域` 来做到这一点。 这使您有权检查用户在哪个组织中具有角色。 |
| urn:zitadel:iam:roles:{rolename}                      | 待机                                                                                                   | 待机                                                               |
| urn:zitadel:iam:user:metade:metadata                  | `{"urn:zitadel:iam:user:metadata": [ {"key": "VmFsdWU=" } }`                                         | 元数据要求将包括用户的所有元数据。 值是 base64 编码。                                  |
| urn:zitadel:iam:user:resourceowners:id                | `{"urn:zitadel:iam:user:resourcehower:id": "orgid"}`                                                 | 这一索赔代表了用户资源所有者组织的ID。                                             |
| urn:zitadel:iam:user:resourceowners:name              | `{"urn:zitadel:iam:user:resourceowners:name": "ACME"}`                                               | 这一索赔代表了用户资源所有者组织的名称。                                             |
| urn:zitadel:iam:user:resourceowners :primarary_domain | `{"urn:zitadel:iam:user:resourcehowners:primarary_domain": "acme.ch"}`                               | 这一索赔代表了用户资源所有者组织的主要领域。                                           |
