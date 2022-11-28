---
title: zitadel/app.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### API配置



| 字段                 | 类型              | 描述 | 验证 |
| ------------------ | --------------- | -- | -- |
| client_id          | 字符串             | -  |    |
| auth_method_type | APIAuthMethod类型 | -  |    |




### 应用



| 字段                                                                                            | 类型                       | 描述 | 验证 |
| --------------------------------------------------------------------------------------------- | ------------------------ | -- | -- |
| id                                                                                            | 字符串                      | -  |    |
| 详细信息                                                                                          | zitadel.v1.ObjectDetails | -  |    |
| 状态                                                                                            | 应用                       | -  |    |
| 名称                                                                                            | 字符串                      | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.oidc_config | OIDC配置                   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.api_config  | API配置                    | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.saml_config | SAML配置                   | -  |    |




### AppNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 应用程序查询



| 字段                                                                                            | 类型           | 描述 | 验证 |
| --------------------------------------------------------------------------------------------- | ------------ | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.name_query查询 | AppNameQuery | -  |    |




### OIDC配置



| 字段                            | 类型                       | 描述 | 验证 |
| ----------------------------- | ------------------------ | -- | -- |
| redirect_uris                 | 重复的字符串                   | -  |    |
| response_types                | 重复的 OIDCResponseType     | -  |    |
| grant_types                   | 重复的 OIDCGrantType        | -  |    |
| app_type                      | OIDCAppType              | -  |    |
| client_id                     | 字符串                      | -  |    |
| auth_method_type            | OIDCAuthMethodType       | -  |    |
| post_logout_redirect_uris   | 重复的字符串                   | -  |    |
| version                       | OIDC版本                   | -  |    |
| none_compliant                | 布尔值                      | -  |    |
| compliance_problems           | 重复的 zitadel.v1.本地化消息     | -  |    |
| dev_mode                      | 布尔值                      | -  |    |
| access_token_type           | OIDCTokenType            | -  |    |
| access_token_role_position  | 布尔值                      | -  |    |
| id_token_role_position      | 布尔值                      | -  |    |
| id_token_userinfo_statement | 布尔值                      | -  |    |
| clock_skew                    | google.protobuf.Duration | -  |    |
| additional_origins            | 重复的字符串                   | -  |    |
| allowed_origins               | 重复的字符串                   | -  |    |




### SAML配置



| 字段                                                                                                | 类型  | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------- | --- | -- | -- |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_xml | 字节  | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_url | 字符串 | -  |    |






## 枚举数


### APIAuthMethod类型 {#apiauthmethodtype}


| 名称                                         | 号码 | 描述 |
| ------------------------------------------ | -- | -- |
| API_AUTH_METHOD_TYPE_BASIC             | 0  | -  |
| API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT | 1  | -  |




### 应用 {#appstate}


| 名称                      | 号码 | 描述 |
| ----------------------- | -- | -- |
| APP_STATE_UNSPECIFIED | 0  | -  |
| APP_STATE_TITLE       | 1  | -  |
| APP_STATE_INACTIVE    | 2  | -  |




### OIDCAppType {#oidcapptype}


| 名称                           | 号码 | 描述 |
| ---------------------------- | -- | -- |
| OIDC_APP_TYPE_WEB          | 0  | -  |
| OIDC_APP_TYPE_USER_AGENT | 1  | -  |
| OIDC_APP_TYPE_NATIVE       | 2  | -  |




### OIDCAuthMethodType {#oidcauthmethodtype}


| 名称                                          | 号码 | 描述 |
| ------------------------------------------- | -- | -- |
| OIDC_AUTH_METHOD_TYPE_BASIC             | 0  | -  |
| OIDC_AUTH_METHOD_TYPE_POPUP_TITLE       | 1  | -  |
| OIDC_AUTH_METHOD_TYPE_NOE               | 2  | -  |
| OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT | 3  | -  |




### OIDCGrant类型 {#oidcgranttype}


| 名称                                     | 号码 | 描述 |
| -------------------------------------- | -- | -- |
| OIDC_GRANT_TYPE_AUTHORIZATION_CODE | 0  | -  |
| OIDC_GRANT_TYPE_DESCRIPTION          | 1  | -  |
| OIDC_GRANT_TYPE_DESCRIPTION          | 2  | -  |




### OIDCResponseType {#oidcresponsetype}


| 名称                                    | 号码 | 描述 |
| ------------------------------------- | -- | -- |
| OIDC_REPONSE_TYPE_CODE              | 0  | -  |
| OIDC_RESPONSE_TYPE_ID_TOKEN       | 1  | -  |
| OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN | 2  | -  |




### OIDCTokenType {#oidctokentype}


| 名称                            | 号码 | 描述 |
| ----------------------------- | -- | -- |
| OIDC_TOKEN_DESCRIPTION      | 0  | -  |
| OIDC_TOKEN_TYPE_DESCRIPTION | 1  | -  |




### OIDC版本 {#oidcversion}


| 名称                 | 号码 | 描述 |
| ------------------ | -- | -- |
| OIDC_VERSION_1_0 | 0  | -  |




