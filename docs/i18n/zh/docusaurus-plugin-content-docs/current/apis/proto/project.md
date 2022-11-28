---
title: zitadel/project.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### AllProjectGrantQuery



| 字段                                                                                                      | 类型                    | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------- | --------------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_name_查询      | GrantProjectNameQuery | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.role_key_query_query | GrantRoleKey查询        | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_id_查询        | 项目ID查询                | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.granted_org_id_查询    | GrantedOrgIDQuery     | -  |    |




### GrantProjectNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### GrantRoleKey查询



| 字段  | 类型                          | 描述 | 验证                              |
| --- | --------------------------- | -- | ------------------------------- |
| 角色键 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法  | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### GrantedOrgIDQuery



| 字段         | 类型  | 描述 | 验证                              |
| ---------- | --- | -- | ------------------------------- |
| 赠送的 org_id | 字符串 | -  | string.max_len: 200<br /> |




### 已授予项目



| 字段          | 类型                       | 描述 | 验证 |
| ----------- | ------------------------ | -- | -- |
| grant_id    | 字符串                      | -  |    |
| 赠送的 org_id  | 字符串                      | -  |    |
| 授予者名称       | 字符串                      | -  |    |
| 授予role_keys | 重复的字符串                   | -  |    |
| 状态          | ProjectGrantState项目      | -  |    |
| 项目ID        | 字符串                      | -  |    |
| 项目名称        | 字符串                      | -  |    |
| 项目所有者ID     | 字符串                      | -  |    |
| 项目所有者名称     | 字符串                      | -  |    |
| 详细信息        | zitadel.v1.ObjectDetails | -  |    |




### 项目



| 字段           | 类型                       | 描述                     | 验证 |
| ------------ | ------------------------ | ---------------------- | -- |
| id           | 字符串                      | -                      |    |
| 详细信息         | zitadel.v1.ObjectDetails | -                      |    |
| 名称           | 字符串                      | -                      |    |
| 状态           | 工程状态                     | -                      |    |
| 项目_role_补丁 | 布尔值                      | 描述用户的角色是否应该添加到令牌中      |    |
| 项目角色检查       | 布尔值                      | ZITADEL检查用户是否有该项目的至少一个 |    |
| 已检查项目        | 布尔值                      | ZITADEL检查用户是否有权限执行此项目  |    |
| 私人标签设置       | 私有标签设置                   | 定义从哪里触发私有标签            |    |




### ProjectGrantQuery



| 字段                                                                                                      | 类型                    | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------- | --------------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_name_查询      | GrantProjectNameQuery | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.role_key_query_query | GrantRoleKey查询        | -  |    |




### 项目ID查询



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 项目ID | 字符串 | -  | string.max_len: 200<br /> |




### 项目名称查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 项目查询



| 字段                                                                                                                                        | 类型        | 描述 | 验证 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.name_query查询                                             | 项目名称查询    | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_resource_owners_quer_query_project_request | 项目资源所有者查询 | -  |    |




### 项目资源所有者查询



| 字段    | 类型  | 描述 | 验证                              |
| ----- | --- | -- | ------------------------------- |
| 资源所有者 | 字符串 | -  | string.max_len: 200<br /> |




### 作用



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 密钥   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 显示名称 | 字符串                      | -  |    |
| 群組   | 字符串                      | -  |    |




### RoleDisplayNameQuery



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 显示名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 角色密钥查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 密钥 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### RoleQuery



| 字段                                                                                                          | 类型                   | 描述 | 验证 |
| ----------------------------------------------------------------------------------------------------------- | -------------------- | -- | -- |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.key_查询                    | 角色密钥查询               | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.display_name_query_query | RoleDisplayNameQuery | -  |    |






## 枚举数


### 私有标签设置 {#privatelabelingsetting}


| 名称                                               | 号码 | 描述 |
| ------------------------------------------------ | -- | -- |
| PRIVATE_LABELING_SETING_TITLE                  | 0  | -  |
| PRIVATE_LABELING_SETING_FORCE_PROJECTSources | 1  | -  |
| PRIVATE_LABELING_SETING_TITLE                  | 2  | -  |




### ProjectGrantState项目 {#projectgrantstate}


| 名称                                | 号码 | 描述 |
| --------------------------------- | -- | -- |
| PROJECT_GRANT_STATE_DESCRIPTION | 0  | -  |
| PROJECT_GRANT_STATE_TITLE       | 1  | -  |
| PROJECT_GRANT_STATE_TITLE       | 2  | -  |




### 工程状态 {#projectstate}


| 名称                          | 号码 | 描述 |
| --------------------------- | -- | -- |
| PROJECT_STATE_UNSPECIFIED | 0  | -  |
| PROJECT_STATE_TITLE       | 1  | -  |
| PROJECT_STATION_TITLE     | 2  | -  |




