---
title: 通过 SAML 2.0 连接到 AWS
---

本指南显示如何在 AWS SSO 上启用 ZITADEL登录。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在您的 AWS SSO 外部IDP 中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- AWS 在这里 [的前提条件](https://docs.aws.amazon.com/singlesignon/latest/userguide/prereqs.html)。
- 启用AWS SSO [这里](https://docs.aws.amazon.com/singlesignon/latest/userguide/step1.html?icmpid=docs_sso_console)

> 我们必须在ZITADEL和AWS之间转换。 如果标题开头是“ZITADEL”，切换到ZITADEL控制台，如果 标题开头是“AWS”，请切换到AWS界面。

## **AWS**: 更改为外部身份提供商 ZITADEL

由于您已经激活SSO，您仍然可以使用AWS本身来管理用户。 但您也可以使用 微软AD或外部IDP。

Described [here](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html) how you can connect to ZITADEL as a SAML2 IDP.

1. 选择外部身份提供程序： ![选择身份来源](/img/saml/aws/change_idp.png)

2. 下载元数据文件，提供ZITADEL所需的所有信息。 并保存 AWS SSO 登录URL， 你用来登录。

3. 填写以下字段，为AWS提供它需要的所有信息： ![配置外部身份提供商](/img/saml/aws/configure_idp.png)

   若要连接到另一个环境，请更改域名，例如如果您会在域名下使用 ZITADEL” 示例。 om"你会有"https://accounts.example.com/saml/SSO" 和 "https://accounts.exmaple.com/saml/metadata"。

4. 下载ZITADEL使用的证书以签署回复，以便AWS能够验证签名。

   您可以从以下 URL下载证书： {your_instance_domain}/saml/v2/证书

5. 然后将".crt"文件上传到AWS，然后单击"下一步"。

6. 最后： 接受确认更改，ZITADEL被用作AWS SSO的外部身份提供商，为您的 AWS 账户提供 连接。

关于SSO用户如何连接到AWS账户 您可以在 AWS 文档中找到更多信息， 例如 [在这里](https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html)。

## **ZITADEL**: 创建应用程序

本部分使用的元数据从“改变为外部身份提供者ZITADEL”步骤2。

在您现有的项目中：

1. 按下"+"-按钮添加应用程序 ![项目](/img/saml/zitadel/project.png)
2. 填写应用程序名称，然后选择 SAML 类型，然后点击“继续”。 ![新的应用程序](/img/saml/zitadel/application_saml.png)
3. 要么填写ZITADEL可以从其中读取元数据的 URL，要么直接上传元数据XML ，然后点击“ 继续”。 ![向应用程序添加元数据](/img/saml/zitadel/application_saml_metadata.png)
4. 检查您的应用程序，如果一切都正确，请按 "创建"。 ![创建应用程序](/img/saml/zitadel/application_saml_create.png)

如果应用程序正确创建，ZITADEL一方的一切都会完成。

## **AWS**: 测试连接

结果，您现在可以通过您的 ZITADEL-登录使用AWS SSO 登录链接登录您的AWS 帐户， 你 应该保存到"更改外部身份提供者ZITADEL"步骤2。