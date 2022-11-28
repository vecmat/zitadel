---
title: 终点
---

从 '@theme/Tabs'导入标签页; 从'@theme/TabItem'导入标签页;

## OpenID 连接 1.0 发现

OpenID Connect 发现端点位于发行者域内。 这将给我们 {your_domain}/.wellknow/openid-configuration。

**链接到试样。** [OpenID Connect 发现了 1.0 含有错误集 1](https://openid.net/specs/openid-connect-discovery-1_0.html)

## 授权终点

{your_domain}/oauth/v2/授权

:::note
授权 _endpoint 位于登录页面，因为需要访问相同的 cookie 域
:::

授权 _endpoint 是所有初始用户身份验证的起点。 用户代理 (browserver) 将被重定向到此端点 验证用户，以换取授权代码 (授权代码流程) 或令牌(默示流程)。

<details>
    <summary>与旁观的链接</summary>
    <ul>
        <li><a href="https://datatracker.ietf.org/doc/html/rfc6749#section-3.1">OAuth2.0 第3.1节(RFC6749)</a></li>
        <li><a href="https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint">OpenID Connect Core 1.0 包含错误集 1 的第3.1.2 节</a></li>
    </ul>
</details>

### 所需请求参数

| 参数        | 描述                                                                        |
| --------- | ------------------------------------------------------------------------- |
| client_id | 您的客户端的 id，正如在控制台中所示。                                                      |
| 重定向_uri   | 验证码或令牌将被发送到的验证请求的 Callback uri。 必须完全匹配控制台中的一个预注册。                         |
| 响应类型      | 确定是否返回 `代码`, `id_token token` 或只返回 `id_token` 大多数案例将需要 `代码`。 更多信息请参阅流程指南。 |
| 范围        | `需要openid` 。查看 [范围](scopes) 以获取更多可能的值。 范围是空间分隔的，例如： `openid email配置`      |

:::important
关注 [OIDC Core 1。 签发access_token时](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) id_token将不包含任何范围声明 `配置文件` `email`, `电话` 和 `地址`.

将access_token发送到 [userinfo_endpoint](#userinfo_endpoint) 或 [introspection_endpoint](#introspection_endpoint) 检索这些claims 或设置 `id_token_userinfo_pature` 选项 ("ID令牌中的用户信息" 在 Solole) 为真。
:::

根据您的授权方法，您必须提供额外的参数或标题：

<Tabs
    groupId="token-auth-methods"
    defaultValue="client_secret_basic"
    values={[
        {label: 'client_secret_basic', value: 'client_secret_basic'},
 {label: 'client_secret_post', value: 'client_secret_post'},
 {label: 'none (PKCE)', value: 'none'},
 {label: 'private_key_jwt', value: 'private_key_jwt'},
 ]}
>
<TabItem value="client_secret_basic">
无需附加参数
</TabItem>
<TabItem value="client_secret_post">
无需附加参数
</TabItem>
<TabItem value="none">

|参数 | 描述 |
| ---------------------------- | -------------------------------------------------------------------- -- |
| code_challenge | 生成的 `code_verifier` 的SHA-256 值 |
| code_challenge_methodology | 用于产生挑战的方法 | 必须是 `S256` |

查看PKCE 指南以获取更多信息

</TabItem>
<TabItem value="private_key_jwt">
无需附加参数
</TabItem>
</Tabs>

### 附加参数

| 参数              | 描述                                                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id_token_hint | 有效的 `id_token` (已有会话) 用于识别主题。 **SHOULD** be provided when using prompt `none`.                                                                                                                                                |
| 登录提示            | 有效的用户登录名。 将用于用户名输入或在 `选择帐户` 上预选用户。 请务必使用URL编码正确地编码提示(尤其是在登录名中使用 `+` 或相同时)                                                                                                                                                     |
| 最大年龄            | 自用户最后一次活动成功认证以来的秒数                                                                                                                                                                                                            |
| nonce           | 随机字符串值将客户端会话与 ID Token 关联，并用于重放攻击缓存。 **在使用 **隐含流程** 时提供了 mUST**。                                                                                                                                                              |
| prompt          | 如果身份验证服务器提示用户(重新)身份验证。 <br />不提示：如果存在多个会话，用户将必须选择会话<br />`无`：用户必须在没有互动的情况下进行身份验证。 以其他方式返回错误 <br />`登录`: 用户必须重新验证 / 提供用户名 <br />`select_account`: 用户被提示选择一个现有会话或创建一个新会话 <br />`创建`: 注册表单将直接显示给用户 |
| 状态              | 用于维持请求和回调之间状态的不透明值。 Used for Cross-Site Request Forgery (CSRF) mitigation as well, therefore highly **recommended**.                                                                                                          |
| ui_locales      | 登录界面的首选本地化空间分隔列表，例如： `de-CH de en`。 如果没有提供或匹配登录界面提供的可能的本地化语言， 浏览器的 `个接受语言` 头将被考虑在内。                                                                                                                                           |

### 代码响应成功

当您的 `response_type` 是 `代码` 且没有发生错误时，将返回以下响应：

| 财产 | 描述                 |
| -- | ------------------ |
| 代码 | 在令牌端点请求令牌所需的不透明字符串 |
| 状态 | 从请求中未修改的 `状态` 参数   |

### 隐含响应成功

当您的 `response_type` 是 `it_token` 或 `id_token` 并且没有发生错误时，将返回以下响应：

| 财产       | 描述                                      |
| -------- | --------------------------------------- |
| 访问令牌     | 只有 `响应类型` 包含 `令牌` 才返回                   |
| 过期时间     | 在 `access_token 到期之前的第二个数量`             |
| id_token | 授权用户的 `id_token`                        |
| 令牌类型     | `access_token` 的类型。 值总是 `持卡人`           |
| 范围       | `access_token` 的范围。 这些可能不同于提供的 `范围` 参数。 |
| 状态       | 从请求中未修改的 `状态` 参数                        |

### 错误响应

无论选择哪个授权流，如果发生错误，下列响应将返回重定向_uri。

:::note
如果未提供重定向_uri 未注册或任何其他阻止认证服务器表格返回客户端的响应， 该错误将直接显示给认证服务器上的用户
:::

| 财产   | 描述                                        |
| ---- | ----------------------------------------- |
| 错误   | 一个 OAuth / OIDC [错误类型](#authorize-errors) |
| 描述错误 | 错误类型的描述或错误的附加信息                           |
| 状态   | 从请求中未修改的 `状态` 参数                          |

#### 可能的错误 {#authorize-errors}

| 类型错误     | 可能的原因                                                 |
| -------- | ----------------------------------------------------- |
| 无效请求     | 请求缺少必需的参数，包含无效的参数值，包括多次包含参数，或者格式不正确。                  |
| 无效范围     | 请求的范围无效。 通常缺少所需的 `openid` 值。                          |
| 未授权的客户端  | 客户端无权使用此方法请求访问 _token。 在控制台中检查您的应用程序配置是否允许请求的 `响应类型`。 |
| 不支持的响应类型 | 授权服务器不支持请求的响应类型。                                      |
| 服务器错误    | 授权服务器遇到一个意外的条件，无法完成请求。                                |

## 令牌终点

{your_domain}/oauth/v2/token

token_endpoint将根据使用的 `grant_type` 返回各种token (访问、id和刷新)。 当使用 [`authorization_code`](#authorization-code-grant-code-exchange) 从authorization_endpoint接收代码后调用此端点。 当使用 [`刷新令牌`](#authorization-code-grant-code-exchange) 或 [`urn:ietf:params:oauth:grant-type:jwt-bearer` (JWT Profile)](#jwt-profile-grant) 您将直接调用此端点。

### 授权码授予(代码交换)

如上所述，当使用 `authoriz_code` grant时，此端点将是您第二次请求授权具有其用户代理 (browser)。

#### 所需的请求参数

| 参数         | 描述                                    |
| ---------- | ------------------------------------- |
| 代码         | 授权请求下发的代码。                            |
| grant_type | 必须是 `authorization_code`              |
| 重定向_uri    | Callback uri 代码被发送到哪里。 必须与授权请求的重定向匹配。 |

根据您的授权方法，您必须提供额外的参数或标题：

<Tabs
    groupId="token-auth-methods"
    defaultValue="client_secret_basic"
    values={[
        {label: 'client_secret_basic', value: 'client_secret_basic'},
 {label: 'client_secret_post', value: 'client_secret_post'},
 {label: 'none (PKCE)', value: 'none'},
 {label: 'private_key_jwt', value: 'private_key_jwt'},
 ]}
>
<TabItem value="client_secret_basic">

作为基本认证头发送您的`client_id`和`client_secret`。 检查 [客户端基本认证方法] (authn-methods#client-secret-basic) 如何正确构建它。

</TabItem>
<TabItem value="client_secret_post">

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter     | Description                      |
| ------------- | -------------------------------- |
| client_id     | client_id of the application     |
| client_secret | client_secret of the application |

</TabItem>
<TabItem value="none">

发送你的 `code_verifier` 给我们来重新计算授权请求的 `code_challenge` 。

| 参数 | 描述 |
| ------------ | ------------------------------------------------------------------------------------ |
| code_verifer | code_verifier | 先前用于生成代码挑战的代码 |

</TabItem>
<TabItem value="private_key_jwt">

以JWT形式发送客户端声明以让我们验证签名是否与注册公钥对齐。

| 参数 | 描述 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------|
| client_posure | JWT 生成并签名于 [使用 JWTs 进行客户端身份验证](authn-methods#jwt-with-private key) |
| client_assertion_type | 必须是 `urn:ietf:params:oauth:oauth:client-assertion-type:jwt-bearer` |

</TabItem>
</Tabs>

#### 成功的代码响应 {#token-code-response}

| 财产       | 描述                                      |
| -------- | --------------------------------------- |
| 访问令牌     | 一个 `access_token` 为 JWT 或 opaque token  |
| 过期时间     | 在 `access_token 到期之前的第二个数量`             |
| id_token | 授权用户的 `id_token`                        |
| 范围       | `access_token` 的范围。 这些可能不同于提供的 `范围` 参数。 |
| 刷新令牌     | 一个不透明的令牌。 只有在 `脱机访问` 范围被请求时才返回          |
| 令牌类型     | `access_token` 的类型。 值总是 `持卡人`           |

### JWT 配置文件授权

#### 所需的请求参数

| 参数         | 描述                                                                         |
| ---------- | -------------------------------------------------------------------------- |
| grant_type | 必须是 `urn:ietf:params:oauth:grant-type:jwt-berr`                            |
| 断言         | JWT 根据 [构建和签名使用 JWT进行授权赠与](grant-types#using-jwts-as-authorization-grants) |
| 范围         | [范围](scopes) 您想要向ZITADEL提出请求。 范围是空间分隔的，例如： `openid email配置`                |

```BASH
curl --request POST \
  --url {your_domain}/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded'
  --data grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer \
  --data assertion=eyJhbGciOiJSI1Ni...
```

#### JWT 个人资料响应成功 {#token-jwt-response}

| 财产       | 描述                                      |
| -------- | --------------------------------------- |
| 访问令牌     | 一个 `access_token` 为 JWT 或 opaque token  |
| 过期时间     | 在 `access_token 到期之前的第二个数量`             |
| id_token | 授权服务用户的 `id_token`                      |
| 范围       | `access_token` 的范围。 这些可能不同于提供的 `范围` 参数。 |
| 令牌类型     | `access_token` 的类型。 值总是 `持卡人`           |

### 刷新令牌授权

要请求新的 `access_token` 无需用户互动，您可以使用 `刷新令牌` 赠予。 请参阅 [offline_access Scope](scopes#standard-scopes) 以了解如何在授权请求中请求 `刷新令牌`

#### 所需的请求参数

| 参数         | 描述                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------- |
| grant_type | 必须是 `刷新令牌`                                                                                                          |
| 刷新令牌       | 上次授权代码或刷新令牌请求中先前发布的刷新令牌。                                                                                            |
| 范围         | [范围](scopes) 您想要向ZITADEL请求获取新访问 _token。 必须是相应认证请求最初请求的范围的子集。 如果省略，原始认证请求所要求的范围将被重新使用。 范围是空间分隔的，例如： `openid email配置` |

根据您的授权方法，您必须提供额外的参数或标题：

<Tabs
    groupId="token-auth-methods"
    defaultValue="client_secret_basic"
    values={[
        {label: 'client_secret_basic', value: 'client_secret_basic'},
 {label: 'client_secret_post', value: 'client_secret_post'},
 {label: 'none (PKCE)', value: 'none'},
 {label: 'private_key_jwt', value: 'private_key_jwt'},
 ]}
>
<TabItem value="client_secret_basic">

作为基本认证头发送您的`client_id`和`client_secret`。 检查 [客户端基本认证方法] (authn-methods#client-secret-basic) 如何正确构建它。

</TabItem>
<TabItem value="client_secret_post">

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter     | Description                      |
| ------------- | -------------------------------- |
| client_id     | client_id of the application     |
| client_secret | client_secret of the application |

</TabItem>
<TabItem value="none">

在正文中发送你的`client_id`作为参数。 无需身份验证。

</TabItem>
<TabItem value="private_key_jwt">

以 JWT 身份发送一个 `client_assertion` ，让我们验证签名与注册公钥对照。

| 参数 | 描述 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------|
| client_posure | JWT 生成并签名于 [使用 JWTs 进行客户端身份验证](authn-methods#jwt-with-private key) |
| client_assertion_type | 必须是 `urn:ietf:params:oauth:oauth:client-assertion-type:jwt-bearer` |

</TabItem>
</Tabs>

#### 成功刷新令牌响应 {#token-refresh-response}

| 财产       | 描述                                      |
| -------- | --------------------------------------- |
| 访问令牌     | 一个 `access_token` 为 JWT 或 opaque token  |
| 过期时间     | 在 `access_token 到期之前的第二个数量`             |
| id_token | 授权用户的 `id_token`                        |
| 范围       | `access_token` 的范围。 这些可能不同于提供的 `范围` 参数。 |
| 刷新令牌     | 一个新的不透明刷新令牌。                            |
| 令牌类型     | `access_token` 的类型。 值总是 `持卡人`           |

### 错误响应

> //TODO: errors

## 反思终点

{your_domain}/oauth/v2/introspet

此端点可以让客户端验证一个 `access_token`, 不透明或 JWT。 与客户端JWT 验证不同， 此端点将检查是否令牌未被吊销(通过客户端或注销)。

| 参数 | 描述   |
| -- | ---- |
| 令牌 | 访问令牌 |

根据您的授权方法，您必须提供额外的参数或标题：

<Tabs
    groupId="introspect-auth-methods"
    defaultValue="client_secret_basic"
    values={[
        {label: 'client_secret_basic', value: 'client_secret_basic'},
 {label: 'private_key_jwt', value: 'private_key_jwt'},
 ]}
>
<TabItem value="client_secret_basic">

作为基本认证头发送您的`client_id`和`client_secret`。 检查 [客户端基本认证方法] (authn-methods#client-secret-basic) 如何正确构建它。

```BASH
curl --request POST \
  --url {your_domain}/oauth/v2/introspect \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Authorization: Basic {your_basic_auth_header}' \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

</TabItem>

<TabItem value="private_key_jwt">

以 JWT 身份发送一个 `client_assertion` ，让我们验证签名与注册公钥对照。

| Parameter             | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| client_assertion      | JWT built and signed according to [Using JWTs for Client Authentication](authn-methods#client-secret-basic) |
| client_assertion_type | must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                            |

```BASH
curl --request POST \
  --url {your_domain}/oauth/v2/introspect \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \
  --data client_assertion=eyJhbGciOiJSUzI1Ni... \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

</TabItem>
</Tabs>

### 成功反省响应 {#introspect-response}

客户端授权成功后，使用布尔值 `活动的` 响应将被返回 指示是否提供的令牌 是活动的，而请求客户端是令牌受众的一部分。

如果 `活动` 是 **true**, 将提供更多信息：

| 财产        | 描述                                       |
| --------- | ---------------------------------------- |
| Aud       | 令牌的观众数                                   |
| client_id | 令牌发布的应用程序的 client_id                     |
| exp       | 令牌到期时间(例如unix 时间)                        |
| iat       | 令牌的时间是在 (Unix 时间)                        |
| 西文        | 代币发行者                                    |
| jti       | 令牌的唯一id                                  |
| nbf       | 令牌不能在之前使用时间(例如unix 时间)                   |
| 范围        | 授予令牌的空间分隔范围列表                            |
| 令牌类型      | 检查标记的类型。 值总是 `持卡人`                       |
| 用户名       | ZITADEL用户的登录名。  `username@primarydomain` |

此外，还根据所授予的范围提供有关受权用户的信息。 如果有特定的索偿要求可能被退回，请检查 [索偿](claims) 页面并获取详细说明。

### 错误响应 {#introspect-error-response}

如果授权失败，将返回 `无效的客户端` 的 HTTP 401。

## 用户信息结束点

{your_domain}/oidc/v1/userinfo

此端点将返回授权用户的信息。

发送 **用户的 `access_token`** (而不是客户端) 以 `授权中的` 标题作为持有者令牌：
```BASH
curl --request GET \
  --url {your_domain}/oidc/v1/userinfo
  --header 'Authorization: Morer dsfdsjk29fm2as...'
```

### 用户信息响应成功 {#userinfo-response}

如果 `access_token` 是有效的，则返回用户信息取决于授予的范围。 如果有特定的索偿要求可能被退回，请检查 [索偿](claims) 页面并获取详细说明。

### 错误响应 {#userinfo-error-response}

如果令牌无效或过期，将返回 HTTP 401。

## 撤销端点

{your_domain}/oauth/v2/revoke

此端点使客户端能够撤销一个 `access_token` 或 `refresh_token` 他们已被授予。

:::importer
如果您撤销一个 `access_toke` 则只有特定的令牌将被撤销。 吊销 `refresh_toke`, 对应的 `access_token` 也将被吊销。
:::


| 参数 | 描述        |
| -- | --------- |
| 令牌 | 访问令牌或刷新令牌 |

根据您的授权方法，您必须提供额外的参数或标题：

<Tabs
    groupId="token-auth-methods"
    defaultValue="client_secret_basic"
    values={[
        {label: 'client_secret_basic', value: 'client_secret_basic'},
 {label: 'client_secret_post', value: 'client_secret_post'},
 {label: 'none (PKCE)', value: 'none'},
 {label: 'private_key_jwt', value: 'private_key_jwt'},
 ]}
>
<TabItem value="client_secret_basic">

作为基本认证头发送您的`client_id`和`client_secret`。 检查 [客户端基本认证方法] (authn-methods#client-secret-basic) 如何正确构造请求。

</TabItem>
<TabItem value="client_secret_post">

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter     | Description                      |
| ------------- | -------------------------------- |
| client_id     | client_id of the application     |
| client_secret | client_secret of the application |

</TabItem>
<TabItem value="none">

Send your `client_id` as parameters in the body:

| Parameter | Description                  |
| --------- | ---------------------------- |
| client_id | client_id of the application |

</TabItem>
<TabItem value="private_key_jwt">

发送一个 `client_assertion` 为 ZITADEL的 JWT 来验证签名与注册公钥对齐。

| Parameter             | Description                                                                                                   |
| --------------------- |---------------------------------------------------------------------------------------------------------------|
| client_assertion      | JWT created and signed according to [Using JWTs for Client Authentication](authn-methods#client-secret-basic) |
| client_assertion_type | must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                              |

```BASH
curl --request POST \
  --url {your_domain}/oauth/v2/revoke \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \
  --data client_assertion=eyJhbGciOiJSUzI1Ni... \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

</TabItem>
</Tabs>

## 结束会话终点

{your_domain}/oidc/v1/end_session

端点必须在用户代理 (browser) 中打开才能终止用户会话。

除了用户代理 cookie不需要参数，但您可以提供以下自定义行为：

| 参数                         | 描述                                      |
| -------------------------- | --------------------------------------- |
| id_token_hint            | 先前发布给客户端的 id_token                      |
| client_id                  | 应用程序的 client_id                         |
| post_logout_redirect_uri | 用户(代理)将被重定向到的注销的回调uri 必须完全匹配控制台中的一个预注册。 |
| 状态                         | 用于维持请求和回调之间状态的不透明值                      |

`post_logout_redirect_uri` 将与以前注册的 `azp` 对客户端的 `id_token_hint` 或 `client_id` 参数的认证。 如果提供了这两个参数，它们必须相同。

## jwks_uri

{your_domain}/oauth/v2/密钥

> 请注意这些密钥可以在没有任何事先通知的情况下旋转。 然而，我们将确保每个密钥都设置了一个合适的 `kid`！

## OAuth 2.0 元数据

**ZITADEL** 还没有提供 OAuth 2.0 元数据端点，而是提供 [OpenID Connect 发现端点](#OpenID_Connect_1_0_Discovery)。
