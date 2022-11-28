---
title: zitadel/object.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### ListDetails



| 字段    | 类型     | 描述 | 验证 |
| ----- | ------ | -- | -- |
| 总计结果  | uint64 | -  |    |
| 处理序列  | uint64 | -  |    |
| 查看时间戳 | 时间戳    | -  |    |




### ListQuery



| 字段  | 类型     | 描述 | 验证 |
| --- | ------ | -- | -- |
| 偏移量 | uint64 | -  |    |
| 限制  | uint32 | -  |    |
| ix  | 布尔值    | -  |    |




### ObjectDetails



| 字段 | 类型     | 描述                 | 验证 |
| -- | ------ | ------------------ | -- |
| 序列 | uint64 | 序列代表事件的顺序。 它总是自动充值 |    |

读写：最后一个事件的序列被投影减少

操纵：由操纵添加的事件的时间戳 | | | creation_date | google。 rotobuf.Timestamp | creatation_date 是在对象上进行第一次操作的时间戳

读取：对象第一个事件的时间戳

创建时间：由操纵添加的事件(s)的时间戳 | | | 更改日期 | google。 rotobuf.Timestamp | 更改日期是对象被更改时的时间戳

内容如下：最后一个事件的时间戳减去预测数

在操作中：| | | resource_owner | 字符串 | resource_owner 是对象属于|






## 枚举数


### ListQuery方法 {#listquerymethod}


| 名称                     | 号码 | 描述 |
| ---------------------- | -- | -- |
| LIST_QUERY_METHOD_IN | 0  | -  |




### TextQueryMethods {#textquerymethod}


| 名称                                             | 号码 | 描述 |
| ---------------------------------------------- | -- | -- |
| TEXT_QUERY_METHOD_EQUALS                     | 0  | -  |
| TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE       | 1  | -  |
| TEXT_QUERY_METHOD_STARTS_WITH              | 2  | -  |
| TEXT_QUERY_METHOD_STARTS_WITH_IGNOR_CASE | 3  | -  |
| TEXT_QUERY_METHOD_CONTANS                    | 4  | -  |
| TEXT_QUERY_METHOD_CONTANS_TITLE            | 5  | -  |
| TEXT_QUERY_METHOD_ENDS_WITH                | 6  | -  |
| TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE  | 7  | -  |




