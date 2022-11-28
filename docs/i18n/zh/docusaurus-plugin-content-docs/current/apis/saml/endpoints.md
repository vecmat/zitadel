---
title: 终点
---

## SAML 2.0 元数据

SAML 元数据位于发行者域内。 这将给我们 {your_domain}/saml/v2/metadata。

这个元数据包含在试样中定义的所有信息。

**链接到 个试样。** [OASIS 安全描述标记语言 (SAML) V2.0 的元数据——错误合成](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf)

## 证书终点

{your_domain}/saml/v2/certificate

证书端点提供了用于签署下载响应的证书。 更容易使用 个不同的服务提供商，它们想要单独使用证书而不是在元数据中。

## SSO 端点

{your_domain}/saml/v2/SSO

SSO 端点是所有初始用户认证的起点。 用户代理 (browserver) 将被重定向到 到此端点以验证用户。

支持此端点或当前 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Repeired` 或 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` bindings.

**链接到 个示例。** [OASIS 安全描述标记语言 (SAML) V2.0 - 错误合成](https://www.oasis-open.org/committees/download.php/35387/sstc-saml-bindings-errata-2.0-wd-05-diff.pdf)

### 所需请求参数

| 参数     | 描述                                                                                                |
| ------ | ------------------------------------------------------------------------------------------------- |
| 中继状态   | 用于将交易与原始请求关联的ID。                                                                                  |
| SAML请求 | 向SAML IDP提出的请求。  (基64编码)                                                                          |
| SigAlg | 用于签署请求的算法只有在绑定是 'urn:oasis:names:tc:SAML:2.0bindings:HTTP-Redirect'的情况下才能签名，因为签名必须是单独的参数。 (基64编码) |
| 签名     | 将请求签署为 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect' 绑定的参数。  (基64编码)                       |

### 成功响应

视请求的内容而定，答复会回到请求的绑定中，但内容相同。

| 参数     | 描述                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------ |
| 中继状态   | 用于将交易与原始请求关联的ID。                                                                                 |
| SAML响应 | 答复形式为SAML IDP。  (基64编码)                                                                          |
| SigAlg | 用于签名响应的算法只有在绑定为 'urn:oasis:names:tc:SAML:2.0bindings:HTTP-Redirect' 时才能签名，因为签名必须是单独的参数。  (基64编码) |
| 签名     | 用'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect'绑定的参数签名。  (基64编码)                           |

### 错误响应

不管有什么错误，所用的 http 错误代码将是 '200' ，这是一个成功的请求。 响应将包含一个 StatusCode 包含一个消息，如果发生错误则提供更多信息。

**链接到 spec** [OASIS 安全描述标记语言 (SAML) V2.0 - 错误合成](https://www.oasis-open.org/committees/download.php/35711/sstc-saml-core-errata-2.0-wd-06-diff.pdf)