---
title: zitadel/idp.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 国内流离失所者



| 字段                                                                                            | 类型                       | 描述 | 验证 |
| --------------------------------------------------------------------------------------------- | ------------------------ | -- | -- |
| id                                                                                            | 字符串                      | -  |    |
| 详细信息                                                                                          | zitadel.v1.ObjectDetails | -  |    |
| 状态                                                                                            | 国内流离失所者                  | -  |    |
| 名称                                                                                            | 字符串                      | -  |    |
| styling_type                                                                                  | IDPStylingType           | -  |    |
| 所有者                                                                                           | IDPOwnerType             | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.oidc_config | OIDC配置                   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.jwt_config  | JWTConfig                | -  |    |
| 自动注册                                                                                          | 布尔值                      | -  |    |




### IDPID 查询



| 字段 | 类型  | 描述 | 验证                              |
| -- | --- | -- | ------------------------------- |
| id | 字符串 | -  | string.max_len: 200<br /> |




### IDPLoginPolicyLink



| 字段       | 类型    | 描述 | 验证 |
| -------- | ----- | -- | -- |
| idp_id   | 字符串   | -  |    |
| idp_名称   | 字符串   | -  |    |
| idp_type | IDP类型 | -  |    |




### IDPNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### IDPOwnerTypeQuery



| 字段    | 类型           | 描述 | 验证                    |
| ----- | ------------ | -- | --------------------- |
| 所有者类型 | IDPOwnerType | -  | 只有枚举：true<br /> |




### IDP 用户链接



| 字段           | 类型    | 描述 | 验证 |
| ------------ | ----- | -- | -- |
| 用户ID         | 字符串   | -  |    |
| idp_id       | 字符串   | -  |    |
| idp_名称       | 字符串   | -  |    |
| 提供_user_id | 字符串   | -  |    |
| 提供用户名称       | 字符串   | -  |    |
| idp_type     | IDP类型 | -  |    |




### JWTConfig



| 字段           | 类型  | 描述 | 验证                                                            |
| ------------ | --- | -- | ------------------------------------------------------------- |
| jwt_endpoint | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 键盘终点         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题名称         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### OIDC配置



| 字段        | 类型               | 描述 | 验证 |
| --------- | ---------------- | -- | -- |
| client_id | 字符串              | -  |    |
| 发行者       | 字符串              | -  |    |
| 范围        | 重复的字符串           | -  |    |
| 显示名称映射    | OIDCMappingField | -  |    |
| 用户名映射     | OIDCMappingField | -  |    |






## 枚举数


### IDP 字段名称 {#idpfieldname}


| 名称                          | 号码 | 描述 |
| --------------------------- | -- | -- |
| IDP_FELD_NAME_UNSPECIFIED | 0  | -  |
| IDP_FIELD_NAME_NAME       | 1  | -  |




### IDPOwnerType {#idpownertype}
身份提供者的所有者。

| 名称                           | 号码 | 描述              |
| ---------------------------- | -- | --------------- |
| IDP_OWNER_TYPE_UNSPECIFIED | 0  | -               |
| IDP_OWNER_TYPE_SYSTEM      | 1  | 系统由ZITADEL管理员管理 |
| IDP_OWNER_TYPE_ORG         | 2  | .org由组织管理员管理    |




### 国内流离失所者 {#idpstate}


| 名称                      | 号码 | 描述 |
| ----------------------- | -- | -- |
| IDP_STATE_UNSPECIFIED | 0  | -  |
| IDP_STATE_TITLE       | 1  | -  |
| IDP_STATE_INACTIVE    | 2  | -  |




### IDPStylingType {#idpstylingtype}


| 名称                   | 号码 | 描述 |
| -------------------- | -- | -- |
| STYLING_TYPE_TITLE | 0  | -  |
| STYLING_TYPE_TITLE | 1  | -  |




### IDP类型 {#idptype}
身份提供者的授权框架

| 名称                     | 号码 | 描述                       |
| ---------------------- | -- | ------------------------ |
| IDP_TYPE_UNSPECIFIED | 0  | -                        |
| IDP_TYPE_OIDC        | 1  | -                        |
| IDP_TYPE_JWT         | 3  | PLANNED: IDP_TYPE_SAML |




### OIDCMappingField {#oidcmappingfield}


| 名称                                        | 号码 | 描述 |
| ----------------------------------------- | -- | -- |
| OIDC_MAPPING_FIELD_UNSPECIFIED          | 0  | -  |
| OIDC_MAPPING_FIELD_PREFERRED_USERNAME | 1  | -  |
| OIDC_MAPPING_FIELD_EMAIL                | 2  | -  |




