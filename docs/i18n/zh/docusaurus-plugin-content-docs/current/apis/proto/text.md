---
title: zitadel/text.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)




## 留言


### EmailVerificationDoneScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 登录按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### 电子邮件验证屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 代码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 重置按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### ExternalRegistrationUserOverviewScreenText



| 字段                      | 类型  | 描述 | 验证                              |
| ----------------------- | --- | -- | ------------------------------- |
| 标题                      | 字符串 | -  | string.max_len: 200<br /> |
| 描述                      | 字符串 | -  | string.max_len: 500<br /> |
| 电子邮件标签                  | 字符串 | -  | string.max_len: 200<br /> |
| 用户名标签                   | 字符串 | -  | string.max_len: 200<br /> |
| 名字标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 姓氏标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 昵称标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 语言标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 手机标签                    | 字符串 | -  | string.max_len: 200<br /> |
| tos_and_privacy_label | 字符串 | -  | string.max_len: 200<br /> |
| tos_确认                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_link_text         | 字符串 | -  | string.max_len: 200<br /> |
| tos_confirm_and       | 字符串 | -  | string.max_len: 200<br /> |
| 隐私链接文本                  | 字符串 | -  | string.max_len: 200<br /> |
| 背面按钮文本                  | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本                 | 字符串 | -  | string.max_len: 200<br /> |




### ExternalUserNotFoundScreenText



| 字段                      | 类型  | 描述 | 验证                              |
| ----------------------- | --- | -- | ------------------------------- |
| 标题                      | 字符串 | -  | string.max_len: 200<br /> |
| 描述                      | 字符串 | -  | string.max_len: 500<br /> |
| 链接按钮文本                  | 字符串 | -  | string.max_len: 100<br /> |
| 自动注册按钮文本                | 字符串 | -  | string.max_len: 100<br /> |
| tos_and_privacy_label | 字符串 | -  | string.max_len: 200<br /> |
| tos_确认                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_link_text         | 字符串 | -  | string.max_len: 200<br /> |
| 隐私链接文本                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_confirm_and       | 字符串 | -  | string.max_len: 200<br /> |




### 页脚文本



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| tos  | 字符串 | -  | string.max_len: 200<br /> |
| 隐私政策 | 字符串 | -  | string.max_len: 200<br /> |
| 帮助   | 字符串 | -  | string.max_len: 200<br /> |




### InitMFADoneScreen文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### InitMFAOTCreentext



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 描述_otp  | 字符串 | -  | string.max_len: 500<br /> |
| 秘密标签    | 字符串 | -  | string.max_len: 200<br /> |
| 代码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### InitMFAPromptScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| otp_选项  | 字符串 | -  | string.max_len: 200<br /> |
| u2f_选项  | 字符串 | -  | string.max_len: 200<br /> |
| 跳过按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### InitMFAU2FScreenText



| 字段                           | 类型  | 描述 | 验证                              |
| ---------------------------- | --- | -- | ------------------------------- |
| 标题                           | 字符串 | -  | string.max_len: 200<br /> |
| 描述                           | 字符串 | -  | string.max_len: 500<br /> |
| 令牌名称标签                       | 字符串 | -  | string.max_len: 200<br /> |
| 不支持                          | 字符串 | -  | string.max_len: 500<br /> |
| register_token_button_text | 字符串 | -  | string.max_len: 100<br /> |
| 重试错误                         | 字符串 | -  | string.max_len: 500<br /> |




### InitPasswordDoneScreen文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### InitPassword屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 代码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 新密码标签   | 字符串 | -  | string.max_len: 200<br /> |
| 新密码确认标签 | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 重置按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### 初始化 UserDoneScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### InitializeUserScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 代码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 新密码标签   | 字符串 | -  | string.max_len: 200<br /> |
| 新密码确认标签 | 字符串 | -  | string.max_len: 200<br /> |
| 重置按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### LinkingUserDoneScreen文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### 登录自定义文本



