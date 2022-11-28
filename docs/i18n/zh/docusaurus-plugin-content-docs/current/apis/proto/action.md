---
title: zitadel/action.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### 行 动



| 字段    | 类型                       | 描述 | 验证 |
| ----- | ------------------------ | -- | -- |
| id    | 字符串                      | -  |    |
| 详细信息  | zitadel.v1.ObjectDetails | -  |    |
| 状态    | ActionState              | -  |    |
| 名称    | 字符串                      | -  |    |
| 脚本    | 字符串                      | -  |    |
| 超时    | google.protobuf.Duration | -  |    |
| 允许失败！ | 布尔值                      | -  |    |




### ActionID查询



| 字段 | 类型  | 描述 | 验证                              |
| -- | --- | -- | ------------------------------- |
| id | 字符串 | -  | string.max_len: 200<br /> |




### ActionNameQuery



| 字段 | 类型                          | 描述 | 验证                              |
| -- | --------------------------- | -- | ------------------------------- |
| 名称 | 字符串                         | -  | string.max_len: 200<br /> |
| 方法 | Zitadel.v1.TextQueryMethods | -  | 只有枚举：true<br />           |




### ActionState查询
ActionState查询始终等于


| 字段 | 类型          | 描述 | 验证                    |
| -- | ----------- | -- | --------------------- |
| 状态 | ActionState | -  | 只有枚举：true<br /> |




### 流



| 字段    | 类型                       | 描述      | 验证 |
| ----- | ------------------------ | ------- | -- |
| 类型    | 流类型                      | 流类型的 id |    |
| 详细信息  | zitadel.v1.ObjectDetails | -       |    |
| 状态    | FlowState                | -       |    |
| 触发器动作 | 重复触发动作                   | -       |    |




### 流类型



| 字段 | 类型               | 描述      | 验证 |
| -- | ---------------- | ------- | -- |
| id | 字符串              | 类型的标识符  |    |
| 名称 | zitadel.v1.本地化消息 | 键值和类型名称 |    |




### 触发动作



| 字段    | 类型   | 描述        | 验证 |
| ----- | ---- | --------- | -- |
| 触发器类型 | 触发类型 | 触发器类型的 id |    |
| 操作    | 重复操作 | -         |    |




### 触发类型



| 字段 | 类型               | 描述      | 验证 |
| -- | ---------------- | ------- | -- |
| id | 字符串              | 类型的标识符  |    |
| 名称 | zitadel.v1.本地化消息 | 键值和类型名称 |    |






## 枚举数


### 动作字段名称 {#actionfieldname}


| 名称                              | 号码 | 描述 |
| ------------------------------- | -- | -- |
| ACTION_FIELD_NAME_UNSPECIFIED | 0  | -  |
| ACTION_FELD_NAME_NAME         | 1  | -  |
| ACTION_FIELD_NAME_ID          | 2  | -  |
| ACTION_FELD_NAME_STATE        | 3  | -  |




### ActionState {#actionstate}


| 名称                     | 号码 | 描述 |
| ---------------------- | -- | -- |
| ACTION_STATED          | 0  | -  |
| ACTION_STATION_TITLE | 1  | -  |
| ACTION_STATION_TITLE | 2  | -  |




### FlowState {#flowstate}


| 名称                   | 号码 | 描述 |
| -------------------- | -- | -- |
| FLOW_STATED          | 0  | -  |
| FLOW_STATION_TITLE | 1  | -  |
| FLOW_STATE_TITLE   | 2  | -  |




