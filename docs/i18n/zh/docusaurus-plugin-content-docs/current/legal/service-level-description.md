---
title: 服务级别
custom_edit_url:
--- 

:::note

这份文件描述了我们目前提出的建议。 有关我们上一次发行的条款（将于2022年12月31日关闭），请参阅 [docs-v1.zitadel.com](https://docs-v1.zitadel.com/)

:::

## 导言

[框架协定的附件](terms-of-service) 描述了我们为我们的服务所提供的服务水平(ZITADEL Cloud)。

上次修订日期：2022 年 6 月 14 日

## 定 义

**每月更新时间 百分比** 表示一个月内的总分钟数。 减去一个月内所有时间段遭受的时间损失的分钟数，除以一个月内的总分钟数。

**下限期** 是指连续一分钟或多分钟的时间。 在不到一分钟的时间内部分时间或间歇性下班时间不会计入任何下班时间。

**耗时** 是指在客户组织所在区域内核心服务不可用的任何时间。 停机时间不包括ZITADEL Cloud因以下原因而不可用的任何时间

- 已宣布的维护工作
- 紧急维修
- 不可抗力事件

**可用** 意味着ZITADEL Cloud核心服务响应客户请求的方式能够导致成功的分钟数。 核心服务的可用性将由CAOS的设施通过黑匣子监控作业进行监控。

**成功的分钟** 意味着ZITADEL Cloud不会多次返回失败的客户请求，并包括没有提出客户请求的分钟数。

**客户请求** 是指客户或客户用户向客户所在区域核心服务提出的HTTP请求。

**成功的分钟** 意味着ZITADEL Cloud不会反复返回失败的客户请求，并且包括没有提出客户请求的分钟数。

客户请求失败意味着客户请求

- 返回服务器错误
- 由ZITADEL Cloud接收，在预期的情况下没有响应

这具体排除了：

- 客户请求失败，请求格式不正确，在ZITADEL Cloud控制之外的客户应用程序错误
- 无法达到ZITADEL Cloud核心服务的客户请求

**核心服务** 表示以下ZITADEL Cloud服务和API：

- **身份验证 API** 终点
- **OpenID Connect 1.0 / OAuth 2.0 API** 端点
- **SAML 2.0** Endpoints
- **登录服务** 意味着ZITADEL Cloud的图形用户界面，让用户登录，自注册，并进行密码重置。
- **身份经纪服务** 意味着ZITADEL云中负责处理第三方身份提供商用户联合认证的组件。 排除第三方的任何故障或配置错误

**金融信贷** 是指适用于未达到保证服务水平的月份的每月订阅费的百分比。 如下表所示，根据月实际达到的月定时百分比计算：

| 已经实现与保证         | 99.50% | 99.90% | 99.95% |
| --------------- | ------ | ------ | ------ |
| 99.5% - < 99.9% | n/a    | n/a    | 10%    |
| 99.0% - < 99.5% | n/a    | 10%    | 25%    |
| 95.0% - < 99.0% | 10%    | 25%    | 50%    |
| < 95.0%         | 50%    | 50%    | 50%    |

## 服务级别

### 可用性目标

1. 在订阅协议期间，CAOS同意向客户提供ZITADEL  Cloud。 核心服务将根据以下订阅计划向客户提供每月更新时间百分比(“SLO”)：

| 选项           | 每月升级百分比 |
| ------------ | ------- |
| 默认           | 99.50%  |
| Extended SLA | 99.95%  |

1. 如果CAOS Ltd不符合保证的服务水平，客户可能有资格获得本文件所述的金融信贷。 金融信贷应是对违反本协定行为的唯一和唯一补救办法。
2. 客户必须申请金融信贷，并且必须在有资格获得金融信贷的30天内书面通知CAOS 支持，并且必须证明客户请求失败的时间段内的客户请求。 金融信贷将以适用于ZITADEL Cloud下一个可能的订阅发票的货币信贷形式提供。 今后只能用来预订服务，而且绝不会以现金等值方式支付。 没有提供进一步的保证。
3. 服务级承诺仅适用于订有订阅计划的组织，服务级不包括同一客户的任何其他组织。 客户无权获得任何金融信贷， 如果引起信贷的事件发生时违反了《协定》。
