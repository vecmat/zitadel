---
title: 通过 SAML 2.0 连接与 Ping 身份
---

本指南展示如何启用 ZITADEL登录到Auth0。

它涵盖了如何：

- 在您的项目中创建和配置应用程序
- 在您的 Ping 身份租户中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 已有 Pingidentity 环境 [这里](https://docs.pingidentity.com/bundle/pingone/page/wqe1564020490538.html)

> 我们必须在ZITADEL和Ping 身份之间进行转换。 如果标题以“ZITADEL”开头，请切换到ZITADEL控制台；如果标题以以“Ping”开头，则请切换到PingIdentity GUI。

## **Ping**: 创建一个新的外部身份提供商

要添加 额外的 [外部身份提供商](https://docs.pingidentity.com/bundle/pingone/page/jvz1567784210191.html), 您 可以按照说明 [这里](https://docs.pingidentity.com/bundle/pingone/page/ovy1567784211297.html)

1. 正如描述的那样，您必须创建一个新的提供商，具有唯一的标识符： ![创建IDP配置文件](/img/saml/pingidentity/create_idp_profile.png)

我们建议尽可能激活签名认证请求： ![配置 PingOne 连接](/img/saml/pingidentity/conf_connection.png)

2. 手动输入必要的信息：

- SSO 端点，例如https://accounts.example.com/saml/SSO
- IDP EntityID, for example https://accounts.example.com/saml/metadata
- 绑定是您自己可以做出的决定，我们推荐HTTP POST，因为它有较少的限制
- 从证书端点导入证书 ![配置 IDP 连接](/img/saml/pingidentity/conf_idp_connection.png)

您需要知道的关于属性映射的一切，您可以在 [Ping Identity的文档中找到 ](https://docs.pingidentity.com/bundle/pingone/page/pwv1567784207915.html)

3. 您已经定义连接到ZITADEL作为外部IDP。 接下来的是使用 ZITADEL作为IDP 到 连接应用程序的政策。在[这里](https://docs.pingidentity.com/bundle/pingone/page/zqd1616600404402.html) 查看怎么做。

## **ZITADEL**: 创建应用程序

要将连接添加到 ZITADEL，您必须构建元数据，这应该是最小化的看起来就像这样的。 必需的 信息可以在外部的国内流离失所者页面“P1Connection”和“IDP配置”中找到：

```xml
ENTITYID="PINGONE (SP) ENTITY ID"
        ACSURL="ACS ENDPOINT"
        <?xml version="1.0"?>
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="${ENTITYID}">
    <md:SPSSODescriptor
            protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol urn:oasis:names:tc:SAML:1.1:protocol">
        <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="${ACSURL}"
                                     index="0"/>
    </md:SPSSODescriptor>
</md:EntityDescriptor>
```

![身份提供商 P1 连接](/img/saml/pingidentity/idp_p1_connection.png) ![身份提供商ID配置](/img/saml/pingidentity/idp_idp_configuration.png)

在您现有的项目中：

1. 按下"+"-按钮添加应用程序 ![项目](/img/saml/zitadel/project.png)
2. 填写应用程序名称，然后选择 SAML 类型，然后点击“继续”。 ![新的应用程序](/img/saml/zitadel/application_saml.png)
3. 要么填写ZITADEL可以从其中读取元数据的 URL，要么直接上传元数据XML ，然后点击“ 继续”。 ![向应用程序添加元数据](/img/saml/zitadel/application_saml_metadata.png)
4. 检查您的应用程序，如果一切都正确，请按 "创建"。 ![创建应用程序](/img/saml/zitadel/application_saml_create.png)

如果应用程序正确创建，ZITADEL一方的一切都会完成。
