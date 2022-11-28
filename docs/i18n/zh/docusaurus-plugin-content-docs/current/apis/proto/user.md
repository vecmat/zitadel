---
title: zitadel/user.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 作者因子



| 字段                                                                                   | 类型            | 描述 | 验证 |
| ------------------------------------------------------------------------------------ | ------------- | -- | -- |
| 状态                                                                                   | 作者因子          | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.otp | 作者 FactorOTP  | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.u2f | AuthFactorU2F | -  |    |




### 作者 FactorOTP





### AuthFactorU2F



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| id | 字符串 | -  |    |
| 名称 | 字符串 | -  |    |




### 显示名称查询



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 显示名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 电子邮件地址



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| 电子邮件地址   | 字符串 | -  |    |
| 是电子邮件已验证 | 布尔值 | -  |    |




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




### 人 口



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 个人信息   | 个人信息   | -  |    |
| 电子邮件地址 | 电子邮件地址 | -  |    |
| 电话     | 电话     | -  |    |




### LastNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 姓名 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### LoginNameQuery



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 登录名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 机



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 名称 | 字符串 | -  |    |
| 描述 | 字符串 | -  |    |




### 成员



| 字段                                                                                                  | 类型                       | 描述 | 验证 |
| --------------------------------------------------------------------------------------------------- | ------------------------ | -- | -- |
| 用户ID                                                                                                | 字符串                      | -  |    |
| 详细信息                                                                                                | zitadel.v1.ObjectDetails | -  |    |
| 角色                                                                                                  | 重复的字符串                   | -  |    |
| 显示名称                                                                                                | 字符串                      | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.iam                | 布尔值                      | -  |    |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.org_id           | 字符串                      | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.project_id         | 字符串                      | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.project_grant_id | 字符串                      | -  |    |




### MembershipIAMQuery
此查询总是等于


| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| iam | 布尔值 | -  |    |




### 会员排列排列查询
此查询总是等于


| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| org_id | 字符串 | -  | string.max_len: 200<br /> |




### 会员项目GrantQuery
此查询总是等于


| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| 项目赠款ID | 字符串 | -  | string.max_len: 200<br /> |




### 会员项目查询
此查询总是等于


| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 项目ID | 字符串 | -  | string.max_len: 200<br /> |




### 成员查询



| 字段                                                                                                  | 类型                 | 描述 | 验证 |
| --------------------------------------------------------------------------------------------------- | ------------------ | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.org_查询             | 会员排列排列查询           | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_查询         | 会员项目查询             | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_grant_查询 | 会员项目GrantQuery     | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.iam_查询             | MembershipIAMQuery | -  |    |




### NickNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 昵称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### PersonalAccessToken



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 到期日  | 时间戳                      | -  |    |
| 范围   | 重复的字符串                   | -  |    |




### 电话



| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| 电话  | 字符串 | -  |    |
| 已验证 | 布尔值 | -  |    |




### 个人信息



| 字段   | 类型   | 描述 | 验证 |
| ---- | ---- | -- | -- |
| 名字   | 字符串  | -  |    |
| 姓名   | 字符串  | -  |    |
| 昵称   | 字符串  | -  |    |
| 显示名称 | 字符串  | -  |    |
| 首选语言 | 字符串  | -  |    |
| 两性平等 | 两性平等 | -  |    |
| 头像网址 | 字符串  | -  |    |




### RefreshToken



| 字段        | 类型                       | 描述 | 验证 |
| --------- | ------------------------ | -- | -- |
| id        | 字符串                      | -  |    |
| 详细信息      | zitadel.v1.ObjectDetails | -  |    |
| client_id | 字符串                      | -  |    |
| auth_时间   | 时间戳                      | -  |    |
| 空闲过期      | 时间戳                      | -  |    |
| 过期时间      | 时间戳                      | -  |    |
| 范围        | 重复的字符串                   | -  |    |
| 观众数       | 重复的字符串                   | -  |    |




### SearchQuery



| 字段                                                                                                                               | 类型             | 描述 | 验证 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.user_name_quer_quer_quer_request            | 用户名查询          | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.first_name_查询                                 | FirstName查询    | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.last_name_查询                                  | LastNameQuery  | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.nick_name_query_query_query_query_request | NickNameQuery  | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.display_name_query_query                      | 显示名称查询         | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.email_query查询内容                                 | 电子邮件查询         | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.state_查询                                        | StateQuery     | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.type_query.type_查询                           | 类型查询           | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.login_name_query_query.login_query          | LoginNameQuery | -  |    |




