---
title: 通过 OIDC 连接到 AzureAD
---

## AzureAD 租户作为ZITADEL身份提供商

本指南向您展示了如何连接AzureAD租户与 ZITADEL。

:::info
在 ZITADEL中，您可以将像AzureAD一样的身份提供商(IDP)连接到您的实例，并将其作为默认设置提供给所有组织或您只能注册身份信息。 这也可以通过您的客户以自助方式进行。
:::

### 前提条件：

您需要访问 AzureAD 租户。 如果你还没有一个跟随 [本指南从 Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) 创建一个免费指南。

### AzureAD 配置

#### 创建一个新应用程序

浏览到 [应用程序注册菜单创建对话框](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/false) 来创建一个新的应用程序。

![创建应用程序](/img/guides/azure_app_register.png)

:::info
请务必选择 `web` 作为应用程序类型在 `重定向 URI (可选)` 部分。 您可以将第二个字段留空，因为我们将在下一步更改它。
:::

![创建应用程序](/img/guides/azure_app.png)

#### 配置重定向 URI

为了做到这一点，您需要从您的 ZITADEL实例中将重定向的 URI 加入白名单。 在此示例中，我们的测试实例有域 `test-qcon0h.zitadel.cloud`。 在这种情况下，我们需要将这两个条目列入白名单：

- `https://test-qcon0h.zitadel.cloud/ui/login/register/externalidp/callback`
- `https://test-qcon0h.zitadel.cloud/ui/login/login/externalidp/callback`

:::info
为了适应您的设置，只是替换域
:::

![配置重定向 URI](/img/guides/azure_app_redirects.png)

#### 创建客户端密钥

要允许您的 ZITADEL与AzureAD进行通讯，您需要创建一个密钥

![创建客户端密钥](/img/guides/azure_app_secrets.png)

:::info
请为以后的 ZITADEL 的配置保存这个
:::

#### 配置 ID 令牌补丁

![配置 ID 令牌补丁](/img/guides/azure_app_token.png)

### ZITADEL配置

#### 创建IdP

使用在 ZITADELIdP 设置中的 AzureAD应用程序页面显示的值。

- 您需要在 `端点子菜单` 中从 OpenID 配置中提取您的 AzureAD 租户的 `发行商` (`OpenID Connect 元数据文档`)。 它应该是你租户的域，并附有 `/v2.0`
- ZITADEL的 `客户端 ID` 对应于概述页面的 `应用程序 (客户) ID`
- `客户端密钥` 是在 `创建客户端密钥` 步骤期间生成的

![Azure 应用程序](/img/guides/azure_app.png)

![创建IdP](/img/guides/azure_zitadel_settings.png)

#### 激活IdP

一旦您创建了 IdP 后，您需要激活它，以使它可供您的用户使用。

![激活 AzureAD](/img/guides/azure_zitadel_activate.png)

![活动方位AzureAD](/img/guides/azure_zitadel_active.png)

#### 禁用两个因子提示

如果用户没有配置两个因素，ZITADEL会定期询问。 如果用户喜欢为更多的安全添加一个新的两个因素。 如果您不希望您的用户在使用 Azure 时获得此提示, 您必须禁用此功能。

1. 转到您的实例或组织的登录行为设置。 取决于您是否想要分别为所有或仅为特定组织禁用它
2. 将“多元素生命周期”设置为 0

![img.png](/img/guides/login_lifetimes.png)

#### 使用验证邮件创建用户

Azure AD不会以其令牌发送“电子邮件验证的申请”。 由于该用户将收到一封电子邮件验证邮件来验证他的电子邮件地址。

要使用验证的电子邮件地址创建用户，您必须添加一个动作。

1. 转到您的组织的操作
2. 用以下代码创建一个新动作来自动验证邮件
3. 确保动作名称匹配动作本身中的函数，如“setEmailVerified”

```js reference
https://github.com/zitadel/actions/blob/main/examples/verify_email.js
```

![img.png](/img/guides/action_email_verify.png)

1. 将动作“电子邮件验证”添加到“外部身份验证”到触发器“创建前”

![img.png](/img/guides/action_pre_creation_email_verify.png)

#### 自动重定向到 Azure 广告

如果您想要自动重定向到您的 Azure AD 登录，而不是使用用户名/密码以及"用AzureAD登录"按钮显示ZITADEL登录，您必须执行以下步骤：

1. 转到您的实例或组织的登录行为设置
2. 使用用户名和密码禁用登录
3. 请确保您只配置AzureAD作为外部身份提供商
4. 如果您在组织一级完成了所有设置，请确保在您的授权请求中发送组织范围： [范围](../../apis/openidoauth/scopes#reserved-scopes)

### 测试设置

要测试设置，请使用隐身模式并浏览到您的登录页面。 如果您成功了，您应该看到一个新的按钮，将您重定向到您的 AzureAD 租户。

![AzureAD 按钮](/img/guides/azure_zitadel_button.png)

![AzureAD 登录](/img/guides/azure_login.png)
