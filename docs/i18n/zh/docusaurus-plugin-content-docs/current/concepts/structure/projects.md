---
title: 项目
---

# 项目

import ProjectDescription from './\_project_description.mdx';

<ProjectDescription name="ProjectDescription" />

要学习如何设置一个项目，请在 [这里](../../guides/manage/console/projects.mdx)阅读本控制台指南

## 应用程序

应用程序界定了不同的客户，它们具有相同的角色。 目前，我们支持OIDC和几乎每一个 OAuth2 客户端。 我们将很快通过SAML扩展这个项目。 访问 [应用程序](./applications) 了解更多详情。

## 获准组织

为了使另一个组织能够使用一个项目，该组织需要向该项目提供赠款。 只有选定的角色将提供给授予的组织。

获准的组织将能够管理其使用者在其自己的组织内对获准的项目的授权。

更多关于已授予的项目: [已授予项目](./granted_projects)

## 角色

角色由不同的属性组成。 只有钥匙与授权相关，因此必须是唯一的。 显示名称只是为了在需要时提供一个可读的名称。 该群组应该能够在ZITADEL控制台更好地处理，就像给用户一个特定群组的所有角色。 (尚未实现)

一个项目中的所有应用程序共享角色。 阅读更多关于角色 [这里](../../guides/manage/console/roles)