### 会议



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| session_id | 字符串                      | -  |    |
| 代理ID       | 字符串                      | -  |    |
| auth_状态    | 会话状态                     | -  |    |
| 用户ID       | 字符串                      | -  |    |
| 用户名称       | 字符串                      | -  |    |
| 登录名称       | 字符串                      | -  |    |
| 显示名称       | 字符串                      | -  |    |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |
| 头像网址       | 字符串                      | -  |    |




### StateQuery
用户状态查询总是等于


| 字段 | 类型   | 描述 | 验证                    |
| -- | ---- | -- | --------------------- |
| 状态 | 用户状态 | -  | 只有枚举：true<br /> |




### 类型查询
UserTypeQuery 始终等于


| 字段 | 类型 | 描述 | 验证                    |
| -- | -- | -- | --------------------- |
| 类型 | 类型 | -  | 只有枚举：true<br /> |




### 用户



| 字段                                                                                     | 类型                       | 描述 | 验证 |
| -------------------------------------------------------------------------------------- | ------------------------ | -- | -- |
| id                                                                                     | 字符串                      | -  |    |
| 详细信息                                                                                   | zitadel.v1.ObjectDetails | -  |    |
| 状态                                                                                     | 用户状态                     | -  |    |
| 用户名称                                                                                   | 字符串                      | -  |    |
| 登录名称                                                                                   | 重复的字符串                   | -  |    |
| 首选登录名称                                                                                 | 字符串                      | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.human | 人 口                      | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) type.box   | 机                        | -  |    |




### 用户授权



| 字段         | 类型                       | 描述 | 验证                              |
| ---------- | ------------------------ | -- | ------------------------------- |
| id         | 字符串                      | -  |                                 |
| 详细信息       | zitadel.v1.ObjectDetails | -  |                                 |
| 角色键        | 重复的字符串                   | -  |                                 |
| 状态         | UserGrantState           | -  |                                 |
| 用户ID       | 字符串                      | -  |                                 |
| 用户名称       | 字符串                      | -  |                                 |
| 名字         | 字符串                      | -  |                                 |
| 姓名         | 字符串                      | -  |                                 |
| 电子邮件地址     | 字符串                      | -  | string.email: true<br />  |
| 显示名称       | 字符串                      | -  | string.max_len: 200<br /> |
| org_id     | 字符串                      | -  |                                 |
| org_name   | 字符串                      | -  |                                 |
| org_domain | 字符串                      | -  |                                 |
| 项目ID       | 字符串                      | -  |                                 |
| 项目名称       | 字符串                      | -  |                                 |
| 项目赠款ID     | 字符串                      | -  |                                 |
| 头像网址       | 字符串                      | -  |                                 |
| 首选登录名称     | 字符串                      | -  |                                 |




### 用户GrantDisplayName查询



| 字段   | 类型                          | 描述 | 验证                    |
| ---- | --------------------------- | -- | --------------------- |
| 显示名称 | 字符串                         | -  |                       |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br /> |




### 用户GrantEmail查询



| 字段     | 类型                          | 描述 | 验证                              |
| ------ | --------------------------- | -- | ------------------------------- |
| 电子邮件地址 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法     | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 用户GrantFirstName查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名字 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 用户GrantLastName查询



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 姓名 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 用户GrantOrgDomainQuery



| 字段         | 类型                          | 描述 | 验证                              |
| ---------- | --------------------------- | -- | ------------------------------- |
| org_domain | 字符串                         | -  | string.max_len: 200<br /> |
| 方法         | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### UserGrantOrgNameQuery



| 字段       | 类型                          | 描述 | 验证                              |
| -------- | --------------------------- | -- | ------------------------------- |
| org_name | 字符串                         | -  | string.max_len: 200<br /> |
| 方法       | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### UserGrantProjectGrantID查询



| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| 项目赠款ID | 字符串 | -  | string.max_len: 200<br /> |




### UserGrantProjectIDQuery



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 项目ID | 字符串 | -  | string.max_len: 200<br /> |




### UserGrantProjectNameQuery



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 项目名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### 用户GrantQuery



| 字段                                                                                                                    | 类型                        | 描述 | 验证 |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_id_查询                      | UserGrantProjectIDQuery   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.user_id_查询                         | UserGrantUserID查询         | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.with_granted_querited_查询           | UserGrantWithGrantedQuery | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.role_key_query_query               | 用户GrantRoleKey查询          | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_grant_id_查询                | UserGrantProjectGrantID查询 | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.user_name_quer_quer_quer_request | UserGrantUserNameQuery    | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.first_name_查询                      | 用户GrantFirstName查询        | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.last_name_查询                       | 用户GrantLastName查询         | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.email_query查询内容                      | 用户GrantEmail查询            | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.org_name_query查询                   | UserGrantOrgNameQuery     | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.org_domain_查询                      | 用户GrantOrgDomainQuery     | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.project_name_查询                    | UserGrantProjectNameQuery | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.display_name_query_query           | 用户GrantDisplayName查询      | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.user_type_quer_query               | UserGrantUserTypeQuery    | -  |    |




