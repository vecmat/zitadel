---
title: 品牌自定义
---

ZITADEL为您的项目品牌设计提供了各种自定义选项。 品牌可以在两个不同的层次上配置。 实例级别的配置将设置默认设置，如果不在某个组织上覆盖，则会触发所有用户的默认设置。 第二种可能性是对每个组织进行配置。 本指南将说明第二种可能性。 对于这个头部到您的组织页面上的品牌设置。

## 它的工作方式

您可以自定义光线和黑色模式。 您的所有更改将显示在右侧的预览窗口中。 一旦您对您的配置满意，请点击"应用配置"按钮。 在此之后，您的设置将在您的系统中触发。 登录和电子邮件将与您的品牌一起发送。

## 设置

![私有标签](/img/console_private_labeling.png)

### 徽标

一旦屏幕右侧的预览被上传，请上传您选中主题的徽标。

### 颜色

在下一个部分，您可以配置您的颜色。 背景颜色是不言自明的，主颜色将用于按钮、链接和某些高亮。 警告颜色用于文本的所有错误消息和警告以及字体颜色。

### Font

应用于您的品牌的最后一步是字体上传。 最好的方式是上传一个ttf文件后，您会在字体中看到它。 但不在预览中。

### 高级设置

在高级行为中，您可以选择登录名后缀(domain e.g road.runner@acme.caos)。 h) 应在登录名屏幕上显示或不显示，如果“ZITADEL水印”应隐藏。

## 触发登录的私有标签

如果你想为你的应用程序触发你的设置，你有不同的可能性。

### 1. 主域范围

通过您的 [授权请求](../../integrate/login-users#auth-request) 发送一个 [主域范围](../../../apis/openidoauth/scopes) 来触发您的组织。 主域范围将限制登录到您的组织，所以只有您自己的组织的用户能够登录。

查看下面的链接作为示例。 用户将能够注册并登录到只验证@caos.ch 域名的组织。

```
https://{your_domain.zitadel.cloud}/oauth/v2/authorize?client_id=69234247558357051%40zitadel&scope=openid%20profile%20urn%3Azitadel%3Aiam%3Aorg%3Adomain%3Aprimary%3Acaos.ch&redirect_uri=https%3A%2F%2Fconsole.zitadel.cloud%2Fauth%2Fcallback&state=testd&response_type=code&nonce=test&code_challenge=UY30LKMy4bZFwF7Oyk6BpJemzVblLRf0qmFT8rskUW0
```

:::info
请确保用您自己的域名替换 `caos.ch` 以触发正确的品牌。
:::

::::caut
此示例使用 ZITADEL Cloud应用程序进行示范。 您需要用您的应用程序参数创建您自己的认证请求。 请查看文档来构建一个 [认证请求].../integrate/login-users#auth-request)。
:::

### 2. 设置您的项目

在您的项目上设置私有标签设置，以定义哪个品牌应该触发器。

## 重置为默认值

如果您不喜欢定制的话，请点击“重置策略”按钮。 您的所有设置将被删除，系统的默认设置将被触发。
