---
title: 指标
---

在 [opentelmetry-go](https://github.com/open-telemetry/opentelemetry-go) 软件包的帮助下，ZITADEL提供了一个 `度量` 端点。

自托管客户可以在路径 `/debug/metrics` 上访问此端点。 例如，当本地运行 ZITADEL时，它可以在 `http://localhost:8080/debug/metrics` 上访问。 任何支持 `otel` 格式的选择工具，例如现有的 Prometheus 都可以将该度量的端点擦除。

对于我们的 [Kubernetes/Helm](../../guides/deploy/kubernetes) 用户，我们提供了 [服务监视](https://github.com/zitadel/zitadel-charts/blob/main/charts/zitadel/templates/servicemonitor.yaml) 自定义资源的方框支持。

默认情况下，计量功能已启用，但可以通过 ZITADEL的 [配置](../../guides/manage/self-hosted/configure) 转换。 (默认) 配置位于 [defaults.yaml](https://github.com/zitadel/zitadel/blob/main/cmd/defaults.yaml) 中。
