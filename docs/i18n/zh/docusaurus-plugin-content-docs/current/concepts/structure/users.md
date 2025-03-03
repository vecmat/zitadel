---
title: 用户
---

## 用户类型

ZITADEL支持对不同类型的用户进行认证和授权。 我们可以主要区分人类用户和机器用户。 我们通常将人类用户简单地称为“用户”和机器用户“服务用户”。

### 人类用户

用户通常使用交互式登录。 这意味着应用程序会将用户重定向到用户可以提供凭据的网站 ("登录页面")。 ZITADEL处理身份验证并提供验证过程的令牌。

### 服务用户

服务用户是机器对机通信的用户，您将使用通常的用户访问安全的后端服务。 例如，在 ZITADEL中，您需要经过认证的服务用户访问管理 API。 个人用户和机器用户之间的主要区别是可用于身份验证的凭据类型：人类用户通常通过登录提示登录， 但机器用户需要一个非交互式登录过程。

### 管理人员

任何用户、人力或服务用户，都可以被赋予 [管理器](/docs/concepts/structure/managers) 角色。 鉴于管理角色，用户不仅是ZITADEL的最终用户，而且还可以管理ZITADEL本身的某些方面。

## 制约因素

用户只能存在于一个 [组织](/docs/concepts/structure/organizations) 中。 目前无法在组织间移动用户。

用户帐户是唯一通过他们的 `id` 或 `登录名` 结合 `机构域` (eg, `道路。 unner@acme.zitadel.local`)。 您可以为不同的用户帐户使用相同的电子邮件地址。

## 存储用户的位置

取决于您的 [场景](/docs/guides/solution-scenarios/introduction)， 您可能想要将所有用户存储在一个组织 (CIAM / B2C)，或者为每个逻辑用户组创建一个新的组织。 - 每个商业客户 (B2B)。 通过项目赠款，您可以将一个组织项目的访问管理委托给另一个组织。 您也可以创建用户授予权限，允许单个用户从另一个组织访问项目。 这也是您可能想要在组织间移动用户的情况的替代办法。

## 身份链接

当使用外部身份提供者（例如社交登录、企业SSO）时，将在ZITADEL中创建一个用户帐户。 外部身份将与ZITADEL账户连接。

您可以将多个外部账户连接到 ZITADEl 账户。 如果使用"用户名/密码"登录(ie)。 已启用，您已配置外部的 IDP, 用户可以决定是否要使用外部ID或本地帐户登录。 当只有一个外部身份提供商配置并禁用使用"用户名/密码"登录 然后用户将立即重定向到外部身份提供者。

更多关于如何管理您的用户阅读我们的 [用户指南](../../guides/manage/console/users)。