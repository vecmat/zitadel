---
title: 带有认证和授权的 SaaS 产品
---

这是典型的SaaS产品的示例结构。 为了说明这一点，采用了虚构的组织和项目。

## 示例案件

计时公司有一种叫做时间的产品。 它们有两个环境：发展和生产环境。 在这种情况下，时间使用来自ZITADEL的认证和授权。 这意味着用户及其授权将在ZITADEL内管理。

![结构](/img/concepts/usecase/saas.png)

## 组织

一个组织是ZITADEL资源，其中包括用户、项目、应用、政策等等。 在一个组织中，项目和用户由该组织管理。 在我们的情况下，您自己的公司至少需要一个机构“时间公司”。 作为下一步，为你的每个服装建立一个组织。

## 项目

项目的想法是为彼此密切相关的所有组成部分配备一艘船。

在这种情况下，我们将为每个环境制定两个不同的项目。 这样就可以调用它“时间开发”和“时间质子”。 这些项目应该在“定时公司”组织中创建，因为它是项目的所有者。

在该项目中，您将配置您所有的角色和应用程序 (客户端和 API)。

### 项目设置

您可以在项目上配置 `身份验证` 。 如果您想要限制对项目拥有正确授权的用户的访问。

### 项目补助金

为了给予一个项目的客户许可，需要向客户组织提供项目赠款(按其领域搜索所授予的组织)。 还可以仅将项目的具体作用下放给某一客户。 项目赠款一旦到位。 客户将在他的组织的获准项目部分看到该项目，并将能够授权他自己的用户参与给定项目。

## 授权

要给予一个项目用户权限，需要授权。 所有拥有项目或获得赠款的组织都能够批准用户。 如果知道用户的确切登录名也可以授权公司以外的用户。

## 项目登录

有一些不同的使用案例来说明登录的行为和外观：

1. 限制组织

在主域范围内，组织将仅限于请求的域， 这意味着只有请求组织的用户才能登录。 将自动设置被请求组织的私有标签(随机)和登录政策。

:::note
更多关于 [范围](../../apis/openidoauth/scopes) :
:::

2. 显示项目组织的私有标签(随机)

您可以在项目级别配置应该向用户显示的品牌。 在默认情况下，将显示实例的设计，但一旦用户被识别，将立即显示。 将触发用户组织的政策(如果指定的话)。 如果设置为 `，确保项目资源所有者设置`，项目组织的私有标签总是会触发的。 最后一个可能性是显示项目组织的私有标签，一旦用户被识别，将触发用户组织设置。 为此应设置允许用户资源所有者设置。 :::note  
更多关于 [私有标签](../../guides/manage/customize/branding) :
:::