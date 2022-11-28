---
title: zitadel/admin.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)


## 管理服务 {#zitadeladminv1adminservice}


### Healthz

> **rpc** Healthz([HealthzRequest](#healthzrequest)) [HealthzResponse](#healthzresponse)

指示ZITADEL是否正在运行。 一旦ZITADEL启动，它即作出回应

    GET: /healthz


### 获取支持语言

> **rpc** GetSupportedLanguages([GetSupportedLanguagesRequest](#getsupportedlanguagesrequest)) [GetSupportedLanguagesResponse](#getsupportedlanguagesresponse)

返回默认语言

    GET：/language


### SetDefaultLanguage

> **rpc** 设置默认语言([设置默认语言请求](#setdefaultlanguagerequest) [设置默认语言响应](#setdefaultlanguageresponse)

设置默认语言

    PUT: /languages/default/{language}


### GetDefaultLanguage

> **rpc** GetDefaultLanguage([GetDefaultLanguageRequest](#getdefaultlanguagerequest)) [GetDefaultLanguageResponse](#getdefaultlanguageresponse)

设置默认语言

    获取：/languages/默认


### GetMyInstance

> **rpc** GetMyInstance([GetMyInstanceRequest](#getmyinstancerequest)) [GetMyInstanceResponse](#getmyinstanceresponse)

返回实例的详细信息

    GET: /instances/me


### ListInstanceDomains

> **rpc** ListInstanceDomains([ListInstanceDomainsRequest](#listinstancedomainsrequest)) [ListInstanceDomainsResponse](#listinstancedomainsresponse)

返回实例的域

    POST: /domains/_search


### ListSecretorators

> **rpc** ListSecretGenerators([ListSecretGeneratorsRequest](#listsecretgeneratorsrequest)) [ListSecretGeneratorsResponse](#listsecretgeneratorsresponse)

设置默认语言

    POST： /secretGenerators/_search


### GetSecretGenerator

> **rpc** GetSecretGenerator([GetSecretGeneratorRequest](#getsecretgeneratorrequest)) [GetSecretGeneratorResponse](#getsecretgeneratorresponse)

按类型获取秘密生成器 (例如密码重置代码)

    GET: /secretGenerators/{generator_type}


### 更新秘书生成器

> **rpc** UpdateSecretGenerator([UpdateSecretGeneratorRequest](#updatesecretgeneratorrequest)) [UpdateSecretGeneratorResponse](#updatesecretgeneratorresponse)

更新秘密生成器配置

    PUT: /secretGenerators/{generator_type}


### GetSMTPConfig

> **rpc** GetSMTPConfig([GetSMTPConfigRequest](#getsmtpconfigrequest)) [GetSMTPConfigResponse](#getsmtpconfigresponse)

获取系统smtp配置

    GET: /smtp


### AddSMTPConfig

> **rpc** AddSMTPConfig([AddSMTPConfigRequest](#addsmtpconfigrequest)) [AddSMTPConfigResponse](#addsmtpconfigresponse)

添加系统smtp配置

    POST： /smtp


### 升级SMTP配置

> **rpc** UpdateSMTPConfig([UpdateSMTPConfigRequest](#updatesmtpconfigrequest)) [UpdateSMTPConfigResponse](#updatesmtpconfigresponse)

更新系统smtp配置

    PUT: /smtp


### 更新 SMTPConfigPassword

> **rpc** UpdateSMTPConfigPassworword([UpdateSMTPConfigPasswordRequest](#updatesmtpconfigpasswordrequest) [UpdateSMTPPConfigPasswordResponse](#updatesmtpconfigpasswordresponse)

更新主机的系统smtp配置密码

    PUT: /smtp/密码


### RemoveSMTPConfig

> **rpc** RemoveSMTPConfig([RemoveSMTPConfigRequest](#removesmtpconfigrequest)) [RemoveSMTPConfigResponse](#removesmtpconfigresponse)

删除系统smtp配置

    DELETE: /smtp


### ListSMSproviders

> **rpc** ListSMSProviders([ListSMSProvidersRequest](#listsmsprovidersrequest)) [ListSMSProvidersResponse](#listsmsprovidersresponse)

列出短信提供者配置

    POST: /sms/_search


### GetSMSProvider

> **rpc** GetSMSProvider([GetSMSProviderRequest](#getsmsproviderrequest)) [GetSMSProviderResponse](#getsmsproviderresponse)

获取短信提供商

    GET: /sms/{id}


### AddSMSProviderTwilio

> **rpc** AddSMSProviderTwilio([AddSMSProviderTwilioRequest](#addsmsprovidertwiliorequest)) [AddSMSProviderTwilioResponse](#addsmsprovidertwilioresponse)

添加 twilio sms 提供商

    POST： /sms/twilio


### 更新SMSProviderTwilio

> **rpc** UpdateSMSProviderTwilio([UpdateSMSProviderTwilioRequest](#updatesmsprovidertwiliorequest) [UpdateSMSProviderTwilioResponse](#updatesmsprovidertwilioresponse)

更新 twilio sms 提供商

    PUT: /sms/twilio/{id}


### 更新 SMSProviderTwilioToken

> **rpc** UpdateSMSProviderTwilioToken([UpdateSMSProviderTwilioTokenRequest](#updatesmsprovidertwiliotokenrequest)) [UpdateSMSProviderTwilioTokenResponse](#updatesmsprovidertwiliotokenresponse)

更新 twilio sms 提供者令牌

    PUT: /sms/twilio/{id}/token


### ActivateSMSProvider

> **rpc** ActivateSMSProvider([ActivateSMSProviderRequest](#activatesmsproviderrequest)) [ActivateSMSProviderResponse](#activatesmsproviderresponse)

激活短信提供商

    POST: /sms/{id}/_activity


### DeactivateSMSProvider

> **rpc** DeactivateSMSProvider([DeactivateSMSProviderRequest](#deactivatesmsproviderrequest)) [DeactivateSMSProviderResponse](#deactivatesmsproviderresponse)

停用短信提供商

    POST: /sms/{id}/_停用


### RemoveSMSProvider

> **rpc** RemoveSMSProvider([RemoveSMSProviderRequest](#removesmsproviderrequest)) [RemoveSMSProviderResponse](#removesmsproviderresponse)

删除短信提供者令牌

    删除: /sms/{id}


### GetOIDC设置

> **rpc** GetOIDCSettings([GetOIDCSettingsRequest](#getoidcsettingsrequest)) [GetOIDCSettingsResponse](#getoidcsettingsresponse)

获取 OIDC 设置 (例如令牌有效期等)

    GET: /settings/oidc


### AddOIDC设置

> **rpc** AddOIDCSettings([AddOIDCSettingsRequest](#addoidcsettingsrequest)) [AddOIDCSettingsResponse](#addoidcsettingsresponse)

添加 oidc 设置 (eg 令牌有效期等)

    POST： /settings/oidc


### 更新 OIDC设置

> **rpc** UpdateOIDCSettings([UpdateOIDCSettingsRequest](#updateoidcsettingsrequest)) [UpdateOIDCSettingsResponse](#updateoidcsettingsresponse)

更新 oidc 设置 (eg 令牌有效期等)

    PUT: /settings/oidc


### GetFileSystemNotification提供商

> **rpc** GetFileSystemNotificationProvider([GetFileSystemNotificationProviderRequest](#getfilesystemnotificationproviderrequest) [GetFileSystemNotificationProviderResponse](#getfilesystemnotificationproviderresponse)

获取文件系统通知提供商

    GET：/notification/provider/文件


### GetLog通知提供商

> **rpc** GetLogNotificationProvider([GetLogNotificationProviderRequest](#getlognotificationproviderrequest) [GetLogNotificationProviderResponse](#getlognotificationproviderresponse)

获取日志通知提供商

    GET：/notification/provider/日志


### GetOrgByID

> **rpc** GetOrgByID([GetOrgByIDRequest](#getorgbyidrequest)) [GetOrgByIDResponse](#getorgbyidresponse)

通过ID返回组织

    GET: /orgs/{id}


### IsorgUnique

> **rpc** IsOrgUnique([IsOrgUniqueRequest](#isorguniquerequest)) [IsOrgUniqueResponse](#isorguniqueresponse)

检查一个组织是否存在给定的参数

    GET: /orgs/_is_独一无二的


### SetDefaultOrg

> **rpc** SetDefaultOrg([SetDefaultOrgRequest](#setdefaultorgrequest)) [SetDefaultOrgResponse](#setdefaultorgresponse)

设置默认的org

    PUT: /orgs/default/{org_id}


### GetDefaultOrg

> **rpc** GetDefaultOrg([GetDefaultOrgRequest](#getdefaultorgrequest)) [GetDefaultOrgResponse](#getdefaultorgresponse)

设置默认的org

    GET: /orgs/default


### 列表组织

> **rpc** ListOrgs([ListOrgsRequest](#listorgsrequest)) [ListOrgsResponse](#listorgsresponse)

返回符合请求的所有组织 所有查询都需要匹配 (AND)

    POST： /orgs/_search


### SetUpOrg

> **rpc** SetUpOrg([SetUpOrgRequest](#setuporgrequest)) [SetUpOrgResponse](#setuporgresponse)

创建一个新的.org和用户 并将用户添加到组织的成员为 ORG_OWNER

    POST： /orgs/_setup


### GetIDPByID

> **rpc** GetIDPByID([GetIDPByIDRequest](#getidpbyidrequest)) [GetIDPByIDResponse](#getidpbyidresponse)

返回 IAM 实例的身份提供者配置

    GET: /idps/{id}


### 列出国内流离失所者

> **rpc** ListIDers([ListIDersRequest](#listidpsrequest)) [ListIDersResponse](#listidpsresponse)

返回 IAM 实例的所有身份提供者配置

    POST: /idps/_search


### AddOIDCIDP

> **rpc** AddOIDCIDP([AddOIDCIDP请求](#addoidcidprequest)) [AddOIDCIDIDP响应](#addoidcidpresponse)

添加 IAM 实例的 oidc 身份提供者配置

    POST： /idps/oidc


### AddJWTIDP

> **rpc** AddJWTIDP ([AddJWTIDP Request](#addjwtidprequest)) [AddJWTIDP Response](#addjwtidpresponse)

添加 IAM 实例的 jwt 身份提供者配置

    POST： /idps/jwt


### 国内流离失所者更新

> **rpc** UpdateIDP ([UpdateIDS Request](#updateidprequest)) [UpdateIDS Response](#updateidpresponse)

更新指定的 idp 所有字段都已更新。 如果没有提供任何值，此字段之后将是空的。

    PUT: /idps/{idp_id}


### DeactivateIDP

> **rpc** DeactivateIDP([DeactivateIDPRequest](#deactivateidprequest)) [DeactivateIDPResponse](#deactivateidpresponse)

设置idp状态为IDP_STATE_INACTIVE 状态为IDP_STATE_ACTIVE

    POST: /idps/{idp_id}/_停用


### 重新激活IDP

> **rpc** 重新激活IDP([重新激活IDP请求](#reactivateidprequest)) [重新激活IDP响应](#reactivateidpresponse)

设置idp状态为IDP_STATE_ACTIVE 状态为IDP_STATE_INACTIVE

    POST: /idps/{idp_id}/_reactivation


### RemoveIDP

> **rpc** RemoveIDP([RemoveIDPRequest](#removeidprequest)) [RemoveIDPResponse](#removeidpresponse)

永久移除IDP

    DELETE: /idps/{idp_id}


### 更新 IDPOIDCconfig

> **rpc** UpdateIDPOIDCConfig([UpdateIDPOIDCConfigRequest](#updateidpoidcconfigrequest)) [UpdateIDPOIDCConfigResponse](#updateidpoidcconfigresponse)

更新指定idp 的 oidc 配置 所有字段都已更新。 如果没有提供任何值，此字段之后将是空的。

    PUT: /idps/{idp_id}/oidc_config


### 更新IDPJWTConfig

> **rpc** UpdateIDPJWTConfig([UpdatIDPJWTConfigRequest](#updateidpjwtconfigrequest)) [UpdatIDPJWTConfigResponse](#updateidpjwtconfigresponse)

更新指定idp 的 jwt 配置 所有字段都已更新。 如果没有提供任何值，此字段之后将是空的。

    PUT: /idps/{idp_id}/jwt_config


### GetOrgIAMPolicy

> **rpc** GetOrgIAMPolicy([GetOrgIAMPolicyRequest](#getorgiampolicyrequest)) [GetOrgIAMPolicyResponse](#getorgiampolicyresponse)

已废弃：请使用域策略代替 返回由 ZITADEL管理员定义的 Org IAM政策

    GET: /policies/orgiam


### UpdateOrgIAMPolicy

> **rpc** UpdateOrgIAMPolicy([UpdateOrgIAMPolicyRequest](#updateorgiampolicyrequest)) [UpdateOrgIAMPolicyResponse](#updateorgiampolicyresponse)

已废弃：请使用域策略代替 更新默认的 OrgIAM策略。 它影响到所有没有定制政策的组织

    PUT: /policies/orgiam


### GetCustomOrgIAMPolicy

> **rpc** GetCustomOrgIAMPolicy([GetCustomOrgIAMPolicyRequest](#getcustomorgiampolicyrequest) [GetCustomOrgIAMPolicyResponse](#getcustomorgiampolicyresponse)

已废弃：请使用域策略代替 返回自定义策略或缺省，如果未自定义的话。

    GET: /orgs/{org_id}/policies/orgiam


### AddCustomOrgIAMPolicy

> **rpc** AddCustomOrgIAMPolicy([AddCustomOrgIAMPolicyRequest](#addcustomorgiampolicyrequest)) [AddCustomOrgIAMPolicyResponse](#addcustomorgiampolicyresponse)

已废弃：请使用域策略代替 按照指定的自定义OrgIAM策略

    POST： /orgs/{org_id}/ policies/orgiam


### 更新CustomOrgIAMPolicy

> **rpc** UpdateCustomOrgIAMPolicy([UpdateCustomOrgIAMPolicyRequest](#updatecustomorgiampolicyrequest)) [UpdateCustomOrgIAMPolicyResponse](#updatecustomorgiampolicyresponse)

已废弃：请使用域策略代替 更新指定的自定义 OrgIAM策略

    PUT: /orgs/{org_id}/ policies/orgiam


### 重置CustomOrgIAMPolicyTo默认

> **rpc** ResetCustomOrgIAMPolicyToDefault([ResetCustomOrgIAMPolicyToDefaultRequest](#resetcustomorgiampolicytodefaultrequest) [ResetCustomOrgIAMPolicyToDefaultResponse](#resetcustomorgiampolicytodefaultresponse)

已废弃：请使用域策略代替 将组织的 org iam 政策重置为默认 ZITADEL将回退到 ZITADEL管理员定义的默认政策

    DELETE: /orgs/{org_id}/ policies/orgiam


### GetDomainPolicy

> **rpc** GetDomainPolicy([GetDomainPolicyRequest](#getdomainpolicyrequest)) [GetDomainPolicyResponse](#getdomainpolicyresponse)

返回由ZITADEL管理员定义的域策略

    GET：/policies/domain


### 更新域策略

> **rpc** UpdateDomainPolicy([UpdateDomainPolicyRequest](#updatedomainpolicyrequest)) [UpdateDomainPolicyResponse](#updatedomainpolicyresponse)

更新默认域策略。 它影响到所有没有定制政策的组织

    PUT: /policies/domain


### GetCustomDomainPolicy

> **rpc** GetCustomDomainPolicy([GetCustomDomainPolicyRequest](#getcustomdomainpolicyrequest)) [GetCustomDomainPolicyResponse](#getcustomdomainpolicyresponse)

返回自定义策略或缺省，如果没有自定义的话。

    获取：/orgs/{org_id}/ policies/domain


### 添加自定义域策略

> **rpc** AddCustomDomainPolicy([AddCustomDomainPolicyRequest](#addcustomdomainpolicyrequest)) [AddCustomDomainPolicyResponse](#addcustomdomainpolicyresponse)

定义指定的自定义域策略

    POST： /orgs/{org_id}/ policies/domain


### 更新自定义域策略

> **rpc** UpdateCustomDomainPolicy([UpdateCustomDomainPolicyRequest](#updatecustomdomainpolicyrequest)) [UpdateCustomDomainPolicyResponse](#updatecustomdomainpolicyresponse)

更新指定的自定义域策略

    PUT: /orgs/{org_id}/ policies/domain


### 重置自定义域政策To默认

> **rpc** ResetCustomDomainPolicyToDefault([ResetCustomDomainPolicyToDefaultRequest](#resetcustomdomainpolicytodefaultrequest) [ResetCustomDomainPolicyToDefaultResponse](#resetcustomdomainpolicytodefaultresponse)

将本组织的 org iam 政策重置为默认 ZITADEL将回退到 ZITADEL管理员定义的默认政策

    DELETE: /orgs/{org_id}/ policies/domain


### GetLabelPolicy

> **rpc** GetLabelPolicy([GetLabelPolicyRequest](#getlabelpolicyrequest)) [GetLabelPolicyResponse](#getlabelpolicyresponse)

返回由ZITADEL管理员定义的标签策略

    获取：/policies/label


### GetPreviewLabelPolicy

> **rpc** GetPreviewLabelPolicy([GetPreviewLabelPolicyRequest](#getpreviewlabelpolicyrequest)) [GetPreviewLabelPolicyResponse](#getpreviewlabelpolicyresponse)

返回由 ZITADEL管理员定义的预览标签策略

    GET: /policies/label/_preview


### 更新标签策略

> **rpc** UpdateLabelPolicy([UpdateLabelPolicyRequest](#updatelabelpolicyrequest)) [UpdateLabelPolicyResponse](#updatelabelpolicyresponse)

更新ZITADEL的默认标签政策 它影响到所有没有定制政策的组织

    PUT: /policies/label


### 激活标签策略

> **rpc** ActivateLabelPolicy([ActivateLabelPolicyRequest](#activatelabelpolicyrequest)) [ActivateLabelPolicyResponse](#activatelabelpolicyresponse)

激活标签政策的所有更改

    POST: /policies/label/_activity


### RemoveLabelPolicyLogo

> **rpc** RemoveLabelPolicyLogo([RemoveLabelPolicyLogoRequest](#removelabelpolicylogorequest)) [RemoveLabelPolicyLogoResponse](#removelabelpolicylogoresponse)

删除标签策略的标志

    DELETE: /policies/label/logo


### RemoveLabelPolicyLogoDark

> **rpc** RemoveLabelPolicyLogoDark([RemoveLabelPolicyLogoDarkRequest](#removelabelpolicylogodarkrequest)) [RemoveLabelPolicyLogoDarkResponse](#removelabelpolicylogodarkresponse)

删除标签策略的黑色标志

    DELETE: /policies/label/logo_den


### 移除LabelPolicy图标

> **rpc** RemoveLabelPolicyIcon([RemoveLabelPolicyIconRequest](#removelabelpolicyiconrequest)) [RemoveLabelPolicyIconResponse](#removelabelpolicyiconresponse)

删除标签策略的图标

    DELETE: /policies/label/图标


### RemoveLabelPolicyIconDark

> **rpc** RemoveLabelPolicyIconDark([RemoveLabelPolicyIconDarkRequest](#removelabelpolicyicondarkrequest) [RemoveLabelPolicyIconDarkResponse](#removelabelpolicyicondarkresponse)

删除标签策略的黑色标志

    DELETE: /policies/label/icon_dlar


### RemoveLabelPolicyFont

> **rpc** RemoveLabelPolicyFont([RemoveLabelPolicyFontRequest](#removelabelpolicyfontrequest)) [RemoveLabelPolicyFontResponse](#removelabelpolicyfontresponse)

移除标签策略的字体

    DELETE: /policies/label/font


### GetLogin策略

> **rpc** GetLoginPolicy([GetLoginPolicyRequest](#getloginpolicyrequest)) [GetLoginPolicyResponse](#getloginpolicyresponse)

返回ZITADEL管理员定义的登录策略

    GET: /policies/登录


### 更新登录策略

> **rpc** UpdateLoginPolicy([UpdateLoginPolicyRequest](#updateloginpolicyrequest)) [UpdateLoginPolicyResponse](#updateloginpolicyresponse)

更新ZITADEL的默认登录政策 它影响到所有没有定制政策的组织

    PUT: /policies/登录


### ListLoginPolicyIDPs

> **rpc** ListLoginPolicyIDPs([ListLoginPolicyIDPsRequest](#listloginpolicyidpsrequest)) [ListLoginPolicyIDPsResponse](#listloginpolicyidpsresponse)

返回与默认登录政策相关联的idps 。 由 ZITADEL管理员定义

    POST: /policies/login/idps/_search


### 添加IDPToLoginPolicy

> **rpc** AddIDPToLoginPolicy([AddIDPToLoginPolicyRequest](#addidptologinpolicyrequest)) [AddIDPToLoginPolicyResponse](#addidptologinpolicyresponse)

在默认登录策略中添加精选id。 它影响到所有没有定制政策的组织

    POST: /policies/login/idps


### RemoveIDPFromLoginPolicy

> **rpc** RemoveIDPFromLoginPolicy([RemoveIDPFromLoginPolicyRequest](#removeidpfromloginpolicyrequest)) [RemoveIDPFromLoginPolicyResponse](#removeidpfromloginpolicyresponse)

从默认登录策略中移除精选id。 它影响到所有没有定制政策的组织

    DELETE: /policies/login/idps/{idp_id}


### ListLoginPolicySecondFactors

> **rpc** ListLoginPolicySecondFactors([ListLoginPolicySecondFactorsRequest](#listloginpolicysecondfactorsrequest) [ListLoginPolicySecondFactorsResponse](#listloginpolicysecondfactorsresponse)

返回ZITADEL管理员定义的可用的第二个因素

    POST: /policies/login/second_factors/_search


### AddSecondFactorToLoginPolicy

> **rpc** AddSecondary FactorToLoginPolicy([AddSecondary FactorToLoginPolicyRequest](#addsecondfactortologinpolicyrequest) [AddsecondFactorToLoginPolicyResponse](#addsecondfactortologinpolicyresponse)

在默认登录策略中添加第二个因素。 它影响到所有没有定制政策的组织

    POST: /policies/login/second_factors


### 删除二级FactorFromLogin策略

> **rpc** RemoveSecondFromLoginPolicy([RemoveSecondFactorFromLoginPolicyRequest](#removesecondfactorfromloginpolicyrequest) [RemoveSecondFromLoginPolicyResponse](#removesecondfactorfromloginpolicyresponse)

从默认登录策略中删除第二个因素。 它影响到所有没有定制政策的组织

    DELETE: /policies/login/second_factors /{type}


### ListLoginPolicyMultiFactors

> **rpc** ListLoginPolicyMultiFactors([ListLoginPolicyMultiFactorsRequest](#listloginpolicymultifactorsrequest)) [ListLoginPolicyMultiFactorsResponse](#listloginpolicymultifactorsresponse)

返回ZITADEL管理员定义的可用的多因素

    POST: /policies/login/multi_factors/_search


### AddMultiFactorToLoginPolicy

> **rpc** AddMultiFactorToLoginPolicy([AddMultiFactorToLoginPolicyRequest](#addmultifactortologinpolicyrequest) [AddMultiFactorToLoginPolicyResponse](#addmultifactortologinpolicyresponse)

将多因子添加到默认登录策略中。 它影响到所有没有定制政策的组织

    POST: /policies/login/multi_factors


### 移除 MultiFactorFromLoginPolicy

> **rpc** RemoveMultiFactorFromLoginPolicy([RemoveMultiFactorFromLoginPolicyRequest](#removemultifactorfromloginpolicyrequest) [RemoveMultiFactorFromLoginPolicyResponse](#removemultifactorfromloginpolicyresponse)

从默认登录策略中删除多元素。 它影响到所有没有定制政策的组织

    DELETE: /policies/login/multi_factors /{type}


### GetPassword复杂性策略

> **rpc** GetPasswordComplexityPolicy([GetPasswordComplexityPolicyRequest](#getpasswordcomplexitypolicyrequest)) [GetPasswordComplexityPolicyResponse](#getpasswordcomplexitypolicyresponse)

返回由ZITADEL管理员定义的密码复杂策略

    GET: /policies/password/复杂度


### 更新密码复杂策略

> **rpc** UpdatePasswordComplexityPolicy([UpdatePasswordComplexityPolicyRequest](#updatepasswordcomplexitypolicyrequest)) [UpdatePasswordComplexityPolicyResponse](#updatepasswordcomplexitypolicyresponse)

更新ZITADEL的默认密码复杂性政策 它影响到所有没有定制政策的组织

    PUT: /policies/password/复杂度


### GetPasswordAgeing 策略

> **rpc** GetPasswordAgePolicy([GetPasswordAgePolicyRequest](#getpasswordagepolicyrequest)) [GetPasswordAgePolicyResponse](#getpasswordagepolicyresponse)

返回由ZITADEL管理员定义的密码年龄策略

    GET: /policies/password/age


### 更新密码年龄策略

> **rpc** UpdatePasswordAgePolicy([UpdatePasswordAgePolicyRequest](#updatepasswordagepolicyrequest)) [UpdatePasswordAgePolicyResponse](#updatepasswordagepolicyresponse)

更新ZITADEL的默认密码年龄政策 它影响到所有没有定制政策的组织

    PUT: /policies/password/age


### GetLockoutPolicy

> **rpc** GetLockoutPolicy([GetLockoutPolicyRequest](#getlockoutpolicyrequest)) [GetLockoutPolicyResponse](#getlockoutpolicyresponse)

返回ZITADEL管理员定义的锁定策略

    GET: /policies/lockout


### 更新 LockoutPolicy

> **rpc** UpdateLockoutPolicy([UpdateLockoutPolicyRequest](#updatelockoutpolicyrequest)) [UpdateLockoutPolicyResponse](#updatelockoutpolicyresponse)

更新ZITADEL的默认锁定政策 它影响到所有没有定制政策的组织

    PUT: /policies/password/锁定


### 获取隐私政策

> **rpc** GetPrivacyPolicy([GetPrivacyPolicyRequest](#getprivacypolicyrequest)) [GetPrivacyPolicyResponse](#getprivacypolicyresponse)

返回ZITADEL管理员定义的隐私政策

    获取：/policies/privacy


### 更新隐私政策

> **rpc** UpdatePrivacyPolicy([UpdatePrivacyPolicyRequest](#updateprivacypolicyrequest)) [UpdatePrivacyPolicyResponse](#updateprivacypolicyresponse)

更新ZITADEL的默认隐私政策 它会影响所有没有自定义策略的组织 变量 {{.Lang}} 可以设置为基于语言的不同链接

    PUT: /policies/privacy


### GetDefaultInitMessageText版

> **rpc** GetDefaultInitMessageText([GetDefaultInitMessageTextRequest](#getdefaultinitmessagetextrequest)) [GetDefaultInitMessageTextResponse](#getdefaultinitmessagetextresponse)

返回初始消息的默认文本(翻译文件)

    获取：/text/default/message/init/{language}


### GetCustomInitMessageText

> **rpc** GetCustomInitMessageText([GetCustomInitMessageTextRequest](#getcustominitmessagetextrequest) [GetCustomInitMessageTextResponse](#getcustominitmessagetextresponse)

返回初始消息的自定义文本 (在事件仓库中覆盖)

    获取：/text/message/init/{language}


### 设置默认InitMessageText

> **rpc** SetDefaultInitMessageText([SetDefaultInitMessageTextRequest](#setdefaultinitmessagetextrequest)) [SetDefaultInitMessageTextResponse](#setdefaultinitmessagetextresponse)

设置初始消息的默认自定义文本 它影响到所有组织，没有自定义的初始消息文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/init/{language}


### 重置自定义 InitMessageTextTo默认

> **rpc** ResetCustomInitMessageTextToDefault([ResetCustomInitMessageTextToDefaultRequest](#resetcustominitmessagetexttodefaultrequest) [ResetCustomInitMessageTextToDefaultResponse](#resetcustominitmessagetexttodefaultresponse)

移除系统的自定义输入消息文本 翻译文件的默认文本将在此后触发：

    DELETE: /text/message/init/{language}


### GetDefaultPasswordResetMessageText版

> **rpc** GetDefaultPasswordResetMessageText([GetDefaultPasswordResetMessageTextRequest](#getdefaultpasswordresetmessagetextrequest)) [GetDefaultPasswordResetMessageTextResponse](#getdefaultpasswordresetmessagetextresponse)

返回密码重置消息的默认文本(翻译文件)

    获取：/text/聋哑/消息/密码/{language}


### 获取CustomPasswordResetMessageText

> **rpc** GetCustomPasswordResetMessageText([GetCustomPasswordResetMessageTextRequest](#getcustompasswordresetmessagetextrequest) [GetCustomPasswordResetMessageTextResponse](#getcustompasswordresetmessagetextresponse)

返回密码重置消息的自定义文本 (在事件仓库中覆盖)

    获取：/text/message/passwordreset/{language}


### 设置默认PasswordResetMessageText

> **rpc** SetDefaultPasswordResetMessageText([SetDefaultPasswordResetMessageTextRequest](#setdefaultpasswordresetmessagetextrequest)) [SetDefaultPasswordResetMessageTextResponse](#setdefaultpasswordresetmessagetextresponse)

设置密码重置消息的默认自定义文本 会影响到所有组织，没有定制密码重置消息的文字 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/passwordreset/{language}


### 重置CustomPasswordResetMessageTextTo默认

> **rpc** ResetCustomPasswordResetMessageTextToDefault([ResetCustomPasswordResetMessageTextToDefaultRequest](#resetcustompasswordresetmessagetexttodefaultrequest) [ResetCustomPasswordResetMessageTextToDefaultResponse](#resetcustompasswordresetmessagetexttodefaultresponse)

移除系统的自定义密码重置消息文本 翻译文件的默认文本会在后面触发：

    DELETE: /text/message/verifyemail/{language}


### GetDefaultVerifyEmailMessageText

> **rpc** GetDefaultVerifyEmailMessageText([GetDefaultVerifyEmailMessageTextRequest](#getdefaultverifyemailmessagetextrequest)) [GetDefaultVerifyEmailMessageTextResponse](#getdefaultverifyemailmessagetextresponse)

返回验证邮件消息的默认文本(翻译文件)

    获取：/text/default/message/verifyemail/{language}


### GetCustomVerifyEmailMessageText

> **rpc** GetCustomVerifyEmailMessageText([GetCustomVerifyEmailMessageTextRequest](#getcustomverifyemailmessagetextrequest)) [GetCustomVerifyEmailMessageTextResponse](#getcustomverifyemailmessagetextresponse)

返回验证邮件消息的自定义文本 (在事件仓库中覆盖)

    获取：/text/message/verifyemail/{language}


### 设置 DefaultVerifyEmailMessageText

> **rpc** SetDefaultVerifyEmailMessageText([SetDefaultVerifyEmailMessageTextRequest](#setdefaultverifyemailmessagetextrequest)) [SetDefaultVerifyEmailMessageTextResponse](#setdefaultverifyemailmessagetextresponse)

设置默认的自定义文本来验证邮件消息 它影响到所有组织，没有自定义验证邮件信息文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/verifyemail/{language}


### 重置CustomVerifyEmailMessageTextTo默认

> **rpc** ResetCustomVerifyEmailMessageTextToDefault([ResetCustomVerifyEmailMessageTextToDefaultRequest](#resetcustomverifyemailmessagetexttodefaultrequest) [ResetCustomVerifyEmailMessageTextToDefaultResponse](#resetcustomverifyemailmessagetexttodefaultresponse)

移除系统的自定义验证邮件信息文本 翻译文件的默认文本将会触发后

    DELETE: /text/message/verifyemail/{language}


### GetDefaultVerifyPhoneMessageText

> **rpc** GetDefaultVerifyPhoneMessageText([GetDefaultVerifyPhoneMessageTextRequest](#getdefaultverifyphonemessagetextrequest) [GetDefaultVerifyPhoneMessageTextResponse](#getdefaultverifyphonemessagetextresponse)

返回验证电话信息的默认文本(翻译文件)

    获取：/text/default/message/verifyphone/{language}


### GetCustomVerifyPhoneMessageText

> **rpc** GetCustomVerifyPhoneMessageText([GetCustomVerifyPhoneMessageTextRequest](#getcustomverifyphonemessagetextrequest) [GetCustomVerifyPhoneMessageTextResponse](#getcustomverifyphonemessagetextresponse)

返回验证手机消息的自定义文本

    获取：/text/message/verifyphone/{language}


### 设置 DefaultVerifyPhoneMessageText

> **rpc** SetDefaultVerifyPhoneMessageText([SetDefaultVerifyPhoneMessageTextRequest](#setdefaultverifyphonemessagetextrequest)) [SetDefaultVerifyPhoneMessageTextResponse](#setdefaultverifyphonemessagetextresponse)

设置默认的自定义文本来验证手机消息 它会影响所有组织，没有自定义验证手机消息文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/verifyphone/{language}


### 重置CustomVerifyPhoneMessageTextTo默认

> **rpc** ResetCustomVerifyPhoneMessageTextToDefault([ResetCustomVerifyPhoneMessageTextToDefaultRequest](#resetcustomverifyphonemessagetexttodefaultrequest) [ResetCustomVerifyPhoneMessageTextToDefaultResponse](#resetcustomverifyphonemessagetexttodefaultresponse)

移除系统的自定义验证电话文本 翻译文件的默认文本将在此后触发：

    DELETE: /text/message/verifyphone/{language}


### GetDefaultDomainClaimMessageText

> **rpc** GetDefaultDomainClaimedMessageText([GetDefaultDomainClaimedMessageTextRequest](#getdefaultdomainclaimedmessagetextrequest)) [GetDefaultDomainClaimedMessageTextResponse](#getdefaultdomainclaimedmessagetextresponse)

返回域名信息的默认文本(翻译文件)

    获取：/text/default/message/domainclaimed/{language}


### GetCustomDomainClaimMessageText

> **rpc** GetCustomDomainClaimMessageText([GetCustomDomainClaimMessageTextRequest](#getcustomdomainclaimedmessagetextrequest)) [GetCustomDomainClaimMessageTextResponse](#getcustomdomainclaimedmessagetextresponse)

返回域名信息的自定义文本 (在eventstore中覆盖)

    GET: /text/message/domainclaimed/{language}


### SetDefaultDomainClaimMessageText案

> **rpc** SetDefaultDomainClaimedMessageText([SetDefaultDomainClaimedMessageTextRequest](#setdefaultdomainclaimedmessagetextrequest)) [SetDefaultDomainClaimedMessageTextResponse](#setdefaultdomainclaimedmessagetextresponse)

设置域名信息的默认自定义文本 会影响所有没有自定义域名信息文本 的组织。可以使用以下变量：
{{.Domain}} {{.TempUsername}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/domainclaimed/{language}


### 重置CustomDomainClaimMessageTextTo默认

> **rpc** ResetCustomDomainClaimedMessageTextToDefault([ResetCustomDomainClaimedMessageTextToDefaultRequest](#resetcustomdomainclaimedmessagetexttodefaultrequest) [ResetCustomDomainClaimedMessageTextToDefaultResponse](#resetcustomdomainclaimedmessagetexttodefaultresponse)

移除自定义系统的域名信息文本 翻译文件的默认文本将在此后触发：

    DELETE: /text/message/domainclaimed/{language}


### GetDefaultPasswordlessRegistrationMessageText

> **rpc** GetDefaultPasswordlessRegistrationMessageText([GetDefaultPasswordlessRegistrationMessageTextRequest](#getdefaultpasswordlessregistrationmessagetextrequest)) [GetDefaultPasswordLessRegistrationMessageTextResponse](#getdefaultpasswordlessregistrationmessagetextresponse)

返回无密码注册消息的默认文本(翻译文件)

    获取：/text/default/message/passwordless_registration/{language}


### GetCustomPasswordless RegistrationMessageText

> **rpc** GetCustomPasswordlessRegistrationMessageText([GetCustomPasswordlessRegistrationMessageTextRequest](#getcustompasswordlessregistrationmessagetextrequest) [GetCustomPasswordLessRegistrationMessageTextResponse](#getcustompasswordlessregistrationmessagetextresponse)

返回无密码注册消息的自定义文本 (在事件仓库中覆盖)

    获取：/text/message/passwordless_registration/{language}


### SetDefaultPasswordlessRegistrationMessageText

> **rpc** SetDefaultPasswordlessRegistrationMessageText([SetDefaultPasswordlesLessageTextRequest](#setdefaultpasswordlessregistrationmessagetextrequest)) [SetDefaultPasswordlessRegistrationMessageTextResponse](#setdefaultpasswordlessregistrationmessagetextresponse)

设置无密码注册消息的默认自定义文本 它影响到所有组织，没有自定义的无密码注册消息文本 可以使用以下变量：
{{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/passwordless_registration/{language}


### 重置CustomPasswordlessRegistrationMessageTextTo默认

> **rpc** ResetCustomPasswordlessRegistrationMessageTextToDefault([ResetCustomPasswordlessRegistrationTextToDefaultRequest](#resetcustompasswordlessregistrationmessagetexttodefaultrequest) [ResetCustomPasswordLessRegistrationMessageTextToDefaultResponse](#resetcustompasswordlessregistrationmessagetexttodefaultresponse)

移除系统的自定义无密码链接消息文本 翻译文件的默认文本将在此后触发：

    DELETE: /text/message/passwordless_registration/{language}


### GetDefaultLoginTexts

> **rpc** GetDefaultLoginTexts([GetDefaultLoginTextsRequest](#getdefaultlogintextsrequest)) [GetDefaultLoginTextsResponse](#getdefaultlogintextsresponse)

返回默认自定义文本用于登录 ui (翻译文件)

    获取：/text/default/登录/{language}


### GetCustomLoginTexts

> **rpc** GetCustomLoginTexts([GetCustomLoginTextsRequest](#getcustomlogintextsrequest)) [GetCustomLoginTextsResponse](#getcustomlogintextsresponse)

返回用于登录的自定义文本

    获取：/text/login/{language}


### SetCustomLoginText

> **rpc** SetCustomLoginText([SetCustomLoginTextsRequest](#setcustomlogintextsrequest)) [SetCustomLoginTextsResponse](#setcustomlogintextsresponse)

设置登录ui 的自定义文本 会影响所有组织，无需自定义登录ui 文本

    PUT: /text/login/{language}


### ResetCustomLoginTextToDefault

> **rpc** ResetCustomLoginTextToDefault([ResetCustomLoginTextsToDefaultRequest](#resetcustomlogintextstodefaultrequest)) [ResetCustomLoginTextsToDefaultResponse](#resetcustomlogintextstodefaultresponse)

移除用于登录 ui 的自定义文本会影响所有组织，无需自定义登录 ui 文本 默认文本翻译文件会在其后触发。

    删除: /text/login/{language}


### ListIAMM会员角色

> **rpc** ListIAMMMMemberRoles([ListIAMMMMemberolesRequest](#listiammemberrolesrequest)) [ListIAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMenesResponse](#listiammemberrolesresponse)

返回请求用户可见的 IAM角色

    POST: /members/roles/_search


### ListIAMMember

> **rpc** ListIAM Members([ListIAMMmembersRequest](#listiammembersrequest)) [ListIAMMmembersRespons](#listiammembersresponse)

返回匹配请求的所有成员 所有查询都需要匹配 (AND)

    POST: /members/_search


### 添加IAMMember

> **rpc** AddIAMMemberer([AddIAMMMemberRequest](#addiammemberrequest)) [AddIAMMmemberResponse](#addiammemberresponse)

将用户添加到ZITADEL的会员列表中具有给定的角色 未定义的角色将被删除

    POST： /成员


### 更新 IAMMember

> **rpc** UpdateIAMMemberer([UpdateIAMMemberRequest](#updateiammemberrequest)) [UpdateIAMMemberResponse](#updateiammemberresponse)

设置成员上给定的角色。 会员只拥有此通话提供的角色

    PUT: /members/{user_id}


### 移除IAMMember

> **rpc** 移除IAM成员([移除IAM成员请求](#removeiammemberrequest)) [移除IAM成员响应](#removeiammemberresponse)

从ZITADEL成员列表中删除用户

    DELETE: /members/{user_id}


### 列表视图

> **rpc** ListViews([ListViewsRequest](#listviewsrequest)) [ListViewsResponse](#listviewsresponse)

返回ZITADEL 所有存储的阅读模型用于搜索优化和优化请求延迟 它们代表了事件随附在对象上的三角形

    POST: /views/_search


### 事件列表失败

> **rpc** ListFailedEvents([ListFailedEventsRequest](#listfailedeventsrequest)) [ListFailedEventsRespons](#listfailedeventsresponse)

返回无法处理的事件描述。 有些事件可能需要一些检索。 例如，SMTPAPI第一次无法发送电子邮件

    POST: /failedevents/_search


### RemoveFailedEvent

> **rpc** RemoveFailedEvent([RemoveFailedEventRequest](#removefailedeventrequest)) [RemoveFailedEventResponse](#removefailedeventresponse)

从失败的事件视图中删除事件。 此事件未从更改流 中删除。如果系统能够稍后处理此事件，此通话将被使用。 例如，第二次尝试发送电子邮件是否成功。 第一次尝试产生了一个 个失败事件。 您可以找到它是否在 `失败次数` 上工作

    DELETE: /failedevents/{database}/{view_name}/{failed_sequence}


### ImportData

> **rpc** ImportData([ImportDataRequest](#importdatarequest)) [ImportDataResponse](#importdataresponse)

导入数据到实例并创建不同对象

    POST: /import


### ExportData

> **rpc** 导出数据([导出数据请求](#exportdatarequest)) [导出数据响应](#exportdataresponse)

从实例导出数据

    POST： /导出







## 留言


### 激活LabelPolicyRequest
这是一个空请求




### 激活LabelPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 激活SMSProviderRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ActivateSMSProviderResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加自定义域政策



| 字段                                              | 类型  | 描述                     | 验证                                                            |
| ----------------------------------------------- | --- | ---------------------- | ------------------------------------------------------------- |
| org_id                                          | 字符串 | -                      | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户_login_must_be_domain                     | 布尔值 | 用户名必须以其组织域结尾(唯一性是基于组织) |                                                               |
| validate_org_domains                          | 布尔值 | -                      |                                                               |
| smtp_sender_address_matches_instance_domain | 布尔值 | -                      |                                                               |




### AddCustomDomainPolicy响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddCustomOrgIAMPolicyRequest



| 字段                          | 类型  | 描述                     | 验证                                                            |
| --------------------------- | --- | ---------------------- | ------------------------------------------------------------- |
| org_id                      | 字符串 | -                      | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户_login_must_be_domain | 布尔值 | 用户名必须以其组织域结尾(唯一性是基于组织) |                                                               |




### AddCustomOrgIAMPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddIAMMMemberRequest



| 字段   | 类型     | 描述                | 验证                                                            |
| ---- | ------ | ----------------- | ------------------------------------------------------------- |
| 用户ID | 字符串    | -                 | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | 如果没有角色，用户将不会有任何权限 |                                                               |




### AddIAMMMM成员响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加 ToLoginPolicyRequest



| 字段     | 类型  | 描述           | 验证                                                            |
| ------ | --- | ------------ | ------------------------------------------------------------- |
| idp_id | 字符串 | 预定义idp配置的 Id | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddIDPToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddJWTIDP请求



| 字段           | 类型                            | 描述 | 验证                                                            |
| ------------ | ----------------------------- | -- | ------------------------------------------------------------- |
| 名称           | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| styling_type | zitadel.idp.v1.IDPStylingType | -  | 只有枚举：true<br />                                         |
| jwt_endpoint | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 键盘终点         | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题名称         | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 自动注册         | 布尔值                           | -  |                                                               |




### AddJWTIDPResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| idp_id | 字符串                      | -  |    |




### AddMultiFactorToLoginPolicyRequest



| 字段 | 类型                                | 描述 | 验证                                                            |
| -- | --------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.MultiFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### AddMultiFactorToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddOIDCIDP请求



| 字段           | 类型                              | 描述 | 验证                                                            |
| ------------ | ------------------------------- | -- | ------------------------------------------------------------- |
| 名称           | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| styling_type | zitadel.idp.v1.IDPStylingType   | -  | 只有枚举：true<br />                                         |
| client_id    | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 客户端_secret   | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 范围           | 重复的字符串                          | -  |                                                               |
| 显示名称映射       | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |
| 用户名映射        | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |
| 自动注册         | 布尔值                             | -  |                                                               |




### AddOIDCIDPResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| idp_id | 字符串                      | -  |    |




### AddOIDCSettingsRequest



| 字段                  | 类型                       | 描述 | 验证 |
| ------------------- | ------------------------ | -- | -- |
| 存取令牌生存期             | google.protobuf.Duration | -  |    |
| id_token_live     | google.protobuf.Duration | -  |    |
| 刷新token_idle_过期时间 | google.protobuf.Duration | -  |    |
| 刷新令牌过期时间            | google.protobuf.Duration | -  |    |




### AddOIDCSettingsResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddSMSProviderTwilioRequest



| 字段    | 类型  | 描述 | 验证                                                            |
| ----- | --- | -- | ------------------------------------------------------------- |
| 西德    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 令牌    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发件人编号 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddSMSProviderTwilioResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| id   | 字符串                      | -  |    |




### AddSMTPConfigRequest



| 字段    | 类型  | 描述 | 验证                                                            |
| ----- | --- | -- | ------------------------------------------------------------- |
| 发件人地址 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发送者名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| tls   | 布尔值 | -  |                                                               |
| 主机    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 500<br /> |
| 用户    | 字符串 | -  |                                                               |
| 密碼    | 字符串 | -  |                                                               |




### AddSMTPConfigResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddSecondFactorToLoginPolicyRequest



| 字段 | 类型                                 | 描述 | 验证                                                            |
| -- | ---------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.SecondFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### AddSecondFactorToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### DataOrg



| 字段           | 类型                                                                | 描述 | 验证 |
| ------------ | ----------------------------------------------------------------- | -- | -- |
| org_id       | 字符串                                                               | -  |    |
| 附 件          | zitadel.management.v1.AddOrgRequest                               | -  |    |
| 域名政策         | 添加自定义域政策                                                          | -  |    |
| 标签策略         | zitadel.management.v1.AddCustomLabelPolicyRequest                 | -  |    |
| 锁定策略         | zitadel.management.v1.AddCustomLockoutPolicyRequest               | -  |    |
| 登录策略         | zitadel.management.v1.AddCustomLoginPolicyRequest                 | -  |    |
| 密码复杂性政策      | zitadel.management.v1.AddCustomPasswordComplexityPolicyRequest    | -  |    |
| 隐私政策         | zitadel.management.v1.AddCustomPrivacyPolicyRequest               | -  |    |
| 项目           | 重复 zitadel.v1.v1.DataProject                                      | -  |    |
| 项目角色         | 重复 zitadel.management.v1.AddProjectRoleRequest                    | -  |    |
| api应用        | 重复 zitadel.v1.v1.DataAPI应用程序                                      | -  |    |
| oidc_apps    | 重复 zitadel.v1.v1.DataOIDC应用程序                                     | -  |    |
| 人类用户         | 重复 zitadel.v1.v1.DataHumanuser                                    | -  |    |
| 大机器用户        | 重复 zitadel.v1.v1.DataMachineUser                                  | -  |    |
| 触发器动作        | 重复 zitadel.management.v1.SetTriggerActionsRequest                 | -  |    |
| 操作           | 重复 zitadel.v1.v1.DataAction                                       | -  |    |
| 项目补助金        | 重复 zitadel.v1.v1.DataProjectGrant                                 | -  |    |
| 用户授权         | 重复 zitadel.management.v1.AddUserGrantRequest                      | -  |    |
| org_members  | 重复 zitadel.management.v1.AddOrgMemberRequest                      | -  |    |
| 项目成员         | 重复 zitadel.management.v1.AddProjectMemberRequest                  | -  |    |
| 项目赠款成员       | 重复 zitadel.management.v1.AddProjectGrantMemberRequest             | -  |    |
| 用户元数据        | 重复 zitadel.management.v1.SetUserMetadataRequest                   | -  |    |
| 登录文本         | 重复 zitadel.management.v1.SetCustomLoginTextsRequest               | -  |    |
| init_message | 重复 zitadel.management.v1.SetCustomInitMessageTextRequest          | -  |    |
| 密码重置消息       | 重复 zitadel.management.v1.SetCustomPasswordResetMessageTextRequest | -  |    |
| 验证电子邮件消息     | 重复 zitadel.management.v1.SetCustomVerifyEmailMessageTextRequest   | -  |    |
| 验证手机消息       | 重复 zitadel.management.v1.SetCustomVerifyPhoneMessageTextRequest   | -  |    |
| 域名_声明_消息   | 重复 zitadel.management.v1.SetCustomDomainClaimedMessageTextRequest | -  |    |
| 无密码注册消息      | 重复的 zitadel.management.v1.SetCustomPasswordlesLessageTextRequest  | -  |    |
| oidc_idps    | 重复 zitadel.v1.v1.DataOIDCIDP                                      | -  |    |
| jwt_idps     | 重复 zitadel.v1.v1.DataJWTIDP                                       | -  |    |
| 用户链接         | 重复 zitadel.idp.v1.IDPUserLink                                     | -  |    |
| 域            | 重复 zitadel.org.v1.Domain                                          | -  |    |
| app_key      | 重复 zitadel.v1.v1.DataAppKey                                       | -  |    |
| 机器密钥         | 重复 zitadel.v1.v1.DataMachineKey                                   | -  |    |




### DeactivateIDPRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### DeactivateIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### DeactivateSMSProviderRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### DeactivateSMSProviderResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 导出数据请求



| 字段          | 类型                          | 描述 | 验证 |
| ----------- | --------------------------- | -- | -- |
| org_ids     | 重复的字符串                      | -  |    |
| 排除的 org_ids | 重复的字符串                      | -  |    |
| 使用密码        | 布尔值                         | -  |    |
| 通过 otp      | 布尔值                         | -  |    |
| 响应输出        | 布尔值                         | -  |    |
| 本地输出        | 导出数据请求.本地输出                 | -  |    |
| s3输出        | 导出数据请求.S3输出                 | -  |    |
| gcs_output  | ExportDataRequest.GCSOutput | -  |    |
| 超时          | 字符串                         | -  |    |




### ExportDataRequest.GCSOutput



| 字段                  | 类型  | 描述 | 验证 |
| ------------------- | --- | -- | -- |
| 桶数                  | 字符串 | -  |    |
| serviceaccount_json | 字符串 | -  |    |
| 路径                  | 字符串 | -  |    |




### 导出数据请求.本地输出



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| path | 字符串 | -  |    |




### 导出数据请求.S3输出



| 字段              | 类型  | 描述 | 验证 |
| --------------- | --- | -- | -- |
| 路径              | 字符串 | -  |    |
| endpoint        | 字符串 | -  |    |
| access_key_id | 字符串 | -  |    |
| 密钥访问权限          | 字符串 | -  |    |
| ssl             | 布尔值 | -  |    |
| 桶数              | 字符串 | -  |    |




### ExportDataResponse



| 字段   | 类型          | 描述 | 验证 |
| ---- | ----------- | -- | -- |
| orgs | 重复的 DataOrg | -  |    |




### 失败事件



| 字段      | 类型     | 描述 | 验证 |
| ------- | ------ | -- | -- |
| 数据库     | 字符串    | -  |    |
| 视图名称    | 字符串    | -  |    |
| 失败序列    | uint64 | -  |    |
| 失败数     | uint64 | -  |    |
| 错误_消息   | 字符串    | -  |    |
| last_失败 | 时间戳    | -  |    |




### GetCustomDomainClaimMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomDomainClaimedMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetCustomDomainPolicyRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| org_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomDomainPolicyResponse



| 字段   | 类型                             | 描述                                         | 验证 |
| ---- | ------------------------------ | ------------------------------------------ | -- |
| 政策   | zitadel.policy.v1.DomainPolicy | -                                          |    |
| 是默认值 | 布尔值                            | 已废弃：zitadel.policy.v1.DomainPolicy 也定义了默认值 |    |




### GetCustomInitMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomInitMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetCustomLoginTextsRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomLoginTextsResponse



| 字段    | 类型                         | 描述 | 验证 |
| ----- | -------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.Login自定义文本 | -  |    |




### GetCustomOrgIAMPolicyRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| org_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomOrgIAMPolicyResponse



| 字段   | 类型                             | 描述                                         | 验证 |
| ---- | ------------------------------ | ------------------------------------------ | -- |
| 政策   | zitadel.policy.v1.OrgIAMPolicy | -                                          |    |
| 是默认值 | 布尔值                            | 已废弃：zitadel.policy.v1.OrgIAMPolicy 也定义了默认值 |    |




### GetCustomPasswordResetMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomPasswordResetMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetCustomPasswordless RegistrationMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomPasswordlessRegistrationMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetCustomVerifyEmailMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomVerifyEmailMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetCustomVerifyPhoneMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomVerifyPhoneMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDefaultDomainClaimedMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultDomainClaimedMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDefaultInitMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultInitMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### 获取默认语言请求
这是一个空请求




### GetDefaultLanguageResponse



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 语言 | 字符串 | -  |    |




### GetDefaultLoginTextsRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultLoginTextsResponse



| 字段    | 类型                         | 描述 | 验证 |
| ----- | -------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.Login自定义文本 | -  |    |




### GetDefaultOrgRequest
这是一个空请求




### GetDefaultOrgResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| 附 件 | zitadel.org.v1.Org | -  |    |




### GetDefaultPasswordResetMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultPasswordResetMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDefaultPasswordlessRegistrationMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultPasswordlessRegistrationMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDefaultVerifyEmailMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultVerifyEmailMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDefaultVerifyPhoneMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultVerifyPhoneMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




### GetDomainPolicyRequest





### GetDomainPolicyResponse



| 字段 | 类型                             | 描述 | 验证 |
| -- | ------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.DomainPolicy | -  |    |




### GetFileSystemNotificationProviderRequest
这是一个空请求




### GetFileSystemNotificationProvider响应



| 字段  | 类型                                            | 描述 | 验证 |
| --- | --------------------------------------------- | -- | -- |
| 提供商 | zitadel.settings.v1.DebugNotificationProvider | -  |    |




### GetIDPByIDRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetIDPByIDResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| idp | zitadel.idp.v1.IDP | -  |    |




### GetLabelPolicyRequest
这是一个空请求




### GetLabelPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LabelPolicy | -  |    |




### GetLockoutPolicyRequest
这是一个空请求




### GetLockoutPolicyResponse



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LockoutPolicy | -  |    |




### GetLogNotificationProviderRequest
这是一个空请求




### GetLogNotificationProvider响应



| 字段  | 类型                                            | 描述 | 验证 |
| --- | --------------------------------------------- | -- | -- |
| 提供商 | zitadel.settings.v1.DebugNotificationProvider | -  |    |




### GetLoginPolicyRequest
这是一个空请求




### GetLoginPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LoginPolicy | -  |    |




### GetMyInstanceRequest
这是一个空请求




### GetMyInstanceResponse



| 字段 | 类型                                 | 描述 | 验证 |
| -- | ---------------------------------- | -- | -- |
| 实例 | zitadel.instance.v1.InstanceDetail | -  |    |




### GetOIDCSettingsRequest
这是一个空请求




### GetOIDCSettingsResponse



| 字段 | 类型                         | 描述 | 验证 |
| -- | -------------------------- | -- | -- |
| 设置 | zitadel.settings.v1.OIDC设置 | -  |    |




### GetOrgByID请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetOrgByIDResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| 附 件 | zitadel.org.v1.Org | -  |    |




### GetOrgIAMPolicyRequest





### GetOrgIAMPolicyResponse



| 字段 | 类型                             | 描述 | 验证 |
| -- | ------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.OrgIAMPolicy | -  |    |




### GetPasswordAgePolicyRequest
这是一个空请求




### GetPasswordAgePolicyResponse



| 字段 | 类型                                      | 描述 | 验证 |
| -- | --------------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PasswordAgeing Policy | -  |    |




### GetPassword复杂政策请求





### GetPasswordComplexityPolicyResponse



| 字段 | 类型                                         | 描述 | 验证 |
| -- | ------------------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.PasswordComplexityPolicy | -  |    |




### GetPreviewLabelPolicyRequest
这是一个空请求




### GetPreviewLabelPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LabelPolicy | -  |    |




### 获取隐私政策请求
这是一个空请求




### GetPrivacyPolicy响应



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PrivacyPolicy | -  |    |




### GetSMSProviderRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 100<br /> |




### GetSMSProviderResponse



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 配置 | zitadel.settings.v1.SMSProvider | -  |    |




### GetSMTPConfigRequest
这是一个空请求




### GetSMTPConfigResponse



| 字段          | 类型                             | 描述 | 验证 |
| ----------- | ------------------------------ | -- | -- |
| smtp_config | zitadel.settings.v1.SMTPConfig | -  |    |




### GetSecretGeneratorRequest



| 字段    | 类型                                      | 描述 | 验证                                                            |
| ----- | --------------------------------------- | -- | ------------------------------------------------------------- |
| 生成器类型 | zitadel.settings.v1.SecretGeneratorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### GetSecretGeneratorResponse



| 字段    | 类型                                  | 描述 | 验证 |
| ----- | ----------------------------------- | -- | -- |
| 秘密生成器 | zitadel.settings.v1.SecretGenerator | -  |    |




### GetSupportedLanguagesRequest
这是一个空请求




### GetSupportedLanguagesResponse



| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 语言 | 重复的字符串 | -  |    |




### HealthzRequest
这是一个空请求




### HealthzResponse
这是一个空的响应




### IDP查询



| 字段                                                                                                                  | 类型                          | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.idp_id_查询                        | zitadel.idp.v1.IDPIDQuery   | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.idp_name_query_query.idp_query | zitadel.idp.v1.IDPNameQuery | -  |    |




### ImportDataError



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 类型 | 字符串 | -  |    |
| id | 字符串 | -  |    |
| 留言 | 字符串 | -  |    |




### ImportDataOrg



| 字段   | 类型          | 描述 | 验证 |
| ---- | ----------- | -- | -- |
| orgs | 重复的 DataOrg | -  |    |




### 导入数据请求



| 字段                                                                                                   | 类型                          | 描述 | 验证 |
| ---------------------------------------------------------------------------------------------------- | --------------------------- | -- | -- |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgs            | ImportDataOrg               | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgsv1         | zitadel.v1.v1.ImportDataOrg | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgs_local   | 导入数据请求.本地输入                 | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgsv1_local | 导入数据请求.本地输入                 | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgs_s3       | ImportDataRequest.S3Input   | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgsv1_s3     | ImportDataRequest.S3Input   | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgs_gcs     | ImportDataRequest.GCSInput  | -  |    |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) data.data_orgsv1_gcs   | ImportDataRequest.GCSInput  | -  |    |
| 超时                                                                                                   | 字符串                         | -  |    |




### ImportDataRequest.GCSInput



| 字段                  | 类型  | 描述 | 验证 |
| ------------------- | --- | -- | -- |
| 桶数                  | 字符串 | -  |    |
| serviceaccount_json | 字符串 | -  |    |
| 路径                  | 字符串 | -  |    |




### 导入数据请求.本地输入



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 路径 | 字符串 | -  |    |




### ImportDataRequest.S3Input



| 字段              | 类型  | 描述 | 验证 |
| --------------- | --- | -- | -- |
| 路径              | 字符串 | -  |    |
| endpoint        | 字符串 | -  |    |
| access_key_id | 字符串 | -  |    |
| 密钥访问权限          | 字符串 | -  |    |
| ssl             | 布尔值 | -  |    |
| 桶数              | 字符串 | -  |    |




### ImportDataResponse



| 字段 | 类型       | 描述 | 验证 |
| -- | -------- | -- | -- |
| 错误 | 重复导入数据错误 | -  |    |
| 成功 | 导入数据成功   | -  |    |




### 导入数据成功



| 字段   | 类型               | 描述 | 验证 |
| ---- | ---------------- | -- | -- |
| orgs | 重复导入数据SuccessOrg | -  |    |




### ImportDataSuccessOrg



| 字段             | 类型                                                | 描述 | 验证 |
| -------------- | ------------------------------------------------- | -- | -- |
| org_id         | 字符串                                               | -  |    |
| 项目ID           | 重复的字符串                                            | -  |    |
| 项目角色           | 重复的字符串                                            | -  |    |
| oidc_app_ids | 重复的字符串                                            | -  |    |
| api_app_ids  | 重复的字符串                                            | -  |    |
| 人类用户ID         | 重复的字符串                                            | -  |    |
| 机器用户ID         | 重复的字符串                                            | -  |    |
| 动作ID           | 重复的字符串                                            | -  |    |
| 触发器动作          | 重复 zitadel.management.v1.SetTriggerActionsRequest | -  |    |
| 项目补助金          | 重复导入数据SuccessProjectGrant                         | -  |    |
| 用户授权           | 重复导入数据SuccessUserGrant                            | -  |    |
| org_members    | 重复的字符串                                            | -  |    |
| 项目成员           | 重复的 ImportDataSuccessProjectMember                | -  |    |
| 项目赠款成员         | 重复的 ImportDataSuccessProjectGrantMember           | -  |    |
| oidc_ipds      | 重复的字符串                                            | -  |    |
| jwt_idps       | 重复的字符串                                            | -  |    |
| idp_链接         | 重复的字符串                                            | -  |    |
| 用户链接           | 重复导入数据Success用户链接                                 | -  |    |
| 用户元数据          | 重复导入数据SuccessUserMetadata                         | -  |    |
| 域              | 重复的字符串                                            | -  |    |
| app_key        | 重复的字符串                                            | -  |    |
| 机器密钥           | 重复的字符串                                            | -  |    |




### 重要数据SuccessProjectGrant



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| grant_id | 字符串 | -  |    |
| 项目ID     | 字符串 | -  |    |
| org_id   | 字符串 | -  |    |




### 重要的 DataSuccessProjectGrantMember



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| 项目ID     | 字符串 | -  |    |
| grant_id | 字符串 | -  |    |
| 用户ID     | 字符串 | -  |    |




### 重要数据Success项目成员



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 项目ID | 字符串 | -  |    |
| 用户ID | 字符串 | -  |    |




### ImportDataSuccessUserGrant



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 项目ID | 字符串 | -  |    |
| 用户ID | 字符串 | -  |    |




### 导入数据Success用户链接



| 字段     | 类型  | 描述 | 验证 |
| ------ | --- | -- | -- |
| 用户ID   | 字符串 | -  |    |
| 外部用户ID | 字符串 | -  |    |
| 显示名称   | 字符串 | -  |    |
| idp_id | 字符串 | -  |    |




### ImportDataSuccessUserMetadata



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 用户ID | 字符串 | -  |    |
| 密钥   | 字符串 | -  |    |




### IsOrgUniqueRequest
如果名称或域名已在使用，org 不是唯一的 必须提供至少一个参数


| 字段 | 类型  | 描述 | 验证                              |
| -- | --- | -- | ------------------------------- |
| 名称 | 字符串 | -  | string.max_len: 200<br /> |
| 域  | 字符串 | -  | string.max_len: 200<br /> |




### IsOrgUniqueResponse



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 是唯一的 | 布尔值 | -  |    |




### ListFailedEventsRequest
这是一个空请求




### ListFailedEventsResponse



| 字段 | 类型      | 描述        | 验证 |
| -- | ------- | --------- | -- |
| 结果 | 重复的失败事件 | 待办事宜：详细列表 |    |




### ListIAMMMM会员RolesRequest
这是一个空请求




### ListIAMMMMM成员胆固醇响应



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 角色   | 重复的字符串                 | -  |    |




### 邮件列表成员请求



| 字段 | 类型                               | 描述      | 验证 |
| -- | -------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery             | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.member.v1.SearchQuery | 客户寻找的标准 |    |




### ListIAMM成员响应



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 结果   | 重复 zitadel.member.v1.Member | -  |    |




### ListIDersRequest



| 字段  | 类型                          | 描述      | 验证 |
| --- | --------------------------- | ------- | -- |
| 查询  | zitadel.v1.ListQuery        | 列出限制和顺序 |    |
| 排序列 | zitadel.idp.v1.IDPFieldName | 结果排序的字段 |    |
| 查询  | 重复的IDP查询                    | 客户寻找的标准 |    |




### ListIDersResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 排序列  | zitadel.idp.v1.IDPFieldName | -  |    |
| 结果   | 重复的 zitadel.idp.v1.IDP      | -  |    |




### ListInstanceDomainsRequest



| 字段  | 类型                                       | 描述      | 验证 |
| --- | ---------------------------------------- | ------- | -- |
| 查询  | zitadel.v1.ListQuery                     | -       |    |
| 排序列 | zitadel.instance.v1.DomainFieldname      | 结果排序的字段 |    |
| 查询  | 重复 zitadel.instance.v1.DomainSearchQuery | 客户寻找的标准 |    |




### ListInstanceDomainsResponse



| 字段   | 类型                                  | 描述 | 验证 |
| ---- | ----------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails              | -  |    |
| 排序列  | zitadel.instance.v1.DomainFieldname | -  |    |
| 结果   | 重复 zitadel.instance.v1.Domain       | -  |    |




### ListLoginPolicyIDsRequest



| 字段 | 类型                   | 描述      | 验证 |
| -- | -------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery | 列出限制和顺序 |    |




### ListLoginPolicyIDPsResponse



| 字段   | 类型                                     | 描述 | 验证 |
| ---- | -------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                 | -  |    |
| 结果   | 重复的 zitadel.idp.v1.IDP LoginPolicyLink | -  |    |




### ListLoginPolicyMultiFactorsRequest
这是一个空请求




### ListLoginPolicyMultiFactorsResponse



| 字段   | 类型                                   | 描述 | 验证 |
| ---- | ------------------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails               | -  |    |
| 结果   | 重复 zitadel.policy.v1.MultiFactorType | -  |    |




### ListLoginPolicySecondFactorsRequest
这是一个空请求




### ListLoginPolicySecondFactorsResponse



| 字段   | 类型                                    | 描述 | 验证 |
| ---- | ------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                | -  |    |
| 结果   | 重复 zitadel.policy.v1.SecondFactorType | -  |    |




### ListOrgsRequest



| 字段  | 类型                          | 描述      | 验证 |
| --- | --------------------------- | ------- | -- |
| 查询  | zitadel.v1.ListQuery        | 列出限制和顺序 |    |
| 排序列 | zitadel.org.v1.OrgFieldname | 结果排序的字段 |    |
| 查询  | 重复 zitadel.org.v1.OrgQuery  | 客户寻找的标准 |    |




### ListOrgsResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 排序列  | zitadel.org.v1.OrgFieldname | -  |    |
| 结果   | 重复 zitadel.org.v1.Org       | -  |    |




### ListSMSProviders请求



| 字段 | 类型                   | 描述      | 验证 |
| -- | -------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery | 列出限制和顺序 |    |




### ListSMSProvidersResponse



| 字段   | 类型                                 | 描述 | 验证 |
| ---- | ---------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails             | -  |    |
| 结果   | 重复 zitadel.settings.v1.SMSProvider | -  |    |




### ListSecretGeneratorsRequest



| 字段 | 类型                                          | 描述      | 验证 |
| -- | ------------------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery                        | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.settings.v1.SecretGeneratorQuery | 客户寻找的标准 |    |




### ListSecretGeneratorsResponse



| 字段   | 类型                                     | 描述 | 验证 |
| ---- | -------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                 | -  |    |
| 结果   | 重复 zitadel.settings.v1.SecretGenerator | -  |    |




### 列表视图请求
这是一个空请求




### 列表视图响应



| 字段 | 类型   | 描述        | 验证 |
| -- | ---- | --------- | -- |
| 结果 | 重复视图 | 待办事宜：详细列表 |    |




### 重新激活IDP请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ReactivateIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveFailedEventRequest



| 字段   | 类型     | 描述 | 验证                                                            |
| ---- | ------ | -- | ------------------------------------------------------------- |
| 数据库  | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 视图名称 | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 失败序列 | uint64 | -  |                                                               |




### RemoveFailedEventResponse
这是一个空的响应




### 移除IAM成员请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除IAMM成员响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveIDPFromLoginPolicyRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveIDPFromLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveIDPRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveLabelPolicyFontRequest
这是一个空请求




### RemoveLabelPolicyFontResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除LabelPolicyIconDarkRequest
这是一个空请求




### RemoveLabelPolicyIconDarkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除 LabelPolicyIconRequest
这是一个空请求




### RemoveLabelPolicyIconResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveLabelPolicyLogoDarkRequest
这是一个空请求




### RemoveLabelPolicyLogoDarkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveLabelPolicyLogoRequest
这是一个空请求




### RemoveLabelPolicyLogoResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除 MultiFactorFromLoginPolicyRequest



| 字段 | 类型                                | 描述 | 验证                                                            |
| -- | --------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.MultiFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### RemoveMultiFactorFromLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除SMSProviderRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveSMSProviderResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除SMTP配置请求
这是空请求




### 移除SMTP配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveSecondFactorFromLoginPolicyRequest



| 字段 | 类型                                 | 描述 | 验证                                                            |
| -- | ---------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.SecondFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### RemoveSecondFactorFromLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomDomainClaimMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ResetCustomDomainClaimedMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomDomainPolicyToDefaultRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| org_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomDomainPolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置自定义 InitMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置自定义 InitMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomLoginTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ResetCustomLoginTextsToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomOrgIAMPolicyToDefaultRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| org_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomOrgIAMPolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomPasswordResetMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomPasswordResetMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomPasswordlessRegistrationMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomPasswordlessRegistrationMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomVerifyEmailMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomVerifyEmailMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomVerifyPhoneMessageTextToDefaultRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重置CustomVerifyPhoneMessageTextToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomLoginTextsRequest



| 字段                             | 类型                                                         | 描述 | 验证                                                            |
| ------------------------------ | ---------------------------------------------------------- | -- | ------------------------------------------------------------- |
| 语言                             | 字符串                                                        | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 选择帐户文本                         | zitadel.text.v1.SelectAccountScreenText                    | -  |                                                               |
| 登录文本                           | zitadel.text.v1.LoginScreenText                            | -  |                                                               |
| 密码文本                           | zitadel.text.v1.密码屏幕文本                                     | -  |                                                               |
| 用户名更改文本                        | zitadel.text.v1.Username更改屏幕文本                             | -  |                                                               |
| 用户名_change_done_text         | zitadel.text.v1.UsernameChangeDoneScreenText               | -  |                                                               |
| init_password_文本             | zitadel.text.v1.InitPasswordScreenText                     | -  |                                                               |
| init_password_done_text      | zitadel.text.v1.InitPasswordDoneScreenText                 | -  |                                                               |
| 电子邮件验证文本                       | zitadel.text.v1.EmailVerificationScreenText                | -  |                                                               |
| email_verification_done_text | zitadel.text.v1.EmailVerificationDoneScreenText            | -  |                                                               |
| 初始化用户文本                        | zitadel.text.v1.初始化用户屏幕文本                                  | -  |                                                               |
| 初始化_done_text                | zitadel.text.v1.初始化UserDoneScreenText                      | -  |                                                               |
| init_mfa_impt_text           | zitadel.text.v1.InitMFAPromptScreenText                    | -  |                                                               |
| init_mfa_otp_text            | zitadel.text.v1.InitMFAOTPscreentext                       | -  |                                                               |
| init_mfa_u2f_text            | zitadel.text.v1.InitMFAU2FScreenText                       | -  |                                                               |
| init_mfa_done_text           | zitadel.text.v1.InitMFADoneScreenText                      | -  |                                                               |
| mfa_providers_text           | zitadel.text.v1.MFAProvidersText                           | -  |                                                               |
| 验证 mfa_otp_text              | zitadel.text.v1.VerifyMFAOTPscreentext                     | -  |                                                               |
| 校验_mfa_u2f_text              | zitadel.text.v1.VerifyMFAU2FScreenText                     | -  |                                                               |
| 无密码文本                          | zitadel.text.v1.PasswordlessscreenText                     | -  |                                                               |
| 密码更改文本                         | zitadel.text.v1.PasswordChangeScreenText                   | -  |                                                               |
| 密码更改_done_text               | zitadel.text.v1.PasswordChangeDoneScreenText               | -  |                                                               |
| 密码重置文本                         | zitadel.text.v1.PasswordResetDoneScreenText                | -  |                                                               |
| 注册选项文本                         | zitadel.text.v1.注册选项屏幕文本                                   | -  |                                                               |
| 注册用户文本                         | zitadel.text.v1.注册用户屏幕文本                                   | -  |                                                               |
| registration_org_text        | zitadel.text.v1.RegistrationOrgScreenText                  | -  |                                                               |
| 链接 user_done_text            | zitadel.text.v1.LinkingUserDoneScreenText                  | -  |                                                               |
| 外部用户_not_found_text          | zitadel.text.v1.ExternalUserNotFoundScreenText             | -  |                                                               |
| 成功登录文本                         | zitadel.text.v1.SuccessLoginScreenText                     | -  |                                                               |
| 注销文本                           | zitadel.text.v1.LogoutDoneScreenText                       | -  |                                                               |
| 页脚文本                           | zitadel.text.v1.FooterText                                 | -  |                                                               |
| 无密码提示文本                        | zitadel.text.v1.密码lessPromptScreenText                     | -  |                                                               |
| 无密码注册文本                        | zitadel.text.v1.密码无记名注册屏幕文本                                | -  |                                                               |
| 无密码注册_done_text              | zitadel.text.v1.PasswordlessRegistrationDoneScreenText     | -  |                                                               |
| 外部注册用户概览文本                     | zitadel.text.v1.ExternalRegistrationUserOverviewScreenText | -  |                                                               |




### SetCustomLoginTextsResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultDomainClaimedMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 800<br />                               |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### SetDefaultDomainClaimedMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultInitMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 1000<br />                              |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### SetDefaultInitMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置默认语言请求



| 字段 | 类型  | 描述 | 验证                                                           |
| -- | --- | -- | ------------------------------------------------------------ |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 10<br /> |




### SetDefaultLanguageResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置默认OrgRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| org_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### SetDefaultOrgResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultPasswordResetMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 800<br />                               |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### SetDefaultPasswordResetMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultPasswordlessRegistrationMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 800<br />                               |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### SetDefaultPasswordlessRegistrationMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultVerifyEmailMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 800<br />                               |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### 设置 DefaultVerifyEmailMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetDefaultVerifyPhoneMessageTextRequest



| 字段         | 类型  | 描述 | 验证                                                            |
| ---------- | --- | -- | ------------------------------------------------------------- |
| 语言         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题         | 字符串 | -  | string.max_len: 200<br />                               |
| pre_header | 字符串 | -  | string.max_len: 200<br />                               |
| 主题         | 字符串 | -  | string.max_len: 200<br />                               |
| 问候中        | 字符串 | -  | string.max_len: 200<br />                               |
| 文本         | 字符串 | -  | string.max_len: 800<br />                               |
| 按钮文本       | 字符串 | -  | string.max_len: 200<br />                               |
| 页脚文本       | 字符串 | -  | string.max_len: 200<br />                               |




### SetDefaultVerifyPhoneMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetUpOrgRequest



| 字段                                                                                    | 类型                    | 描述                                      | 验证                  |
| ------------------------------------------------------------------------------------- | --------------------- | --------------------------------------- | ------------------- |
| 附 件                                                                                   | SetUpOrgRequest.Org   | -                                       | 必填：true<br /> |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) user.human | SetUpOrgRequest.Human | 组织管理用户的一个字段                             |                     |
| 角色                                                                                    | 重复的字符串                | 为提供的用户指定Org 成员角色 (如果角色为空则默认为 ORG_OWNER) |                     |




### SetUpOrgRequest.Human



| 字段     | 类型                            | 描述 | 验证                                                            |
| ------ | ----------------------------- | -- | ------------------------------------------------------------- |
| 用户名称   | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 个人信息   | SetUpOrgRequest.Human.Profile | -  | 必填：true<br />                                           |
| 电子邮件地址 | SetUpOrgRequest.Human.Email   | -  | 必填：true<br />                                           |
| 电话     | SetUpOrgRequest.Human.Phone   | -  |                                                               |
| 密碼     | 字符串                           | -  |                                                               |




### SetUpOrgRequest.Human.Email



| 字段       | 类型  | 描述 | 验证                             |
| -------- | --- | -- | ------------------------------ |
| 电子邮件地址   | 字符串 | -  | string.email: true<br /> |
| 是电子邮件已验证 | 布尔值 | -  |                                |




### SetUpOrgRequest.Human.Phone



| 字段  | 类型  | 描述      | 验证                                                                                        |
| --- | --- | ------- | ----------------------------------------------------------------------------------------- |
| 电话  | 字符串 | 必须是全局数字 | string.min_len: 1<br /> string.max_len: 50<br /> string.prefix: +<br /> |
| 已验证 | 布尔值 | -       |                                                                                           |




### SetUpOrgRequest.Human.Profile



| 字段   | 类型                     | 描述 | 验证                                                            |
| ---- | ---------------------- | -- | ------------------------------------------------------------- |
| 名字   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 姓名   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 昵称   | 字符串                    | -  | string.max_len: 200<br />                               |
| 显示名称 | 字符串                    | -  | string.max_len: 200<br />                               |
| 首选语言 | 字符串                    | -  | string.max_len: 10<br />                                |
| 两性平等 | zitadel.user.v1.Gender | -  |                                                               |




### SetUpOrgRequest.Org



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 域  | 字符串 | -  | string.max_len: 200<br />                               |




### SetUpOrgResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| org_id | 字符串                      | -  |    |
| 用户ID   | 字符串                      | -  |    |




### 更新自定义域政策请求



| 字段                                              | 类型  | 描述 | 验证                                                            |
| ----------------------------------------------- | --- | -- | ------------------------------------------------------------- |
| org_id                                          | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户_login_must_be_domain                     | 布尔值 | -  |                                                               |
| validate_org_domains                          | 布尔值 | -  |                                                               |
| smtp_sender_address_matches_instance_domain | 布尔值 | -  |                                                               |




### 更新 CustomDomainPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新CustomOrgIAMPolicyRequest



| 字段                          | 类型  | 描述 | 验证                                                            |
| --------------------------- | --- | -- | ------------------------------------------------------------- |
| org_id                      | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户_login_must_be_domain | 布尔值 | -  |                                                               |




### 更新CustomOrgIAMPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新域政策请求



| 字段                                              | 类型  | 描述 | 验证 |
| ----------------------------------------------- | --- | -- | -- |
| 用户_login_must_be_domain                     | 布尔值 | -  |    |
| validate_org_domains                          | 布尔值 | -  |    |
| smtp_sender_address_matches_instance_domain | 布尔值 | -  |    |




### 更新域政策响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 IAMMemberRequest



| 字段   | 类型     | 描述                | 验证                                                            |
| ---- | ------ | ----------------- | ------------------------------------------------------------- |
| 用户ID | 字符串    | -                 | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | 如果没有角色，用户将不会有任何权限 |                                                               |




### 更新 IAM MemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateIDP JWTConfigRequest



| 字段           | 类型  | 描述 | 验证                                                            |
| ------------ | --- | -- | ------------------------------------------------------------- |
| idp_id       | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| jwt_endpoint | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 键盘终点         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题名称         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### UpdateIDP JWTConfigResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 IDPOIDCConfigRequest



| 字段         | 类型                              | 描述 | 验证                                                            |
| ---------- | ------------------------------- | -- | ------------------------------------------------------------- |
| idp_id     | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者        | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| client_id  | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 客户端_secret | 字符串                             | -  | string.max_len: 200<br />                               |
| 范围         | 重复的字符串                          | -  |                                                               |
| 显示名称映射     | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |
| 用户名映射      | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |




### 更新 IDPOIDCConfigResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新IDP请求



| 字段           | 类型                            | 描述 | 验证                                                            |
| ------------ | ----------------------------- | -- | ------------------------------------------------------------- |
| idp_id       | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称           | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| styling_type | zitadel.idp.v1.IDPStylingType | -  | 只有枚举：true<br />                                         |
| 自动注册         | 布尔值                           | -  |                                                               |




### UpdateIDS Response



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 LabelPolicyRequest



| 字段      | 类型  | 描述 | 验证                             |
| ------- | --- | -- | ------------------------------ |
| 主颜色     | 字符串 | -  | string.max_len: 50<br /> |
| 隐藏登录名后缀 | 布尔值 | -  |                                |
| 警告颜色    | 字符串 | -  | string.max_len: 50<br /> |
| 背景颜色    | 字符串 | -  | string.max_len: 50<br /> |
| 字体颜色    | 字符串 | -  | string.max_len: 50<br /> |
| 原始颜色_暗色 | 字符串 | -  | string.max_len: 50<br /> |
| 背景颜色_暗色 | 字符串 | -  | string.max_len: 50<br /> |
| 警告颜色_暗色 | 字符串 | -  | string.max_len: 50<br /> |
| 字体颜色_暗色 | 字符串 | -  | string.max_len: 50<br /> |
| 禁用水标记   | 布尔值 | -  |                                |




### 更新 LabelPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级锁定策略请求



| 字段     | 类型     | 描述           | 验证 |
| ------ | ------ | ------------ | -- |
| 最大密码尝试 | uint32 | 尝试失败，直到用户被锁定 |    |




### 更新 LockoutPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 LoginPolicy 请求



| 字段                        | 类型                                 | 描述                                                                       | 验证                    |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------ | --------------------- |
| 允许用户名密码                   | 布尔值                                | -                                                                        |                       |
| 允许注册                      | 布尔值                                | -                                                                        |                       |
| 允许外部idp                   | 布尔值                                | -                                                                        |                       |
| Force_mfa                 | 布尔值                                | -                                                                        |                       |
| 无密码类型                     | zitadel.policy.v1.PasswordlessType | -                                                                        | 只有枚举：true<br /> |
| 隐藏密码重置                    | 布尔值                                | -                                                                        |                       |
| 忽略未知用户名                   | 布尔值                                | -                                                                        |                       |
| 默认重定向_uri                 | 字符串                                | -                                                                        |                       |
| 密码检查生存期                   | google.protobuf.Duration           | -                                                                        |                       |
| 外部login_check_live      | google.protobuf.Duration           | -                                                                        |                       |
| mfa_init_skip_live      | google.protobuf.Duration           | -                                                                        |                       |
| 第二个因子校验生存期                | google.protobuf.Duration           | -                                                                        |                       |
| multi_factor_check_live | google.protobuf.Duration           | -                                                                        |                       |
| allow_domain_发现         | 布尔值                                | 如果设置为 true，则后缀(@domain)。 (om) 登录界面上一个未知用户名输入将与 org 域名匹配，并在成功时重定向到该组织的注册。 |                       |
| 禁用登录邮件地址                  | 布尔值                                | -                                                                        |                       |
| 禁用登录与手机                   | 布尔值                                | -                                                                        |                       |




### 更新 LoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 OIDCSettingsRequest



| 字段                  | 类型                       | 描述 | 验证 |
| ------------------- | ------------------------ | -- | -- |
| 存取令牌生存期             | google.protobuf.Duration | -  |    |
| id_token_live     | google.protobuf.Duration | -  |    |
| 刷新token_idle_过期时间 | google.protobuf.Duration | -  |    |
| 刷新令牌过期时间            | google.protobuf.Duration | -  |    |




### 更新 OIDCSettingsResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 OrgIAMPolicyRequest



| 字段                          | 类型  | 描述 | 验证 |
| --------------------------- | --- | -- | -- |
| 用户_login_must_be_domain | 布尔值 | -  |    |




### 更新 OrgIAMPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新密码策略请求



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 最大年龄天数 | uint32 | -  |    |
| 过期警告日  | uint32 | -  |    |




### 更新密码策略响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新密码复杂策略请求



| 字段   | 类型     | 描述 | 验证 |
| ---- | ------ | -- | -- |
| 最小长度 | uint32 | -  |    |
| 大写   | 布尔值    | -  |    |
| 小写   | 布尔值    | -  |    |
| 有数字  | 布尔值    | -  |    |
| 有符号  | 布尔值    | -  |    |




### 更新 PasswordComplexityPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级隐私政策



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| tos_link | 字符串 | -  |    |
| 隐私链接     | 字符串 | -  |    |
| 帮助链接     | 字符串 | -  |    |




### 升级隐私政策



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新SMSProviderTwilioRequest



| 字段    | 类型  | 描述 | 验证                                                            |
| ----- | --- | -- | ------------------------------------------------------------- |
| id    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 西德    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发件人编号 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 更新 SMSProviderTwilioResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新SMSProviderTwilioTokenRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 令牌 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 更新SMSProviderTwilioToken响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级SMTPConfig密码请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 密碼 | 字符串 | -  |    |




### 更新 SMTPConfigPasswordResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级SMTP配置请求



| 字段    | 类型  | 描述 | 验证                                                            |
| ----- | --- | -- | ------------------------------------------------------------- |
| 发件人地址 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发送者名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| tls   | 布尔值 | -  |                                                               |
| 主机    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 500<br /> |
| 用户    | 字符串 | -  |                                                               |




### 升级SMTP配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新秘书生成请求



| 字段     | 类型                                      | 描述 | 验证                                                            |
| ------ | --------------------------------------- | -- | ------------------------------------------------------------- |
| 生成器类型  | zitadel.settings.v1.SecretGeneratorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |
| 长度     | uint32                                  | -  |                                                               |
| expiry | google.protobuf.Duration                | -  |                                                               |
| 包含小字母  | 布尔值                                     | -  |                                                               |
| 包含大写字母 | 布尔值                                     | -  |                                                               |
| 包括数字   | 布尔值                                     | -  |                                                               |
| 包含符号   | 布尔值                                     | -  |                                                               |




### UpdateSecretGeneratorResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 查看



| 字段          | 类型     | 描述       | 验证 |
| ----------- | ------ | -------- | -- |
| 数据库         | 字符串    | -        |    |
| 视图名称        | 字符串    | -        |    |
| 处理序列        | uint64 | -        |    |
| 活动时间戳       | 时间戳    | 事件发生的时间戳 |    |
| 最后一次成功的破坏运行 | 时间戳    | -        |    |