| 字段                             | 类型                                         | 描述 | 验证 |
| ------------------------------ | ------------------------------------------ | -- | -- |
| 详细信息                           | zitadel.v1.ObjectDetails                   | -  |    |
| 选择帐户文本                         | SelectAccountScreenText                    | -  |    |
| 登录文本                           | LoginScreenTexte                           | -  |    |
| 密码文本                           | 密码屏幕文本                                     | -  |    |
| 用户名更改文本                        | 用户名更改屏幕文本                                  | -  |    |
| 用户名_change_done_text         | 用户名变更屏幕文本                                  | -  |    |
| init_password_文本             | InitPassword屏幕文本                           | -  |    |
| init_password_done_text      | InitPasswordDoneScreen文本                   | -  |    |
| 电子邮件验证文本                       | 电子邮件验证屏幕文本                                 | -  |    |
| email_verification_done_text | EmailVerificationDoneScreenText            | -  |    |
| 初始化用户文本                        | InitializeUserScreenText                   | -  |    |
| 初始化_done_text                | 初始化 UserDoneScreenText                     | -  |    |
| init_mfa_impt_text           | InitMFAPromptScreenText                    | -  |    |
| init_mfa_otp_text            | InitMFAOTCreentext                         | -  |    |
| init_mfa_u2f_text            | InitMFAU2FScreenText                       | -  |    |
| init_mfa_done_text           | InitMFADoneScreen文本                        | -  |    |
| mfa_providers_text           | MFAProvidersText                           | -  |    |
| 验证 mfa_otp_text              | VerifyMFAOTPScreenText                     | -  |    |
| 校验_mfa_u2f_text              | VerifyMFAU2FScreenText                     | -  |    |
| 无密码文本                          | 无密码屏文本                                     | -  |    |
| 密码更改文本                         | 密码更改屏幕文本                                   | -  |    |
| 密码更改_done_text               | 密码变更屏幕文本                                   | -  |    |
| 密码重置文本                         | 密码重置屏幕文本                                   | -  |    |
| 注册选项文本                         | 注册选项屏幕文本                                   | -  |    |
| 注册用户文本                         | 注册用户屏幕文本                                   | -  |    |
| registration_org_text        | 注册组织屏幕文本                                   | -  |    |
| 链接 user_done_text            | LinkingUserDoneScreen文本                    | -  |    |
| 外部用户_not_found_text          | ExternalUserNotFoundScreenText             | -  |    |
| 成功登录文本                         | 成功 LoginScreenText                         | -  |    |
| 注销文本                           | 注销屏幕文本                                     | -  |    |
| 页脚文本                           | 页脚文本                                       | -  |    |
| 无密码提示文本                        | PasswordlessPromptScreenText               | -  |    |
| 无密码注册文本                        | 无密码注册屏幕文本                                  | -  |    |
| 无密码注册_done_text              | 无密码注册 DoneScreenText                       | -  |    |
| 外部注册用户概览文本                     | ExternalRegistrationUserOverviewScreenText | -  |    |
| 是默认值                           | 布尔值                                        | -  |    |




### LoginScreenTexte



| 字段                             | 类型  | 描述 | 验证                              |
| ------------------------------ | --- | -- | ------------------------------- |
| 标题                             | 字符串 | -  | string.max_len: 200<br /> |
| 描述                             | 字符串 | -  | string.max_len: 500<br /> |
| title_linking_进程             | 字符串 | -  | string.max_len: 200<br /> |
| 描述链接进程                         | 字符串 | -  | string.max_len: 500<br /> |
| user_must_be_member_of_org | 字符串 | -  | string.max_len: 500<br /> |
| 登录名称标签                         | 字符串 | -  | string.max_len: 200<br /> |
| 注册按钮文本                         | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本                        | 字符串 | -  | string.max_len: 100<br /> |
| 外部用户描述                         | 字符串 | -  | string.max_len: 500<br /> |
| 用户名称占位符                        | 字符串 | -  | string.max_len: 200<br /> |
| login_name_placeholder       | 字符串 | -  | string.max_len: 200<br /> |




### 注销屏幕文本



| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| 标题     | 字符串 | -  | string.max_len: 200<br /> |
| 描述     | 字符串 | -  | string.max_len: 500<br /> |
| 登录按钮文本 | 字符串 | -  | string.max_len: 200<br /> |




