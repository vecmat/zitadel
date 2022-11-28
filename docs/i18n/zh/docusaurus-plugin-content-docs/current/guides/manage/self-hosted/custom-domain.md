---
title: 自定义域
---

# 在您选择的 (子)域上运行 ZITADEL

本指南假设您已经熟悉 [配置了 ZITADEL](./configure)。

您很可能需要配置这些字段来让ZITADEL在您的自定义域上工作。

## 标准配置

出于安全原因，ZITADEL只满足向预期的议定书、东道国和港口提出的请求。 如果不使用 externalDomain，ExternalSecurity 必须是真实的，您需要通过 HTTPS 服务的 ZITADEL控制台。

```yaml
ExternalSecure: true
ExternalDomain: 'zitadel.my.domain'
ExternalPort: 443
```

## 数据库初始化步骤配置

ZITADEL为创建的每个实例创建随机子域名。 然而，首先，这很可能不是理想的行为。 在这种情况下，配置使用 `外部域`-field 。

## 示例

访问 [loadbalancing 示例与 Traefik](../../deploy/loadbalancing-example) 查看一个工作示例配置。
