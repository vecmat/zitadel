---
title: 通过 SAML 2.0 连接到 Gitlab
---

本指南展示如何在 Gitlab上启用 ZITADEL登录。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在 Gitlab SaaS 中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 高级版中存在的 Gitlab SaaS 设置

> 我们必须在ZITADEL和Gitlab之间转换。 如果标题以“ZITADEL”开头，则切换到ZITADEL 控制台，如果标题以“Gitlab”开头，请切换到Gitlab GUI。

## **Gitlab**: 创建一个新的外部身份提供商

请按照 [Gitlab docs](https://docs.gitlab.com/ee/user/group/saml_sso/index.html) 的说明配置SSO的 SAML 身份提供商。 下面的说明向您简要概述了最重要的步骤。

[打开您想要添加SSO配置的组](https://gitlab.com/dashboard/groups)。 选择菜单设置，然后选择SAML SSO。  
复制 `GitLab 元数据URL` 以供下一步使用。 ![添加身份提供商](/img/saml/gitlab/gitlab-01.png)

## **ZITADEL**: 创建应用程序

在您现有的项目中：

按下"+"-按钮添加应用程序 ![项目](/img/saml/zitadel/project.png)

填写应用程序名称，然后选择 SAML 类型，然后点击“继续”。 ![新的应用程序](/img/saml/zitadel/application_saml.png)

输入之前的 URL，然后点击“继续”。 ![向应用程序添加元数据](/img/saml/zitadel/application_saml_metadata.png)

检查您的应用程序，如果一切都正确，请按 "创建"。 ![创建应用程序](/img/saml/zitadel/application_saml_create.png)

## **Gitlab**: 配置

完成配置如下：

- `身份提供者单独登录URL`: {your_instance_domain}/saml/v2/SSO
- `证书指纹`: 您需要从 {your_instance_domain}下载证书/saml/v2/证书并创建一个 SHA1 指纹

保存更改。

![填充值](/img/saml/gitlab/gitlab-02.png)

## **Gitlab**: 验证 SAML 配置

保存更改后，点击按钮“验证SAML配置”。

您应该被重定向到 ZITADEL。 使用您的用户登录。 在此之后，您应该被重定向到 GitLab ，您可以检查响应输出结果。 ![Validate Setup](/img/saml/gitlab/gitlab-03.png)