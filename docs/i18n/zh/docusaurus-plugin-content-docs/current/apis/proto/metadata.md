---
title: zitadel/metadata.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 元数据



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 密钥   | 字符串                      | -  |    |
| 值    | 字节                       | -  |    |




### 元数据密钥查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 密钥 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 元数据查询



| 字段                                                                                       | 类型      | 描述 | 验证 |
| ---------------------------------------------------------------------------------------- | ------- | -- | -- |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.key_查询 | 元数据密钥查询 | -  |    |