### MFAProvidersText



| 字段   | 类型  | 描述 | 验证                              |
| ---- | --- | -- | ------------------------------- |
| 选择其他 | 字符串 | -  | string.max_len: 500<br /> |
| 条目数  | 字符串 | -  | string.max_len: 200<br /> |
| u2f  | 字符串 | -  | string.max_len: 200<br /> |




### 消息自定义文本



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |
| 标题         | 字符串                      | -  |    |
| pre_header | 字符串                      | -  |    |
| 主题         | 字符串                      | -  |    |
| 问候中        | 字符串                      | -  |    |
| 文本         | 字符串                      | -  |    |
| 按钮文本       | 字符串                      | -  |    |
| 页脚文本       | 字符串                      | -  |    |
| 是默认值       | 布尔值                      | -  |    |




### 密码变更屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### 密码更改屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 旧密码标签   | 字符串 | -  | string.max_len: 200<br /> |
| 新密码标签   | 字符串 | -  | string.max_len: 200<br /> |
| 新密码确认标签 | 字符串 | -  | string.max_len: 200<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### 密码重置屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### 密码屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 密码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 重置链接文本  | 字符串 | -  | string.max_len: 100<br /> |
| 背面按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 最小长度    | 字符串 | -  | string.max_len: 100<br /> |
| 大写      | 字符串 | -  | string.max_len: 100<br /> |
| 小写      | 字符串 | -  | string.max_len: 100<br /> |
| 有数字     | 字符串 | -  | string.max_len: 100<br /> |
| 有符号     | 字符串 | -  | string.max_len: 100<br /> |
| 确认      | 字符串 | -  | string.max_len: 100<br /> |




### PasswordlessPromptScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 描述-init | 字符串 | -  | string.max_len: 500<br /> |
| 无密码按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 跳过按钮文本  | 字符串 | -  | string.max_len: 100<br /> |




### 无密码注册 DoneScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 关闭描述    | 字符串 | -  | string.max_len: 100<br /> |




### 无密码注册屏幕文本



| 字段                           | 类型  | 描述 | 验证                              |
| ---------------------------- | --- | -- | ------------------------------- |
| 标题                           | 字符串 | -  | string.max_len: 200<br /> |
| 描述                           | 字符串 | -  | string.max_len: 500<br /> |
| 令牌名称标签                       | 字符串 | -  | string.max_len: 200<br /> |
| 不支持                          | 字符串 | -  | string.max_len: 500<br /> |
| register_token_button_text | 字符串 | -  | string.max_len: 100<br /> |
| 重试错误                         | 字符串 | -  | string.max_len: 500<br /> |




### 无密码屏文本



| 字段                     | 类型  | 描述 | 验证                              |
| ---------------------- | --- | -- | ------------------------------- |
| 标题                     | 字符串 | -  | string.max_len: 200<br /> |
| 描述                     | 字符串 | -  | string.max_len: 500<br /> |
| 登录到 pw_button_text   | 字符串 | -  | string.max_len: 100<br /> |
| 验证 token_button_text | 字符串 | -  | string.max_len: 200<br /> |
| 不支持                    | 字符串 | -  | string.max_len: 500<br /> |
| 重试错误                   | 字符串 | -  | string.max_len: 500<br /> |




### 注册选项屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 用户名按钮文本 | 字符串 | -  | string.max_len: 200<br /> |
| 外部登录描述  | 字符串 | -  | string.max_len: 500<br /> |




### 注册组织屏幕文本



| 字段                      | 类型  | 描述 | 验证                              |
| ----------------------- | --- | -- | ------------------------------- |
| 标题                      | 字符串 | -  | string.max_len: 200<br /> |
| 描述                      | 字符串 | -  | string.max_len: 500<br /> |
| orgname-label           | 字符串 | -  | string.max_len: 200<br /> |
| 名字标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 姓氏标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 用户名标签                   | 字符串 | -  | string.max_len: 200<br /> |
| 电子邮件标签                  | 字符串 | -  | string.max_len: 200<br /> |
| 密码标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 密码确认标签                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_and_privacy_label | 字符串 | -  | string.max_len: 200<br /> |
| tos_确认                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_link_text         | 字符串 | -  | string.max_len: 200<br /> |
| 隐私链接文本                  | 字符串 | -  | string.max_len: 200<br /> |
| 保存按钮文本                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_confirm_and       | 字符串 | -  | string.max_len: 200<br /> |




