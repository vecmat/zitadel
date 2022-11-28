---
title: 通过 OIDC 连接到 Auth0
---

本指南展示如何使用 ZITADEL登录到Auth0。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在您的 Auth0 租户中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 现有的 Auth0 租户描述的 [在这里](https://auth0.com/docs/get-started/auth0-overview/create-tenants)

> 我们必须在ZITADEL和一个作者之间切换。 如果标题以“ZITADEL”开头，切换到ZITADEL控制台，如果标题以“Auth0”开头，请切换到作者界面。

## **作者**: 创建一个新的连接

身份验证中 > Enterprise

1. 按 "+" 按钮右至"OpenID Connect"  
   ![创建新连接](/img/oidc/auth0/auth0-create-app.png)
2. 设置连接名，例如 "ZITADEL"
3. 发行者URL是 `https:////<YOUR_DOMAIN>/.well known n/openid-configuration`
4. 复制回调URL (以 `/login/callback` 结尾)

配置看起来像这样：

![初始连接配置](/img/oidc/auth0/auth0-init-app.png)

接下来我们必须切换到 ZITADEL控制台。

## **ZITADEL**: 创建应用程序

首先我们在您的项目中创建应用程序。

import CreateApp from "./application/application.mdx";

<CreateApp appType="web" authType="code" appName="Auth0" redirectURI="https://<TENANT>.<REGION>.auth0.com/login/callback"/>

## **作者**: 连接 ZITADEL

1. 将客户端ID从 ZITADEL复制到 **客户端ID** 字段
2. 从 ZITADEL复制客户端机密并将其过去到 **客户端机密** 字段 ![完整配置](/img/oidc/auth0/auth0-full.png)
3. 点击创建
4. 要验证连接，请前往“应用程序”选项卡并启用默认应用程序 [启用应用程序](/img/oidc/auth0/auth0-enable-app.png)
5. 点击“返回到 OpenID 连接”
6. 点击新创建的连接右边的“...”按钮，然后点击“尝试” ![点击尝试](/img/oidc/auth0/auth0-try.png)
7. ZITADEL应该在一个新标签上打开，您可以输入您的登录信息
8. 登录后，您应该看到以下内容： ![完整配置](/img/oidc/auth0/auth0-works.png)
