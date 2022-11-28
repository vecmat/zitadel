---
title: zitadel/settings.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 调试通知提供商



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 紧凑的  | 布尔值                      | -  |    |




### OIDC设置



| 字段                  | 类型                       | 描述 | 验证 |
| ------------------- | ------------------------ | -- | -- |
| 详细信息                | zitadel.v1.ObjectDetails | -  |    |
| 存取令牌生存期             | google.protobuf.Duration | -  |    |
| id_token_live     | google.protobuf.Duration | -  |    |
| 刷新token_idle_过期时间 | google.protobuf.Duration | -  |    |
| 刷新令牌过期时间            | google.protobuf.Duration | -  |    |




### SMSProvider



| 字段                                                                                       | 类型                       | 描述 | 验证 |
| ---------------------------------------------------------------------------------------- | ------------------------ | -- | -- |
| 详细信息                                                                                     | zitadel.v1.ObjectDetails | -  |    |
| id                                                                                       | 字符串                      | -  |    |
| 状态                                                                                       | SMSProviderConfigstate   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) config.twilio | 双轨配置                     | -  |    |




### SMTP配置



| 字段    | 类型                       | 描述 | 验证 |
| ----- | ------------------------ | -- | -- |
| 详细信息  | zitadel.v1.ObjectDetails | -  |    |
| 发件人地址 | 字符串                      | -  |    |
| 发送者名称 | 字符串                      | -  |    |
| tls   | 布尔值                      | -  |    |
| 主机    | 字符串                      | -  |    |
| 用户    | 字符串                      | -  |    |




### SecretGenerator



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 生成器类型  | SecretGeneratorType      | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| 长度     | uint32                   | -  |    |
| expiry | google.protobuf.Duration | -  |    |
| 包含小字母  | 布尔值                      | -  |    |
| 包含大写字母 | 布尔值                      | -  |    |
| 包括数字   | 布尔值                      | -  |    |
| 包含符号   | 布尔值                      | -  |    |




### SecretGenerator查询



| 字段                                                                                                     | 类型                           | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------ | ---------------------------- | -- | -- |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.type_query.type_查询 | Secretary GeneratorTypeQuery | -  |    |




### Secretary GeneratorTypeQuery



| 字段    | 类型                  | 描述 | 验证 |
| ----- | ------------------- | -- | -- |
| 生成器类型 | SecretGeneratorType | -  |    |




### 双轨配置



| 字段    | 类型  | 描述 | 验证 |
| ----- | --- | -- | -- |
| 西德    | 字符串 | -  |    |
| 发件人编号 | 字符串 | -  |    |






## 枚举数


### SMSProviderConfigstate {#smsproviderconfigstate}


| 名称                                        | 号码 | 描述 |
| ----------------------------------------- | -- | -- |
| SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED | 0  | -  |
| SMS_PROVIDER_CONFIG_ACTIVE              | 1  | -  |
| SMS_PROVIDER_CONFIG_INACTIVE            | 2  | -  |




### SecretGeneratorType {#secretgeneratortype}


| 名称                                    | 号码 | 描述 |
| ------------------------------------- | -- | -- |
| SECRETION_TYPE_TITLE                | 0  | -  |
| SECRETION_TITLE                       | 1  | -  |
| SECRETUS_TITLE                        | 2  | -  |
| SECRETUS_TITLE                        | 3  | -  |
| SECRETRED_TYPE_TITLE                | 4  | -  |
| SECRETION _TYPE_PASWORDLESS_INITTED | 5  | -  |
| SECRETION_TITLE                       | 6  | -  |




