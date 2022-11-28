---
title: 疑难解答
---

你会在这里找到一些可能的错误消息，问题是什么，以及一些可能的解决办法。

## 用户代理不匹配

一些用户在被重定向到ZITADEL登录页面后出现了这个错误。 ZITADEL使用一些cookie来识别用户的浏览器/用户代理，因此它能够存储活跃的用户会话。 如果阻止cookie，ZITADEL的功能将受到影响。

我们只在 iPhone 用户找到这个问题，它取决于设备的设置。

### 解答

如果SameSite 严格执行 (ITP) 被禁用，请转到应用Safari 的设置并在“实验WebKit 功能”中检查 同时检查“屏蔽所有cookie”是否有效。 如果是，请禁用此设置。

要确保您的新设置会触发，请重新启动您的手机并重试。

**设置 > Safari > 高级 > 实验功能 > 禁用：“SameSite 严格执行 (ITP)”**

![相同站点严格执行](/img/manuals/errors/same-site-strict.png)

**设置 > Safari > 禁用: "屏蔽所有 cookies"** ![屏蔽所有 cookie](/img/manuals/errors/block-cookies.png)

您是否仍然面临这个问题？ 请联系我们，我们将帮助您了解问题是什么。
