---
title: 身份经纪活动
---

## 身份经纪和联邦身份是什么？

联邦身份管理是建立在两个或多个领域之间信任基础上的安排。 这些域名的用户可以使用相同的身份访问应用程序和服务。 这种身份被称为联邦身份，其背后的模式是身份联合。

专门从事多个服务提供者（也称为依赖方）之间出入控制经纪人的服务供应商称为身份经纪人。 联邦身份管理是各组织之间两个或两个以上此类身份经纪人之间作出的安排。

示例： 如果谷歌被配置为您组织的身份提供商 用户可以在ZITADEL的登录屏幕上使用他的谷歌账户(1)。 ZITADEL将会将用户重定向到谷歌的登录屏幕，在那里他已验证自己(2)，并在完成后将其发回(3)。 由于谷歌已注册为受信任的身份提供者，用户将能够在连接现有的ZITADEL帐户或刚刚注册一个新帐户的Google(4)(5)提出的要求后登录Google帐户。

![身份经纪活动](/img/guides/identity_brokering.png)

## 注册外部身份提供商

在这一步骤中，我们将添加一个新的谷歌身份提供商，将身份与ZITADEL联合起来。

### 1. 创建新的 OIDC 客户端

1. 在您的首选提供商注册OIDC客户端
2. 请确保您添加ZITADEL回调uris
   - {your-domain}/ui/login/register/externalidp/callback
   - {your-domain}/ui/login/login/externalidp/回调

> **信息：** 确保提供商与 OIDC 1.0 兼容一个适当的发现端点

Google 示例：

1. 前往谷歌云平台并选择您的项目： [https://console.cloud.google.com/apis/凭据](https://console.cloud.google.com/apis/credentials)
2. 点击"+ CREATE CREDENTIALS"并选择 "OAuth 客户端 ID"
3. 选择 Web 应用程序作为应用程序类型并给出一个名称
4. 添加重定向urs
   - {your-domain}/ui/login/register/externalidp/callback
   - {your-domain}/ui/login/login/externalidp/回调
5. 保存客户端密码

![在 Google 控制台中添加新的 oAuth 凭据](/img/google_add_credentials.gif)

### 2. 添加自定义登录策略

登录策略可以在两个级别上配置。 在实例上的默认设置，每个组织都可以覆盖。 本案描述了如何改变组织的情况。

1. 点击菜单中的“组织”来转到您的组织设置
2. 在“登录行为和安全”菜单中修改登录策略

![添加自定义登录策略](/img/console_org_custom_login_policy.gif)

### 3. 配置新身份提供商

1. 转到您的实例或特定机构的设置 (取决于您需要身份提供者的位置)
2. 转到身份提供者部分，然后点击“新建”
3. 选择"OIDC 配置"并填写表单
   - 使用您的提供商提供的发行者、客户端和客户端密码(Google Issuer：https://accounts.google.com)
   - 范围将预先填写Open、配置文件和电子邮件，因为这个信息与 ZITADEL相关。
   - 您可以选择要映射的字段作为显示名称和用户名。 您可以选择的字段是首选的用户名和电子邮件 (例如：对于谷歌，您应该选择两个字段的电子邮件)
4. 保存您的配置
5. 您现在将在列表中看到创建的配置。 点击在行末的激活图标，你可以看到当悬停在行上的时候， 在登录流程中激活它。

![配置身份提供商](/img/console_org_identity_provider.gif)

### 4. 在授权请求时发送主域范围

ZITADEL默认将显示一组身份提供者。 此配置可以由具有 [管理员角色](../../guides/manage/console/managers#roles) `IAM_OWNER` 的用户更改。

将显示一个组织的登录设置

- 一旦用户输入了登录名，而ZITADEL可以识别他所属的组织；
- 通过发送主域范围。 要获得您自己的配置，您必须在您的 [授权请求](../../guides/integrate/login-users#auth-request) 中发送 [主要域范围](../../apis/openidoauth/scopes#reserved-scopes)。 主域范围将限制登录到您的组织。 所以只有您自己的组织的用户能够登录，您的品牌和政策将会触发。

:::note
你需要用你的应用程序参数创建你自己的认证请求。 请查看文档构造一个 [身份验证请求](../../guides/integrate/login-users#auth-request)。
:::

您的用户现在可以选择谷歌进行登录，而不是用户名/密码或mfa。
