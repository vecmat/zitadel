---
title: ZITADEL Cloud 频率限制
---

根据我们的 [频率限制策略](/docs/legal/rate-limit-policy) 执行，并且有以下规则：

| 路径             | 描述                                                                                                    | 脱水          | 禁用一分钟            |
| -------------- | ----------------------------------------------------------------------------------------------------- | ----------- | ---------------- |
| /ui/login*     | 全局登录、注册和重置限制                                                                                          | 1分钟内每秒10次请求 | 每个传感器超过3分钟的15个请求 |
| *各种API路径* [^1] | 所有其他 gRPPC- 和 REST APIs<br/> - 管理 API<br/>- 管理员 API<br/>- 认证 API<br/>- 系统 API | 1分钟内每秒4个请求  | 3分钟内每秒8个请求       |

[^1] API 路径：
<details>
    <summary>打开以查看reqular表达式</summary>
    <pre>
/system/v[0-9]+/.*|/auth/v[0-9]+/.|/admin/v[0-9]+/.|/management/v[0-9]+/.*|zitadel\.system\.v[0-9]+\.Systeme/.*|zitadel\.admin\.v[0-9]+\.AdminService/.*|zitadel\.auth\.v[0-9]+\.AuthService/.*|zitadel\.v[0-9]+\.ManagementService/.*
    </pre>
</details>
