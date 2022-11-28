---
title: Terraform Provider Basics
---

它涵盖了如何：

- 通过 ZITADEL Terraform 提供商管理ZITADEL资源

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../start/quickstart)
- 拥有足够权限管理所需资源的现有用户，如果不存在，请按照 [本指南](../../integrate/serviceusers)
- 已安装的 Terraform, 如果不存在，请关注 [本指南](https://learn.hashicorp.com/tutorials/terraform/install-cli)

## 通过地形管理ZITADEL资源

完整文档和示例可在这里获取 [](https://registry.terraform.io/providers/zitadel/zitadel/latest/docs)。

提供一个小指南，指明从哪里开始：

1. 创建一个所有地形文件所在的文件夹。
2. 配置提供商使用正确的域、端口和令牌，例如示例中显示的 `main.tf` 文件。
3. 将 `zitadel_org` 资源添加到 `main.tf` 文件, 以便在实例中创建和管理一个新的组织, [如示例](https://registry.terraform.io/providers/zitadel/zitadel/latest/docs/resources/org) 所示。
4. 在 `main.tf` 文件中添加任何资源给组织。 [作为人类用户](https://registry.terraform.io/providers/zitadel/zitadel/latest/docs/resources/human_user) 的示例。
5. (可选) 在命令 `地形计划`的目录中使用 Terraform 来查看将创建哪些资源以及如何创建。
6. 应用更改并开始使用有 `地形的地形来管理你的资源`。
7. (可选) 删除您创建的资源。 `地形破坏` 以进行清理。
