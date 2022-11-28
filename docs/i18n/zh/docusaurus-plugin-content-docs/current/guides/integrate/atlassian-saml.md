---
title: 通过 SAML 2.0 连接到Atlas系统
---

本指南展示如何在Atlas系统上启用ZITADEL登录。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在Atlassian Access 中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 现有的 Atlassian 访问设置，包括已验证的域

> 我们必须在ZITADEL和Atlassian之间转换。如果标题以“ZITADEL”开头，则切换到ZITADEL 控制台，如果标题以“Atlassian”开头，请切换到Atlassian管理GUI。

## **Atlas系统**: 创建一个新的外部身份提供商

请按照 [Atlassian支持页面](https://support.atlassian.com/security-and-access-policies/docs/configure-saml-single-sign-on-with-an-identity-provider/) 的说明配置SSO的 SAML 身份提供商。 下面的说明向您简要概述了最重要的步骤。

登录到Atlassian的安全中心并选择身份提供者。 选择设置 SAML 单个登录的选项。 ![安全中心](/img/saml/atlassian/atlassian-01.png)

对于身份提供商，请选择"其他提供商"并输入目录名称。 ![添加身份提供商](/img/saml/atlassian/atlassian-02.png)

跟随向导。 填写以下信息：

- `Identity provider Entity ID`: {your_instance_domain}/saml/v2/metadata
- `Identity provider SSO URL`: {your_instance_domain}/saml/v2/SSO
- `Public x509 certificate`: 您需要下载并粘贴证书的值 {your_instance_domain}/saml/v2/certificate

![添加 SAML 详细信息](/img/saml/atlassian/atlassian-03.png)

创建一个新的 .xml 文件，具有以下最小的 SAML 元数据内容：

```xml
<?xml version="1.0"?>
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="${ENTITYID}">
    <md:SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol urn:oasis:names:tc:SAML:1.1:protocol">
        <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="${ACSURL}" index="0"/>
    </md:SPSSODescriptor>
</md:EntityDescriptor>
```

用下一个屏幕的值设置或替换变量如下：

- `${ENTITYID}`: 复制来自"服务供应商实体URL" 的值
- `${ACSURL}`: 复制来自"服务提供商声称消费者服务URL"的值

![复制 URL](/img/saml/atlassian/atlassian-04.png)

## **ZITADEL**: 创建应用程序

在您现有的项目中：

按下"+"-按钮添加应用程序 ![项目](/img/saml/zitadel/project.png)

填写应用程序名称，然后选择 SAML 类型，然后点击“继续”。 ![新的应用程序](/img/saml/zitadel/application_saml.png)

要么填写ZITADEL可以从其中读取元数据的 URL，要么直接上传元数据XML ，然后点击“继续”。 ![向应用程序添加元数据](/img/saml/zitadel/application_saml_metadata.png)

检查您的应用程序，如果一切都正确，请按 "创建"。 ![创建应用程序](/img/saml/zitadel/application_saml_create.png)

## **Atlassian**: 设置认证策略

根据认证政策，在您创建的目录上选择"编辑"。 然后选中复选框“强制单个登录”，然后点击“更新”进行确认。 ![身份验证策略](/img/saml/atlassian/atlassian-05.png)

将成员添加到您的策略。 ![添加成员](/img/saml/atlassian/atlassian-06.png)

## 验证配置

现在您应该设置为验证您的设置：

- 在ZITADEL中创建一个与认证策略成员相同的电子邮件地址。
- 在新的浏览器会话中，请访问 https://id.atlassian.com
- 输入用户的电子邮件地址
- 您应该被重定向到 ZITADEL的登录屏幕
- 输入电子邮件地址和密码
- 继续并重定向到Atlassian
