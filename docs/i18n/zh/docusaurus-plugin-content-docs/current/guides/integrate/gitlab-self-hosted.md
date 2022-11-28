---
title: Gitlab OmniAuth Provider
---

本指南展示了如何在自我托管的 Gitlab 实例中启用 ZITADEL登录。

它涵盖了如何：

- 在您的 ZITADEL项目中创建和配置应用程序
- 在自我托管的 Gitlab 实例中创建和配置连接

前提条件：

- 现有的 ZITADEL实例，如果不存在，请按照 [本指南](../../guides/start/quickstart)
- 现有的ZITADEL组织，如果不存在，请按照 [本指南](../../guides/manage/console/organizations)
- 现有的 ZITADEL项目，如果不存在，请按照前三步 [在这里](../../guides/manage/console/projects)
- 运行 Gitlab 实例查看 [安装指南](https://docs.gitlab.com/ee/install/)

import CreateApp from "./application/application.mdx";

<CreateApp appType="web" authType="code" appName="Gitlab" redirectURI="https://<your_gitlab_url>/users/auth/openid_connect/callback"/>

## Gitlab 配置

按照 [gitlab 的](https://docs.gitlab.com/ee/administration/auth/oidc.html) 指南来配置 omniauth 提供者。 下面是一个带有redacted secret的示例配置。

替换以下字段的值：

- `args.client_options.identifier` with `ClientId` 生成于 [在 ZITADEL中创建应用程序]) 的最后一步()
- `args.client_options.secret` with `Clientsecretret` 生成于 [在 ZITADEL中创建应用程序]) 的最后一步()
- `args.client_options.redirect_uri`

```yaml
gitlab_rails['omniauth_providers'] = [
  {
    name: "openid_connect",
    label: "ZITADEL",
    icon: "https://<YOUR_DOMAIN>/ui/console/assets/icons/favicon-32x32.png",
    args: {
      name: "openid_connect",
      scope: ["openid","profile","email"],
      response_type: "code",
      issuer: "https://<YOUR_DOMAIN>",
      discovery: true,
      client_options: {
        identifier: "<CLIENT ID from ZITADEL>",
        secret: "<CLIENT SECRET from ZITADEL>",
        redirect_uri: "https://<YOUR_GITLAB_URL>/users/auth/openid_connect/callback"
      }
    }
  }
]
```