### 注册用户屏幕文本



| 字段                      | 类型  | 描述 | 验证                              |
| ----------------------- | --- | -- | ------------------------------- |
| 标题                      | 字符串 | -  | string.max_len: 200<br /> |
| 描述                      | 字符串 | -  | string.max_len: 500<br /> |
| 描述_org_registration   | 字符串 | -  | string.max_len: 500<br /> |
| 名字标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 姓氏标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 电子邮件标签                  | 字符串 | -  | string.max_len: 200<br /> |
| 用户名标签                   | 字符串 | -  | string.max_len: 200<br /> |
| 语言标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 性别标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 密码标签                    | 字符串 | -  | string.max_len: 200<br /> |
| 密码确认标签                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_and_privacy_label | 字符串 | -  | string.max_len: 200<br /> |
| tos_确认                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_link_text         | 字符串 | -  | string.max_len: 200<br /> |
| 隐私链接文本                  | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本                 | 字符串 | -  | string.max_len: 200<br /> |
| 背面按钮文本                  | 字符串 | -  | string.max_len: 200<br /> |
| tos_confirm_and       | 字符串 | -  | string.max_len: 200<br /> |




### SelectAccountScreenText



| 字段                             | 类型  | 描述 | 验证                              |
| ------------------------------ | --- | -- | ------------------------------- |
| 标题                             | 字符串 | -  | string.max_len: 200<br /> |
| 描述                             | 字符串 | -  | string.max_len: 500<br /> |
| title_linking_进程             | 字符串 | -  | string.max_len: 200<br /> |
| 描述链接进程                         | 字符串 | -  | string.max_len: 500<br /> |
| 其他用户                           | 字符串 | -  | string.max_len: 500<br /> |
| 会话状态激活                         | 字符串 | -  | string.max_len: 100<br /> |
| session_state_activity       | 字符串 | -  | string.max_len: 100<br /> |
| user_must_be_member_of_org | 字符串 | -  | string.max_len: 500<br /> |




### 成功 LoginScreenText



| 字段      | 类型  | 描述                  | 验证                              |
| ------- | --- | ------------------- | ------------------------------- |
| 标题      | 字符串 | -                   | string.max_len: 200<br /> |
| 自动重定向描述 | 字符串 | 描述自动重定向的文本应在登录成功后进行 | string.max_len: 500<br /> |
| 重定向描述   | 字符串 | 描述重定向后窗口可以关闭的文本     | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -                   | string.max_len: 200<br /> |




### 用户名变更屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### 用户名更改屏幕文本



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 用户名标签   | 字符串 | -  | string.max_len: 200<br /> |
| 取消按钮文本  | 字符串 | -  | string.max_len: 100<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### VerifyMFAOTPScreenText



| 字段      | 类型  | 描述 | 验证                              |
| ------- | --- | -- | ------------------------------- |
| 标题      | 字符串 | -  | string.max_len: 200<br /> |
| 描述      | 字符串 | -  | string.max_len: 500<br /> |
| 代码标签    | 字符串 | -  | string.max_len: 200<br /> |
| 下一个按钮文本 | 字符串 | -  | string.max_len: 100<br /> |




### VerifyMFAU2FScreenText



| 字段            | 类型  | 描述 | 验证                              |
| ------------- | --- | -- | ------------------------------- |
| 标题            | 字符串 | -  | string.max_len: 200<br /> |
| 描述            | 字符串 | -  | string.max_len: 500<br /> |
| 验证 token_text | 字符串 | -  | string.max_len: 500<br /> |
| 不支持           | 字符串 | -  | string.max_len: 500<br /> |
| 重试错误          | 字符串 | -  | string.max_len: 500<br /> |






