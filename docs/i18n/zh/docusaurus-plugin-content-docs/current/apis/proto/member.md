---
title: zitadel/member.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 电子邮件查询



| 字段     | 类型                          | 描述 | 验证                              |
| ------ | --------------------------- | -- | ------------------------------- |
| 电子邮件地址 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法     | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### FirstName查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名字 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### LastNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 姓名 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 成员



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 用户ID   | 字符串                      | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| 角色     | 重复的字符串                   | -  |    |
| 首选登录名称 | 字符串                      | -  |    |
| 电子邮件地址 | 字符串                      | -  |    |
| 名字     | 字符串                      | -  |    |
| 姓名     | 字符串                      | -  |    |
| 显示名称   | 字符串                      | -  |    |
| 头像网址   | 字符串                      | -  |    |




### SearchQuery



| 字段                                                                                               | 类型            | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------ | ------------- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.first_name_查询 | FirstName查询   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.last_name_查询  | LastNameQuery | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.email_query查询内容 | 电子邮件查询        | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.user_id_查询    | 用户ID查询        | -  |    |




### 用户ID查询



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 用户ID | 字符串 | -  | string.max_len: 200<br /> |






