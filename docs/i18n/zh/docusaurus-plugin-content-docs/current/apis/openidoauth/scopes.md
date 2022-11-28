---
title: 范围
---

ZITADEL支持将范围用作要求IAM提供信息的方式，并指示ZITADEL从事某些业务。

## 标准范围

| 范围     | 描述                         |
|:------ | -------------------------- |
| 开启的    | 当使用 openid 连接时，这是一个强制范围    |
| 个人信息   | 要求主题简介的可选范围                |
| 电子邮件地址 | 请求主题电子邮件的可选范围              |
| 地址     | 要求主题地址的任择范围                |
| 离线访问   | 请求刷新令牌的可选范围 (只有当使用代码流时才可能) |

## 自定义范围

> 此功能尚未发布

## 保留范围

除了标准兼容范围外，我们还使用以下范围。

| 范围                                                | 示例                                                     | 描述                                                                                                                                          |
|:------------------------------------------------- |:------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `urn:zitadel:iam:org:project:role:{rolekey}`      | `urn:zitadel:iam:org:project:role:用户`                  | 通过使用此范围，客户端可以在可能的情况下要求求偿urn:zitadel:iam:roliness。 作为一种替代方法，您可以让客户端所属的 [项目](../../guides/manage/console/roles#authorizations) 中的所有角色都能够得到确认。 |
| `urn:zitadel:iam:org:id:{id}`                     | `urn:zitadel:iam:org:id:1782041733164381`              | 当请求此范围 **ZITADEL** 将强制要求用户是所选组织的成员。 如果组织不存在，将显示失败。 它将确认 `urn:zitadel:iam:user:resourceowner` claim。                                         |
| `urn:zitadel:iam:org:domain:primary:{domainname}` | `urn:zitadel:iam:org:domain:primarary:acme.ch`         | 当请求此范围 **ZITADEL** 将强制要求用户是所选组织的成员。 如果组织不存在，将显示故障。                                                                                          |
| `urn:zitadel:iam:role:{rolename}`                 |                                                        |                                                                                                                                             |
| `urn:zitadel:iam:org:project:id:{projectid}:aud`  | `urn:zitadel:iam:org:project:id:69234237810729019:aud` | 通过添加此范围，请求的项目将被添加到访问令牌的观众中                                                                                                                  |
| `urn:zitadel:iam:org:project:id:zitadel:aud`      | `urn:zitadel:iam:org:project:id:zitadel:aud`           | 通过添加这个范围，ZITADEL项目ID将添加到访问令牌的听众中                                                                                                            |
| `urn:zitadel:iam:user:metade:metadata`            | `urn:zitadel:iam:user:metade:metadata`                 | 添加此范围后，用户的元数据将被包含在令牌中。 值是 base64 编码。                                                                                                        |
| `urn:zitadel:iam:user:resourceowner`              | `urn:zitadel:iam:user:resourceowner`                   | 通过添加此范围，用户的资源 (id, name, primary_domain) 将被包含在令牌中。                                                                                          |
| `urn:zitadel:iam:org:idp:id:{idp_id}`             | `urn:zitadel:iam:org:idp:id:76625917754913`            | 通过添加此范围，用户将被直接重定向到身份提供者进行身份验证。 如果配置了自定义登录政策，请确保您也发送主域范围。 否则，系统将无法识别身份提供者。                                                                   |
