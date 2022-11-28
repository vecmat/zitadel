---
title: 实施
---

这些文件使你们能够深入了解ZITADEL数据库的结构。 目标是给您一个粗略的概括，所以您知道哪些数据存储在哪里，哪些数据库方案和表被使用。

## 事件

ZITADEL的唯一真理来源是事件存储在事件仓库。 从这些活动中可以计算所有不同类型的资源 例如用户、项目、应用程序等。

事件有以下数据：

| 属性                                 | 描述                                                                   | 示例                                    |
| ---------------------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| id                                 | 事件唯一标识符，这是由数据库生成的                                                    | b6402a60-e4655-4cc0-904b-f5c6760c4406 |
| aggregate_type                     | 合计的类型、合计可与资源或对象相比较。 一个合计包含多个事件类型                                     | 用户                                    |
| aggregate_id                       | 一个聚合的唯一标识符，这是由 ZITADEL生成的，是一个 sonyflake id                           | 168096909691353697                    |
| aggregate_version                  | 集合版本显示事件的总合的创建版本。 这需要能够计算正确的对象                                       | v1                                    |
| event_type                         | 事件类型                                                                 | 已添加                                   |
| event_sequence                     | 事件序列是一个序列号，在实例中每个事件都递增一个序号。 由于技术原因，某些情况下可以省略一些数字。 这是必要的，以便能够确保事件的顺序。 | 1234                                  |
| previous_aggregate_sequence      | 这个数字是最近在这个特定聚合上创建的事件的顺序。 例如： 最后一个具有特定聚合ID的用户                         | 1233                                  |
| previous_aggregate_type_sequence | 此编号是此聚合上次创建的事件的顺序。 例如：最后一个用户                                         | 1230                                  |
| creation_date                      | 事件创建时的时间戳                                                            | 2022-07-05 13:57:56.358774+00         |
| editor_user                        | 编辑器用户大多包含一个用户的唯一标识符。 并告诉谁进行了导致这次活动的请求。 有时，这也可能是ZITADEL系统的名称。         | 165460784409638965, 通知, 登录            |
| editor_service                     | 服务定义事件创建时调用了哪个API。 如果事件是从系统本身创建的，那么它是空的。                             | Admin-API                             |
| resource_owner                     | 资源所有者定义事件属于哪个组织/资源所有者。 这是由 ZITADEL生成的 Id 作为sonyflake id              | 168051083313153168                    |
| instance_id                        | ZITADEL能够在系统内装载多个ZITADEL实例。 此ID是实例的唯一标识符，由ZITADEL生成为sonyflakeid。     | 165460784409737865                    |


## Schemas

| 图案           | 描述                                                                 | 示例：               |
| ------------ | ------------------------------------------------------------------ | ----------------- |
| System       | 该系统包括ZITADEL实例以外所需的一切。                                             | 资产、加密密钥           |
| Eventstore   | Eventstore是ZITADEL的基础，是真理的唯一来源。 所有存储在 eventstore 中的事件都可以用来生成不同的投射。 | 事件、实例序列、全系统独特限制   |
| Projections  | 预测包含用于阅读请求的所有计算对象。                                                 | 用户、项目等            |
| Auth         | 其中包括用于认证api的预测。 此方案中的所有预测都应尽快移至预测                                  | 用户，auth_request等。 |
| Adminapi     | 这包括用于管理api的预测。 此方案中的所有预测都应尽快移至预测                                   | 风格化               |
| Notification | 这包含用于发送通知的预测。 此方案中的所有预测都应尽快移至预测                                    | 风格化               |

## 预测

ZITADEL的预测含有用于阅读请求的所有计算对象。 预测可能稍微落后于实际事件，而且并非所有物体都是最新的。

### Pub-Sub
为了使预测尽可能更新，采用了内部公共子系统。 一旦事件被写入活动商店，它将被送到已经订阅这个总量的预测中。

### Spooler
有时出于技术原因，有时并非所有事件都被送到预测中。 出于这一原因，一台假装机平行运行，每隔几分钟检查是否有新的事件尚未处理。

### 当前序列

为了确保在创建投影时不会错过任何事件，ZITADEL储存当前已处理的序列。 您可以在以下表格中找到当前序列：
- 当前序列
- 当前序列
- 当前序列
- 当前序列

当前序列为每个ZITADEL实例和表存储。

| 属性               | 描述         | 示例：                           |
| ---------------- | ---------- | ----------------------------- |
| projection_name  | 序列有效的投影名称。 | 用户                            |
| aggregate_type   | 序列来自的合计类型  | 用户                            |
| current_sequence | 最后处理的序列    | 1234                          |
| instance_id      | 事件所属的实例    | 165460784409737834            |
| current_sequence | 更新表时的时间戳   | 2022-07-05 13:57:59.454798+00 |

### 失败事件

某个事件有时因为某种原因无法正确处理并且发生错误。 然后尝试处理零次事件。 当定义的尝试次数失败时，事件将存储在失败事件表中，下一个事件将被处理。 必须这样做，以便不阻止投影，不再处理任何其他事件。

您可以在以下表格中找到失败的事件：
- projections.failed_events
- notification.failed_events
- auth.failed_events
- adminapi.failed_events

| 属性              | 描述                                        | 示例：                |
| --------------- | ----------------------------------------- | ------------------ |
| projection_name | 本应处理失败事件的投影名称。                            | projection.users                 |
| failed_sequence | 失败事件的序列                                   | 1234               |
| failure_count   | 尝试处理该事件的次数。 如果数字低于最大值，请尝试处理该事件，但不要进行第一次尝试 | 5                  |
| error           | 事件无法处理时发生的错误消息                            | User not found              |
| instance_id     | 事件所属的实例                                   | 165460784409737834 |


