---
title: 行动
---

此页描述了在写入 ZITADEL动作脚本时您拥有的选项。

## 语言
ZITADEL将脚本解释为 JavaScript。 请确保您的脚本是ECMAScript 5.1(+) 兼容的。 转到 [goja GitHub 页面](https://github.com/dop251/goja) 详细参考潜在的库功能和限制。

操作还没有访问任何库。 而且，目前不支持发送 HTTP 请求。 [我们计划将来添加这种功能](https://zitadel.com/roadmap)。

## 流动

每个流程类型支持自己的集合：
- 触发器
- 可读信息
- 可写信息

对于读取和突变状态，运行时间执行与动作相同名称的函数。 函数接收JavaScript对象 `ctx` 和 `api`。

对象 `ctx` 提供可读信息作为对象属性和可调用函数。 对象 `api` 提供了可变属性和状态突变函数。

一个名为 **do出了** 的动作的脚本应该有一个名为 `做点` 的函数，并看起来像这样：

```js
函数 doSomething(tx, api)□
    // 从 ctx 读取并使用 api
} 操作
```

ZITADEL目前只支持外部认证流。 [即将有更多流量](https://zitadel.com/roadmap)。

### 外部身份验证流触发器

- 帖子身份验证：用户已经外部身份验证。 ZITADEL检索并绘制了外部信息。
- 预创建：用户在外部身份验证后在概览页面上选择 **注册**。 ZITADEL尚未创建用户。
- 帖子创建：用户在外部认证后在概览页面上选择 **注册**。 ZITADEL创建了用户。

### 外部身份验证流环境

- `ctx.accessToken 字符串`  
  这可能是一个不透明的令牌或 JWT
- `idToken 字符串`
- `ctx.getClaim(字符串) any`  
  返回请求的申请
- `ctx.claimsJSON() 对象`  
  返回 `ctx.idToken 的完整有效载荷`

### 外部身份验证流程api

- `api.setFirstName(string)`
- `api.setLastName(string)`
- `api.setNickName(string)`
- `Api.setDisplayName(字符串)`
- `api.set偏好语言(字符串)`
- `Api.setGender(Gender)`
- `api.setUsername(字符串)`  
  此函数仅适用于预创建触发器
- `api.setPreferedUsername(字符串)`  
  此功能仅适用于帖子认证触发器
- `api.setEmail(string)`
- `api.setEmailVerified(bool)`
- `api.setPhone(字符串)`
- `api.setPhoneVerified(bool)`
- `api.metadata阵列<Metadata>`  
  Push 条目。
- `api.userranges 数组<UserGrant>`  
  Push 条目。  
  此字段仅适用于帖子创建触发器


### 外部身份验证流类型 <!-- TODO: Are these types correct? -->

- `Gender` 是一个代码号

| 代码 | 两性平等 |
| -- | ---- |
| 0  | 未指定  |
| 1  | 女性：  |
| 2  | 男生人数 |
| 3  | 差异   |

- `Usergrant` 是一个 JavaScript 对象

```ts
主席:
    projectID: string,
    projectGrantID: string,
    roles: Array<string>,
}
```

- `元数据` 是一个带字符串值的 JavaScript 对象。 字符串值必须为 Base64 编码

## 进一步阅读

- [行动概念](../concepts/features/actions)
- [操作指南](../guides/manage/customize/behavior)
- [活动市场：寻找在 ZITADEL 中使用的示例](https://github.com/zitadel/actions)
