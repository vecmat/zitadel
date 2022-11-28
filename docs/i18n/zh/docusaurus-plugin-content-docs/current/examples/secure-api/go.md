---
title: Go
---

此集成指南向您展示了如何将 **ZITADEL** 整合到您的 Go API中。 它演示了如何使用 OAuth 2 令牌反省来保护您的 API。

在指南末尾，您应该有一个带有受保护端点的API。

## 必备条件

客户端 [SDK](https://github.com/zitadel/zitadel-go) 将提供一个 GRPC 和 HTTP 拦截器。 这将处理 OAuth 2.0 内省请求，包括使用 JWT 验证私钥使用我们的 [OIDC 客户端库](https://github.com/zitadel/oidc)。 只需要创建您的 API 并下载专用密钥文件，后来为服务用户调用 `Key JSON` 文件。

## 转到设置

### 添加去SDK 到您的项目

您需要将 SDK 添加到去模块：

```bash
go get github.com/zitadel/zitadel-go/v2
```

### 创建示例 API

创建一个新的带有下面内容的文件。 这将创建一个包含两个终点的API。 在路径 `/public` 上，它将总是写入 返回 `ok` 和当前的时间戳。 在 `/protected` 上，它将响应相同，但仅当有效的 access_token 发送时。 令牌 不能过期，并且API 必须是观众的一部分(要么是client_id 或 project_id)。

请务必用您自己的域名填充 `issuer` 变量。。 这是您可以在 ZITADEL Cloud 门户网站或 ZITADEL控制台中找到的实例的域名。
```go
package main

import (
    "flag"
    "log"
    "net/http"
    "time"

    http_mw "github.com/zitadel/zitadel-go/v2/pkg/api/middleware/http"
    "github.com/zitadel/zitadel-go/v2/pkg/client/middleware"
)

var (
    issuer = flag.String("issuer", "", "issuer of your ZITADEL instance (in the form: https://<instance>.zitadel.cloud or https://<yourdomain>)")
)

func main() {
    flag.Parse()

    introspection, err := http_mw.NewIntrospectionInterceptor(*issuer, middleware.OSKeyPath())
    if err != nil {
        log.Fatal(err)
    }

    router := http.NewServeMux()
    router.HandleFunc("/public", writeOK)
    router.HandleFunc("/protected", introspection.HandlerFunc(writeOK))

    lis := "127.0.0.1:5001"
    log.Fatal(http.ListenAndServe(lis, router))
}

func writeOK(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("OK " + time.Now().String()))
}

```

#### Key JSON

若要为 SDK 提供关键的 JSON ，只需设置一个环境变量 `ZITADEL_KEY_PATH` ，其路径为 JSON 值。

```bash
export ZITADEL_KEY_PATH=/Users/test/apikey.json
```

为了开发目的，您应该能够在您的 IDE 中设置它。

如果你不能通过环境变量设置它，你也可以交换 `midleware.OSKeyPath()` 并直接传递它：

```go
inspection, err := http_mw.NewIntrospectionInterceptor(
    client.Issuer,
    "/Users/test/apikey.json",
)
```

### 测试 API

在你正确配置了一切后，你可以简单地开始示例：

```bash
go run main.go
```

您现在可以通过浏览器或曲线调用 API。 请先尝试公共端点：

```bash
curl -i localhost:5001/public
```

它应该返回像这样：

```
HTTP/1.1 200 OK
Date: Tue, 24 Aug 2021 11:11:17 GMT
Content-Length: 59
Content-Type: text/plain; charset=utf-8

OK 2021-08-24 13:11:17.135719 +0200 CEST m=+30704.913892168
```

和被保护者：

```bash
curl -i localhost:5001/protected
```

它将返回：

```
HTTP/1.1 401 Unauthorized
Content-Type: application/json
Date: Tue, 24 Aug 2021 11:13:10 GMT
Content-Length: 21

"auth header missing"
```

为API获取一个有效的 access_token。 您可以通过登录到同一项目的应用程序或 来实现这一点，方法是按范围 `urn:zitadel:iam:org:project:id:{projectid}:aud` 向观众明确请求project_id。

如果您提供了一个有效的持有者令牌：

```bash
curl -i -H "Authorization: Bearer ${token}" localhost:5001/protected
```

它也将返回 OK 响应：
```
HTTP/1.1 200 OK
Date: Tue, 24 Aug 2021 11:13:33 GMT
Content-Length: 59
Content-Type: text/plain; charset=utf-8

OK 2021-08-24 13:13:33.131943 +0200 CEST m=+30840.911149251
```