### 用户GrantRoleKey查询



| 字段  | 类型                          | 描述 | 验证                              |
| --- | --------------------------- | -- | ------------------------------- |
| 角色键 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法  | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### UserGrantUserID查询



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 用户ID | 字符串 | -  | string.max_len: 200<br /> |




### UserGrantUserNameQuery



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 用户名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### UserGrantUserTypeQuery



| 字段 | 类型 | 描述 | 验证 |
| -- | -- | -- | -- |
| 类型 | 类型 | -  |    |




### UserGrantWithGrantedQuery



| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| 被批准 | 布尔值 | -  |    |




### 用户名查询



| 字段   | 类型                          | 描述 | 验证                              |
| ---- | --------------------------- | -- | ------------------------------- |
| 用户名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法   | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### WebAuthNKey



| 字段   | 类型 | 描述 | 验证 |
| ---- | -- | -- | -- |
| 公开密钥 | 字节 | -  |    |




### WebAuthNToken



| 字段 | 类型   | 描述 | 验证 |
| -- | ---- | -- | -- |
| id | 字符串  | -  |    |
| 状态 | 作者因子 | -  |    |
| 名称 | 字符串  | -  |    |




### WebAuthN验证



| 字段                      | 类型  | 描述 | 验证                                                            |
| ----------------------- | --- | -- | ------------------------------------------------------------- |
| public_key_credential | 字节  | -  | bytes.min_len: 55<br />                                 |
| 令牌名称                    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |






## 枚举数


### 作者因子 {#authfactorstate}


| 名称                        | 号码 | 描述 |
| ------------------------- | -- | -- |
| AUTH_FACTOR_STATE_TITLE | 0  | -  |
| AUTH_FACTOR_STATE_TITLE | 1  | -  |
| AUTH_FACTOR_STATE_READY | 2  | -  |
| AUTH_FACTOR_STATED      | 3  | -  |




### 两性平等 {#gender}


| 名称              | 号码 | 描述 |
| --------------- | -- | -- |
| UNSPECIFIED     | 0  | -  |
| FEMAIL_TITLE    | 1  | -  |
| VIP_DESCRIPTION | 2  | -  |
| VIP_DEVERSE     | 3  | -  |




### 会话状态 {#sessionstate}


| 名称             | 号码 | 描述 |
| -------------- | -- | -- |
| SESSION_STATED | 0  | -  |
| STATION_TITLE  | 1  | -  |
| STATION_TITLE  | 2  | -  |




### 类型 {#type}


| 名称               | 号码 | 描述 |
| ---------------- | -- | -- |
| TYPE_UNSPECIFIED | 0  | -  |
| TYPE_HUK_TITLE | 1  | -  |
| TYPE_MACHINE     | 2  | -  |




### 用户字段名称 {#userfieldname}


| 名称                             | 号码 | 描述 |
| ------------------------------ | -- | -- |
| USER_FIELD_NAME_UNSPECIFIED  | 0  | -  |
| USER_FELD_NAME_USER_NAME   | 1  | -  |
| USER_FELD_NAME_FIRST_NAME  | 2  | -  |
| USER_FELD_NAME_TITLE         | 3  | -  |
| USER_FIELD_NAME_NICK_NAME  | 4  | -  |
| USER_FELD_NAME_DESCRIPTION   | 5  | -  |
| USER_FIELD_EMAIL_DESCRIPTION | 6  | -  |
| USER_FELD_NAME_STATION       | 7  | -  |
| USER_FELD_NAME_TYPE          | 8  | -  |




### UserGrantState {#usergrantstate}


| 名称                         | 号码 | 描述 |
| -------------------------- | -- | -- |
| USER_GRANT_STATE_TITLE   | 0  | -  |
| USER_GRANT_STATE_TITLE   | 1  | -  |
| USER_GRANT_STATION_TITLE | 2  | -  |




### 用户状态 {#userstate}


| 名称                       | 号码 | 描述 |
| ------------------------ | -- | -- |
| USER_STATE_UNSPECIFIED | 0  | -  |
| USER_STATE_TITLE       | 1  | -  |
| USER_STATE_TITLE       | 2  | -  |
| USER_STATED              | 3  | -  |
| USER_STATED              | 4  | -  |
| USER_STATE_SUSPEND     | 5  | -  |
| USER_STATION_TITLE     | 6  | -  |




