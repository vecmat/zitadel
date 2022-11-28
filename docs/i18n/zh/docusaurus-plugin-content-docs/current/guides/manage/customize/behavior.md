---
title: 自定义行为
---

在本指南中，您将创建一个 [ZITADEL动作](../../../concepts/features/actions)。 当用户使用外部身份提供商注册后，该动作将指定给他们角色。

## 必备条件

在您开始之前，请确保您的所有设置都是正确的。

- 您至少需要一个 ZITADEL *ORG_OWNER*
- 您的 ZITADEL组织需要启用动作功能。 <!-- TODO: How to enable it for SaaS ZITADEL? -->
- [您的 ZITADEL组织需要至少启用一个外部身份提供商](../../integrate/identity-brokering)
- [您需要为一个项目配置至少一个角色](../console/projects)

## 复制一些信息用于操作

1. 选择 **项目** 导航项。
1. 选择一个具有配置角色的项目。
1. 复制屏幕右上角的项目 **Resource Id**。
1. 滚动到 **ROLES** 部分并注意一些角色键。

## 创建动作

1. 选择 **动作** 导航项。
1. 在 **动作 <i class="las la-code"></i>** 部分中，选择 **+ 新的** 按钮。
1. 给新动作命名 `addGrant`.
1. 将此代码片段粘贴到多行文本框中。
1. 替换代码片段占位符并选择 **保存**。


```js reference
https://github.com/zitadel/actions/blob/main/examples/add_user_grant.js
```

## 当用户注册时运行操作

现在，将动作绑定到 [外部身份验证流程](../../../apis/actions#external-authentication-flow)。

1. 在 **流动 <i class="las la-exchange-alt"></i>** 部分中，选择 **+ 新的** 按钮。
1. 选择 **流程类型** *外部身份验证*。
1. 选择 **触发类型** *帖子创建*.
1. 在 **操作** 下拉，请检查 *addGrant*。
1. 选择 **保存** 按钮。

<!-- TODO: ## Test if your action works -->

如果新用户通过外部身份提供者的身份验证注册，现在自动将角色转让给他们。

## 接下来是什么？

- [阅读更多关于行动概念的信息](../../../concepts/features/actions)
- [阅读更多关于您使用操作的所有选项](../../../apis/actions)