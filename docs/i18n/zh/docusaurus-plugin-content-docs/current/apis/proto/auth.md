---
title: zitadel/auth.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)


## 作者服务 {#zitadelauthv1authservice}


### Healthz

> **rpc** Healthz([HealthzRequest](#healthzrequest)) [HealthzResponse](#healthzresponse)

    GET: /healthz


### 获取支持语言

> **rpc** GetSupportedLanguages([GetSupportedLanguagesRequest](#getsupportedlanguagesrequest)) [GetSupportedLanguagesResponse](#getsupportedlanguagesresponse)

返回默认语言

    GET：/language


### GetMyUser

> **rpc** GetMyUser([GetMyUserRequest](#getmyuserrequest)) [GetMyUserResponse](#getmyuserresponse)

返回完整的蓝色用户

    GET: /users/me


### 移除我的用户

> **rpc** RemoveMyUser([RemoveMyUserRequest](#removemyuserrequest) [RemoveMyUserResponse](#removemyuserresponse)

更改用户状态以删除

    删除: /users/我


### ListMyUser更改

> **rpc** ListMyUserChanges([ListMyUserChangesRequest](#listmyuserchangesrequest)) [ListMyUserChangesResponse](#listmyuserchangesresponse)

返回授权用户的历史记录(每个事件)

    POST: /users/me/changes/_search


### ListMyUserSessions

> **rpc** ListMyUserSessions([ListMyUserSessionsRequest](#listmyusersessionsrequest)) [ListMyUserSessionsResponse](#listmyusersessionsresponse)

返回当前用户代理授权用户的用户会话

    POST: /users/me/sessions/_search


### ListMyMetadata

> **rpc** ListMyMetadata([ListMyMetadataRequest](#listmymetadatarequest)) [ListMyMetadataResponse](#listmymetadataresponse)

返回授权用户的用户元数据

    POST: /users/me/metadata/_search


### GetMyMetadata

> **rpc** GetMyMetadata([GetMyMetadataRequest](#getmymetadatarequest)) [GetMyMetadataResponse](#getmymetadataresponse)

按授权用户的密钥返回用户元数据

    获取：/users/me/metadata/{key}


### ListMyrefresfreshTokens

> **rpc** ListMyRefresfreshTokens([ListMyRefreshTokensRequest](#listmyrefreshtokensrequest)) [ListMyRefreshTokensResponse](#listmyrefreshtokensresponse)

返回授权用户的刷新令牌

    POST: /users/me/tokens/refresh/_search


### RevokeMyRefreshToken

> **rpc** RevokeMyRefreshToken([RevokeMyRefreshTokenRequest](#revokemyrefreshtokenrequest)) [RevokeMyRefreshTokenResponse](#revokemyrefreshtokenresponse)

通过其(token) id撤销授权用户的单个刷新令牌

    DELETE: /users/me/tokens/refresh/{id}


### 吊销AllMyrefresfreshTokens

> **rpc** RovokeAllMyrefresfreshTokens([RevokeAllMyRefreshTokensRequest](#revokeallmyrefreshtokensrequest) [RvokeAllMyRefreshTokensResponse](#revokeallmyrefreshtokensresponse)

撤销授权用户的所有刷新令牌

    POST: /users/me/tokens/refresh/_revoke_all


### UpdateMyUsername

> **rpc** UpdateMyUserName([UpdateMyUserNameRequest](#updatemyusernamerequest)) [UpdateMyUserNameResponse](#updatemyusernameresponse)

更改授权用户的用户名

    PUT: /users/me/用户名


### GetMyPasswordComplexityPolicy

> **rpc** GetMyPasswordComplexityPolicy([GetMyPasswordComplexityPolicyRequest](#getmypasswordcomplexitypolicyrequest)) [GetMyPasswordComplexityPolicyResponse](#getmypasswordcomplexitypolicyresponse)

返回我的组织的密码复杂性政策 此政策定义了密码应该是什么样的

    GET: /policies/passwords/complete


### 更新 MyPassword

> **rpc** UpdateMyPassword([UpdateMyPasswordRequest](#updatemypasswordrequest)) [UpdateMyPasswordResponse](#updatemypasswordresponse)

更改授权用户的密码

    PUT: /users/me/密码


### GetMyProfile

> **rpc** GetMyProfile([GetMyProfileRequest](#getmyprofilerequest)) [GetMyProfileResponse](#getmyprofileresponse)

返回授权用户的配置文件信息

    获取：/users/me/profile


### 更新 MyProfile

> **rpc** UpdateMyProfile([UpdateMyProfileRequest](#updatemyprofilerequest)) [UpdateMyProfileResponse](#updatemyprofileresponse)

更改授权用户的个人资料信息

    PUT: /users/me/profile


### GetMyEmail

> **rpc** GetMyEmail([GetMyEmailRequest](#getmyemailrequest)) [GetMyEmailResponse](#getmyemailresponse)

返回授权用户的电子邮件地址

    GET: /users/me/email


### SetMyEmail

> **rpc** SetMyEmail([SetMyEmailRequest](#setmyemailrequest)) [SetMyEmailResponse](#setmyemailresponse)

更改授权用户的电子邮件地址 发送电子邮件给给给定的地址以验证它

    PUT: /users/me/email


### 验证 yMyEmail

> **rpc** VerifyMyemail([VerifyMyemailRequest](#verifymyemailrequest)) [VerifyMyemailResponse](#verifymyemailresponse)

将电子邮件地址设置为已验证

    POST： /users/me/email/_验证


### 重新发送MyEmail验证

> **rpc** ResendMyEmailVerification([ResendMyEmailVerificationRequest](#resendmyemailverificationrequest) [ResendMyEmailVerificationResponse](#resendmyemailverificationresponse)

向最后一个给定的地址发送新的电子邮件以验证它

    POST: /users/me/email/_resend_certification


### GetMyPhone

> **rpc** GetMyPhone([GetMyPhoneRequest](#getmyphonerequest)) [GetMyPhoneResponse](#getmyphoneresponse)

返回授权用户的电话号码

    获取：/users/me/电话


### SetMyPhone

> **rpc** SetMyPhone([SetMyPhoneRequest](#setmyphonerequest)) [SetMyPhoneResponse](#setmyphoneresponse)

设置授权用户的手机号 发送短信给验证码

    PUT: /users/me/电话


### 验证 yMyPhone

> **rpc** VerifyMyPhone([VerifyMyPhoneRequest](#verifymyphonerequest)) [VerifyMyPhoneResponse](#verifymyphoneresponse)

将电话号码设置为验证

    POST: /users/me/phone/_验证


### 重新发送MyPhone验证

> **rpc** ResendMyPhoneVerification([ResendMyPhoneVerificationRequest](#resendmyphoneverificationrequest) [ResendMyPhoneVerificationResponse](#resendmyphoneverificationresponse)

将短信重新发送到最后一个给定的电话号码，以验证它

    POST: /users/me/phone/_resend_certification


### RemoveMyPhone

> **rpc** RemoveMyPhone([RemoveMyPhoneRequest](#removemyphonerequest) [RemoveMyPhoneResponse](#removemyphoneresponse)

移除授权用户的电话号码

    DELETE: /users/me/电话


### 移除MyAvatar

> **rpc** RemoveMyAvatar([RemoveMyAvatarRequest](#removemyavatarrequest) [RemoveMyAvatarResponse](#removemyavatarresponse)

删除我的头像

    删除： /users/me/头像


### ListMyLinkedIDPs

> **rpc** ListMyLinkedIDPs([ListMyLinkedIDPsRequest](#listmylinkedidpsrequest)) [ListMyLinkedIDPsResponse](#listmylinkedidpsresponse)

返回所有关联身份提供商的列表(社交登录，例如 Google, Microsoft, AD, etc.)

    POST: /users/me/idps/_search


### RemoveMyLinkedIDP

> **rpc** RemoveMyLinkedIDP([RemoveMyLinkedIDPRequest](#removemylinkedidprequest)) [RemoveMyLinkedIDPResponse](#removemylinkedidpresponse)

删除链接的身份提供者(社交登录，例如 Google, Microsoft, AD, etc.)

    DELETE: /users/me/idps/{idp_id}/{linked_user_id}


### ListMyAuthfactors

> **rpc** ListMyAuthFactors([ListMyAuthersRequest](#listmyauthfactorsrequest)) [ListMyAuthactorsResponse](#listmyauthfactorsresponse)

返回所有配置的身份验证因子(第二和多)

    POST: /users/me/auth_factors/_search


### 添加MyAuthFactorOTP

> **rpc** AddMyAuthFactorOTP([AddMyAuthFactorOTPRequest](#addmyauthfactorotprequest)) [AddMyAuthFactorOTPResponse](#addmyauthfactorotpresponse)

向授权用户添加一个新的 OTP (一次密码) 第二个因子 每个用户只能配置一个 OTP

    POST: /users/me/auth_factors/otp


### 验证 yMyAuthFactorOTP

> **rpc** VerifyMyAuthFactorOTP([VerifyMyAuthFactorOTPRequest](#verifymyauthfactorotprequest)) [VerifyMyAuthFactorOTPResponse](#verifymyauthfactorotpresponse)

验证最后添加的 OTP (一次密码)

    POST： /users/me/auth_factors/otp/_验证


### RemoveMyAuthers FactorOTP

> **rpc** RemoveMyAuthers FactorOTP([RemoveMyAuthorOTPRequest](#removemyauthfactorotprequest) [RemoveMyAuthers FactorOTPResponse](#removemyauthfactorotpresponse)

已删除已配置的 OTP (一次密码) 系数

    DELETE: /users/me/auth_factors/otp


### AddMyAuthFactorU2F

> **rpc** AddMyAuthFactorU2F([AddMyAuthFactorU2FRequest](#addmyauthfactoru2frequest)) [AddMyAuthFactorU2FResponse](#addmyauthfactoru2fresponse)

向授权用户添加一个新的 U2F (通用第二因素) 可以配置多个U2Fs

    POST: /users/me/auth_factors/u2f


### VerifyMyAuthFactorU2F

> **rpc** VerifyMyAuthFactorU2F([VerifyMyAuthFactorU2FRequest](#verifymyauthfactoru2frequest)) [VerifyMyAuthFactorU2FResponse](#verifymyauthfactoru2fresponse)

验证最后添加的 U2F (通用第二因素)

    POST： /users/me/auth_factors/u2f/_验证


### RemoveMyAuthers FactorU2F

> **rpc** RemoveMyAuthor FactorU2F([RemoveMyAuthor FactorU2FRequest](#removemyauthfactoru2frequest) [RemoveMyAuthor FactorU2FResponse](#removemyauthfactoru2fresponse)

从授权用户删除U2F认证

    DELETE: /users/me/auth_factors/u2f/{token_id}


### ListMyPasswordless

> **rpc** ListMyPasswordless([ListMyPasswordlessRequest](#listmypasswordlessrequest)) [ListMyPasswordlessment](#listmypasswordlessresponse)

返回授权用户的所有已配置的无密码身份验证器

    POST: /users/me/passwordless/_search


### 添加MyPasswords

> **rpc** AddMyPasswordless([AddMyPasswordlessRequest](#addmypasswordlessrequest)) [AddMyPasswordlessment](#addmypasswordlessresponse)

向授权用户添加一个新的无密码身份验证器 可以配置多个无密码身份验证程序

    POST: /users/me/passwordless


### 添加MyPasswordlessLess链接

> **rpc** AddMyPasswordlessLink([AddMyPasswordLessLinkRequest](#addmypasswordlesslinkrequest) [AddMyPasswordLinkResponse](#addmypasswordlesslinkresponse)

向授权的用户添加一个新的无密码认证链接并直接返回 此链接允许用户注册一个新设备，如果当前无密码设备是所有平台身份验证器 e。 。用户已经注册 Windows Hello 并想要在 iPhone 上注册 Facebook

    POST: /users/me/passwordless/_link


### SendMyPasswordlesslink

> **rpc** SendMyPasswordlessLink([SendMyPasswordlessLinkRequest](#sendmypasswordlesslinkrequest) [SendMyPasswordlessLinkResponse](#sendmypasswordlesslinkresponse)

向授权的用户添加一个新的无密码认证链接，并将其发送到注册的电子邮件地址 此链接使用户能够注册一个新的设备，如果当前的无密码设备是所有平台身份验证器 e。 。用户已经注册 Windows Hello 并想要在 iPhone 上注册 Facebook

    POST: /users/me/passwordless/_send_link


### 验证 yMyPasswordless

> **rpc** VerifyMyPasswordless([VerifyMyPasswordlessRequest](#verifymypasswordlessrequest)) [VerifyMyPasswordlessment](#verifymypasswordlessresponse)

验证最后添加的无密码配置

    POST: /users/me/passwordless/_验证


### 移除您的密码

> **rpc** RemoveMyPasswordless([RemoveMyPasswordlessRequest](#removemypasswordlessrequest)) [RemoveMyPasswordlessment](#removemypasswordlessresponse)

从授权用户删除无密码配置

    删除: /users/me/password/{token_id}


### ListMyUserranges

> **rpc** ListMyUserGrants([ListMyUserGrantsRequest](#listmyusergrantsrequest)) [ListMyUserGrantsResponse](#listmyusergrantsresponse)

返回授权用户的所有用户授予(授权)

    POST： /usergrants/me/_search


### ListMyProjectOrgs

> **rpc** ListMyProjectOrgs([ListMyProjectOrgsRequest](#listmyprojectorgsrequest) [ListMyProjectOrgsResponse](#listmyprojectorgsresponse)

返回授权用户在请求的项目中拥有用户授权(授权)的组织列表

    POST: /global/projectorgs/_search


### ListMyZitadelPermissions

> **rpc** ListMyZitadelPermissions([ListMyZitadelPermissionsRequest](#listmyzitadelpermissionsrequest)) [ListMyZitadelPermissionsResponse](#listmyzitadelpermissionsresponse)

返回授权用户基于他的管理角色在 ZITADEL中拥有的权限 (例如ORG_OWNER)

    POST: /permissions/zitadel/me/_search


### ListMyProject权限

> **rpc** ListMyProjectPermissions([ListMyProjectPermissionsRequest](#listmyprojectpermissionsrequest)) [ListMyProjectPermissionsResponse](#listmyprojectpermissionsresponse)

返回授权用户和项目的角色列表

    POST: /permissions/me/_search


### 邮件列表成员

> **rpc** ListMyMemberships([ListMyMembership Request](#listmymembershipsrequest)) [ListMyMembershipsResponse](#listmymembershipsresponse)

显示我的用户在 ZITADEL(ZITADEL管理器) 中拥有的所有权限 应该始终设定。 服务设置了默认限制

    POST: /memberships/me/_search


### GetMyLabelPolicy

> **rpc** GetMyLabelPolicy([GetMyLabelPolicyRequest](#getmylabelpolicyrequest)) [GetMyLabelPolicyResponse](#getmylabelpolicyresponse)

返回当前组织的标签策略

    获取：/policies/label


### GetMyPrivacyPolicy

> **rpc** GetMyPrivacyPolicy([GetMyPrivacyPolicyRequest](#getmyprivacypolicyrequest)) [GetMyPrivacyPolicyResponse](#getmyprivacypolicyresponse)

返回当前组织的隐私政策

    获取：/policies/privacy







## 留言


### AddMyAuthFactorOTPRequest
这是一个空请求




### AddMyAuthFactorOTPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 网址   | 字符串                      | -  |    |
| 密文   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddMyAuthFactorU2FRequest
这是一个空请求




### AddMyAuthFactorU2FResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 密钥   | zitadel.user.v1.WebAuthNKey | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails    | -  |    |




### 添加MyPasswordlessLinkRequest
这是一个空请求




### 添加MyPasswordlessLinkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 链接   | 字符串                      | -  |    |
| 过期时间 | google.protobuf.Duration | -  |    |




### 添加MyPasswordless请求
这是一个空请求




### AddMyPasswordlessment



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 密钥   | zitadel.user.v1.WebAuthNKey | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails    | -  |    |




### BulkRemoveMyMetadataRequest



| 字段 | 类型     | 描述 | 验证                                                                              |
| -- | ------ | -- | ------------------------------------------------------------------------------- |
| 密钥 | 重复的字符串 | -  | 重复.items.string.min_len: 1<br /> 重复.items.string.max_len: 200<br /> |




### BulkRemoveMyMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### BulkSetMyMetadataRequest



| 字段  | 类型                                   | 描述 | 验证 |
| --- | ------------------------------------ | -- | -- |
| 元数据 | 重复 BulkSetMyMetadataRequest.Metadata | -  |    |




### BulkSetMyMetadataRequest.Metadata



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### BulkSetMyMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### GetMyEmail请求
这是一个空请求




### GetMyEmailResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| 电子邮件地址 | zitadel.user.v1.Email    | -  |    |




### GetMyLabelPolicyRequest
这是一个空请求




### GetMyLabelPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LabelPolicy | -  |    |




### GetMyMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetMyMetadataResponse



| 字段  | 类型                           | 描述 | 验证 |
| --- | ---------------------------- | -- | -- |
| 元数据 | zitadel.metadata.v1.Metadata | -  |    |




### GetMyPasswordComplexityPolicyRequest
这是一个空请求




### GetMyPasswordComplexityPolicyResponse



| 字段 | 类型                                         | 描述 | 验证 |
| -- | ------------------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.PasswordComplexityPolicy | -  |    |




### GetMyPhoneRequest
这是一个空请求




### GetMyPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 电话   | zitadel.user.v1.Phone    | -  |    |




### GetMyPrivacyPolicyRequest
这是一个空请求




### GetMyPrivacyPolicyResponse



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PrivacyPolicy | -  |    |




### GetMyProfileRequest
这是一个空请求




### GetMyProfileResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 个人信息 | zitadel.user.v1.Profile  | -  |    |




### GetMyUserRequest
这是一个空请求 从token-header 读取请求参数




### GetMyUserResponse



| 字段   | 类型                   | 描述 | 验证 |
| ---- | -------------------- | -- | -- |
| 用户   | zitadel.user.v1.User | -  |    |
| 上次登录 | 时间戳                  | -  |    |




### GetSupportedLanguagesRequest
这是一个空请求




### GetSupportedLanguagesResponse
这是一个空的响应


| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 语言 | 重复的字符串 | -  |    |




### HealthzRequest
这是一个空请求




### HealthzResponse
这是一个空的响应




### ListMyAuthersRequest
这是一个空请求




### ListMyAuthersResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 结果 | 重复 zitadel.user.v1.AuthFactor | -  |    |




### ListMyLinkedIDPsRequest



| 字段 | 类型                   | 描述      | 验证 |
| -- | -------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery | 列出限制和顺序 |    |




### ListMyLinkedIDPsResponse



| 字段   | 类型                            | 描述 | 验证 |
| ---- | ----------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails        | -  |    |
| 结果   | 重复 zitadel.idp.v1.IDPUserLink | -  |    |




### 列表MyMembershipRequest



| 字段 | 类型                                 | 描述      | 验证 |
| -- | ---------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery               | 结果排序的字段 |    |
| 查询 | 重复 zitadel.user.v1.MembershipQuery | 客户寻找的标准 |    |




### ListMyMembershipsResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复zitadel.user.v1.会员资格 | -  |    |




### ListMyMetadata请求



| 字段 | 类型                                   | 描述 | 验证 |
| -- | ------------------------------------ | -- | -- |
| 查询 | zitadel.v1.ListQuery                 | -  |    |
| 查询 | 重复 zitadel.metadata.v1.MetadataQuery | -  |    |




### ListMyMetadataResponse



| 字段   | 类型                              | 描述 | 验证 |
| ---- | ------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails          | -  |    |
| 结果   | 重复 zitadel.metadata.v1.Metadata | -  |    |




### ListMyPasswordlessRequest
这是一个空请求




### ListMyPasswordlessment



| 字段 | 类型                               | 描述 | 验证 |
| -- | -------------------------------- | -- | -- |
| 结果 | 重复 zitadel.user.v1.WebAuthNToken | -  |    |




### ListMyProjectOrgsRequest



| 字段 | 类型                         | 描述      | 验证 |
| -- | -------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery       | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.org.v1.OrgQuery | 客户寻找的标准 |    |




### ListMyProjectOrgsResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复 zitadel.org.v1.Org  | -  |    |




### ListMyProjectPermissionsRequest
这是一个空请求




### ListMyProjectPermissionsResponse



| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 结果 | 重复的字符串 | -  |    |




### ListMyRefresfreshTokensRequest
这是一个空请求




### ListMyRefreshTokensResponse



| 字段   | 类型                              | 描述 | 验证 |
| ---- | ------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails          | -  |    |
| 结果   | 重复 zitadel.user.v1.RefreshToken | -  |    |




### ListMyUserChangesRequest



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 查询 | zitadel.change.v1.ChangeQuery | -  |    |




### ListMyUserChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### ListMyUserGrantsRequest



| 字段 | 类型                   | 描述      | 验证 |
| -- | -------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery | 列出限制和顺序 |    |




### ListMyUserGrantsResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复的用户授权                | -  |    |




### ListMyUserSessionsRequest
这是一个空请求




### ListMyUserSessionsResponse



| 字段 | 类型                         | 描述 | 验证 |
| -- | -------------------------- | -- | -- |
| 结果 | 重复 zitadel.user.v1.Session | -  |    |




### ListMyZitadelPermissionsRequest
这是一个空请求




### ListMyZitadelPermissionsResponse



| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 结果 | 重复的字符串 | -  |    |




### RemoveMyAuthers FactorOTP请求
这是一个空请求




### RemoveMyAuthers FactorOTP响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveMyAuthers FactorU2FRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveMyAuthers FactorU2FResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除MyAvatarRequest
这是一个空请求




### RemoveMyAvatarResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveMyLinkedIDPRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 链接用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveMyLinkedIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除 MyMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除 MyMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除MyPasswordless请求



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除 MyPasswordlessment



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除MyPhone请求
这是一个空请求




### RemoveMyPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveMyUserRequest
这是一个空请求 从token-header 读取请求参数




### RemoveMyUserResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResendMyEmailVerification请求
这是一个空请求




### ResendMyEmailVerification响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResendMyPhoneVerification请求
这是一个空请求




### ResendMyPhoneVerificationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 撤销AllMyrefreshTokensRequest
这是一个空请求




### RevokeAllMyRefreshTokensResponse
这是一个空的响应




### 吊销MyRefresfreshTokenRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RevokeMyRefreshTokenResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SendMyPasswordlessLinkRequest
这是一个空请求




### SendMyPasswordlessLinkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetMyEmailRequest



| 字段     | 类型  | 描述 | 验证                             |
| ------ | --- | -- | ------------------------------ |
| 电子邮件地址 | 字符串 | -  | string.email: true<br /> |




### SetMyEmailResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetMyMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### SetMyMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetMyPhoneRequest



| 字段 | 类型  | 描述 | 验证                                                                                        |
| -- | --- | -- | ----------------------------------------------------------------------------------------- |
| 电话 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 50<br /> string.prefix: +<br /> |




### SetMyPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateMyPassword请求



| 字段  | 类型  | 描述 | 验证                                                             |
| --- | --- | -- | -------------------------------------------------------------- |
| 旧密码 | 字符串 | -  | string.min_len: 1<br /> string.max_bytes: 70<br /> |
| 新密码 | 字符串 | -  | string.min_len: 1<br /> string.max_bytes: 70<br /> |




### UpdateMyPasswordResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 MyProfileRequest



| 字段   | 类型                     | 描述 | 验证                                                            |
| ---- | ---------------------- | -- | ------------------------------------------------------------- |
| 名字   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 姓名   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 昵称   | 字符串                    | -  | string.max_len: 200<br />                               |
| 显示名称 | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 首选语言 | 字符串                    | -  | string.max_len: 10<br />                                |
| 两性平等 | zitadel.user.v1.Gender | -  |                                                               |




### 更新 MyProfileResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateMyUserNameRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### UpdateMyUserNameResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 用户授权



| 字段       | 类型     | 描述 | 验证 |
| -------- | ------ | -- | -- |
| org_id   | 字符串    | -  |    |
| 项目ID     | 字符串    | -  |    |
| 用户ID     | 字符串    | -  |    |
| 角色       | 重复的字符串 | -  |    |
| org_name | 字符串    | -  |    |
| grant_id | 字符串    | -  |    |




### 验证MyAuthFactorOTP请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 代码 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### VerifyMyAuthFactorOTPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 验证 yMyAuthFactorU2FRequest



| 字段 | 类型                                   | 描述 | 验证                  |
| -- | ------------------------------------ | -- | ------------------- |
| 验证 | zitadel.user.v1.WebAuthNVerification | -  | 必填：true<br /> |




### VerifyMyAuthFactorU2FResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 验证 yMyEmailRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 代码 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 验证 yMyEmailResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 验证MyMyPasswordlessRequest



| 字段 | 类型                                   | 描述 | 验证                  |
| -- | ------------------------------------ | -- | ------------------- |
| 验证 | zitadel.user.v1.WebAuthNVerification | -  | 必填：true<br /> |




### 验证 yMyPasswordlessness 响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 验证 yMyPhoneRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 代码 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### VerifyMyPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |






