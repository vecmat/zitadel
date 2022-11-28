---
title: 生产清单
---

一旦你成功地使用我们的 [部署指南](/docs/guides/deploy/overview)作为概念证明， 您准备配置 ZITADEL以供生产使用。

## 高可用性

我们建议使用一台排定ZITADEL在多个服务器上的 [Kubernetes](/docs/guides/deploy/kubernetes) 的管弦乐队来运行ZITADEL。 对于缩放ZITADEL时保持启动时间， 您还应该考虑使用独立的任务与 `zitadel init` 和 `zitadel 设置`, 所以您的工作量容器只需执行 `zitadel 开始`。

## 配置

Read [on the configure page](/docs/guides/manage/self-hosted/configure) about the available options you have to configure ZITADEL.

## 建立网络

- 要使ZITADEL能够在您所选择的域中， [您需要配置外部域属性](/docs/guides/manage/self-hosted/custom-domain)。
- 要启用并限制访问 **HTTPS**，请跳转至 [描述您的 TLS 选项](/docs/guides/manage/self-hosted/tls_modes)。
- 如果您想使用反向代理，网络应用防火墙或内容传送网络来前面的 ZITADEL。 请务必支持 **[HTTP/2](/docs/guides/manage/self-hosted/http2)**。
- 您也可以引用一些 **[反向代理配置示例](/docs/guides/manage/self-hosted/reverseproxy/reverse_proxy)**。

## 监测

默认情况下， [**计量**](docs/apis/observability/metrics) 在 OpenTelemetry (otel) 格式的 /debug/metrics 曝光。

另外，您可以在 ZITADEL配置中启用 **追踪**。

```yaml
Tracing:
  # Choose one in "otel", "google", "log" and "none"
  Type: google
  Fraction: 1
  MetricPrefix: zitadel
```

## 数据库

视您的环境而定。 您也许想要调整一些关于ZITADEL如何与您的 ZITADEL配置的数据库中的数据库相互作用的设置。 阅读更多关于您的 [数据库配置选项](/docs/guides/manage/self-hosted/database)

```yaml
Database:
  cockroach:
    Host: localhost
    Port: 26257
    Database: zitadel
    //highlight-start
    MaxOpenConns: 20
    MaxConnLifetime: 30m
    MaxConnIdleTime: 30m
    //highlight-end
    Options: ""
```

您可能还想要配置 [预测](/docs/concepts/eventstore/implementation#projections) 的计算方法。 这些是默认值：

```yaml
Projections:
  RequeueEvery: 60s
  RetryFailedAfter: 1s
  MaxFailureCount: 5
  ConcurrentInstances: 1
  BulkLimit: 200
  MaxIterators: 1
  Customizations:
    projects:
      BulkLimit: 2000
```

## 数据初始化

- 您可以在默认实例部分配置实例默认值。 如果您打算最终创建 [多个虚拟实例](/docs/concepts/structure/instance#multiple-virtual-instances)，那么这些默认值就会生效。 此外，这些配置首先适用于ZITADEL自动为您创建。 尤其是以下属性对您的生产设置具有特殊意义。

```yaml
DefaultInstance:
  OIDCSettings:
    AccessTokenLifetime: 12h
    IdTokenLifetime: 12h
    RefreshTokenIdleExpiration: 720h #30d
    RefreshTokenExpiration: 2160h #90d
  # this configuration sets the default email configuration
  SMTPConfiguration:
    # configuration of the host
    SMTP:
      #for example smtp.mailtrap.io:2525
      Host:
      User:
      Password:
    TLS:
    # if the host of the sender is different from ExternalDomain set DefaultInstance.DomainPolicy.SMTPSenderAddressMatchesInstanceDomain to false
    From:
    FromName:
```

- 如果您不想使用默认实例配置，在 [设置阶段](/docs/guides/manage/self-hosted/configure#database-initialization)期间，ZITADEL自动为您创建的一审， 您可以使用 --steps 参数提供一个 FirstInstance YAML 部分。
- 学习如何通过 [控制台用户界面配置 ZITADEL](/docs/guides/manage/console/overview)。
- 也许您还想要 [应用您的自定义品牌](/docs/guides/manage/customize/branding), [钩子到某些事件](/docs/guides/manage/customize/behavior), [自定义文本](/docs/guides/manage/customize/texts) 或 [添加元数据到您的用户](/docs/guides/manage/customize/user-metadata)。
- 如果你想要自动创建 ZITADEL 资源，你可以使用 [ZITADEL Terraform 提供商](/docs/guides/manage/terraform/basics)。
