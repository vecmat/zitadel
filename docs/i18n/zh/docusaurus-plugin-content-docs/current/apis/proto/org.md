---
title: zitadel/org.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 域



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| org_id | 字符串                      | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| 域名称    | 字符串                      | -  |    |
| 已验证    | 布尔值                      | -  |    |
| 是主要的   | 布尔值                      | -  |    |
| 验证类型   | DomainValidationType     | -  |    |




### 域名查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 域搜索查询



| 字段                                                                                                     | 类型   | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------ | ---- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.domain_name_query查询 | 域名查询 | -  |    |




### 矿石



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 状态   | OrgState                 | -  |    |
| 名称   | 字符串                      | -  |    |
| 主域   | 字符串                      | -  |    |




### OrgDomain查询系统



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 域  | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### OrgNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 排序查询



| 字段                                                                                                | 类型            | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------- | ------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.name_query查询 | OrgNameQuery  | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.domain_查询        | OrgDomain查询系统 | -  |    |






## 枚举数


### DomainValidationType {#domainvalidationtype}


| 名称                                   | 号码 | 描述 |
| ------------------------------------ | -- | -- |
| DOMAIN_VALIDATION_TYPE_UNSPECIFIED | 0  | -  |
| DOMAIN_VALIDATION_TYPE_HTTP        | 1  | -  |
| DOMAIN_VALIDATION_TYPE_DNS         | 2  | -  |




### OrgFieldName {#orgfieldname}


| 名称                           | 号码 | 描述 |
| ---------------------------- | -- | -- |
| ONG_FELD_NAME_UNSPECIFIED  | 0  | -  |
| ONG_FIELD_NAME_DESCRIPTION | 1  | -  |




### OrgState {#orgstate}


| 名称                  | 号码 | 描述 |
| ------------------- | -- | -- |
| ROG_STATION_TITLE | 0  | -  |
| ROG_STATE_TITLE   | 1  | -  |
| ROG_STATION_TITLE | 2  | -  |




