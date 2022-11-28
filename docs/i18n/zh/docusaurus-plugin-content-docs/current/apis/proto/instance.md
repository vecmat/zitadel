---
title: zitadel/instance.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 域



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 域    | 字符串                      | -  |    |
| 主要的  | 布尔值                      | -  |    |
| 已生成  | 布尔值                      | -  |    |




### 域生成查询
域生成查询总是等于


| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| 已生成 | 布尔值 | -  |    |




### 域首页查询
DomainPrimaryQuery总是等于


| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| 主要的 | 布尔值 | -  |    |




### 域查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 域  | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 域搜索查询



| 字段                                                                                                           | 类型    | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------------ | ----- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.domain_查询                   | 域查询   | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.generated_查询                | 域生成查询 | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.primary_query_query_query | 域首页查询 | -  |    |




### IdsQuery
IdQuery 始终等于


| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| id | 重复的字符串 | -  |    |




### 实例



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 状态   | 状态                       | -  |    |
| 名称   | 字符串                      | -  |    |
| 版本   | 字符串                      | -  |    |
| 域    | 重复域                      | -  |    |




### 实例详情



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 状态   | 状态                       | -  |    |
| 名称   | 字符串                      | -  |    |
| 版本   | 字符串                      | -  |    |
| 域    | 重复域                      | -  |    |




### 查询



| 字段                                                                                                | 类型       | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------- | -------- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.id_query.id_查询 | IdsQuery | -  |    |






## 枚举数


### 域名名称 {#domainfieldname}


| 名称                                      | 号码 | 描述 |
| --------------------------------------- | -- | -- |
| DOMAIN_FELD_NAME_UNSPECIFIED          | 0  | -  |
| DOMAIN_FELD_NAME_DESCRIPTION          | 1  | -  |
| DOMAIN_FELD_NAME_PRIMARY              | 2  | -  |
| DOMAIN_FELD_NAME_DESCRIPTION          | 3  | -  |
| DOMAIN_FELD_NAME_CREATION_DATE_TITE | 4  | -  |




### FieldName {#fieldname}


| 名称                         | 号码 | 描述 |
| -------------------------- | -- | -- |
| FELD_NAME_UNSPECIFIED    | 0  | -  |
| FIELD_NAME_ID            | 1  | -  |
| FELD_NAME_DESCRIPTION    | 2  | -  |
| FELD_NAME_CREATION_TITLE | 3  | -  |




### 状态 {#state}


| 名称                | 号码 | 描述 |
| ----------------- | -- | -- |
| STATE_UNSPECIFIED | 0  | -  |
| STE_CREATING      | 1  | -  |
| STATE_RUNNING     | 2  | -  |
| STATE STOPPING    | 3  | -  |
| STATE_STOPPED     | 4  | -  |




