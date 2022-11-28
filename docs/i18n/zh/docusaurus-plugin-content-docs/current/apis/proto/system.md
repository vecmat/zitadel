---
title: zitadel/system.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)


## 系统服务 {#zitadelsystemv1systemservice}


### Healthz

> **rpc** Healthz([HealthzRequest](#healthzrequest)) [HealthzResponse](#healthzresponse)

指示ZITADEL是否正在运行。 一旦ZITADEL启动，它即作出回应

    GET: /healthz


### 列表实例

> **rpc** ListInstances([ListRequest](#listinstancesrequest)) [ListInstancesResponse](#listinstancesresponse)

返回ZITADEL实例列表

    POST: /instances/_search


### GetInstance

> **rpc** GetInstance([GetInstanceRequest](#getinstancerequest)) [GetInstanceResponse](#getinstanceresponse)

返回实例的详细信息

    GET: /instances/{instance_id}


### 插件实例

> **rpc** AddInstance([AddInstanceRequest](#addinstancerequest)) [AddInstanceResponse](#addinstanceresponse)

创建一个新的实例与所有需要的安装数据 这可能需要一些时间

    POST： /实例


### 更新实例

> **rpc** UpdateInstance([UpdateInstanceRequest](#updateinstancerequest)) [UpdateInstanceResponse](#updateinstanceresponse)

现有实例的更新名称

    PUT: /instances/{instance_id}


### 删除实例

> **rpc** 移除实例([移除实例请求](#removeinstancerequest)) [移除实例响应](#removeinstanceresponse)

删除实例 这可能需要一些时间

    DELETE: /instances/{instance_id}


### 存在域

> **rpc** ExistsDomain([ExistsDomainRequest](#existsdomainrequest)) [ExistsDomainResponse](#existsdomainresponse)

检查域名是否存在

    POST: /domains/{domain}/_existe


### 列表域

> **rpc** ListDomains([ListDomainsRequest](#listdomainsrequest)) [ListDomainsResponse](#listdomainsresponse)

返回一个实例的自定义域

    POST: /instances/{instance_id}/domains/_search


### 添加域

> **rpc** AddDomain([AddDomainRequest](#adddomainrequest)) [AddDomainResponse](#adddomainresponse)

返回实例的域

    POST: /instances/{instance_id}/domains


### 移除域

> **rpc** RemoveDomain([RemoveDomainRequest](#removedomainrequest)) [RemoveDomainResponse](#removedomainresponse)

返回实例的域

    DELETE: /instances/{instance_id}/domains/{domain}


### 首选域

> **rpc** SetPrimaryDomain([SetPrimaryDomainRequest](#setprimarydomainrequest)) [SetPrimaryDomainResponse](#setprimarydomainresponse)

返回实例的域

    POST: /instances/{instance_id}/domains/_set_prior


### 列表视图

> **rpc** ListViews([ListViewsRequest](#listviewsrequest)) [ListViewsResponse](#listviewsresponse)

返回ZITADEL 所有存储的阅读模型用于搜索优化和优化请求延迟 它们代表了事件随附在对象上的三角形

    POST: /views/_search


### 清除视图

> **rpc** ClearView([ClearViewRequest](#clearviewrequest)) [clearViewResponse](#clearviewresponse)

Truncates the delta of the change stream be carefull with this function because ZITADEL has to recompute the deltas after they got cleared. 搜索请求将返回错误的结果，直到所有三角洲被重新计算

    POST: /views/{database}/{view_name}


### 事件列表失败

> **rpc** ListFailedEvents([ListFailedEventsRequest](#listfailedeventsrequest)) [ListFailedEventsRespons](#listfailedeventsresponse)

返回无法处理的事件描述。 有些事件可能需要一些检索。 例如，SMTPAPI第一次无法发送电子邮件

    POST: /failedevents/_search


### RemoveFailedEvent

> **rpc** RemoveFailedEvent([RemoveFailedEventRequest](#removefailedeventrequest)) [RemoveFailedEventResponse](#removefailedeventresponse)

从失败的事件视图中删除事件。 此事件未从更改流 中删除。如果系统能够稍后处理此事件，此通话将被使用。 例如，第二次尝试发送电子邮件是否成功。 第一次尝试产生了一个 个失败事件。 您可以找到它是否在 `失败次数` 上工作

    DELETE: /failedevents/{database}/{view_name}/{failed_sequence}







## 留言


### 添加域请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 域           | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 附加组件请求



| 字段             | 类型         | 描述 | 验证                                                            |
| -------------- | ---------- | -- | ------------------------------------------------------------- |
| 实例名称           | 字符串        | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| fir_org_name | 字符串        | -  | string.max_len: 200<br />                               |
| 自定义域           | 字符串        | -  | string.max_len: 200<br />                               |
| 所有者用户名         | 字符串        | -  | string.max_len: 200<br />                               |
| 所有者邮箱          | 电子邮件地址     | -  | 必填：true<br />                                           |
| 所有者资料          | Profile 设置 | -  | 需要 message.require: false<br />                         |
| 所有者密码          | 密码         | -  | 需要 message.require: false<br />                         |
| 默认语言           | 字符串        | -  | string.max_len: 10<br />                                |




### 电子邮件地址



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 电子邮件地址   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 是电子邮件已验证 | 布尔值 | -  |                                                               |




### 密码



| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| 密碼     | 字符串 | -  | string.max_len: 200<br /> |
| 必须输入密码 | 布尔值 | -  |                                 |




### Profile 设置



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 名字   | 字符串 | -  | string.max_len: 200<br /> |
| 姓名   | 字符串 | -  | string.max_len: 200<br /> |
| 首选语言 | 字符串 | -  | string.max_len: 10<br />  |




### AddInstance响应



| 字段          | 类型                       | 描述 | 验证 |
| ----------- | ------------------------ | -- | -- |
| instance_id | 字符串                      | -  |    |
| 详细信息        | zitadel.v1.ObjectDetails | -  |    |




### 更改订阅请求



| 字段              | 类型     | 描述 | 验证                                                            |
| --------------- | ------ | -- | ------------------------------------------------------------- |
| 域               | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 订阅名称            | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 请求限制            | uint64 | -  |                                                               |
| 动作_mins_limit | uint64 | -  |                                                               |




### 更改订阅响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 清除视图请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 数据库  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 视图名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 清除视图响应
这是一个空的响应




### 存在DomainRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 存在DomainResponse



| 字段  | 类型  | 描述 | 验证 |
| --- | --- | -- | -- |
| 已存在 | 布尔值 | -  |    |




### 失败事件



| 字段      | 类型     | 描述 | 验证 |
| ------- | ------ | -- | -- |
| 数据库     | 字符串    | -  |    |
| 视图名称    | 字符串    | -  |    |
| 失败序列    | uint64 | -  |    |
| 失败数     | uint64 | -  |    |
| 错误_消息   | 字符串    | -  |    |
| last_失败 | 时间戳    | -  |    |




### 获取实例请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetInstanceResponse



| 字段 | 类型                                 | 描述 | 验证 |
| -- | ---------------------------------- | -- | -- |
| 实例 | zitadel.instance.v1.InstanceDetail | -  |    |




### GetUsageRequest



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetUsageResponse



| 字段                | 类型                       | 描述 | 验证 |
| ----------------- | ------------------------ | -- | -- |
| 详细信息              | zitadel.v1.ObjectDetails | -  |    |
| 已执行请求             | uint64                   | -  |    |
| 执行 _action_mins | uint64                   | -  |    |




### HealthzRequest
这是一个空请求




### HealthzResponse
这是一个空的响应




### 列表域请求



| 字段          | 类型                                       | 描述      | 验证                                                            |
| ----------- | ---------------------------------------- | ------- | ------------------------------------------------------------- |
| instance_id | 字符串                                      | 列出限制和顺序 | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询          | zitadel.v1.ListQuery                     | -       |                                                               |
| 排序列         | zitadel.instance.v1.DomainFieldname      | 结果排序的字段 |                                                               |
| 查询          | 重复 zitadel.instance.v1.DomainSearchQuery | 客户寻找的标准 |                                                               |




### 列表域响应



| 字段   | 类型                                  | 描述 | 验证 |
| ---- | ----------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails              | -  |    |
| 排序列  | zitadel.instance.v1.DomainFieldname | -  |    |
| 结果   | 重复 zitadel.instance.v1.Domain       | -  |    |




### ListFailedEventsRequest
这是一个空请求




### ListFailedEventsResponse



| 字段 | 类型      | 描述        | 验证 |
| -- | ------- | --------- | -- |
| 结果 | 重复的失败事件 | 待办事宜：详细列表 |    |




### ListInstancesRequest



| 字段  | 类型                            | 描述      | 验证 |
| --- | ----------------------------- | ------- | -- |
| 查询  | zitadel.v1.ListQuery          | 列出限制和顺序 |    |
| 排序列 | zitadel.instance.v1.FieldName | 结果排序的字段 |    |
| 查询  | 重复 zitadel.instance.v1.Query  | 客户寻找的标准 |    |




### ListInstances响应



| 字段   | 类型                            | 描述 | 验证 |
| ---- | ----------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails        | -  |    |
| 排序列  | zitadel.instance.v1.FieldName | -  |    |
| 结果   | 重复 zitadel.instance.v1.实例     | -  |    |




### 列表视图请求
这是一个空请求




### 列表视图响应



| 字段 | 类型   | 描述        | 验证 |
| -- | ---- | --------- | -- |
| 结果 | 重复视图 | 待办事宜：详细列表 |    |




### 移除域请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 域           | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除域响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveFailedEventRequest



| 字段          | 类型     | 描述 | 验证                                                            |
| ----------- | ------ | -- | ------------------------------------------------------------- |
| 数据库         | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 视图名称        | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 失败序列        | uint64 | -  |                                                               |
| instance_id | 字符串    | -  |                                                               |




### RemoveFailedEventResponse
这是一个空的响应




### 移除实例请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除实例响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 首选域请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 域           | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### SetPrimaryDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级实例请求



| 字段          | 类型  | 描述 | 验证                                                            |
| ----------- | --- | -- | ------------------------------------------------------------- |
| instance_id | 字符串 | -  |                                                               |
| 实例名称        | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 升级实例响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 查看



| 字段          | 类型     | 描述       | 验证 |
| ----------- | ------ | -------- | -- |
| 数据库         | 字符串    | -        |    |
| 视图名称        | 字符串    | -        |    |
| 处理序列        | uint64 | -        |    |
| 活动时间戳       | 时间戳    | 事件发生的时间戳 |    |
| 最后一次成功的破坏运行 | 时间戳    | -        |    |
| 实例          | 字符串    | -        |    |






