---
title: 准备好/健康
---

ZITADEL暴露了一个 `准备好了`- 和 `健康` 端点允许像负载平衡器这样的外部系统， 调节系统、超时探测和其他检查状态的系统。

## 准备好

`准备好` 端点位于路径 `/debug/准备好` 并且允许系统探测如果一个 ZITADEL进程准备好服务和接受流量。 这个端点对操作很有用，如 [零下班升级](../../concepts/architecture/solution#zero-downtime-updates) ，因为它允许像Kubernetes这样的系统验证ZITADEL正在运行某些软件(e)。 。数据库架构迁移，但尚未准备好接受流量。

:::info
在Kubernetes 中，这被称为 `readinessProbe`。
:::

## 健康的

`Health` 终点位于路径 `/debug/healthz` 上，允许系统探测是否一个 ZITADEL进程仍然有效。 这有助于像Kubernetes或负载平衡器这样的系统观察进程是否仍然还活着以接受流量。

:::info
在 Kubernetes 中，这被称为 `livenessProbe`。
:::
