---
title: 用户元数据
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在本指南中，您将学习如何手动创建必要的请求来验证和请求用户从 ZITADEL的元数据。

用户元数据的典型例子包括：

- 将用户链接到内部标识符(e.g、userId、合同号等)
- 注册用户时保存自定义用户数据
- 基于用户属性路由上游流量

## 必备条件

### 创建新客户端

- 创建一个新的 [web 应用程序](../console/applications#web)
- 使用代码流
- 在此示例中，我们将使用 `http://localhost` 作为重定向url
- 请务必注意客户端密钥

### 向用户添加元数据

- [将元数据](../../../manuals/user-profile#metadata) 添加到用户
- 请确保您在以后的步骤中使用此用户登录

## 正在请求令牌

:::info
在本指南中，我们将为演示目的从ZITADEL手动请求一个令牌。 您可能会使用 OpenID 身份验证客户端库。
:::

### 设置环境变量

我们将在整个指南中使用一些信息。 设置所需的环境变量如下。 请确保用您的信息替换值。

```bash
export CLIENT_SECRET=QCiMffalakI...zpT0vuOsSkVk1ne \
export CLIENT_ID="16604...@docs-claims" \
export REDIRECT_URI="http://localhost" \
export ZITADEL_DOMAIN="https://...asd.zitadel.cloud"
```

<Tabs>
<TabItem value="go" label="Go" default>

抓取zitadel-tools 来创建 [必需的字符串] (../../../apis/openidoauth/authn-methods#client-secret-basic) 进行基本身份验证：

```bash
git clone git@github.com:zitadel/zitadel-tools.git
cd zitadel-tools/cmd/basicauth
export BASIC_AUTH="$(go run basicauth.go -id $CLIENT_ID -secret $CLIENT_SECRET)"
```

</TabItem>

<TabItem value="python" label="Python">

```python
import base64
import urllib.parse
imports os

clientId = os.environ.get("CLIENT_ID")
clientsecretret = os. nin. .get("CLIENT_SECRET")

reundered = safe_string = urlib.parse.quote_plus(clientId) + ":" + urllib.parse. uote_plus(clientSecret)
message_bytes = escaped.encode('ascii')
base64_bytes = base64.b64encode(message_bytes)
base64_message = base64_bytes ecode('ascii')

print(base64_message)
```

导出结果到环境变量 `BASIC_AUTH` 。

</TabItem>

<TabItem value="js" label="Javascript" default>

```javascript
esc = encodeURIComponent(process.env.CLIENT_ID) + ":" + encodeURIComponent(process.env.CLIENT_SECRET)
enc = btoa(esc)
console.log(enc)
```

导出结果到环境变量 `BASIC_AUTH` 。

</TabItem>

<TabItem value="manually" label="Manually">

您需要创建一个描述为 [here]的字符串 (../../../apis/openidoauth/authn-methods#client-secret-basic)。

使用您选择的编程语言，或者手动使用在线工具创建字符串(不要在生产中使用这些秘密)。 

- https://www.urlencoder.org/
- https://www.base64encode.org/

将结果导出到环境变量`BASIC_AUTH'。

</TabItem>
</Tabs>

### 创建认证请求

您需要创建一个有效的认证请求，包括保留范围 `urn:zitadel:iam:user:metata`。 请参阅我们的 API 文档以获取更多关于 [保留范围](../../../apis/openidoauth/scopes#reserved-scopes) 的信息。

<Tabs>

<TabItem value="default" label="Default" default>

```bash
echo "${ZITADEL_DOMAIN}/oauth/v2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile urn:zitadel:iam:user:metadata"
```

</TabItem>

<TabItem value="macos" label="MacOS">

```zsh
open "${ZITADEL_DOMAIN}/oauth/v2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile urn:zitadel:iam:user:metadata"
```
</TabItem>

<TabItem value="WSL" label="WSL">

```bash
wslview "${ZITADEL_DOMAIN}/oauth/v2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile urn:zitadel:iam:user:metadata"
```
</TabItem>

</Tabs>

使用您添加元数据的用户登录。 登录后您将被重定向。

从 url 获取代码参数 (忽略 &代码= 参数) 并将代码导出为环境变量：

```bash
export AUTH_CODE="Y6nWsgR5WB...zUtFqSp5Xw"
```

### 令牌请求

```bash
curl --request POST \
--url "${ZITADEL_DOMAIN}/oauth/v2/token" \
--header "Accept: application/json" \
--header "Authorization: Basic ${BASIC_AUTH}" \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data grant_type=authorization_code \
--data-urlencode "code=$AUTH_CODE" \
--data-urlencode "redirect_uri=$REDIRECT_URI"
```

结果将给您一些类似的东西：

```json
{
    "access_token":"jZuRixKQTVecEjKqw...kc3G4",
    "token_type":"Bearer",
    "expires_in":43199,
    "id_token":"ey...Ww"
}
```

获取access_token值并导出为环境变量：

```bash
导出 ACCESS_TOKEN="jZuRixKQTVecEjKqw...kc3G4"
```

### 从用户信息端点请求元数据

使用访问令牌，我们可以向用户信息端点提出请求，以获取用户的元数据。 此方法是一种首选方法，用来检索用户信息和不透明令牌，以确保令牌有效。

```bash
curl --request GET \
  --url "${ZITADEL_DOMAIN}/oidc/v1/userinfo" \
  --header "Authorization: Bearer $ACCESS_TOKEN"
```

这个响应将看起来像这样的

```json
{
    "email":"road.runner@zitadel.com",
    "email_verified":true,
    "family_name":"Runner",
    "given_name":"Road",
    "locale":"en",
    "name":"Road Runner",
    "preferred_username":"road.runner@...asd.zitadel.cloud",
    "sub":"166.....729",
    "updated_at":1655467738,
    //highlight-start
    "urn:zitadel:iam:user:metadata":{
        "ContractNumber":"MTIzNA",
        }
    //highlight-end
    }
```

您可以从保留的领地获取元数据 `"urn:zitadel:iam:user:metadata"` 作为键值对。 请注意，值是 base64 编码。 所以 `MTIzNA` decodes 到 `1234`.

### 在 ID 令牌内发送元数据(可选)

在您的应用程序的配置中检查“ID令牌内的用户信息”。

![](/img/console_projects_application_token_settings.png)

现在从 ZITADEL 请求一个新的令牌。

结果将给您一些类似的东西：

```json
{
    "access_token":"jZuRixKQTVecEjKqw...kc3G4",
    "token_type":"Bearer",
    "expires_in":43199,
    "id_token":"ey...Ww"
}
```

在 [jwt.io](https://jwt.io/) 中获取 id_token 并检查令牌的内容。 您应该在 ID 令牌中获得与从用户端点请求相同的信息。