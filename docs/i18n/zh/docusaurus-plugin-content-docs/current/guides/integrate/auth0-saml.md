---
title: 通过 SAML 2.0 连接到Auth0
---

本指南展示如何启用 ZITADEL登录到Auth0。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在您的 Auth0 租户中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 现有的 Auth0 租户描述的 [在这里](https://auth0.com/docs/get-started/auth0-overview/create-tenants)

> 我们必须在ZITADEL和一个作者之间切换。 If the headings begin with "ZITADEL" switch to the ZITADEL Console and if the headings start with "Auth0" please switch to the Auth0 GUI.

## **作者**: 创建一个新的连接

在身份验证 -> Enterprise ![导航认证企业](/img/saml/auth0/auth_enterprise.png)

1. 按右键"+"按钮到"SAML"  
   ![企业连接](/img/saml/auth0/enterprise_connections.png)
2. 在 SAML 连接中填写以下字段: ![新的 SAML 连接](/img/saml/auth0/connection.png)

其中包括：

- 唯一的"连接名称"
- "登录网址"
- "登出URL"
- 使用 "User ID 属性"
- 请求签名的定义
- 绑定应该用来调用 ZITADEL

所有信息都是作为示例填写的。 并且要与任何其他环境连接，您只需更改 使用的域，例如“示例。 om"使用"zitadel.cloud"。 最后，上传根据 URL {your_instance_domain}/saml/v2/certificate为您提供的用于签署答卷的证书。

然后按“创建”按钮，并且配置了与作者的连接。

## **ZITADEL**: 创建应用程序

您需要将 SAML 元数据上传到 ZITADEL，以识别此新创建的连接。 [在这个链接](https://auth0.com/docs/authenticate/protocols/saml/saml-identity-provider-configuration-settings) 是 下正确填写元数据或直接在
URL https://YOUR_AUTH0_DOMAIN/samlp/metadata?connection=YOUR_CONNECTION_NAME, 在这个示例中，
是 https://example.auth0.com/samlp/metadata?connection=SAML-ZITADEL.

在您现有的项目中：

1. 按下"+"-按钮添加应用程序 ![项目](/img/saml/zitadel/project.png)
2. 填写应用程序名称，然后选择 SAML 类型，然后点击“继续”。 ![新的应用程序](/img/saml/zitadel/application_saml.png)
3. 要么填写ZITADEL可以从其中读取元数据的 URL，要么直接上传元数据XML ，然后点击“ 继续”。 ![向应用程序添加元数据](/img/saml/zitadel/application_saml_metadata.png)
4. 检查您的应用程序，如果一切都正确，请按 "创建"。 ![创建应用程序](/img/saml/zitadel/application_saml_create.png)

如果应用程序正确创建，ZITADEL一方的一切都会完成。

## **作者**: 尝试连接

然后测试连接，您只需在身份验证-> Enterprise 屏幕上按“尝试”操作。

![身份验证企业尝试](/img/saml/auth0/auth_enterprise_try.png)

要进一步定制请求，您也可以自定义SAML通讯，就像 在[这里](https://auth0.com/docs/authenticate/protocols/saml/saml-configuration/customize-saml-assertions)描述的 