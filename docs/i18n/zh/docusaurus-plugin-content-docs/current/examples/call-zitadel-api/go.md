---
title: Go
---

此集成指南向您展示了如何将 **ZITADEL** 整合到您的应用中。 它展示了如何从ZITADEL管理API获取一些数据。

在指南末尾，您应该有一个能够阅读您组织的详细信息的应用程序。

## 必备条件

客户端 [SDK](https://github.com/zitadel/zitadel-go) 将处理所有必要的 OAuth 2。 使用我们的 [OIDC 客户端库](https://github.com/zitadel/oidc) 请求并向ZITADEL API发送必需的标题。 所有需要的都是一个服务帐户，拥有一个Og Owner (或另一个角色) 取决于所需的 api 请求) 角色及其密钥 JSON 。

但是，我们建议您阅读有关[如何访问zitadel API](../../guides/integrate/access-zitadel-apis)的指南和相关指南，以了解以下基本知识：
 - [推荐授权流动](../../guides/integrate/oauth-recommended-flows.md)
 - [服务用户](../../guides/integrate/serviceusers.md)

> 请务必有一个有效的JSON，其服务帐户要么是ORG_OWNER，要么至少是ORG_OWNER_VIEWER 才能继续本指南。

## 转到设置

### 添加去SDK 到您的项目

您需要将 SDK 添加到去模块：

```bash
go get github.com/zitadel/zitadel-go/v2
```

### 创建示例客户端

创建一个新的带有下面内容的文件。 这将为管理api创建一个客户端，并调用它的 `GetMyOrg` 功能。 SDK 将通过使用 JWT 配置文件获取一个 JWT 令牌来确保您能够访问API。`openid` and `urn:zitadel:iam:org:project:id:zitadel:aud`)。 请务必填写 `发行者` 和 `api`

发行者和api是您可以在 ZITADEL Cloud 端客户门户或 ZITADEL控制台中找到实例详细信息的领域。

:::note
签发者将需要协议 (`https://` 和 `http://`) 并且你只需要指定一个端口，如果它们不是默认的 (https 443 和 80个http)。 API将总是需要一个端口，但没有协议。
:::

```go
package main

import (
    "context"
    "flag"
    "log"

    "github.com/zitadel/oidc/pkg/oidc"

    "github.com/zitadel/zitadel-go/v2/pkg/client/management"
    "github.com/zitadel/zitadel-go/v2/pkg/client/middleware"
    "github.com/zitadel/zitadel-go/v2/pkg/client/zitadel"
    pb "github.com/zitadel/zitadel-go/v2/pkg/client/zitadel/management"
)

var (
    issuer = flag.String("issuer", "", "issuer of your ZITADEL instance (in the form: https://<instance>.zitadel.cloud or https://<yourdomain>)")
    api    = flag.String("api", "", "gRPC endpoint of your ZITADEL instance (in the form: <instance>.zitadel.cloud:443 or <yourdomain>:443)")
)

func main() {
    flag.Parse()

    //create a client for the management api providing:
    //- issuer (e.g. https://acme-dtfhdg.zitadel.cloud)
    //- api (e.g. acme-dtfhdg.zitadel.cloud:443)
    //- scopes (including the ZITADEL project ID),
    //- a JWT Profile token source (e.g. path to your key json), if not provided, the file will be read from the path set in env var ZITADEL_KEY_PATH
    client, err := management.NewClient(
        *issuer,
        *api,
        []string{oidc.ScopeOpenID, zitadel.ScopeZitadelAPI()},
    )
    if err != nil {
        log.Fatalln("could not create client", err)
    }
    defer func() {
        err := client.Connection.Close()
        if err != nil {
            log.Println("could not close grpc connection", err)
        }
    }()

    ctx := context.Background()

    //call ZITADEL and print the name and creation date of your organisation
    //the call was successful if no error occurred
    resp, err := client.GetMyOrg(ctx, &pb.GetMyOrgRequest{})
    if err != nil {
        log.Fatalln("call failed: ", err)
    }
    log.Printf("%s was created on: %s", resp.Org.Name, resp.Org.Details.CreationDate.AsTime())
}

```

#### Key JSON

若要为 SDK 提供关键的 JSON ，只需设置一个环境变量 `ZITADEL_KEY_PATH` ，其路径为 JSON 值。

```bash
导出 ZITADEL_KEY_PATH=/Users/test/servicekey.json
```

为了开发目的，您应该能够在您的 IDE 中设置它。

如果您无法通过环境变量设置它，您也可以通过另一个选项传递它：

```go
client, err := management.NewClient(
    []string{oidc.ScopeOpenID, zitadel.ScopeZitadelAPI()},
    zitadel.WithKeyPath("/Users/test/servicekey.json"),
)
```

### 测试客户端

在你正确配置了一切后，你可以简单地开始示例：

```bash
go run main.go
```

这将输出类似于：

```
2021/04/21 11:27:36 DemoOrg was created on: 2021-04-08 13:36:05.578194 +0000 UTC
```

## 完成

您已成功使用 ZITADEL 去SDK 来调用管理API！

如果您遇到了一个错误 (例如) `code = 权限被拒绝= 没有找到匹配的权限`), 通过分配 `ORG_OWNER` 或 `ORG_OWNER_VIEWEEWER` 角色 并在开始时检查上述 [指南](#prerequisites)。

如果您遇到了任何其他问题。 在 [ZITADEL](https://github.com/zitadel/zitadel/issues) 或 [SDK](https://github.com/zitadel/zitadel-go/issues) 中不要犹豫与我们联系或提出问题。

### 接下来？

现在您可以通过添加更多通话或尝试覆盖组织环境来执行我们的 API：

```go
respOverwrite, err := client.GetMyOrg(middleware.SetOrgID(ctx, "74161146763996133"), &amp;pb.GetMyOrgRequest{})
    if err != nil {
        log.Fatalln("call failed: ", err)
    }
    log.Printf("%s was created on: %s", respOverwrite.Org.Name, respOverwrite.Org.Details.CreationDate.AsTime())
}
```
查看更多 [SDK 示例](https://github.com/zitadel/zitadel-go/blob/main/example)或参考我们的 [API 文档](../../apis/introduction)。

> 本指南将很快更新，告诉您如何使用 SDK 作为您自己的 API。
