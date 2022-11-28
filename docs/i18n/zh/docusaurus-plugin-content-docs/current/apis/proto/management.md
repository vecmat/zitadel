---
title: zitadel/management.proto
---

> 此文档反映来自 API 1.0 的状态(20.04.2021)


## 管理服务 {#zitadelmanagementv1managementservice}


### Healthz

> **rpc** Healthz([HealthzRequest](#healthzrequest)) [HealthzResponse](#healthzresponse)

    GET: /healthz


### GetOIDC信息

> **rpc** GetOIDCInformation([GetOIDCInformationRequest](#getoidcinformationrequest)) [GetOIDCInformationResponse](#getoidcinformationresponse)

    GET: /zitadel/docs


### GetIAM

> **rpc** GetIAM([GetIAMRequest](#getiamrequest)) [GetIAMResponse](#getiamresponse)

返回一些需要的 IAM 设置 (Global Organisation ID, Zitadel Project ID)

    GET: /iam


### 获取支持语言

> **rpc** GetSupportedLanguages([GetSupportedLanguagesRequest](#getsupportedlanguagesrequest)) [GetSupportedLanguagesResponse](#getsupportedlanguagesresponse)

返回默认语言

    GET：/language


### GetUserByID

> **rpc** GetUserByID([GetUserByIDRequest](#getuserbyidrequest)) [GetUserByIDResponse](#getuserbyidresponse)

返回请求的完整蓝图用户 (人或机器)

    GET: /users/{id}


### GetUserByLoginNameGlobal

> **rpc** GetUserByLoginNameGlobal([GetUserByLoginNameGlobalRequest](#getuserbyloginnameglobalrequest) [GetUserByLoginNameGlobalResponse](#getuserbyloginnameglobalresponse)

搜索所有组织的用户 登录名称必须完全匹配

    GET: /global/users/_by_login_name


### ListUsers

> **rpc** ListUsers([ListUsersRequest](#listusersrequest)) [ListUsersResponse](#listusersresponse)

返回匹配查询 限制的用户，服务设定了默认限制

    POST: /users/_search


### ListUser更改

> **rpc** ListUserChanges([ListUserChangesRequest](#listuserchangesrequest)) [ListUserChangesResponse](#listuserchangesresponse)

返回用户的历史记录(每个事件) 应该始终设置限制，服务设置默认限制

    POST: /users/{user_id}/changes/_search


### IsUserUnique

> **rpc** IsUserUnique([IsUserUniqueRequest](#isuseruniquerequest)) [IsUserUniqueResponse](#isuseruniqueresponse)

返回使用搜索的电子邮件或用户名唯一的用户

    GET: /users/_is_唯一的


### AddHumanUser

> **rpc** AddHumanUser([AddHumanUserRequest](#addhumanuserrequest)) [AddHumanUserResponse](#addhumanuserresponse)

创建人类类型的用户 如果电子邮件未验证或未设置密码，则邮件将发送给用户 如果给定了密码。 用户必须在下次登录时更改

    POST： /users/人


### ImportHumanUser

> **rpc** ImportHumanUser([ImportHumanUserRequest](#importhumanuserrequest)) [ImportHumanUserResponse](#importhumanuserresponse)

创建人类类型的用户 如果电子邮件未验证或未设置密码，则邮件将发送给用户 如果给定了密码。 用户无需在下次登录时更改

    POST: /users/human/_import


### 添加机器用户

> **rpc** AddMachineUser([AddMachineUserRequest](#addmachineuserrequest)) [AddMachineUser Response](#addmachineuserresponse)

创建机器类型的用户

    POST： /users/机


### DeactivateUser

> **rpc** DeactivateUser([DeactivateUserRequest](#deactivateuserrequest)) [DeactivateUserResponse](#deactivateuserresponse)

更改用户状态以停用 如果用户状态已经停用，用户将无法登录 返回一个错误

    POST: /users/{id}/_停用


### 重新激活用户

> **rpc** 重新激活用户([重新激活用户请求](#reactivateuserrequest)) [重新激活用户响应](#reactivateuserresponse)

将用户状态更改为活动 返回一个错误，如果用户状态未被停用

    POST: /users/{id}/_reactivation


### 锁定用户

> **rpc** LockUser([LockUserRequest](#lockuserrequest)) [LockUserResponse](#lockuserresponse)

更改用户状态以停用 如果用户状态已被锁定，用户将无法登录 返回一个错误

    POST: /users/{id}/_lock


### 解锁用户

> **rpc** UnlockUser([UnlockUserRequest](#unlockuserrequest)) [UnlockUserResponse](#unlockuserresponse)

将用户状态更改为活动 返回一个错误，如果用户状态未被锁定

    POST: /users/{id}/_解锁


### RemoveUser

> **rpc** RemoveUser([RemoveUserRequest](#removeuserrequest)) [RemoveUserResponse](#removeuserresponse)

更改用户状态以删除

    删除: /users/{id}


### 更新用户名

> **rpc** UpdateUserName([UpdateUserNameRequest](#updateusernamerequest)) [UpdateUserNameResponse](#updateusernameresponse)

更改用户名

    PUT: /users/{user_id}/用户名


### SetUserMetadata

> **rpc** SetUserMetadata([SetUserMetadataRequest](#setusermetadatarequest)) [SetUserMetadataResponse](#setusermetadataresponse)

按键设置用户元数据

    POST: /users/{id}/metadata/{key}


### BulkSetUserMetadata

> **rpc** BulkSetUserMetadata([BulkSetUserMetadataRequest](#bulksetusermetadatarequest)) [BulkSetUserMetadataResponse](#bulksetusermetadataresponse)

设置用户元数据列表

    POST: /users/{id}/metadata/_blow


### ListUserMetadata

> **rpc** ListUserMetadata([ListUserMetadataRequest](#listusermetadatarequest)) [ListUserMetadataResponse](#listusermetadataresponse)

返回用户元数据

    POST: /users/{id}/metadata/_search


### GetUserMetadata

> **rpc** GetUserMetadata([GetUserMetadataRequest](#getusermetadatarequest)) [GetUserMetadataResponse](#getusermetadataresponse)

按键返回用户元数据

    获取：/users/{id}/metadata/{key}


### RemoveUserMetadata

> **rpc** RemoveUserMetadata([RemoveUserMetadataRequest](#removeusermetadatarequest)) [RemoveUserMetadataResponse](#removeusermetadataresponse)

按键删除用户元数据

    DELETE: /users/{id}/metadata/{key}


### BulkRemoveUserMetadata

> **rpc** BulkRemoveUserMetadata([BulkRemoveUserMetadataRequest](#bulkremoveusermetadatarequest)) [BulkRemoveUserMetadataResponse](#bulkremoveusermetadataresponse)

设置用户元数据列表

    DELETE: /users/{id}/metadata/_blow


### GetHumanProfile

> **rpc** GetHumanProfile([GetHumanProfileRequest](#gethumanprofilerequest)) [GetHumanProfileResponse](#gethumanprofileresponse)

返回人的资料

    获取：/users/{user_id}/profile


### 更新人类资料

> **rpc** UpdateHumanProfile([UpdateHumanProfileRequest](#updatehumanprofilerequest)) [UpdateHumanProfileResponse](#updatehumanprofileresponse)

改变人的简况。

    PUT: /users/{user_id}/profile


### GetHumanEmail

> **rpc** GetHumanEmail([GetHumanEmailRequest](#gethumanemailrequest)) [GetHumanEmailResponse](#gethumanemailresponse)

GetHumanEmail 返回电子邮件并验证人类状态

    GET: /users/{user_id}/email


### 更新 HumanEmail

> **rpc** UpdateHumanEmail([UpdateHumanEmailRequest](#updatehumanemailrequest)) [UpdateHumanEmailResponse](#updatehumanemailresponse)

更改人的电子邮件 如果状态未被验证, 用户将获得验证电子邮件

    PUT: /users/{user_id}/email


### 重新人类倡议

> **rpc** ResendHumanInitialization([ResendHumanInitializationRequest](#resendhumaninitializationrequest) [ResendHumanInitializationResponse](#resendhumaninitializationresponse)

重发电子邮件到给定的电子邮件地址以完成用户的初始化过程 如果提供则更改用户的电子邮件地址

    POST: /users/{user_id}/_resend_initialization


### ResendHumanEmail验证

> **rpc** ResendHumanEmailVerification([ResendHumanEmailVerificationRequest](#resendhumanemailverificationrequest) [ResendHumanEmailVerificationResponse](#resendhumanemailverificationresponse)

重发电子邮件到给定的电子邮件地址来完成用户的电子邮件验证过程

    POST: /users/{user_id}/email/_resend_certification


### GetHumanPhone

> **rpc** GetHumanPhone([GetHumanPhoneRequest](#gethumanphonerequest)) [GetHumanPhoneResponse](#gethumanphoneresponse)

返回手机和已验证的电话状态

    获取：/users/{user_id}/电话


### 最新人机电话

> **rpc** UpdateHumanPhone([UpdateHumanPhoneRequest](#updatehumanphonerequest)) [UpdateHumanPhoneResponse](#updatehumanphoneresponse)

更改电话号码 如果未设置，用户将收到短信以验证号码。

    PUT: /users/{user_id}/电话


### 移除人类电话

> **rpc** RemoveHumanPhone([RemoveHumanPhoneRequest](#removehumanphonerequest)) [RemoveHumanPhoneResponse](#removehumanphoneresponse)

移除人的电话号码

    删除: /users/{user_id}/电话


### ResendHumanPhone验证

> **rpc** ResendHumanPhoneVerification([ResendHumanPhoneVerificationRequest](#resendhumanphoneverificationrequest) [ResendHumanPhoneVerificationResponse](#resendhumanphoneverificationresponse)

短信将发送到指定的电话号码，以完成用户的电话验证过程

    POST: /users/{user_id}/phone/_resend_certification


### RemoveHumanAvatar

> **rpc** RemoveHumanAvatar([RemoveHumanAvatarRequest](#removehumanavatarrequest)) [RemoveHumanAvatarResponse](#removehumanavatarresponse)

删除人的头像数量

    删除: /users/{user_id}/头像


### SetHumanInitialPassword

> **rpc** SetHumanInitialPassword([SetHumanInitialPasswordRequest](#sethumaninitialpasswordrequest)) [SetHumanInitialPasswordResponse](#sethumaninitialpasswordresponse)

已废弃：使用 SetHumanPassword

    POST: /users/{user_id}/password/_initialize


### SetHumanPassword

> **rpc** SetHumanPassword([SetHumanPasswordRequest](#sethumanpasswordrequest) [SetHumanPasswordResponse](#sethumanpasswordresponse)

为用户设置新密码 默认情况下，用户必须在下次登录上更改密码 如果用户不必在下次登录上更改密码，请将不更改密码设置为 true。

    POST: /users/{user_id}/密码


### SendHumanResetPassword通知

> **rpc** SendHumanResetPasswordNotification([SendHumanResetPasswordNotificationRequest](#sendhumanresetpasswordnotificationrequest) [SendHumanResetPasswordNotificationResponse](#sendhumanresetpasswordnotificationresponse)

一封电子邮件将被发送到指定的地址以重置用户密码

    POST: /users/{user_id}/password/_reset


### ListHumanAuthfactors

> **rpc** ListHumanAuthFactors([ListHumanAuthFactorsRequest](#listhumanauthfactorsrequest)) [ListHumanAuthFactorsResponse](#listhumanauthfactorsresponse)

返回在用户上配置的所有因素(第二个和多个)

    POST: /users/{user_id}/auth_factors/_search


### RemoveHumanauthor FactorOTP

> **rpc** RemoveHumanAuthauthor FactorOTP([RemoveHumanAuthorOTPRequest](#removehumanauthfactorotprequest)) [RemoveHumanAuthauthor FactorOTPResponse](#removehumanauthfactorotpresponse)

将从用户 中移除otp 第二个因数，因为每个用户只能配置一个otp 已配置的将被删除

    DELETE: /users/{user_id}/auth_factors/otp


### RemoveHumanAuthor FactorU2F

> **rpc** RemoveHumanAuthauthor FactorU2F([RemoveHumanAuthor FactorU2FRequest](#removehumanauthfactoru2frequest) [RemoveHumanAuthers FactorU2FResponse](#removehumanauthfactoru2fresponse)

U2f (大学第二因素) 将从用户中移除

    DELETE: /users/{user_id}/auth_factors/u2f/{token_id}


### 无ListHumanPasswords

> **rpc** ListHumanPasswordless ([ListHumanPasswordlessRequest](#listhumanpasswordlessrequest)) [ListHumanPasswordlessment](#listhumanpasswordlessresponse)

返回所有配置的无密码身份验证器

    POST: /users/{user_id}/passwordless/_search


### 添加无密码注册

> **rpc** AddPasswordlessRegistration([AddPasswordless RegistrationRequest](#addpasswordlessregistrationrequest)) [AddPasswordless RegistrationResponse](#addpasswordlessregistrationresponse)

向用户添加一个新的无密码认证链接并直接返回 此链接使用户能够注册一个新的设备，如果当前的无密码设备是所有平台认证器 。 。用户已经注册 Windows Hello 并想要在 iPhone 上注册 Facebook

    POST: /users/{user_id}/passwordless/_link


### SendPasswordless 注册

> **rpc** SendPasswordlessRegistration([SendPasswordlessRegistrationRequest](#sendpasswordlessregistrationrequest)) [SendPasswordLessRegistrationResponse](#sendpasswordlessregistrationresponse)

向用户添加一个新的无密码认证链接并将其发送到注册的电子邮件地址 此链接使用户能够注册一个新设备，如果当前无密码设备是所有平台身份验证器 e。 。用户已经注册 Windows Hello 并想要在 iPhone 上注册 Facebook

    POST: /users/{user_id}/passwordless/_send_link


### 移除人类密码

> **rpc** RemoveHumanPasswordless([RemoveHumanPasswordlessRequest](#removehumanpasswordlessrequest)) [RemoveHumanPasswordlessment](#removehumanpasswordlessresponse)

移除一个已配置的无密码身份验证器

    删除: /users/{user_id}/密码无/{token_id}


### 更新机

> **rpc** UpdateMachine([UpdateMachineRequest](#updatemachinerequest)) [UpdateMachineResponse](#updatemachineresponse)

更改机器用户

    PUT: /users/{user_id}/机


### GetMachineKeyByIDs

> **rpc** GetMachineKeyByIDs([GetMachineKeyByIDsRequest](#getmachinekeybyidsrequest)) [GetMachineKeyByIDsResponse](#getmachinekeybyidsresponse)

返回一个 (机器) 用户的机器密钥

    获取：/users/{user_id}/keys/{key_id}


### ListMachineKeys

> **rpc** ListMachineKeys([ListMachineKeysRequest](#listmachinekeysrequest)) [ListMachineKeysResponse](#listmachinekeysresponse)

返回匹配查询 的所有机器键值应该始终设定。 服务设置了默认限制

    POST: /users/{user_id}/keys/_search


### 添加MachineKey

> **rpc** AddMachineKey([AddMachineKeyRequest](#addmachinekeyrequest)) [AddMachineKeyResponse](#addmachinekeyresponse)

生成一个新的机器键，返回后应存储详细信息

    POST: /users/{user_id}/密钥


### RemoveMachineKey

> **rpc** RemoveMachineKey([RemoveMachineKeyRequest](#removemachinekeyrequest)) [RemoveMachineKeyResponse](#removemachinekeyresponse)

移除机器密钥

    DELETE: /users/{user_id}/keys/{key_id}


### 获取令牌字体ID

> **rpc** GetPersonalAccessTokenByIDs([GetPersonalAccessTokenByIDsRequest](#getpersonalaccesstokenbyidsrequest) [GetPersonalAccessTokenByIDsResponse](#getpersonalaccesstokenbyidsresponse)

返回用户的个人访问令牌

    GET: /users/{user_id}/pats/{token_id}


### 邮件列表访问令牌

> **rpc** ListPersonalAccessTokens([ListPersonalAccessTokensRequest](#listpersonalaccesstokensrequest)) [ListPersonalAccessTokensResponse](#listpersonalaccesstokensresponse)

返回匹配查询 的用户的所有个人访问令牌。 服务设置了默认限制

    POST: /users/{user_id}/pats/_search


### AddPersonalAccessToken

> **rpc** AddPersonalAccessToken([AddPersonalAccessTokenRequest](#addpersonalaccesstokenrequest)) [AddPersonalAccessTokenResponse](#addpersonalaccesstokenresponse)

为机器用户生成一个新的个人访问令牌，返回后应存储详细信息

    POST: /users/{user_id}/pats


### 移除个人访问令牌

> **rpc** RemovePersonalAccessToken([RemovePersonalAccessTokenRequest](#removepersonalaccesstokenrequest) [RemovePersonalAccessTokenResponse](#removepersonalaccesstokenresponse)

删除个人访问令牌

    DELETE: /users/{user_id}/pats/{token_id}


### ListHumanLinkedIDPs

> **rpc** ListHumanLinkedIDPs([ListHumanLinkedIDPsRequest](#listhumanlinkedidpsrequest)) [ListHumanLinkedIDPsResponse](#listhumanlinkedidpsresponse)

列出人类配置的所有身份提供者(社交登录) (例如Google、微软、AD等...) 限制应该总是设置，默认限制由服务设置

    POST: /users/{user_id}/idps/_search


### RemoveHumanLinkedIDP

> **rpc** RemoveHumanLinkedIDP([RemoveHumanLinkedIDPRequest](#removehumanlinkedidprequest)) [RemoveHumanLinkedIDPResponse](#removehumanlinkedidpresponse)

移除人的配置身份提供者(社交登录)

    DELETE: /users/{user_id}/idps/{idp_id}/{linked_user_id}


### 用户列表

> **rpc** ListUserMemberships([ListUserMembersRequest](#listusermembershipsrequest)) [ListUsersMembersResponse](#listusermembershipsresponse)

显示用户拥有iin ZITADEL(ZITADEL管理器)的所有权限 应该始终设置限制。 服务设置了默认限制

    POST: /users/{user_id}/memberships/_search


### GetMyOrg

> **rpc** GetMyOrg([GetMyOrgRequest](#getmyorgrequest)) [GetMyOrgResponse](#getmyorgresponse)

返回标题中给出的org

    GET: /orgs/me


### GetOrgByDomainGlobal

> **rpc** GetOrgByDomainGlobal([GetOrgByDomainGlobalRequest](#getorgbydomainglobalrequest) [GetOrgByDomainGlobalResponse](#getorgbydomainglobalresponse)

搜索所有组织 域名必须完全匹配

    GET: /global/orgs/_by_domain


### ListOrgChanges

> **rpc** ListOrgChanges([ListOrgChangesRequest](#listorgchangesrequest)) [ListOrgChangesResponse](#listorgchangesresponse)

返回我的组织历史(每个事件) 应该始终设置限制，服务设置默认限制

    POST: /orgs/me/changes/_search


### 添加Org

> **rpc** AddOrg([AddOrgRequest](#addorgrequest)) [AddOrgResponse](#addorgresponse)

创建一个新组织

    POST： /orgs


### 更新 Org

> **rpc** UpdateOrg([UpdateOrgRequest](#updateorgrequest)) [UpdateOrgResponse](#updateorgresponse)

更改我的组织

    PUT: /orgs/me


### DeactivateOrg

> **rpc** DeactivateOrg([DeactivateOrgRequest](#deactivateorgrequest)) [DeactivateOrgResponse](#deactivateorgresponse)

设置我的组织状态以停用 此组织的用户将无法登录

    POST： /orgs/me/_停用


### 重新激活

> **rpc** ReactivateOrg([ReactivateOrgRequest](#reactivateorgrequest)) [ReactivateOrgResponse](#reactivateorgresponse)

将我的组织状态设置为活动状态

    POST: /orgs/me/_reactivation


### SetOrgMetadata

> **rpc** SetOrgMetadata([SetOrgMetadataRequest](#setorgmetadatarequest)) [SetOrgMetadataResponse](#setorgmetadataresponse)

按键设置 org 元数据

    POST: /metadata/{key}


### BulkSetOrgMetadata

> **rpc** BulkSetOrgMetadata([BulkSetOrgMetadataRequest](#bulksetorgmetadatarequest)) [BulkSetOrgMetadataResponse](#bulksetorgmetadataresponse)

设置 org 元数据列表

    POST: /metadata/_blow


### ListOrgMetadata

> **rpc** ListOrgMetadata([ListOrgMetadataRequest](#listorgmetadatarequest)) [ListOrgMetadataResponse](#listorgmetadataresponse)

返回 org 元数据

    POST: /metadata/_search


### GetOrgMetadata

> **rpc** GetOrgMetadata([GetOrgMetadataRequest](#getorgmetadatarequest)) [GetOrgMetadataResponse](#getorgmetadataresponse)

返回按键的 org 元数据

    GET: /metadata/{key}


### RemoveOrgMetadata

> **rpc** RemoveOrgMetadata([RemoveOrgMetadataRequest](#removeorgmetadatarequest)) [RemoveOrgMetadataResponse](#removeorgmetadataresponse)

按键删除 org 元数据

    DELETE: /metadata/{key}


### BulkRemoveOrgMetadata

> **rpc** BulkRemoveOrgMetadata([BulkRemoveOrgMetadataRequest](#bulkremoveorgmetadatarequest)) [BulkRemoveOrgMetadataResponse](#bulkremoveorgmetadataresponse)

设置 org 元数据列表

    DELETE: /metadata/_blow


### ListOrgDomains

> **rpc** ListOrgDomains([ListOrgDomainsRequest](#listorgdomainsrequest)) [ListOrgDomainsResponse](#listorgdomainsresponse)

返回我的组织的所有注册域 应该始终设置限制，有一个由服务设定的默认限制

    POST: /orgs/me/domains/_search


### AddOrgDomain

> **rpc** AddOrgDomain([AddOrgDomainRequest](#addorgdomainrequest)) [AddOrgDomainResponse](#addorgdomainresponse)

向我的组织添加一个新域

    POST： /orgs/me/domains


### 移除OrgDomain

> **rpc** RemoveOrgDomain([RemoveOrgDomainRequest](#removeorgdomainrequest)) [RemoveOrgDomainResponse](#removeorgdomainresponse)

已从我的组织中移除域

    DELETE: /orgs/me/domains/{domain}


### 生成 OrgDomainValidation

> **rpc** GenerateOrgDomainValidation([GenerateOrgDomainValidationRequest](#generateorgdomainvalidationrequest) [GenerateOrgDomainValidationResponse](#generateorgdomainvalidationresponse)

生成一个新文件来验证您的域

    POST: /orgs/me/domains/{domain}/validation/_生成


### ValidateOrgDomain

> **rpc** ValidateOrgDomain([ValidateOrgDomainRequest](#validateorgdomainrequest)) [ValidateOrgDomainResponse](#validateorgdomainresponse)

使用所选方法 验证的域名必须是唯一的

    POST: /orgs/me/domains/{domain}/validation/_valides


### SetPrimaryOrgDomain

> **rpc** SetPrimaryOrgDomain([SetPrimaryOrgDomainRequest](#setprimaryorgdomainrequest)) [SetPrimaryOrgDomainResponse](#setprimaryorgdomainresponse)

设置该域为主要 主域作为后缀显示在组织用户首选的用户名上

    POST: /orgs/me/domains/{domain}/_set_prior


### ListOrgMemberes

> **rpc** ListOrgMemberRoles([ListOrgMemberRolesRequest](#listorgmemberrolesrequest)) [ListOrgMemberRolesResponse](#listorgmemberrolesresponse)

返回组织管理员的所有ZITADEL角色

    POST: /orgs/members/roles/_search


### ListOrgMembers

> **rpc** ListOrgMembers([ListOrgMembersRequest](#listorgmembersrequest)) [ListOrgMembersRespons](#listorgmembersresponse)

返回该组织的所有ZITADEL经理(不包括项目和项目赠款经理) 应始终设定限制。 服务设置了默认限制

    POST: /orgs/me/members/_search


### AddOrgMember

> **rpc** AddOrgMemberer([AddOrgMemberRequest](#addorgmemberrequest)) [AddOrgMemberResponse](#addorgmemberresponse)

添加一个新的组织经理，允许管理ZITADEL。

    POST： /orgs/me/members


### 更新 OrgMember

> **rpc** UpdateOrgMemberer([UpdateOrgMemberRequest](#updateorgmemberrequest)) [UpdateOrgMemberResponse](#updateorgmemberresponse)

更改组织管理器

    PUT: /orgs/me/members/{user_id}


### 移除OrgMember

> **rpc** RemoveOrgMemberer([RemoveOrgMemberRequest](#removeorgmemberrequest)) [RemoveOrgMemberResponse](#removeorgmemberresponse)

删除组织管理器

    DELETE: /orgs/me/members/{user_id}


### GetProjectByID

> **rpc** GetProjectByID([GetProjectByIDRequest](#getprojectbyidrequest)) [GetProjectByIDResponse](#getprojectbyidresponse)

从我的组织返回一个项目 (没有授予的项目)

    获取：/projects/{id}


### GetGrantedProjectByID

> **rpc** GetGrantedProjectByID([GetGrantedProjectByIDRequest](#getgrantedprojectbyidrequest)) [GetGrantedProjectByIDResponse](#getgrantedprojectbyidresponse)

返回一个我的组织从另一个组织授予的项目

    GET: /granted_projects/{project_id}/grants/{grant_id}


### 列表项目

> **rpc** ListProjects([ListProjectsRequest](#listprojectsrequest)) [ListtsResponse](#listprojectsresponse)

返回我的组织是所有者的所有项目 (没有授予的项目) 应该始终设置限制。 服务设置了默认限制

    POST： /projects/_search


### ListGranted项目

> **rpc** ListGrantedProjects([ListGrantedProjectsRequest](#listgrantedprojectsrequest)) [ListGrantedProjectsRespons](#listgrantedprojectsresponse)

返回我的组织从另一个组织授予的所有项目 应该始终设置限制，服务设定了默认限制

    POST： /granted_projects/_search


### ListGrantedProjectRole

> **rpc** ListGrantedProjectRoles([ListedProjectRolesRequest](#listgrantedprojectrolesrequest)) [ListGrantedProjectRolesResponse](#listgrantedprojectrolesresponse)

返回项目授予的所有角色 应该始终设置，服务设置默认限制

    GET: /granted_projects/{project_id}/grants/{grant_id}/roles/_search


### 列表项目更改

> **rpc** ListProjectChanges([ListProjectChangesRequest](#listprojectchangesrequest)) [ListProjectChangesResponse](#listprojectchangesresponse)

返回工程的历史记录(每个事件) 应该始终设置限制，服务设定默认限制

    POST: /projects/{project_id}/changes/_search


### 添加项目

> **rpc** AddProject([AddProjectRequest](#addprojectrequest)) [AddProjectResponse](#addprojectresponse)

向本组织添加一个新项目

    POST： /项目


### 更新项目

> **rpc** UpdateProject([UpdateProjectRequest](#updateprojectrequest)) [UpdateProjectResponse](#updateprojectresponse)

更改一个项目

    PUT: /projects/{id}


### DeactivateProject

> **rpc** 停用项目([停用项目请求](#deactivateprojectrequest)) [停用项目响应](#deactivateprojectresponse)

设置要停用的项目状态 如果项目已经停用，返回一个错误

    POST: /projects/{id}/_停用


### 重新激活项目

> **rpc** 重新激活项目([重新激活项目请求](#reactivateprojectrequest)) [重新激活项目响应](#reactivateprojectresponse)

设置项目状态为活动 如果项目未被停用，则返回一个错误

    POST: /projects/{id}/_reactivation


### 删除项目

> **rpc** RemoveProject([RemoveProjectRequest](#removeprojectrequest)) [RemoveProjectResponse](#removeprojectresponse)

删除项目 此项目的所有项目赠款、申请和用户赠款将被删除

    DELETE: /projects/{id}


### 列表项目角色

> **rpc** ListProjectRoles([ListProjectRolesRequest](#listprojectrolesrequest)) [ListProjectRolesResponse](#listprojectrolesresponse)

返回匹配搜索查询的项目的所有角色 如果没有请求限制。 默认限制将被设置，如果限制更高，则默认错误将被返回

    POST: /projects/{project_id}/roles/_search


### 附加组件项目角色

> **rpc** AddProjectRole([AddProjectRoleRequest](#addprojectrolerequest)) [AddProjectRoleResponse](#addprojectroleresponse)

为项目添加一个角色，密钥必须在项目中唯一的

    POST: /projects/{project_id}/角色


### 批量附加项目角色

> **rpc** BulkAddProjectRoles([BulkAddProjectRolesRequest](#bulkaddprojectrolesrequest) [BulkAddProjectRolesResponse](#bulkaddprojectrolesresponse)

在一个请求中添加项目角色列表

    POST: /projects/{project_id}/roles/_blow


### 更新项目角色

> **rpc** UpdateProjectRole([UpdateProjectRoleRequest](#updateprojectrolerequest)) [UpdateProjectRoleResponse](#updateprojectroleresponse)

更改项目角色，键不可编辑 如果键值应该改变，删除角色并创建一个新的

    PUT: /projects/{project_id}/roles/{role_key}


### 删除项目角色

> **rpc** RemoveProjectRole([RemoveProjectRoleRequest](#removeprojectrolerequest)) [RemoveProjectRoleResponse](#removeprojectroleresponse)

取消用户赠款、项目赠款和项目中的角色

    DELETE: /projects/{project_id}/roles/{role_key}


### 列表项目成员角色

> **rpc** ListProjectMemberRoles([ListProjectMemberolesRequest](#listprojectmemberrolesrequest)) [ListProjectMemberolesResponse](#listprojectmemberrolesresponse)

返回项目管理员的所有ZITADEL角色

    POST: /projects/members/roles/_search


### 列表项目成员

> **rpc** ListProjectMembers([ListProjectMembersRequest](#listprojectmembersrequest)) [ListProjectMembersRespons](#listprojectmembersresponse)

返回一个项目 应该始终设置的所有ZITADEL管理员，有一个由服务设定的默认限制

    POST: /projects/{project_id}/members/_search


### 附加项目成员

> **rpc** AddProjectMemberer([AddProjectMemberRequest](#addprojectmemberrequest)) [AddProjectMemberResponse](#addprojectmemberresponse)

添加一个新的项目经理，允许ZITADEL管理

    POST: /projects/{project_id}/成员


### 更新项目成员

> **rpc** UpdateProjectMemberer([UpdateProjectMemberRequest](#updateprojectmemberrequest)) [UpdateProjectMemberResponse](#updateprojectmemberresponse)

更换项目经理，允许他在ZITADEL进行管理

    PUT: /projects/{project_id}/members/{user_id}


### 移除项目成员

> **rpc** 移除项目成员([移除项目成员请求](#removeprojectmemberrequest)) [移除项目成员响应](#removeprojectmemberresponse)

删除项目经理，该经理被允许在 ZITADEL中管理

    DELETE: /projects/{project_id}/members/{user_id}


### GetAppByID

> **rpc** GetAppByID([GetAppByIDRequest](#getappbyidrequest)) [GetAppByIDResponse](#getappbyidresponse)

返回应用程序 (oidc 或 api)

    获取：/projects/{project_id}/apps/{app_id}


### ListApps

> **rpc** ListApps([ListAppsRequest](#listappsrequest)) [ListAppsResponse](#listappsresponse)

返回匹配查询 限制的项目的所有应用程序，服务设定了默认限制

    POST: /projects/{project_id}/apps/_search


### ListApp更改

> **rpc** ListAppChanges([ListAppChangesRequest](#listappchangesrequest)) [ListAppChangesResponse](#listappchangesresponse)

返回应用程序的历史记录(每个事件) 应该始终设置限制，服务设置默认限制

    POST: /projects/{project_id}/apps/{app_id}/changes/_search


### AddOIDCApp

> **rpc** AddOIDCApp([AddOIDCApp请求](#addoidcapprequest)) [AddOIDCAppResponse](#addoidcappresponse)

添加一个新的 oidc 客户端 返回一个客户端 id 如果需要返回一个新生成的密钥 (取决于配置)

    POST: /projects/{project_id}/apps/oidc


### AddSAMLApp

> **rpc** AddSAMLApp([AddSAMLAppRequest](#addsamlapprequest)) [AddSAMLAppResponse](#addsamlappresponse)

添加一个新的采样服务提供商 返回一个实体ID

    POST: /projects/{project_id}/apps/saml


### AddAPIApp

> **rpc** AddAPIApp([AddAPIAppRequest](#addapiapprequest)) [AddAPIAppResponse](#addapiappresponse)

添加一个新的 api 应用程序 返回客户端id 如果需要返回一个新生成的密钥 (取决于配置)

    POST: /projects/{project_id}/apps/api


### 更新应用

> **rpc** UpdateApp([UpdateApp请求](#updateapprequest)) [UpdateAppResponse](#updateappresponse)

更改应用程序

    PUT: /projects/{project_id}/apps/{app_id}


### 更新 OIDCApp配置

> **rpc** UpdateOIDCAppConfig([UpdateOIDCAppConfigRequest](#updateoidcappconfigrequest)) [UpdateOIDCAppConfigResponse](#updateoidcappconfigresponse)

更改 oidc 客户端的配置

    PUT: /projects/{project_id}/apps/{app_id}/oidc_config


### 更新 SAMLApp配置

> **rpc** UpdateSAMLAppConfig([UpdateSAMLAppConfigRequest](#updatesamlappconfigrequest)) [UpdateSAMLAppConfigResponse](#updatesamlappconfigresponse)

更改样本应用程序的配置

    PUT: /projects/{project_id}/apps/{app_id}/saml_config


### 更新 APIApp配置

> **rpc** UpdateAPIAppConfig([UpdateAPIAppConfigRequest](#updateapiappconfigrequest)) [UpdateAPIAppConfigResponse](#updateapiappconfigresponse)

更改 api 应用程序的配置

    PUT: /projects/{project_id}/apps/{app_id}/api_config


### 停用应用

> **rpc** DeactivateApp([DeactivateAppRequest](#deactivateapprequest)) [DeactivateAppResponse](#deactivateappresponse)

设置已停用的 状态，不可能为已停用的应用程序请求令牌 返回一个错误，如果已停用的话。

    POST: /projects/{project_id}/apps/{app_id}/_停用


### 重新激活应用

> **rpc** 重新激活App([重新激活App请求](#reactivateapprequest)) [重新激活AppResponse](#reactivateappresponse)

设定状态为活动 如果未激活则返回错误

    POST: /projects/{project_id}/apps/{app_id}/_reactivate


### 移除应用

> **rpc** RemoveApp([RemoveAppRequest](#removeapprequest)) [RemoveAppResponse](#removeappresponse)

移除应用程序

    DELETE: /projects/{project_id}/apps/{app_id}


### RegenerateOIDCClientSecret

> **rpc** ReenerateOIDCClientSecretary ([RegenerateOIDCClientSecretary Request](#regenerateoidcclientsecretrequest) [ReenerateOIDCClientResponse Secretary](#regenerateoidcclientsecretresponse)

为 oidc 客户端生成新的客户端密钥，请确保保存响应

    POST: /projects/{project_id}/apps/{app_id}/oidc_config/_generate_client_secret


### RegenerateAPIClientSecret

> **rpc** RegenerateAPIClientSecret([RegenerateAPIClientSecretRequest](#regenerateapiclientsecretrequest)) [RegenerateAPIClientSecretResponse](#regenerateapiclientsecretresponse)

为 api 应用程序生成一个新的客户端秘密，请确保保存响应

    POST: /projects/{project_id}/apps/{app_id}/api_config/_generate_client_secret


### GetAppKey

> **rpc** GetAppAppKey([GetAppAppKeyRequest](#getappkeyrequest)) [GetAppKeyResponse](#getappkeyresponse)

返回应用程序密钥

    获取：/projects/{project_id}/apps/{app_id}/keys/{key_id}


### ListAppKey

> **rpc** ListAppKeys([ListAppKeysRequest](#listappkeysrequest)) [ListAppKeysResponse](#listappkeysresponse)

返回匹配结果的所有应用程序密钥 应该始终设置限制，有一个由服务设置的默认限制

    POST: /projects/{project_id}/apps/{app_id}/keys/_search


### AddAppKey

> **rpc** AddAppKey([AddAppKeyRequest](#addappkeyrequest)) [AddAppKeyResponse](#addappkeyresponse)

创建一个新的应用程序密钥 因此将返回密钥详情，确保保存它

    POST: /projects/{project_id}/apps/{app_id}/keys


### 移除应用密钥

> **rpc** RemoveAppKey([RemoveAppKeyRequest](#removeappkeyrequest)) [RemoveAppKeyResponse](#removeappkeyresponse)

移除应用程序密钥

    DELETE: /projects/{project_id}/apps/{app_id}/keys/{key_id}


### ListProjectGrantChanges

> **rpc** ListProjectGrantChanges([ListProjectGrantChangesRequest](#listprojectgrantchangesrequest) [ListGrantChangesResponse](#listprojectgrantchangesresponse)

返回项目授予历史记录(每个事件) 应该始终设置限制，服务设置默认限制

    POST: /projects/{project_id}/grants/{grant_id}/changes/_search


### GetProjectGrantByID

> **rpc** GetProjectGrantByID([GetProjectGrantByIDRequest](#getprojectgrantbyidrequest)) [GetProjectGrantByIDResponse](#getprojectgrantbyidresponse)

返回一个项目赠款(项目赠款=为我的项目给另一个组织)

    GET: /projects/{project_id}/grants/{grant_id}


### ListProject补助金

> **rpc** ListProjectGrants([ListProjectGrantsRequest](#listprojectgrantsrequest)) [ListProjectGrantsResponse](#listprojectgrantsresponse)

返回匹配查询的所有项目赠予， (ProjectGrant = 为我的项目授予另一个组织) 应该始终设置限制，服务设定默认限制

    POST: /projects/{project_id}/grants/_search


### ListAllProjectranges

> **rpc** ListAllProjectGrants([ListAllProjectGrantsRequest](#listallprojectgrantsrequest)) [ListAllProjectGrantsRespons](#listallprojectgrantsresponse)

返回匹配查询的所有项目赠予， (ProjectGrant = 为我的项目授予另一个组织) 应该始终设置限制，服务设定默认限制

    POST： /projectgrants/_search


### AddProjectGrant

> **rpc** AddProjectGrant([AddProjectGrantRequest](#addprojectgrantrequest)) [AddProjectGrantResponse](#addprojectgrantresponse)

添加新的项目赠款(项目赠款=为我的项目提供赠款) 项目赠款将列入其他组织已授予的项目

    POST： /projects/{project_id}/赠品


### 更新 ProjectGrant

> **rpc** UpdateProjectGrant([UpdateProjectGrantRequest](#updateprojectgrantrequest)) [UpdateProjectGrantResponse](#updateprojectgrantresponse)

更改项目赠款(项目赠款=为我的项目赠款) 项目赠款将列入其他组织授予的项目

    PUT: /projects/{project_id}/grants/{grant_id}


### 停用ProjectGrant

> **rpc** 停用ProjectGrant([停用ProjectGrantRequest](#deactivateprojectgrantrequest)) [停用ProjectGrantResponse](#deactivateprojectgrantresponse)

设置要停用的项目赠予状态 (ProjectGrant = 给我的项目的另一个组织) 返回错误

    POST: /projects/{project_id}/grants/{grant_id}/_停用


### 重新激活ProjectGrant

> **rpc** ReactivateProjectGrant([ReactivateProjectGrantRequest](#reactivateprojectgrantrequest)) [ReactivateProjectGrantResponse](#reactivateprojectgrantresponse)

将项目授予状态设置为活动的 (ProjectGrant = 为我的项目授予另一个组织) 返回错误，如果项目未激活

    POST: /projects/{project_id}/grants/{grant_id}/_reactivation


### RemoveProjectGrant

> **rpc** RemoveProjectGrant([RemoveProjectGrantRequest](#removeprojectgrantrequest)) [RemoveProjectGrantResponse](#removeprojectgrantresponse)

取消项目赠款和此项目赠款的所有用户赠款

    DELETE: /projects/{project_id}/grants/{grant_id}


### ListProjectGrantMemberes

> **rpc** ListProjectGrantMemberRoles([ListProjectGrantMemberRolesRequest](#listprojectgrantmemberrolesrequest) [ListProjectGrantMemberRoles响应](#listprojectgrantmemberrolesresponse)

返回项目赠款管理员的所有ZITADEL角色

    POST： /projects/grants/members/roles/_search


### ListProjectGrantMembers

> **rpc** ListProjectGrantMembers([ListProjectGrantMembersRequest](#listprojectgrantmembersrequest)) [ListProjectGrantMembersRespons](#listprojectgrantmembersresponse)

返回此项目赠款的所有ZITADEL管理员 应该总是设置限制，有一个由服务设定的默认限制

    POST: /projects/{project_id}/grants/{grant_id}/members/_search


### AddProjectGrantMember

> **rpc** AddProjectGrantMemberer([AddProjectGrantMemberRequest](#addprojectgrantmemberrequest)) [AddProjectGrantMemberResponse](#addprojectgrantmemberresponse)

添加一个新的项目赠款经理，允许他在ZITADEL进行管理

    POST: /projects/{project_id}/grants/{grant_id}/members


### 更新 ProjectGrantMember

> **rpc** UpdateProjectGrantMemberer([UpdateProjectGrantMemberRequest](#updateprojectgrantmemberrequest)) [UpdateProjectGrantMemberResponse](#updateprojectgrantmemberresponse)

获准在ZITADEL管理的变更项目赠款管理器

    PUT: /projects/{project_id}/grants/{grant_id}/members/{user_id}


### 移除项目GrantMember

> **rpc** RemoveProjectGrantMemberer([RemoveProjectGrantMemberRequest](#removeprojectgrantmemberrequest)) [RemoveProjectGrantMemberResponse](#removeprojectgrantmemberresponse)

已移除项目赠款管理器

    DELETE: /projects/{project_id}/grants/{grant_id}/members/{user_id}


### GetUserGrantByID

> **rpc** GetUserGrantByID([GetUserGrantByIDRequest](#getusergrantbyidrequest)) [GetUserGrantByIDResponse](#getusergrantbyidresponse)

返回用户授权 (一个项目的用户授权)

    获取：/users/{user_id}/grants/{grant_id}


### ListUser赠款

> **rpc** ListUserGrants([ListUserGrantRequest](#listusergrantrequest)) [ListUserGrantResponse](#listusergrantresponse)

返回匹配查询的用户授权 (项目用户的授权) 应该始终设置限制。 服务设置了默认限制

    POST： /users/grants/_search


### AddUserGrant

> **rpc** AddUserGrant([AddUserGrantRequest](#addusergrantrequest)) [AddUserGrantResponse](#addusergrantresponse)

创建新的用户赠款(用户对具有指定角色的项目的授权)

    POST： /users/{user_id}/赠品


### UpdateUserrant

> **rpc** UpdateUserGrant([UpdateUserGrantRequest](#updateusergrantrequest)) [UpdateUserGrantResponse](#updateusergrantresponse)

更改用户赠款(用户对具有指定角色的项目的授权)

    PUT: /users/{user_id}/grants/{grant_id}


### DeactivateUserGrant

> **rpc** DeactivateUserGrant([DeactivateUserGrantRequest](#deactivateusergrantrequest)) [DeactivateUserGrantResponse](#deactivateusergrantresponse)

设置用户授予的状态以停用 用户将不能再使用授予的项目 返回一个错误，如果用户授予已经停用了

    POST: /users/{user_id}/grants/{grant_id}/_停用


### ReactivateUserGrant

> **rpc** ReactivateUserGrant([ReactivateUserGrantRequest](#reactivateusergrantrequest)) [ReactivateUserGrantResponse](#reactivateusergrantresponse)

设置用户授予的状态为活动 返回一个错误，如果用户授予没有被停用的话。

    POST: /users/{user_id}/grants/{grant_id}/_reactivate


### RemoveUserGrant

> **rpc** RemoveUserGrant([RemoveUserGrantRequest](#removeusergrantrequest)) [RemoveUserGrantResponse](#removeusergrantresponse)

删除用户授权

    DELETE: /users/{user_id}/grants/{grant_id}


### 批量删除用户授权

> **rpc** BulkRemoveUserGrant([BulkRemoveUserGrantRequest](#bulkremoveusergrantrequest)) [BulkRemoveUserGrantResponse](#bulkremoveusergrantresponse)

删除一个请求中的用户授予列表

    DELETE: /user_grants/_blow


### GetOrgIAMPolicy

> **rpc** GetOrgIAMPolicy([GetOrgIAMPolicyRequest](#getorgiampolicyrequest)) [GetOrgIAMPolicyResponse](#getorgiampolicyresponse)

已废弃：请使用域策略代替 返回域策略(此策略由iam管理员管理)

    GET: /policies/orgiam


### GetDomainPolicy

> **rpc** GetDomainPolicy([GetDomainPolicyRequest](#getdomainpolicyrequest)) [GetDomainPolicyResponse](#getdomainpolicyresponse)

返回域策略 (由 iam 管理员管理)

    GET：/policies/domain


### GetLogin策略

> **rpc** GetLoginPolicy([GetLoginPolicyRequest](#getloginpolicyrequest)) [GetLoginPolicyResponse](#getloginpolicyresponse)

返回组织的登录策略 使用此策略可以配置登录界面

    GET: /policies/登录


### GetDefaultLogin策略

> **rpc** GetDefaultLoginPolicy([GetDefaultLoginPolicyRequest](#getdefaultloginpolicyrequest)) [GetDefaultLoginPolicyResponse](#getdefaultloginpolicyresponse)

返回在 IM 中配置的默认登录策略

    获取：/policies/default/登录


### 添加自定义策略

> **rpc** AddCustomLoginPolicy([AddCustomLoginPolicyRequest](#addcustomloginpolicyrequest)) [AddCustomLoginPolicyResponse](#addcustomloginpolicyresponse)

为组织添加一个自定义登录策略 使用此策略可以配置登录界面

    POST: /policies/登录


### 更新自定义登录策略

> **rpc** UpdateCustomLoginPolicy([UpdateCustomLoginPolicyRequest](#updatecustomloginpolicyrequest)) [UpdateCustomLoginPolicyResponse](#updatecustomloginpolicyresponse)

更改组织的自定义登录策略 使用此策略可以配置登录界面

    PUT: /policies/登录


### 重置LoginPolicyTo默认

> **rpc** ResetLoginPolicyToDefault([ResetLoginPolicyToDefaultRequest](#resetloginpolicytodefaultrequest) [ResetLoginPolicyToDefaultResponse](#resetloginpolicytodefaultresponse)

删除组织的自定义登录政策 IAM的默认策略将在以下时间触发：

    DELETE: /policies/登录


### ListLoginPolicyIDPs

> **rpc** ListLoginPolicyIDPs([ListLoginPolicyIDPsRequest](#listloginpolicyidpsrequest)) [ListLoginPolicyIDPsResponse](#listloginpolicyidpsresponse)

列出组织上配置的所有可能的身份提供者 应该总是设置限制，有一个由服务设置的默认限制

    POST: /policies/login/idps/_search


### 添加IDPToLoginPolicy

> **rpc** AddIDPToLoginPolicy([AddIDPToLoginPolicyRequest](#addidptologinpolicyrequest)) [AddIDPToLoginPolicyResponse](#addidptologinpolicyresponse)

在自定义登录策略中添加 (预配置) 身份提供商

    POST: /policies/login/idps


### RemoveIDPFromLoginPolicy

> **rpc** RemoveIDPFromLoginPolicy([RemoveIDPFromLoginPolicyRequest](#removeidpfromloginpolicyrequest)) [RemoveIDPFromLoginPolicyResponse](#removeidpfromloginpolicyresponse)

从自定义登录政策中删除身份提供商

    DELETE: /policies/login/idps/{idp_id}


### ListLoginPolicySecondFactors

> **rpc** ListLoginPolicySecondFactors([ListLoginPolicySecondFactorsRequest](#listloginpolicysecondfactorsrequest) [ListLoginPolicySecondFactorsResponse](#listloginpolicysecondfactorsresponse)

返回自定义登录策略的所有配置的第二个因素

    POST: /policies/login/second_factors/_search


### AddSecondFactorToLoginPolicy

> **rpc** AddSecondary FactorToLoginPolicy([AddSecondary FactorToLoginPolicyRequest](#addsecondfactortologinpolicyrequest) [AddsecondFactorToLoginPolicyResponse](#addsecondfactortologinpolicyresponse)

在自定义登录策略中添加新的第二个因素

    POST: /policies/login/second_factors


### 删除二级FactorFromLogin策略

> **rpc** RemoveSecondFromLoginPolicy([RemoveSecondFactorFromLoginPolicyRequest](#removesecondfactorfromloginpolicyrequest) [RemoveSecondFromLoginPolicyResponse](#removesecondfactorfromloginpolicyresponse)

从自定义登录策略中删除第二个因素

    DELETE: /policies/login/second_factors /{type}


### ListLoginPolicyMultiFactors

> **rpc** ListLoginPolicyMultiFactors([ListLoginPolicyMultiFactorsRequest](#listloginpolicymultifactorsrequest)) [ListLoginPolicyMultiFactorsResponse](#listloginpolicymultifactorsresponse)

返回自定义登录策略中所有配置的多因素

    POST: /policies/login/auth_factors/_search


### AddMultiFactorToLoginPolicy

> **rpc** AddMultiFactorToLoginPolicy([AddMultiFactorToLoginPolicyRequest](#addmultifactortologinpolicyrequest) [AddMultiFactorToLoginPolicyResponse](#addmultifactortologinpolicyresponse)

添加一个新的多因子到自定义登录策略

    POST: /policies/login/multi_factors


### 移除 MultiFactorFromLoginPolicy

> **rpc** RemoveMultiFactorFromLoginPolicy([RemoveMultiFactorFromLoginPolicyRequest](#removemultifactorfromloginpolicyrequest) [RemoveMultiFactorFromLoginPolicyResponse](#removemultifactorfromloginpolicyresponse)

从自定义登录策略中删除多因子

    DELETE: /policies/login/multi_factors /{type}


### GetPassword复杂性策略

> **rpc** GetPasswordComplexityPolicy([GetPasswordComplexityPolicyRequest](#getpasswordcomplexitypolicyrequest)) [GetPasswordComplexityPolicyResponse](#getpasswordcomplexitypolicyresponse)

返回组织的密码复杂性策略 使用此策略可以配置密码强度

    GET: /policies/password/复杂度


### GetDefaultPasswordComplexityPolicy

> **rpc** GetDefaultPasswordComplexityPolicy([GetDefaultPasswordComplexityPolicyRequest](#getdefaultpasswordcomplexitypolicyrequest)) [GetDefaultPasswordComplexityPolicyResponse](#getdefaultpasswordcomplexitypolicyresponse)

返回IAM的默认密码复杂策略 使用此策略可以配置密码强度

    GET: /policies/default/password/复杂度


### 添加CustomPasswordComplexity策略

> **rpc** AddCustomPasswordComplexityPolicy([AddCustomPasswordComplexityPolicyRequest](#addcustompasswordcomplexitypolicyrequest)) [AddCustomPasswordComplexityPolicyResponse](#addcustompasswordcomplexitypolicyresponse)

为组织添加自定义密码复杂性策略 使用此策略可以配置密码强度

    POST： /policies/password/复杂度


### 更新CustomPassword复杂性策略

> **rpc** UpdateCustomPasswordComplexityPolicy([UpdateCustomPasswordComplexityPolicyRequest](#updatecustompasswordcomplexitypolicyrequest)) [UpdateCustomPasswordComplexityPolicyResponse](#updatecustompasswordcomplexitypolicyresponse)

更新组织的自定义密码复杂性策略 使用此策略可以配置密码强度

    PUT: /policies/password/复杂度


### 重置密码复杂策略到默认

> **rpc** ResetPasswordComplexityPolicyToDefault([ResetPasswordComplexityPolicyToDefaultRequest](#resetpasswordcomplexitypolicytodefaultrequest)) [ResetPasswordComplexityPolicyToDefaultResponse](#resetpasswordcomplexitypolicytodefaultresponse)

删除组织的自定义密码复杂性政策 IAM的默认策略将在以下时间触发：

    DELETE: /policies/password/复杂度


### GetPasswordAgeing 策略

> **rpc** GetPasswordAgePolicy([GetPasswordAgePolicyRequest](#getpasswordagepolicyrequest)) [GetPasswordAgePolicyResponse](#getpasswordagepolicyresponse)

当前没有使用密码年龄策略

    GET: /policies/password/age


### GetDefaultPasswordAgePolicy

> **rpc** GetDefaultPasswordAgePolicy([GetDefaultPasswordAgePolicyRequest](#getdefaultpasswordagepolicyrequest)) [GetDefaultPasswordAgePolicyResponse](#getdefaultpasswordagepolicyresponse)

当前没有使用密码年龄策略

    GET: /policies/default/password/age


### 添加CustomPasswordAgeing 策略

> **rpc** AddCustomPasswordAgePolicy([AddCustomPasswordAgePolicyRequest](#addcustompasswordagepolicyrequest) [AddCustomPasswordAgePolicyResponse](#addcustompasswordagepolicyresponse)

当前没有使用密码年龄策略

    POST： /policies/password/age


### 更新CustomPasswordAgeing 策略

> **rpc** UpdateCustomPasswordAgePolicy([UpdateCustomPasswordAgePolicyRequest](#updatecustompasswordagepolicyrequest) [UpdateCustomPasswordAgePolicy](#updatecustompasswordagepolicyresponse)

当前没有使用密码年龄策略

    PUT: /policies/password/age


### 重置密码策略到默认

> **rpc** ResetPasswordAgePolicyToDefault([ResetPasswordAgePolicyToDefaultRequest](#resetpasswordagepolicytodefaultrequest) [ResetPasswordAgePolicyToDefaultResponse](#resetpasswordagepolicytodefaultresponse)

当前没有使用密码年龄策略

    DELETE: /policies/password/age


### GetLockoutPolicy

> **rpc** GetLockoutPolicy([GetLockoutPolicyRequest](#getlockoutpolicyrequest)) [GetLockoutPolicyResponse](#getlockoutpolicyresponse)

    GET: /policies/lockout


### GetDefaultLockoutPolicy

> **rpc** GetDefaultLockoutPolicy([GetDefaultLockoutPolicyRequest](#getdefaultlockoutpolicyrequest)) [GetDefaultLockoutPolicyResponse](#getdefaultlockoutpolicyresponse)

    获取：/policies/default/锁定


### 添加CustomLockoutPolicy

> **rpc** AddCustomLockoutPolicy([AddCustomLockoutPolicyRequest](#addcustomlockoutpolicyrequest)) [AddCustomLockoutPolicyResponse](#addcustomlockoutpolicyresponse)

    POST: /policies/lockout


### 更新CustomLockoutPolicy

> **rpc** UpdateCustomLockoutPolicy([UpdateCustomLockoutPolicyRequest](#updatecustomlockoutpolicyrequest)) [UpdateCustomLockoutPolicyResponse](#updatecustomlockoutpolicyresponse)

    PUT: /policies/lockout


### 重置LockoutPolicyTo默认

> **rpc** ResetLockoutPolicyToDefault([ResetLockoutPolicyToDefaultRequest](#resetlockoutpolicytodefaultrequest) [ResetLockoutPolicyToDefaultResponse](#resetlockoutpolicytodefaultresponse)

    DELETE: /policies/lockout


### 获取隐私政策

> **rpc** GetPrivacyPolicy([GetPrivacyPolicyRequest](#getprivacypolicyrequest)) [GetPrivacyPolicyResponse](#getprivacypolicyresponse)

返回组织的隐私政策 通过这个隐私政策可以配置相关的内容(例如，tos link)

    获取：/policies/privacy


### GetDefaultPrivacyPolicy

> **rpc** GetDefaultPrivacyPolicy([GetDefaultPrivacyPolicyRequest](#getdefaultprivacypolicyrequest)) [GetDefaultPrivacyPolicyResponse](#getdefaultprivacypolicyresponse)

返回IAM的默认隐私政策 使用此策略，可以配置相关的隐私(例如tos link)

    获取：/policies/default/隐私


### 添加自定义隐私政策

> **rpc** AddCustomPrivacyPolicy([AddCustomPrivacyPolicyRequest](#addcustomprivacypolicyrequest)) [AddCustomPrivacyPolicyResponse](#addcustomprivacypolicyresponse)

为组织添加一个自定义隐私政策 使用此策略隐私可以配置相关的内容(e)。 。tos link) 变量 {{.Lang}} 可以设置为基于语言的不同链接

    POST: /policies/privacy


### 更新自定义隐私政策

> **rpc** UpdateCustomPrivacyPolicy([UpdateCustomPrivacyPolicyRequest](#updatecustomprivacypolicyrequest)) [UpdateCustomPrivacyPolicyResponse](#updatecustomprivacypolicyresponse)

更新本组织的隐私复杂政策 使用此策略隐私可以配置相关的内容(e). 。tos link) 变量 {{.Lang}} 可以设置为基于语言的不同链接

    PUT: /policies/privacy


### 重置隐私策略到默认

> **rpc** ResetPrivacyPolicyToDefault([ResetPrivacyPolicyToDefaultRequest](#resetprivacypolicytodefaultrequest) [ResetPrivacyPolicyToDefaultResponse](#resetprivacypolicytodefaultresponse)

删除本组织的隐私政策 IAM的默认策略将在以下时间触发：

    DELETE: /policies/privacy


### GetLabelPolicy

> **rpc** GetLabelPolicy([GetLabelPolicyRequest](#getlabelpolicyrequest)) [GetLabelPolicyResponse](#getlabelpolicyresponse)

返回组织的活动标签策略 使用此策略可以配置私有标签(颜色等)

    获取：/policies/label


### GetPreviewLabelPolicy

> **rpc** GetPreviewLabelPolicy([GetPreviewLabelPolicyRequest](#getpreviewlabelpolicyrequest)) [GetPreviewLabelPolicyResponse](#getpreviewlabelpolicyresponse)

返回组织的预览标签策略 使用此策略可以配置私有标签(颜色等)

    GET: /policies/label/_preview


### GetDefaultLabelPolicy

> **rpc** GetDefaultLabelPolicy([GetDefaultLabelPolicyRequest](#getdefaultlabelpolicyrequest)) [GetDefaultLabelPolicyResponse](#getdefaultlabelpolicyresponse)

返回IAM的默认标签策略 使用此策略可以配置私有标签(颜色等)

    获取：/policies/default/label


### 添加自定义标签

> **rpc** AddCustomLabelPolicy([AddCustomLabelPolicyRequest](#addcustomlabelpolicyrequest)) [AddCustomLabelPolicyResponse](#addcustomlabelpolicyresponse)

为组织添加一个自定义标签策略 使用此策略可以配置私有标签(颜色等)

    POST: /policies/label


### 更新自定义标签策略

> **rpc** UpdateCustomLabelPolicy([UpdateCustomLabelPolicyRequest](#updatecustomlabelpolicyrequest)) [UpdateCustomLabelPolicyResponse](#updatecustomlabelpolicyresponse)

更改组织自定义标签策略 使用此策略可以配置私有标签(颜色等)

    PUT: /policies/label


### 激活CustomLabelPolicy

> **rpc** ActivateCustomLabelPolicy([ActivateCustomLabelPolicyRequest](#activatecustomlabelpolicyrequest)) [ActivateCustomLabelPolicyResponse](#activatecustomlabelpolicyresponse)

激活标签政策的所有更改

    POST: /policies/label/_activity


### RemoveCustomLabelPolicyLogo

> **rpc** RemoveCustomLabelPolicyLogo([RemoveCustomLabelPolicyLogoRequest](#removecustomlabelpolicylogorequest)) [RemoveCustomLabelPolicyLogoResponse](#removecustomlabelpolicylogoresponse)

删除标签策略的标志

    DELETE: /policies/label/logo


### RemoveCustomLabelPolicyLogoDark

> **rpc** RemoveCustomLabelPolicyLogoDark([RemoveCustomLabelPolicyLogoDarkRequest](#removecustomlabelpolicylogodarkrequest)) [RemoveCustomLabelPolicyLogoDarkResponse](#removecustomlabelpolicylogodarkresponse)

删除标签策略的黑色标志

    DELETE: /policies/label/logo_den


### 移除自定义标签策略图标

> **rpc** RemoveCustomLabelPolicyIcon([RemoveCustomLabelPolicyIconRequest](#removecustomlabelpolicyiconrequest)) [RemoveCustomLabelPolicyIconResponse](#removecustomlabelpolicyiconresponse)

删除标签策略的图标

    DELETE: /policies/label/图标


### 移除自定义图标 IconDark

> **rpc** RemoveCustomPolicyIconDark([RemoveCustomPolicyIconDarkRequest](#removecustomlabelpolicyicondarkrequest) [RemoveCustomPolicyIconDarkResponse](#removecustomlabelpolicyicondarkresponse)

删除标签策略的黑色标志

    DELETE: /policies/label/icon_dlar


### RemoveCustomLabelPolicyFont

> **rpc** RemoveCustomLabelPolicyFont([RemoveCustomLabelPolicyFontRequest](#removecustomlabelpolicyfontrequest)) [RemoveCustomLabelPolicyFontResponse](#removecustomlabelpolicyfontresponse)

移除标签策略的字体

    DELETE: /policies/label/font


### 重置LabelPolicyTo默认

> **rpc** ResetLabelPolicyToDefault([ResetLabelPolicyToDefaultRequest](#resetlabelpolicytodefaultrequest) [ResetLabelPolicyToDefaultResponse](#resetlabelpolicytodefaultresponse)

删除组织的自定义标签策略 IAM的默认策略将在此后触发：

    DELETE: /policies/label


### GetCustomInitMessageText

> **rpc** GetCustomInitMessageText([GetCustomInitMessageTextRequest](#getcustominitmessagetextrequest) [GetCustomInitMessageTextResponse](#getcustominitmessagetextresponse)

返回初始消息的自定义文本

    获取：/text/message/init/{language}


### GetDefaultInitMessageText版

> **rpc** GetDefaultInitMessageText([GetDefaultInitMessageTextRequest](#getdefaultinitmessagetextrequest)) [GetDefaultInitMessageTextResponse](#getdefaultinitmessagetextresponse)

返回初始消息的默认文本

    获取：/text/default/message/init/{language}


### 设置 CustomInitMessageTexte

> **rpc** SetCustomInitMessageText([SetCustomInitMessageTextRequest](#setcustominitmessagetextrequest)) [SetCustomInitMessageTextResponse](#setcustominitmessagetextresponse)

设置初始消息的自定义文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/init/{language}


### 重置自定义 InitMessageTextTo默认

> **rpc** ResetCustomInitMessageTextToDefault([ResetCustomInitMessageTextToDefaultRequest](#resetcustominitmessagetexttodefaultrequest) [ResetCustomInitMessageTextToDefaultResponse](#resetcustominitmessagetexttodefaultresponse)

删除组织的自定义信息文本 IAM的默认文本将在以下时间触发：

    DELETE: /text/message/init/{language}


### 获取CustomPasswordResetMessageText

> **rpc** GetCustomPasswordResetMessageText([GetCustomPasswordResetMessageTextRequest](#getcustompasswordresetmessagetextrequest) [GetCustomPasswordResetMessageTextResponse](#getcustompasswordresetmessagetextresponse)

返回密码重置消息的自定义文本

    获取：/text/message/passwordreset/{language}


### GetDefaultPasswordResetMessageText版

> **rpc** GetDefaultPasswordResetMessageText([GetDefaultPasswordResetMessageTextRequest](#getdefaultpasswordresetmessagetextrequest)) [GetDefaultPasswordResetMessageTextResponse](#getdefaultpasswordresetmessagetextresponse)

返回密码重置消息的默认文本

    获取：/text/default/message/passwordreset/{language}


### 设置CustomPasswordResetMessageText公司

> **rpc** SetCustomPasswordResetMessageText([SetCustomPasswordResetMessageTextRequest](#setcustompasswordresetmessagetextrequest) [SetCustomPasswordResetMessageTextResponse](#setcustompasswordresetmessagetextresponse)

设置密码重置消息的自定义文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/passwordreset/{language}


### 重置CustomPasswordResetMessageTextTo默认

> **rpc** ResetCustomPasswordResetMessageTextToDefault([ResetCustomPasswordResetMessageTextToDefaultRequest](#resetcustompasswordresetmessagetexttodefaultrequest) [ResetCustomPasswordResetMessageTextToDefaultResponse](#resetcustompasswordresetmessagetexttodefaultresponse)

删除组织的自定义密码重置消息文本 IAM的默认文本会在以下时间触发：

    DELETE: /text/message/verifyemail/{language}


### GetCustomVerifyEmailMessageText

> **rpc** GetCustomVerifyEmailMessageText([GetCustomVerifyEmailMessageTextRequest](#getcustomverifyemailmessagetextrequest)) [GetCustomVerifyEmailMessageTextResponse](#getcustomverifyemailmessagetextresponse)

返回用于验证邮件消息的自定义文本

    获取：/text/message/verifyemail/{language}


### GetDefaultVerifyEmailMessageText

> **rpc** GetDefaultVerifyEmailMessageText([GetDefaultVerifyEmailMessageTextRequest](#getdefaultverifyemailmessagetextrequest)) [GetDefaultVerifyEmailMessageTextResponse](#getdefaultverifyemailmessagetextresponse)

返回验证邮件消息的默认文本

    获取：/text/default/message/verifyemail/{language}


### 设置CustomVerifyEmailMessageText

> **rpc** SetCustomVerifyEmailMessageText([SetCustomVerifyEmailMessageTextRequest](#setcustomverifyemailmessagetextrequest)) [SetCustomVerifyEmailMessageTextResponse](#setcustomverifyemailmessagetextresponse)

设置验证邮件消息的自定义文本 可以使用下列变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/verifyemail/{language}


### 重置CustomVerifyEmailMessageTextTo默认

> **rpc** ResetCustomVerifyEmailMessageTextToDefault([ResetCustomVerifyEmailMessageTextToDefaultRequest](#resetcustomverifyemailmessagetexttodefaultrequest) [ResetCustomVerifyEmailMessageTextToDefaultResponse](#resetcustomverifyemailmessagetexttodefaultresponse)

删除组织的自定义验证邮件信息文本 IAM的默认文本会在以下时间触发：

    DELETE: /text/message/verifyemail/{language}


### GetCustomVerifyPhoneMessageText

> **rpc** GetCustomVerifyPhoneMessageText([GetCustomVerifyPhoneMessageTextRequest](#getcustomverifyphonemessagetextrequest) [GetCustomVerifyPhoneMessageTextResponse](#getcustomverifyphonemessagetextresponse)

返回用于验证邮件消息的自定义文本

    获取：/text/message/verifyphone/{language}


### GetDefaultVerifyPhoneMessageText

> **rpc** GetDefaultVerifyPhoneMessageText([GetDefaultVerifyPhoneMessageTextRequest](#getdefaultverifyphonemessagetextrequest) [GetDefaultVerifyPhoneMessageTextResponse](#getdefaultverifyphonemessagetextresponse)

返回用于验证邮件消息的自定义文本

    获取：/text/default/message/verifyphone/{language}


### 设置CustomVerifyPhoneMessageText

> **rpc** SetCustomVerifyPhoneMessageText([SetCustomVerifyPhoneMessageTextRequest](#setcustomverifyphonemessagetextrequest) [SetCustomVerifyPhoneMessageTextResponse](#setcustomverifyphonemessagetextresponse)

设置验证邮件消息的默认自定义文本 可以使用以下变量：
{{.Code}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/verifyphone/{language}


### 重置CustomVerifyPhoneMessageTextTo默认

> **rpc** ResetCustomVerifyPhoneMessageTextToDefault([ResetCustomVerifyPhoneMessageTextToDefaultRequest](#resetcustomverifyphonemessagetexttodefaultrequest) [ResetCustomVerifyPhoneMessageTextToDefaultResponse](#resetcustomverifyphonemessagetexttodefaultresponse)

删除组织的自定义验证电话文本 IAM的默认文本会在以下时间触发：

    DELETE: /text/message/verifyphone/{language}


### GetCustomDomainClaimMessageText

> **rpc** GetCustomDomainClaimMessageText([GetCustomDomainClaimMessageTextRequest](#getcustomdomainclaimedmessagetextrequest)) [GetCustomDomainClaimMessageTextResponse](#getcustomdomainclaimedmessagetextresponse)

返回域名声称消息的自定义文本

    GET: /text/message/domainclaimed/{language}


### GetDefaultDomainClaimMessageText

> **rpc** GetDefaultDomainClaimedMessageText([GetDefaultDomainClaimedMessageTextRequest](#getdefaultdomainclaimedmessagetextrequest)) [GetDefaultDomainClaimedMessageTextResponse](#getdefaultdomainclaimedmessagetextresponse)

返回域名声称消息的自定义文本

    获取：/text/default/message/domainclaimed/{language}


### 设置CustomDomainClaimMessageCustomText

> **rpc** SetCustomDomainClaimedMessageCustomText([SetCustomDomainClaimedMessageTextRequest](#setcustomdomainclaimedmessagetextrequest)) [SetCustomDomainClaimedMessageTextResponse](#setcustomdomainclaimedmessagetextresponse)

设置域名信息的自定义文本 可以使用下列变量：
{{.Domain}} {{.TempUsername}} {{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/domainclaimed/{language}


### 重置CustomDomainClaimMessageTextTo默认

> **rpc** ResetCustomDomainClaimedMessageTextToDefault([ResetCustomDomainClaimedMessageTextToDefaultRequest](#resetcustomdomainclaimedmessagetexttodefaultrequest) [ResetCustomDomainClaimedMessageTextToDefaultResponse](#resetcustomdomainclaimedmessagetexttodefaultresponse)

删除组织的自定义域名信息文本 IAM的默认文本会在以下时间触发：

    DELETE: /text/message/domainclaimed/{language}


### GetCustomPasswordless RegistrationMessageText

> **rpc** GetCustomPasswordlessRegistrationMessageText([GetCustomPasswordlessRegistrationMessageTextRequest](#getcustompasswordlessregistrationmessagetextrequest) [GetCustomPasswordLessRegistrationMessageTextResponse](#getcustompasswordlessregistrationmessagetextresponse)

返回无密码链接消息的自定义文本

    获取：/text/message/passwordless_registration/{language}


### GetDefaultPasswordlessRegistrationMessageText

> **rpc** GetDefaultPasswordlessRegistrationMessageText([GetDefaultPasswordlessRegistrationMessageTextRequest](#getdefaultpasswordlessregistrationmessagetextrequest)) [GetDefaultPasswordLessRegistrationMessageTextResponse](#getdefaultpasswordlessregistrationmessagetextresponse)

返回无密码链接消息的自定义文本

    获取：/text/default/message/passwordless_registration/{language}


### 设置CustomPasswordless RegistrationMessageCustomText

> **rpc** SetCustomPasswordlessRegistrationMessageCustomText([SetCustomPasswordlessRegistrationMessageTextRequest](#setcustompasswordlessregistrationmessagetextrequest)) [SetCustomPasswordlessRegistrationMessageTextResponse](#setcustompasswordlessregistrationmessagetextresponse)

设置无密码链接消息的自定义文本 可以使用以下变量：
{{.UserName}} {{.FirstName}} {{.LastName}} {{.NickName}} {{.DisplayName}} {{.LastEmail}} {{.VerifiedEmail}} {{.LastPhone}} {{.VerifiedPhone}} {{.PreferredLoginName}} {{.LoginNames}} {{.ChangeDate}}

    PUT: /text/message/passwordless_registration/{language}


### 重置CustomPasswordlessRegistrationMessageTextTo默认

> **rpc** ResetCustomPasswordlessRegistrationMessageTextToDefault([ResetCustomPasswordlessRegistrationTextToDefaultRequest](#resetcustompasswordlessregistrationmessagetexttodefaultrequest) [ResetCustomPasswordLessRegistrationMessageTextToDefaultResponse](#resetcustompasswordlessregistrationmessagetexttodefaultresponse)

删除组织的自定义无密码链接消息文本 IAM的默认文本将在以下时间触发：

    DELETE: /text/message/passwordless_registration/{language}


### GetCustomLoginTexts

> **rpc** GetCustomLoginTexts([GetCustomLoginTextsRequest](#getcustomlogintextsrequest)) [GetCustomLoginTextsResponse](#getcustomlogintextsresponse)

返回用于登录的自定义文本

    获取：/text/login/{language}


### GetDefaultLoginTexts

> **rpc** GetDefaultLoginTexts([GetDefaultLoginTextsRequest](#getdefaultlogintextsrequest)) [GetDefaultLoginTextsResponse](#getdefaultlogintextsresponse)

返回用于登录的自定义文本

    获取：/text/default/登录/{language}


### SetCustomLoginText

> **rpc** SetCustomLoginText([SetCustomLoginTextsRequest](#setcustomlogintextsrequest)) [SetCustomLoginTextsResponse](#setcustomlogintextsresponse)

设置登录ui 的默认自定义文本 它会影响所有组织，而无需自定义登录ui 文本

    PUT: /text/login/{language}


### ResetCustomLoginTextToDefault

> **rpc** ResetCustomLoginTextToDefault([ResetCustomLoginTextsToDefaultRequest](#resetcustomlogintextstodefaultrequest)) [ResetCustomLoginTextsToDefaultResponse](#resetcustomlogintextstodefaultresponse)

删除组织的自定义登录文本 IAM的默认文本将在以下时间触发：

    删除: /text/login/{language}


### GetOrgIDPByID

> **rpc** GetOrgIDPByID([GetOrgIDPByIDRequest](#getorgidpbyidrequest)) [GetOrgIDPByIDResponse](#getorgidpbyidresponse)

返回组织的身份提供者配置

    GET: /idps/{id}


### ListOrgIDers

> **rpc** ListOrgIDers([ListOrgIDersRequest](#listorgidpsrequest)) [ListOrgIDersResponse](#listorgidpsresponse)

返回组织中的所有身份提供者配置， 匹配查询 限制应该始终设置，服务设置了默认限制

    POST: /idps/_search


### AddOrgOIDCIDP

> **rpc** AddOrgOIDCIDP ([AddOrgOIDCIDP Request](#addorgoidcidprequest)) [AddOrgOIDCIDP Response](#addorgoidcidpresponse)

在组织 提供商必须符合OIDC 的组织中添加一个新的身份提供商配置

    POST： /idps/oidc


### AddOrgJWTIDP

> **rpc** AddOrgJWTIDP ([AddOrgJWTIDP Request](#addorgjwtidprequest)) [AddOrgJWTIDP Response](#addorgjwtidpresponse)

在组织中添加一个新的 jwt 身份提供者配置

    POST： /idps/jwt


### DeactivateOrgIDP

> **rpc** DeactivateOrgIDP([DeactivateOrgIDPRequest](#deactivateorgidprequest)) [DeactivateOrgIDPResponse](#deactivateorgidpresponse)

停用身份提供者配置 用户将无法使用此提供者登录(e). Google、Microsoft、AD等 如果已停用则返回错误

    POST: /idps/{idp_id}/_停用


### 重新激活OrgIDs

> **rpc** ReactivateOrgIDP ([ReactivateOrgIDP Request](#reactivateorgidprequest)) [ReactivateOrgIDP Response](#reactivateorgidpresponse)

激活身份提供者配置 如果未激活则返回错误

    POST: /idps/{idp_id}/_reactivation


### 移除OrgIDs

> **rpc** RemoveOrgIDP ([RemoveOrgIDP 请求](#removeorgidprequest)) [RemoveOrgIDP Response](#removeorgidpresponse)

删除身份提供者配置 将删除此配置的所有链接提供者在用户

    DELETE: /idps/{idp_id}


### 更新 OrgIDs

> **rpc** UpdateOrgIDP ([UpdateOrgIDS Request](#updateorgidprequest)) [UpdateOrgIDs Response](#updateorgidpresponse)

更改组织的身份提供者配置

    PUT: /idps/{idp_id}


### 更新 OrgIDPOIDC配置

> **rpc** UpdateOrgIDPOIDCConfig([UpdateOrgIDPOIDCConfigRequest](#updateorgidpoidcconfigrequest)) [UpdateOrgIDPOIDCConfigResponse](#updateorgidpoidcconfigresponse)

更改组织的 OIDC 身份提供者配置

    PUT: /idps/{idp_id}/oidc_config


### UpdateOrgIDP JWTConfig

> **rpc** UpdateOrgIDPJWTConfig([UpdateOrgIDPJWTConfigRequest](#updateorgidpjwtconfigrequest)) [UpdateOrgIDPJWTConfigResponse](#updateorgidpjwtconfigresponse)

更改组织的 JWT 身份提供者配置

    PUT: /idps/{idp_id}/jwt_config


### 列表操作

> **rpc** ListActions([ListActionsRequest](#listactionsrequest)) [ListActionsResponse](#listactionsresponse)

    POST: /actions/_search


### 获取操作

> **rpc** GetAction([GetActionRequest](#getactionrequest)) [GetActionResponse](#getactionresponse)

    GET: /actions/{id}


### 创建操作

> **rpc** CreateAction([CreateActionRequest](#createactionrequest)) [CreateActionResponse](#createactionresponse)

    POST： /actions


### 更新操作

> **rpc** UpdateAction([UpdateActionRequest](#updateactionrequest)) [UpdateActionResponse](#updateactionresponse)

    PUT: /actions/{id}


### 停用操作

> **rpc** 停用动作([停用动作请求](#deactivateactionrequest)) [停用动作响应](#deactivateactionresponse)

    POST: /actions/{id}/_停用


### 重新激活

> **rpc** 重新激活动作([重新激活动作请求](#reactivateactionrequest)) [重新激活动作响应](#reactivateactionresponse)

    POST: /actions/{id}/_reactivation


### 删除操作

> **rpc** 删除行动([删除行动请求](#deleteactionrequest)) [删除行动响应](#deleteactionresponse)

    删除: /actions/{id}


### 列表流类型

> **rpc** ListFlowTypes([ListFlowTypesRequest](#listflowtypesrequest)) [ListFlowTypesResponse](#listflowtypesresponse)

    POST: /flows/types/_search


### ListFlow触发类型

> **rpc** ListFlowTriggerTypes([ListFlowTriggerTypesRequest](#listflowtriggertypesrequest)) [ListFlowTriggerTypesResponse](#listflowtriggertypesresponse)

    POST: /flows/{type}/触发器/_search


### GetFlow

> **rpc** GetFlow([GetFlowRequest](#getflowrequest)) [GetFlowResponse](#getflowresponse)

    GET: /flows/{type}


### 清除流

> **rpc** ClearFlow([ClearFlowRequest](#clearflowrequest)) [clearFlowResponse](#clearflowresponse)

    POST: /flows/{type}/_clear


### 设置触发器动作

> **rpc** SetTriggerActions([SetTriggerActionsRequest](#settriggeractionsrequest)) [SetTriggerActionsResponse](#settriggeractionsresponse)

    POST: /flows/{flow_type}/触发器/{trigger_type}







## 留言


### 操作查询



| 字段                                                                                                 | 类型                              | 描述 | 验证 |
| -------------------------------------------------------------------------------------------------- | ------------------------------- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.action_id_查询    | zitadel.action.v1.ActionIDQuery | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.action_name_查询  | zitadel.action.v1.ActionName查询  | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.action_state_查询 | zitadel.action.v1.ActionState查询 | -  |    |




### 激活CustomLabelPolicyRequest
这是一个空请求




### 激活CustomLabelPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加 APIApp请求



| 字段                 | 类型                               | 描述 | 验证                                                            |
| ------------------ | -------------------------------- | -- | ------------------------------------------------------------- |
| 项目ID               | 字符串                              | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称                 | 字符串                              | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| auth_method_type | zitadel.app.v1.APIAuthMethodType | -  | 只有枚举：true<br />                                         |




### AddAPIAppResponse



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| app_id     | 字符串                      | -  |    |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |
| client_id  | 字符串                      | -  |    |
| 客户端_secret | 字符串                      | -  |    |




### AddAppKeyRequest



| 字段     | 类型                       | 描述 | 验证                                                            |
| ------ | ------------------------ | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 类型     | zitadel.authn.v1.KeyType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |
| 到期日    | 时间戳                      | -  |                                                               |




### AddAppKeyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 密钥详情 | 字节                       | -  |    |




### 添加CustomLabelPolicyRequest



| 字段      | 类型  | 描述                                                                               | 验证                             |
| ------- | --- | -------------------------------------------------------------------------------- | ------------------------------ |
| 主颜色     | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 隐藏登录名后缀 | 布尔值 | 如果设置了 \"urn:zitadel:iam:org:domain:primary:{domainname}\" 的范围，则隐藏登录表单上的 org 后缀 |                                |
| 警告颜色    | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 背景颜色    | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 字体颜色    | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 原始颜色_暗色 | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 背景颜色_暗色 | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 警告颜色_暗色 | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 字体颜色_暗色 | 字符串 | -                                                                                | string.max_len: 50<br /> |
| 禁用水标记   | 布尔值 | -                                                                                |                                |




### AddCustomLabelPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加CustomLockoutPolicyRequest



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 最大密码尝试 | uint32 | -  |    |




### AddCustomLockoutPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加CustomLoginPolicy请求



| 字段                        | 类型                                    | 描述                                                                       | 验证                    |
| ------------------------- | ------------------------------------- | ------------------------------------------------------------------------ | --------------------- |
| 允许用户名密码                   | 布尔值                                   | -                                                                        |                       |
| 允许注册                      | 布尔值                                   | -                                                                        |                       |
| 允许外部idp                   | 布尔值                                   | -                                                                        |                       |
| Force_mfa                 | 布尔值                                   | -                                                                        |                       |
| 无密码类型                     | zitadel.policy.v1.PasswordlessType    | -                                                                        | 只有枚举：true<br /> |
| 隐藏密码重置                    | 布尔值                                   | -                                                                        |                       |
| 忽略未知用户名                   | 布尔值                                   | -                                                                        |                       |
| 默认重定向_uri                 | 字符串                                   | -                                                                        |                       |
| 密码检查生存期                   | google.protobuf.Duration              | -                                                                        |                       |
| 外部login_check_live      | google.protobuf.Duration              | -                                                                        |                       |
| mfa_init_skip_live      | google.protobuf.Duration              | -                                                                        |                       |
| 第二个因子校验生存期                | google.protobuf.Duration              | -                                                                        |                       |
| multi_factor_check_live | google.protobuf.Duration              | -                                                                        |                       |
| 秒因子                       | 重复 zitadel.policy.v1.SecondFactorType | -                                                                        |                       |
| 多因子                       | 重复 zitadel.policy.v1.MultiFactorType  | -                                                                        |                       |
| idps                      | 重复的 AddCustomLoginPolicyRequest.IDP   | -                                                                        |                       |
| allow_domain_发现         | 布尔值                                   | 如果设置为 true，则后缀(@domain)。 (om) 登录界面上一个未知用户名输入将与 org 域名匹配，并在成功时重定向到该组织的注册。 |                       |
| 禁用登录邮件地址                  | 布尔值                                   | -                                                                        |                       |
| 禁用登录与手机                   | 布尔值                                   | -                                                                        |                       |




### 添加CustomLoginPolicyRequest.IDP



| 字段     | 类型                          | 描述 | 验证                                                            |
| ------ | --------------------------- | -- | ------------------------------------------------------------- |
| idp_id | 字符串                         | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 所有者类型  | zitadel.idp.v1.IDPOwnerType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### 添加CustomLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加CustomPasswordAgePolicyRequest



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 最大年龄天数 | uint32 | -  |    |
| 过期警告日  | uint32 | -  |    |




### 添加CustomPasswordAgePolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加CustomPasswordComplexityPolicyRequest



| 字段   | 类型     | 描述 | 验证 |
| ---- | ------ | -- | -- |
| 最小长度 | uint64 | -  |    |
| 大写   | 布尔值    | -  |    |
| 小写   | 布尔值    | -  |    |
| 有数字  | 布尔值    | -  |    |
| 有符号  | 布尔值    | -  |    |




### AddCustomPasswordComplexityPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加自定义隐私政策



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| tos_link | 字符串 | -  |    |
| 隐私链接     | 字符串 | -  |    |
| 帮助链接     | 字符串 | -  |    |




### 添加CustomPrivacyPolicy响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddHumanUserRequest



| 字段     | 类型                          | 描述 | 验证                                                            |
| ------ | --------------------------- | -- | ------------------------------------------------------------- |
| 用户名称   | 字符串                         | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 个人信息   | AddHumanUserRequest.Profile | -  | 必填：true<br />                                           |
| 电子邮件地址 | AddHumanUserRequest.Email   | -  | 必填：true<br />                                           |
| 电话     | AddHumanUserRequest.Phone   | -  |                                                               |
| 初始化密码  | 字符串                         | -  |                                                               |




### AddHumanUserRequest.Email



| 字段       | 类型  | 描述 | 验证                             |
| -------- | --- | -- | ------------------------------ |
| 电子邮件地址   | 字符串 | -  | string.email: true<br /> |
| 是电子邮件已验证 | 布尔值 | -  |                                |




### AddHumanUserRequest.Phone



| 字段  | 类型  | 描述      | 验证                                                                                        |
| --- | --- | ------- | ----------------------------------------------------------------------------------------- |
| 电话  | 字符串 | 必须是全局数字 | string.min_len: 1<br /> string.max_len: 50<br /> string.prefix: +<br /> |
| 已验证 | 布尔值 | -       |                                                                                           |




### AddHumanUserRequest.Profile



| 字段   | 类型                     | 描述 | 验证                                                            |
| ---- | ---------------------- | -- | ------------------------------------------------------------- |
| 名字   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 姓名   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 昵称   | 字符串                    | -  | string.max_len: 200<br />                               |
| 显示名称 | 字符串                    | -  | string.max_len: 200<br />                               |
| 首选语言 | 字符串                    | -  | string.max_len: 10<br />                                |
| 两性平等 | zitadel.user.v1.Gender | -  |                                                               |




### AddHumanUserResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 用户ID | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加 ToLoginPolicyRequest



| 字段     | 类型                          | 描述 | 验证                                                            |
| ------ | --------------------------- | -- | ------------------------------------------------------------- |
| idp_id | 字符串                         | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 所有者类型  | zitadel.idp.v1.IDPOwnerType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### AddIDPToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加机器密钥请求



| 字段   | 类型                       | 描述 | 验证                                                            |
| ---- | ------------------------ | -- | ------------------------------------------------------------- |
| 用户ID | 字符串                      | -  | string.min_len: 1<br />                                 |
| 类型   | zitadel.authn.v1.KeyType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |
| 到期日  | 时间戳                      | -  |                                                               |




### AddMachineKey响应



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| key_id | 字符串                      | -  |    |
| 密钥详情   | 字节                       | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |




### AddMachineUser请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 描述   | 字符串 | -  | string.max_len: 500<br />                               |




### AddMachineUser响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 用户ID | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddMultiFactorToLoginPolicyRequest



| 字段 | 类型                                | 描述 | 验证                                                            |
| -- | --------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.MultiFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### AddMultiFactorToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddOIDCApp请求



| 字段                            | 类型                                 | 描述 | 验证                                                                                                                                          |
| ----------------------------- | ---------------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 项目ID                          | 字符串                                | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                               |
| 名称                            | 字符串                                | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                               |
| 重定向urs                        | 重复的字符串                             | -  |                                                                                                                                             |
| 响应类型                          | 重复 zitadel.app.v1.OIDCResponseType | -  |                                                                                                                                             |
| 授予类型                          | 重复 zitadel.app.v1.OIDCGrantype     | -  |                                                                                                                                             |
| app_type                      | zitadel.app.v1.OIDCAppType         | -  | 只有枚举：true<br />                                                                                                                       |
| auth_method_type            | zitadel.app.v1.OIDCAuthMethodType  | -  | 只有枚举：true<br />                                                                                                                       |
| post_logout_redirect_uris   | 重复的字符串                             | -  |                                                                                                                                             |
| 版本                            | zitadel.app.v1.OIDC版本              | -  | 只有枚举：true<br />                                                                                                                       |
| dev_模式                        | 布尔值                                | -  |                                                                                                                                             |
| 访问令牌类型                        | zitadel.app.v1.OIDCTokenType       | -  | 只有枚举：true<br />                                                                                                                       |
| access_token_role_position  | 布尔值                                | -  |                                                                                                                                             |
| id_token_role_position      | 布尔值                                | -  |                                                                                                                                             |
| id_token_userinfo_statement | 布尔值                                | -  |                                                                                                                                             |
| 时钟偏移                          | google.protobuf.Duration           | -  | duration.lte.seconds: 5<br /> duration.lte.nanos: 0<br /> duration.gte.seconds: 0<br /> duration.gte.nanos: 0<br /> |
| 额外来源                          | 重复的字符串                             | -  |                                                                                                                                             |




### AddOIDCAppResponse



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| app_id     | 字符串                      | -  |    |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |
| client_id  | 字符串                      | -  |    |
| 客户端_secret | 字符串                      | -  |    |
| 没有兼容的      | 布尔值                      | -  |    |
| 遵守问题       | 重复的 zitadel.v1.本地化消息     | -  |    |




### AddOrgDomainRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddOrgDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddOrgJWTIDP 请求



| 字段           | 类型                            | 描述 | 验证                                                            |
| ------------ | ----------------------------- | -- | ------------------------------------------------------------- |
| 名称           | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| styling_type | zitadel.idp.v1.IDPStylingType | -  | 只有枚举：true<br />                                         |
| jwt_endpoint | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 键盘终点         | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题名称         | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 自动注册         | 布尔值                           | -  |                                                               |




### AddOrgJWTIDPResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| idp_id | 字符串                      | -  |    |




### AddOrgMemberRequest



| 字段   | 类型     | 描述 | 验证                                                            |
| ---- | ------ | -- | ------------------------------------------------------------- |
| 用户ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | -  |                                                               |




### AddOrgMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddOrgOIDCIDP请求



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




### AddOrgOIDCIDPResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| idp_id | 字符串                      | -  |    |




### AddOrgRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddOrgResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加无密码注册请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### AddwordlessRegistrationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 链接   | 字符串                      | -  |    |
| 过期时间 | google.protobuf.Duration | -  |    |




### 附加人员访问令牌请求



| 字段   | 类型  | 描述 | 验证                            |
| ---- | --- | -- | ----------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> |
| 到期日  | 时间戳 | -  |                               |




### AddPersonalAccessTokenResponse



| 字段       | 类型                       | 描述 | 验证 |
| -------- | ------------------------ | -- | -- |
| token_id | 字符串                      | -  |    |
| 令牌       | 字符串                      | -  |    |
| 详细信息     | zitadel.v1.ObjectDetails | -  |    |




### AddProjectGrantMemberRequest



| 字段       | 类型     | 描述 | 验证                                                            |
| -------- | ------ | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色       | 重复的字符串 | -  |                                                               |




### AddProjectGrantMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddProjectGrantRequest



| 字段         | 类型     | 描述 | 验证                                                            |
| ---------- | ------ | -- | ------------------------------------------------------------- |
| 项目ID       | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 赠送的 org_id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键        | 重复的字符串 | -  |                                                               |




### AddProjectGrantResponse



| 字段       | 类型                       | 描述 | 验证 |
| -------- | ------------------------ | -- | -- |
| grant_id | 字符串                      | -  |    |
| 详细信息     | zitadel.v1.ObjectDetails | -  |    |




### AddProjectMemberRequest



| 字段   | 类型     | 描述 | 验证                                                            |
| ---- | ------ | -- | ------------------------------------------------------------- |
| 项目ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | -  |                                                               |




### AddProjectMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 附加项目请求



| 字段           | 类型                                        | 描述 | 验证                                                            |
| ------------ | ----------------------------------------- | -- | ------------------------------------------------------------- |
| 名称           | 字符串                                       | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 项目_role_补丁 | 布尔值                                       | -  |                                                               |
| 项目角色检查       | 布尔值                                       | -  |                                                               |
| 已检查项目        | 布尔值                                       | -  |                                                               |
| 私人标签设置       | zitadel.project.v1.PrivateLabelingSetting | -  | 只有枚举：true<br />                                         |




### AddProjectResponse



| 字段   | 类型                       | 描述 | 验证                                                            |
| ---- | ------------------------ | -- | ------------------------------------------------------------- |
| id   | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 详细信息 | zitadel.v1.ObjectDetails | -  |                                                               |




### AddProjectRoleRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 项目ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 显示名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 群組   | 字符串 | -  | string.max_len: 200<br />                               |




### AddProjectRoleResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 添加SAMLApp请求



| 字段                                                                                                | 类型  | 描述 | 验证                                                            |
| ------------------------------------------------------------------------------------------------- | --- | -- | ------------------------------------------------------------- |
| 项目ID                                                                                              | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称                                                                                                | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_xml | 字节  | -  | bytes.max_len: 500000<br />                             |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_url | 字符串 | -  | string.max_len: 200<br />                               |




### AddSAMLAppResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| app_id | 字符串                      | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |




### AddSecondFactorToLoginPolicyRequest



| 字段 | 类型                                 | 描述 | 验证                                                            |
| -- | ---------------------------------- | -- | ------------------------------------------------------------- |
| 类型 | zitadel.policy.v1.SecondFactorType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### AddSecondFactorToLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### AddUserGrantRequest



| 字段     | 类型     | 描述 | 验证                                                            |
| ------ | ------ | -- | ------------------------------------------------------------- |
| 用户ID   | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 项目ID   | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 项目赠款ID | 字符串    | -  | string.max_len: 200<br />                               |
| 角色键    | 重复的字符串 | -  |                                                               |




### AddUserGrantResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 用户授权ID | 字符串                      | -  |    |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |




### BulkAddProjectRolesRequest



| 字段   | 类型                                  | 描述 | 验证                                                            |
| ---- | ----------------------------------- | -- | ------------------------------------------------------------- |
| 项目ID | 字符串                                 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的 BulkAddProjectRolesRequest.Role | -  |                                                               |




### BulkAddProjectRolesRequest.Role



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 密钥   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 显示名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 群組   | 字符串 | -  | string.max_len: 200<br />                               |




### BulkAddProjectRolesResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### BulkRemoveOrgMetadataRequest



| 字段 | 类型     | 描述 | 验证                                                                              |
| -- | ------ | -- | ------------------------------------------------------------------------------- |
| 密钥 | 重复的字符串 | -  | 重复.items.string.min_len: 1<br /> 重复.items.string.max_len: 200<br /> |




### BulkRemoveOrgMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### BulkRemoveUserGrantRequest



| 字段       | 类型     | 描述 | 验证 |
| -------- | ------ | -- | -- |
| grant_id | 重复的字符串 | -  |    |




### BulkRemoveUserGrantResponse





### 批量删除用户元数据请求



| 字段 | 类型     | 描述 | 验证                                                                              |
| -- | ------ | -- | ------------------------------------------------------------------------------- |
| id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br />                   |
| 密钥 | 重复的字符串 | -  | 重复.items.string.min_len: 1<br /> 重复.items.string.max_len: 200<br /> |




### BulkRemoveUserMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### BulkSetOrgMetadataRequest



| 字段  | 类型                                    | 描述 | 验证 |
| --- | ------------------------------------- | -- | -- |
| 元数据 | 重复 BulkSetOrgMetadataRequest.Metadata | -  |    |




### BulkSetOrgMetadataRequest.Metadata



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### BulkSetOrgMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### BulkSetUserMetadataRequest



| 字段  | 类型                                     | 描述 | 验证                                                            |
| --- | -------------------------------------- | -- | ------------------------------------------------------------- |
| id  | 字符串                                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 元数据 | 重复 BulkSetUserMetadataRequest.Metadata | -  |                                                               |




### BulkSetUserMetadataRequest.Metadata



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### BulkSetUserMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 清除流请求



| 字段 | 类型  | 描述     | 验证 |
| -- | --- | ------ | -- |
| 类型 | 字符串 | 流程的 id |    |




### ClearFlowResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 创建操作请求



| 字段    | 类型                       | 描述 | 验证                                                                                                                                           |
| ----- | ------------------------ | -- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称    | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                                |
| 脚本    | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 2000<br />                                                                               |
| 超时    | google.protobuf.Duration | -  | duration.lte.seconds: 20<br /> duration.lte.nanos: 0<br /> duration.gte.seconds: 0<br /> duration.gte.nanos: 0<br /> |
| 允许失败！ | 布尔值                      | -  |                                                                                                                                              |




### 创建动作响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| id   | 字符串                      | -  |    |




### 停用动作请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| id | 字符串 | -  |    |




### 停用动作响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 停用应用请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 停用应用响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### DeactivateOrgIDPRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### DeactivateOrgIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### DeactivateOrgRequest
这是一个空请求




### DeactivateOrgResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 停用项目GrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 停用项目GrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 停用项目请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 停用项目响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 停用用户GrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### DeactivateUserGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### DeactivateUserRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### DeactivateUserResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 删除操作请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| id | 字符串 | -  |    |




### 删除操作响应





### 生成 OrgDomainValidationRequest



| 字段 | 类型                                  | 描述 | 验证                                                            |
| -- | ----------------------------------- | -- | ------------------------------------------------------------- |
| 域  | 字符串                                 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 类型 | zitadel.org.v1.DomainValidationType | -  | 只有枚举.defined_in: true<br /> num.not_in: [0]<br /> |




### 生成 OrgDomainValidationResponse



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 令牌 | 字符串 | -  |    |
| 网址 | 字符串 | -  |    |




### 获取操作请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| id | 字符串 | -  |    |




### GetActionResponse



| 字段 | 类型 | 描述 | 验证 |
| -- | -- | -- | -- |
| 行动 | 操作 | -  |    |




### GetAppByID请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetAppByIDResponse



| 字段 | 类型                 | 描述 | 验证 |
| -- | ------------------ | -- | -- |
| 应用 | zitadel.app.v1.App | -  |    |




### GetAppKeyRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| key_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetAppKeyResponse



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 密钥 | zitadel.authn.v1.Key | -  |    |




### GetCustomDomainClaimMessageTextRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetCustomDomainClaimedMessageTextResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.MessageCustomText | -  |    |




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




### GetDefaultLabelPolicyRequest
这是一个空请求




### GetDefaultLabelPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LabelPolicy | -  |    |




### GetDefaultLockoutPolicyRequest
这是一个空请求




### GetDefaultLockoutPolicyResponse



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LockoutPolicy | -  |    |




### GetDefaultLoginPolicyRequest





### GetDefaultLoginPolicyResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.LoginPolicy | -  |    |




### GetDefaultLoginTextsRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetDefaultLoginTextsResponse



| 字段    | 类型                         | 描述 | 验证 |
| ----- | -------------------------- | -- | -- |
| 自定义文本 | zitadel.text.v1.Login自定义文本 | -  |    |




### GetDefaultPasswordAgePolicyRequest
这是一个空请求




### GetDefaultPasswordAgePolicyResponse



| 字段 | 类型                                      | 描述 | 验证 |
| -- | --------------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PasswordAgeing Policy | -  |    |




### GetDefaultPasswordComplexityPolicyRequest
这是一个空请求




### GetDefaultPasswordComplexityPolicyResponse



| 字段 | 类型                                         | 描述 | 验证 |
| -- | ------------------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.PasswordComplexityPolicy | -  |    |




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




### GetDefaultPrivacyPolicyRequest
这是一个空请求




### GetDefaultPrivacyPolicyResponse



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PrivacyPolicy | -  |    |




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




### GetFlowRequest



| 字段 | 类型  | 描述     | 验证 |
| -- | --- | ------ | -- |
| 类型 | 字符串 | 流程的 id |    |




### GetFlow响应



| 字段 | 类型                     | 描述 | 验证 |
| -- | ---------------------- | -- | -- |
| 流  | zitadel.action.v1.Flow | -  |    |




### GetGrantedProjectByIDRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetGrantedProjectByIDResponse



| 字段   | 类型                                | 描述 | 验证 |
| ---- | --------------------------------- | -- | -- |
| 授予项目 | zitadel.project.v1.GrantedProject | -  |    |




### GetHumanEmailRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetHumanEmailResponse



| 字段     | 类型                       | 描述 | 验证 |
| ------ | ------------------------ | -- | -- |
| 详细信息   | zitadel.v1.ObjectDetails | -  |    |
| 电子邮件地址 | zitadel.user.v1.Email    | -  |    |




### GetHumanPhoneRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetHumanPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 电话   | zitadel.user.v1.Phone    | -  |    |




### GetHumanProfileRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetHumanProfileResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |
| 个人信息 | zitadel.user.v1.Profile  | -  |    |




### GetIAMRequest
这是一个空请求




### GetIAMResponse



| 字段               | 类型  | 描述                    | 验证 |
| ---------------- | --- | --------------------- | -- |
| global_org_id  | 字符串 | 已废弃：使用默认 org_id 改为默认值 |    |
| iam_project_id | 字符串 | -                     |    |
| default_org_id | 字符串 | -                     |    |




### GetLabelPolicyRequest
这是一个空请求




### GetLabelPolicyResponse



| 字段   | 类型                            | 描述                                        | 验证 |
| ---- | ----------------------------- | ----------------------------------------- | -- |
| 政策   | zitadel.policy.v1.LabelPolicy | -                                         |    |
| 是默认值 | 布尔值                           | 已废弃：zitadel.policy.v1.LabelPolicy 也定义了默认值 |    |




### GetLockoutPolicyRequest
这是一个空请求




### GetLockoutPolicyResponse



| 字段   | 类型                              | 描述                                          | 验证 |
| ---- | ------------------------------- | ------------------------------------------- | -- |
| 政策   | zitadel.policy.v1.LockoutPolicy | -                                           |    |
| 是默认值 | 布尔值                             | 已废弃：zitadel.policy.v1.LockoutPolicy 也定义了默认值 |    |




### GetLoginPolicyRequest





### GetLoginPolicyResponse



| 字段   | 类型                            | 描述                                | 验证 |
| ---- | ----------------------------- | --------------------------------- | -- |
| 政策   | zitadel.policy.v1.LoginPolicy | -                                 |    |
| 是默认值 | 布尔值                           | 已废弃：zitadel.policy.v1.LoginPolicy |    |




### GetMachineKeyByIDsRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 用户ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| key_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetMachineKeyByIDsResponse



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 密钥 | zitadel.authn.v1.Key | -  |    |




### GetMyOrgRequest
这是一个空请求




### GetMyOrgResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| 附 件 | zitadel.org.v1.Org | -  |    |




### 获取信息请求
这是一个空请求




### GetOIDC信息响应



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 发行者  | 字符串 | -  |    |
| 发现终点 | 字符串 | -  |    |




### GetOrgByDomainGlobalRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetOrgByDomainGlobalResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| 附 件 | zitadel.org.v1.Org | -  |    |




### GetOrgIAMPolicyRequest





### GetOrgIAMPolicyResponse



| 字段 | 类型                             | 描述 | 验证 |
| -- | ------------------------------ | -- | -- |
| 政策 | zitadel.policy.v1.OrgIAMPolicy | -  |    |




### GetOrgIDPByIDRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetOrgIDPByIDResponse



| 字段  | 类型                 | 描述 | 验证 |
| --- | ------------------ | -- | -- |
| idp | zitadel.idp.v1.IDP | -  |    |




### GetOrgMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetOrgMetadataResponse



| 字段  | 类型                           | 描述 | 验证 |
| --- | ---------------------------- | -- | -- |
| 元数据 | zitadel.metadata.v1.Metadata | -  |    |




### GetPasswordAgePolicyRequest
这是一个空请求




### GetPasswordAgePolicyResponse



| 字段   | 类型                                      | 描述                                              | 验证 |
| ---- | --------------------------------------- | ----------------------------------------------- | -- |
| 政策   | zitadel.policy.v1.PasswordAgeing Policy | -                                               |    |
| 是默认值 | 布尔值                                     | 已废弃：zitadel.policy.v1.PasswordAgePolicy 也定义了默认值 |    |




### GetPassword复杂政策请求





### GetPasswordComplexityPolicyResponse



| 字段   | 类型                                         | 描述                                                             | 验证 |
| ---- | ------------------------------------------ | -------------------------------------------------------------- | -- |
| 政策   | zitadel.policy.v1.PasswordComplexityPolicy | -                                                              |    |
| 是默认值 | 布尔值                                        | 已废弃：zitadel.policy.v1.PasswordComplexityPolicy 中也定义了is_default |    |




### GetPersonalAccessTokenByIDsRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetPersonalAccessTokenByIDsResponse



| 字段 | 类型                                  | 描述 | 验证 |
| -- | ----------------------------------- | -- | -- |
| 令牌 | zitadel.user.v1.PersonalAccessToken | -  |    |




### GetPreviewLabelPolicyRequest
这是一个空请求




### GetPreviewLabelPolicyResponse



| 字段   | 类型                            | 描述                                        | 验证 |
| ---- | ----------------------------- | ----------------------------------------- | -- |
| 政策   | zitadel.policy.v1.LabelPolicy | -                                         |    |
| 是默认值 | 布尔值                           | 已废弃：zitadel.policy.v1.LabelPolicy 也定义了默认值 |    |




### 获取隐私政策请求
这是一个空请求




### GetPrivacyPolicy响应



| 字段 | 类型                              | 描述 | 验证 |
| -- | ------------------------------- | -- | -- |
| 政策 | zitadel.policy.v1.PrivacyPolicy | -  |    |




### GetProjectByIDRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetProjectByIDResponse



| 字段 | 类型                         | 描述 | 验证 |
| -- | -------------------------- | -- | -- |
| 项目 | zitadel.project.v1.Project | -  |    |




### GetProjectGrantByIDRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetProjectGrantByIDResponse



| 字段    | 类型                                | 描述 | 验证 |
| ----- | --------------------------------- | -- | -- |
| 项目补助金 | zitadel.project.v1.GrantedProject | -  |    |




### GetSupportedLanguagesRequest
这是一个空请求




### GetSupportedLanguagesResponse



| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 语言 | 重复的字符串 | -  |    |




### GetUserByID请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetUserByID响应



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 用户 | zitadel.user.v1.User | -  |    |




### GetUserByLoginNameGlobalRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 登录名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetUserByLoginNameGlobalResponse



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 用户 | zitadel.user.v1.User | -  |    |




### GetUserGrantByID请求



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetUserGrantByID响应



| 字段   | 类型                        | 描述 | 验证 |
| ---- | ------------------------- | -- | -- |
| 用户授权 | zitadel.user.v1.UserGrant | -  |    |




### GetUserMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### GetUserMetadataResponse



| 字段  | 类型                           | 描述 | 验证 |
| --- | ---------------------------- | -- | -- |
| 元数据 | zitadel.metadata.v1.Metadata | -  |    |




### HealthzRequest
这是一个空请求




### HealthzResponse
这是一个空的响应




### IDP查询



| 字段                                                                                                                  | 类型                               | 描述 | 验证 |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -- | -- |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.idp_id_查询                        | zitadel.idp.v1.IDPIDQuery        | -  |    |
| [**一个**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.idp_name_query_query.idp_query | zitadel.idp.v1.IDPNameQuery      | -  |    |
| [**一处**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) query.owners_type_query                | zitadel.idp.v1.IDPOwnerTypeQuery | -  |    |




### ImportHumanUserRequest



| 字段        | 类型                                    | 描述 | 验证                                                            |
| --------- | ------------------------------------- | -- | ------------------------------------------------------------- |
| 用户名称      | 字符串                                   | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 个人信息      | ImportHumanUserRequest.Profile        | -  | 必填：true<br />                                           |
| 电子邮件地址    | ImportHumanUserRequest.Email          | -  | 必填：true<br />                                           |
| 电话        | ImportHumanUserRequest.电话             | -  |                                                               |
| 密碼        | 字符串                                   | -  |                                                               |
| hashed_密码 | ImportHumanUserRequest.HashedPassword | -  |                                                               |
| 必须输入密码    | 布尔值                                   | -  |                                                               |
| 请求_无密码注册  | 布尔值                                   | -  |                                                               |
| otp_代码    | 字符串                                   | -  |                                                               |
| idps      | 重复的 ImportHumanUserRequest.IDP        | -  |                                                               |




### ImportHumanUserRequest.Email



| 字段       | 类型  | 描述 | 验证                             |
| -------- | --- | -- | ------------------------------ |
| 电子邮件地址   | 字符串 | -  | string.email: true<br /> |
| 是电子邮件已验证 | 布尔值 | -  |                                |




### ImportHumanUserRequest.HashedPassword



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 值  | 字符串 | -  |    |
| 算法 | 字符串 | -  |    |




### ImportHumanUserRequest.IDP



| 字段        | 类型  | 描述                  | 验证                                                            |
| --------- | --- | ------------------- | ------------------------------------------------------------- |
| config_id | 字符串 | ZITADEL境内流离失所者的内部id | string.min_len: 1<br /> string.max_len: 200<br /> |
| 外部用户ID    | 字符串 | IDP 上用户的 id         | string.min_len: 1<br /> string.max_len: 200<br /> |
| 显示名称      | 字符串 | 国内流离失所者用户名(显示)      | string.max_len: 200<br />                               |




### ImportHumanUserRequest.电话



| 字段  | 类型  | 描述      | 验证                                                                                        |
| --- | --- | ------- | ----------------------------------------------------------------------------------------- |
| 电话  | 字符串 | 必须是全局数字 | string.min_len: 1<br /> string.max_len: 50<br /> string.prefix: +<br /> |
| 已验证 | 布尔值 | -       |                                                                                           |




### ImportHumanUserRequest.Profile



| 字段   | 类型                     | 描述 | 验证                                                            |
| ---- | ---------------------- | -- | ------------------------------------------------------------- |
| 名字   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 姓名   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 昵称   | 字符串                    | -  | string.max_len: 200<br />                               |
| 显示名称 | 字符串                    | -  | string.max_len: 200<br />                               |
| 首选语言 | 字符串                    | -  | string.max_len: 10<br />                                |
| 两性平等 | zitadel.user.v1.Gender | -  |                                                               |




### ImportHumanUserResponse



| 字段    | 类型                                                | 描述 | 验证 |
| ----- | ------------------------------------------------- | -- | -- |
| 用户ID  | 字符串                                               | -  |    |
| 详细信息  | zitadel.v1.ObjectDetails                          | -  |    |
| 无密码注册 | ImportHumanUserResponse.Passwordless Registration | -  |    |




### ImportHumanUserResponse.Passwordless Registration



| 字段   | 类型                       | 描述            | 验证 |
| ---- | ------------------------ | ------------- | -- |
| 链接   | 字符串                      | -             |    |
| 生存期  | google.protobuf.Duration | 已废弃：使用过期改为过期的 |    |
| 过期时间 | google.protobuf.Duration | -             |    |




### IsUserUnqueRequest



| 字段     | 类型  | 描述 | 验证                              |
| ------ | --- | -- | ------------------------------- |
| 用户名称   | 字符串 | -  | string.max_len: 200<br /> |
| 电子邮件地址 | 字符串 | -  | string.max_len: 200<br /> |




### IsUserUniqueResponse



| 字段   | 类型  | 描述 | 验证 |
| ---- | --- | -- | -- |
| 是唯一的 | 布尔值 | -  |    |




### ListActionsRequest



| 字段  | 类型                              | 描述       | 验证 |
| --- | ------------------------------- | -------- | -- |
| 查询  | zitadel.v1.ListQuery            | 列出限制和顺序  |    |
| 排序列 | zitadel.action.v1.ActionField名称 | 结果排序的字段  |    |
| 查询  | 重复的操作查询                         | 客户端寻找的标准 |    |




### ListActionsResponse



| 字段   | 类型                              | 描述 | 验证 |
| ---- | ------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails          | -  |    |
| 排序列  | zitadel.action.v1.ActionField名称 | -  |    |
| 结果   | 重复 zitadel.action.v1.Action     | -  |    |




### ListAllProjectGrantsRequest



| 字段 | 类型                                         | 描述      | 验证 |
| -- | ------------------------------------------ | ------- | -- |
| 查询 | zitadel.v1.ListQuery                       | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.project.v1.AllProjectGrantQuery | 客户寻找的标准 |    |




### ListAllProjectGrantsResponse



| 字段   | 类型                                   | 描述 | 验证 |
| ---- | ------------------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails               | -  |    |
| 结果   | 重复 zitadel.project.v1.GrantedProject | -  |    |




### ListAppChanges请求



| 字段     | 类型                            | 描述      | 验证                                                            |
| ------ | ----------------------------- | ------- | ------------------------------------------------------------- |
| 查询     | zitadel.change.v1.ChangeQuery | 列出限制和顺序 |                                                               |
| 项目ID   | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListAppChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### 列表应用密钥请求



| 字段     | 类型                   | 描述      | 验证                                                            |
| ------ | -------------------- | ------- | ------------------------------------------------------------- |
| 查询     | zitadel.v1.ListQuery | 列出限制和顺序 |                                                               |
| app_id | 字符串                  | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 项目ID   | 字符串                  | -       | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListAppKeysResponse



| 字段   | 类型                      | 描述 | 验证 |
| ---- | ----------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails  | -  |    |
| 结果   | 重复 zitadel.authn.v1.Key | -  |    |




### 列表应用请求



| 字段   | 类型                         | 描述      | 验证                                                            |
| ---- | -------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID | 字符串                        | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery       | 列出限制和顺序 |                                                               |
| 查询   | 重复 zitadel.app.v1.AppQuery | 客户寻找的标准 |                                                               |




### ListAppsResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复 zitadel.app.v1.App  | -  |    |




### ListFlowTrigger类型请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| 类型 | 字符串 | -  |    |




### ListFlowTrigger类型响应



| 字段 | 类型                               | 描述 | 验证 |
| -- | -------------------------------- | -- | -- |
| 结果 | 重复 zitadel.action.v1.TriggerType | -  |    |




### 列表流类型请求





### 列表流类型响应



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 结果 | 重复 zitadel.action.v1.FlowType | -  |    |




### ListGrantedProjectRolesRequest



| 字段       | 类型                              | 描述      | 验证                                                            |
| -------- | ------------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID     | 字符串                             | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串                             | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询       | zitadel.v1.ListQuery            | 列出限制和顺序 |                                                               |
| 查询       | 重复 zitadel.project.v1.RoleQuery | 客户寻找的标准 |                                                               |




### ListGrantedProjectRoles响应



| 字段   | 类型                         | 描述 | 验证 |
| ---- | -------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails     | -  |    |
| 结果   | 重复 zitadel.project.v1.Role | -  |    |




### ListGrantedProjectsRequest



| 字段 | 类型                                 | 描述      | 验证 |
| -- | ---------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery               | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.project.v1.ProjectQuery | 客户寻找的标准 |    |




### ListGrantedProjectsResponse



| 字段   | 类型                                   | 描述 | 验证 |
| ---- | ------------------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails               | -  |    |
| 结果   | 重复 zitadel.project.v1.GrantedProject | -  |    |




### ListHumanAuthFactorsRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListHumanAuthFactorsResponse



| 字段 | 类型                            | 描述 | 验证 |
| -- | ----------------------------- | -- | -- |
| 结果 | 重复 zitadel.user.v1.AuthFactor | -  |    |




### ListHumanLinkedIDPRequest



| 字段   | 类型                   | 描述      | 验证                                                            |
| ---- | -------------------- | ------- | ------------------------------------------------------------- |
| 用户ID | 字符串                  | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery | 列出限制和顺序 |                                                               |




### ListHumanLinkedIDPsResponse



| 字段   | 类型                            | 描述 | 验证 |
| ---- | ----------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails        | -  |    |
| 结果   | 重复 zitadel.idp.v1.IDPUserLink | -  |    |




### ListHumanPasswordlessment



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListHumanPasswordlessment



| 字段 | 类型                               | 描述 | 验证 |
| -- | -------------------------------- | -- | -- |
| 结果 | 重复 zitadel.user.v1.WebAuthNToken | -  |    |




### ListLoginPolicyIDsRequest



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 查询 | zitadel.v1.ListQuery | -  |    |




### ListLoginPolicyIDPsResponse



| 字段   | 类型                                     | 描述 | 验证 |
| ---- | -------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                 | -  |    |
| 结果   | 重复的 zitadel.idp.v1.IDP LoginPolicyLink | -  |    |




### ListLoginPolicyMultiFactorsRequest





### ListLoginPolicyMultiFactorsResponse



| 字段   | 类型                                   | 描述 | 验证 |
| ---- | ------------------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails               | -  |    |
| 结果   | 重复 zitadel.policy.v1.MultiFactorType | -  |    |




### ListLoginPolicySecondFactorsRequest





### ListLoginPolicySecondFactorsResponse



| 字段   | 类型                                    | 描述 | 验证 |
| ---- | ------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                | -  |    |
| 结果   | 重复 zitadel.policy.v1.SecondFactorType | -  |    |




### 列表机器密钥请求



| 字段   | 类型                   | 描述      | 验证                                                            |
| ---- | -------------------- | ------- | ------------------------------------------------------------- |
| 用户ID | 字符串                  | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery | 列出限制和顺序 |                                                               |




### ListMachineKeysResponse



| 字段   | 类型                      | 描述 | 验证 |
| ---- | ----------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails  | -  |    |
| 结果   | 重复 zitadel.authn.v1.Key | -  |    |




### ListOrgChangesRequest



| 字段 | 类型                            | 描述      | 验证 |
| -- | ----------------------------- | ------- | -- |
| 查询 | zitadel.change.v1.ChangeQuery | 列出限制和顺序 |    |




### ListOrgChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### ListOrgDomainsRequest



| 字段 | 类型                                  | 描述      | 验证 |
| -- | ----------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery                | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.org.v1.DomainSearchQuery | 客户寻找的标准 |    |




### ListOrgDomainsResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails   | -  |    |
| 结果   | 重复 zitadel.org.v1.Domain | -  |    |




### ListOrgIDersRequest



| 字段  | 类型                          | 描述      | 验证 |
| --- | --------------------------- | ------- | -- |
| 查询  | zitadel.v1.ListQuery        | 列出限制和顺序 |    |
| 排序列 | zitadel.idp.v1.IDPFieldName | 结果排序的字段 |    |
| 查询  | 重复的IDP查询                    | 客户寻找的标准 |    |




### ListOrgIDersResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 排序列  | zitadel.idp.v1.IDPFieldName | -  |    |
| 结果   | 重复的 zitadel.idp.v1.IDP      | -  |    |




### ListOrgMemberRolesRequest
这是一个空请求




### ListOrgMemberRolesResponse



| 字段 | 类型     | 描述 | 验证 |
| -- | ------ | -- | -- |
| 结果 | 重复的字符串 | -  |    |




### ListOrgMembers请求



| 字段 | 类型                               | 描述      | 验证 |
| -- | -------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery             | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.member.v1.SearchQuery | 客户寻找的标准 |    |




### ListOrgMembers响应



| 字段   | 类型                          | 描述      | 验证 |
| ---- | --------------------------- | ------- | -- |
| 详细信息 | zitadel.v1.ListDetails      | 列出限制和顺序 |    |
| 结果   | 重复 zitadel.member.v1.Member | 客户寻找的标准 |    |




### ListOrgMetadataRequest



| 字段 | 类型                                   | 描述 | 验证 |
| -- | ------------------------------------ | -- | -- |
| 查询 | zitadel.v1.ListQuery                 | -  |    |
| 查询 | 重复 zitadel.metadata.v1.MetadataQuery | -  |    |




### ListOrgMetadataResponse



| 字段   | 类型                              | 描述 | 验证 |
| ---- | ------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails          | -  |    |
| 结果   | 重复 zitadel.metadata.v1.Metadata | -  |    |




### 邮件列表访问令牌



| 字段   | 类型                   | 描述      | 验证                                                            |
| ---- | -------------------- | ------- | ------------------------------------------------------------- |
| 用户ID | 字符串                  | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery | 列出限制和顺序 |                                                               |




### ListPersonalAccess令牌响应



| 字段   | 类型                                     | 描述 | 验证 |
| ---- | -------------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails                 | -  |    |
| 结果   | 重复 zitadel.user.v1.PersonalAccessToken | -  |    |




### 列表项目变更请求



| 字段   | 类型                            | 描述      | 验证                                                            |
| ---- | ----------------------------- | ------- | ------------------------------------------------------------- |
| 查询   | zitadel.change.v1.ChangeQuery | 列出限制和顺序 |                                                               |
| 项目ID | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListProjectChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### ListProjectGrantChangesRequest



| 字段       | 类型                            | 描述      | 验证                                                            |
| -------- | ----------------------------- | ------- | ------------------------------------------------------------- |
| 查询       | zitadel.change.v1.ChangeQuery | 列出限制和顺序 |                                                               |
| 项目ID     | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListProjectGrantChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### ListProjectGrantMemberRolesRequest



| 字段 | 类型                   | 描述 | 验证 |
| -- | -------------------- | -- | -- |
| 查询 | zitadel.v1.ListQuery | -  |    |
| 结果 | 重复的字符串               | -  |    |




### ListProjectGrantMemberRolesResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复的字符串                 | -  |    |




### ListProjectGrantMembersRequest



| 字段       | 类型                               | 描述      | 验证                                                            |
| -------- | -------------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID     | 字符串                              | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串                              | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询       | zitadel.v1.ListQuery             | 列出限制和顺序 |                                                               |
| 查询       | 重复 zitadel.member.v1.SearchQuery | 客户寻找的标准 |                                                               |




### ListProjectGrantMembersResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 结果   | 重复 zitadel.member.v1.Member | -  |    |




### ListProjectGrantsRequest



| 字段   | 类型                                      | 描述      | 验证                                                            |
| ---- | --------------------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID | 字符串                                     | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery                    | 列出限制和顺序 |                                                               |
| 查询   | 重复 zitadel.project.v1.ProjectGrantQuery | 客户寻找的标准 |                                                               |




### ListProjectGrantsResponse



| 字段   | 类型                                   | 描述 | 验证 |
| ---- | ------------------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ListDetails               | -  |    |
| 结果   | 重复 zitadel.project.v1.GrantedProject | -  |    |




### ListProjectMemberRolesRequest
这是一个空请求




### ListProjectMemberRolesResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复的字符串                 | -  |    |




### 列表项目成员请求



| 字段   | 类型                               | 描述      | 验证                                                            |
| ---- | -------------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID | 字符串                              | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery             | 列出限制和顺序 |                                                               |
| 查询   | 重复 zitadel.member.v1.SearchQuery | 客户寻找的标准 |                                                               |




### ListProjectMembers响应



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 结果   | 重复 zitadel.member.v1.Member | -  |    |




### ListProjectRolesRequest



| 字段   | 类型                              | 描述      | 验证                                                            |
| ---- | ------------------------------- | ------- | ------------------------------------------------------------- |
| 项目ID | 字符串                             | -       | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery            | 列出限制和顺序 |                                                               |
| 查询   | 重复 zitadel.project.v1.RoleQuery | 客户寻找的标准 |                                                               |




### ListProjectRoles响应



| 字段   | 类型                         | 描述 | 验证 |
| ---- | -------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails     | -  |    |
| 结果   | 重复 zitadel.project.v1.Role | -  |    |




### 列表项目请求



| 字段 | 类型                                 | 描述      | 验证 |
| -- | ---------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery               | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.project.v1.ProjectQuery | 客户寻找的标准 |    |




### 列表项目响应



| 字段   | 类型                            | 描述 | 验证 |
| ---- | ----------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails        | -  |    |
| 结果   | 重复 zitadel.project.v1.Project | -  |    |




### ListUserChangesRequest



| 字段   | 类型                            | 描述      | 验证                                                            |
| ---- | ----------------------------- | ------- | ------------------------------------------------------------- |
| 查询   | zitadel.change.v1.ChangeQuery | 列出限制和顺序 |                                                               |
| 用户ID | 字符串                           | -       | string.min_len: 1<br /> string.max_len: 200<br /> |




### ListUserChangesResponse



| 字段 | 类型                                 | 描述                                                         | 验证 |
| -- | ---------------------------------- | ---------------------------------------------------------- | -- |
| 结果 | 重复 zitadel.change.v1.Change.change | zitadel.v1.ListDetails details = 1; 返回时总是空的(因为我们无法获得必要的信息) |    |




### ListUserGrantRequest



| 字段 | 类型                                | 描述      | 验证 |
| -- | --------------------------------- | ------- | -- |
| 查询 | zitadel.v1.ListQuery              | 列出限制和顺序 |    |
| 查询 | 重复 zitadel.user.v1.UserGrantQuery | 客户寻找的标准 |    |




### ListUserGrantResponse



| 字段   | 类型                           | 描述 | 验证 |
| ---- | ---------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails       | -  |    |
| 结果   | 重复 zitadel.user.v1.UserGrant | -  |    |




### 列表用户成员请求



| 字段   | 类型                                 | 描述      | 验证                                                            |
| ---- | ---------------------------------- | ------- | ------------------------------------------------------------- |
| 用户ID | 字符串                                | 列出限制和顺序 | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询   | zitadel.v1.ListQuery               | 结果排序的字段 |                                                               |
| 查询   | 重复 zitadel.user.v1.MembershipQuery | 客户寻找的标准 |                                                               |




### ListUserMembershipsResponse



| 字段   | 类型                     | 描述 | 验证 |
| ---- | ---------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails | -  |    |
| 结果   | 重复zitadel.user.v1.会员资格 | -  |    |




### ListUserMetadataRequest



| 字段 | 类型                                   | 描述 | 验证                                                            |
| -- | ------------------------------------ | -- | ------------------------------------------------------------- |
| id | 字符串                                  | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 查询 | zitadel.v1.ListQuery                 | -  |                                                               |
| 查询 | 重复 zitadel.metadata.v1.MetadataQuery | -  |                                                               |




### ListUserMetadataResponse



| 字段   | 类型                              | 描述 | 验证 |
| ---- | ------------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails          | -  |    |
| 结果   | 重复 zitadel.metadata.v1.Metadata | -  |    |




### ListUsersRequest



| 字段  | 类型                             | 描述      | 验证 |
| --- | ------------------------------ | ------- | -- |
| 查询  | zitadel.v1.ListQuery           | 列出限制和顺序 |    |
| 排序列 | zitadel.user.v1.UserField名称    | 结果排序的字段 |    |
| 查询  | 重复 zitadel.user.v1.SearchQuery | 客户寻找的标准 |    |




### ListUsersResponse



| 字段   | 类型                          | 描述 | 验证 |
| ---- | --------------------------- | -- | -- |
| 详细信息 | zitadel.v1.ListDetails      | -  |    |
| 排序列  | zitadel.user.v1.UserField名称 | -  |    |
| 结果   | 重复 zitadel.user.v1.User     | -  |    |




### 锁定用户请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### LockUser响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重新激活操作请求



| 字段 | 类型  | 描述 | 验证 |
| -- | --- | -- | -- |
| id | 字符串 | -  |    |




### 重新激活动作响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重新激活App请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重新激活应用响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ReactivateOrgIDP请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ReactivateOrgIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重新激活OrgRequest
这是一个空请求




### 重新激活OrgResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ReactivateProjectGrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ReactivateProjectGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重新激活项目请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重新激活项目响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ReactivateUserGrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ReactivateUserGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重新激活用户请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 重新激活用户响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ReenerateAPIClientSecretRequest



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RegenerateAPIClientSecretResponse



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| 客户端_secret | 字符串                      | -  |    |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |




### ReenerateOIDCClientSecretary Request



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RegenerateOIDCClientSecretResponse



| 字段         | 类型                       | 描述 | 验证 |
| ---------- | ------------------------ | -- | -- |
| 客户端_secret | 字符串                      | -  |    |
| 详细信息       | zitadel.v1.ObjectDetails | -  |    |




### 移除应用密钥请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| key_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveAppKeyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除应用请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除应用响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除CustomLabelPolicyFontRequest
这是一个空请求




### RemoveCustomLabelPolicyFontResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除CustomLabelPolicyIconDarkRequest
这是一个空请求




### 移除CustomLabelPolicyIconDarkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除自定义 LabelPolicyIconRequest
这是一个空请求




### RemoveCustomLabelPolicyIconResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除CustomLabelPolicyLogoDarkRequest
这是一个空请求




### RemoveCustomLabelPolicyLogoDarkResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除CustomLabelPolicyLogoRequest
这是一个空请求




### RemoveCustomLabelPolicyLogoResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveHumanAuthentorOTP请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanAuthentorOTPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveHumanAuthers FactorU2FRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanAuthers FactorU2FResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveHumanAvatarRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanAvatarResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveHumanLinkedIDP请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 用户ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 链接用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanLinkedIDPResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除人类密码无条件请求



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanPasswordlessment



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveHumanPhoneRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveHumanPhoneResponse



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




### 移除机器密钥请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 用户ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| key_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveMachineKeyResponse



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




### 移除OrgDomainRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveOrgDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除OrgIDP请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| idp_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveOrgIDPResponse
这是一个空的响应




### 移除OrgMemberRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveOrgMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveOrgMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveOrgMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除个人访问令牌请求



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| token_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除个人访问令牌响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除项目GrantMemberRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveProjectGrantMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除项目GrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveProjectGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除项目成员请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 项目ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除项目成员响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除工程请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除项目响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 移除项目角色请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 项目ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 移除项目角色响应



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




### 删除用户GrantRequest



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveUserGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveUserMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveUserMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### RemoveUserRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### RemoveUserResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResendHumanEmailVerificationRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ResendHumanEmailVerificationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResendHumanInitialization请求



| 字段     | 类型  | 描述 | 验证                                                                  |
| ------ | --- | -- | ------------------------------------------------------------------- |
| 用户ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />       |
| 电子邮件地址 | 字符串 | -  | string.email: true<br /> string.ignore_empt: true<br /> |




### ResendHumanInitializationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResendHumanPhoneVerificationRequest



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ResendHumanPhoneVerificationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置CustomDomainClaimMessageTextToDefaultRequest
这是一个空请求


| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 语言 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ResetCustomDomainClaimedMessageTextToDefaultResponse



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




### 重置LabelPolicyToDefaultRequest
这是一个空请求




### ResetLabelPolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置LockoutPolicyToDefaultRequest
这是一个空请求




### 重置LockoutPolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置LoginPolicyTo默认Request





### 重置LoginPolicyTo默认响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置密码 PolicyToDefaultRequest
这是一个空请求




### 重置密码 AgePolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 重置PasswordComplexityPolicyTo默认Request
这是一个空请求




### ResetPasswordComplexityPolicyToDefaultResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ResetPrivacyPolicyTo默认Request
这是一个空请求




### ResetPrivacyPolicyTo默认响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 发送人道重置密码通知请求



| 字段   | 类型                                             | 描述 | 验证                                                            |
| ---- | ---------------------------------------------- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串                                            | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 类型   | SendHumanResetPasswordNotificationRequest.Type | -  | 只有枚举：true<br />                                         |




### SendHumanResetPassword通知响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 发送密码无注册请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### SendPallessRegistrationResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomDomainClaimMessageTextRequest



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




### SetCustomDomainClaimedMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomInitMessageTextRequest



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




### 设置 CustomInitMessageTextResponse



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




### 设置CustomPasswordResetMessageTextRequest



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




### 设置CustomPasswordResetMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomPasswordless RegistrationMessageTextRequest



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




### 设置CustomPasswordlessRegistrationMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomVerifyEmailMessageTextRequest



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




### 设置CustomVerifyEmailMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 设置CustomVerifyPhoneMessageTextRequest



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




### 设置CustomVerifyPhoneMessageTextResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetHumanInitialPasswordRequest



| 字段   | 类型  | 描述 | 验证                                                           |
| ---- | --- | -- | ------------------------------------------------------------ |
| 用户ID | 字符串 | -  | string.min_len: 1<br />                                |
| 密碼   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 72<br /> |




### SetHumanInitialPasswordResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetHumanPassword请求



| 字段    | 类型  | 描述 | 验证                                                           |
| ----- | --- | -- | ------------------------------------------------------------ |
| 用户ID  | 字符串 | -  | string.min_len: 1<br />                                |
| 密碼    | 字符串 | -  | string.min_len: 1<br /> string.max_len: 72<br /> |
| 不需要更改 | 布尔值 | -  |                                                              |




### SetHumanPasswordResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetOrgMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### SetOrgMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetPrimaryOrgDomainRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### SetPrimaryOrgDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetTriggerActionsRequest



| 字段    | 类型     | 描述        | 验证 |
| ----- | ------ | --------- | -- |
| 流程类型  | 字符串    | 流类型的 id   |    |
| 触发器类型 | 字符串    | 触发器类型的 id |    |
| 动作ID  | 重复的字符串 | -         |    |




### SetTriggerActionsResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### SetUserMetadataRequest



| 字段 | 类型  | 描述 | 验证                                                             |
| -- | --- | -- | -------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 密钥 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />  |
| 值  | 字节  | -  | bytes.min_len: 1<br /> bytes.max_len: 500000<br /> |




### SetUserMetadataResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| id   | 字符串                      | -  |    |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 解锁用户请求



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 解锁用户响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 APIAppConfigRequest



| 字段                 | 类型                               | 描述 | 验证                                                            |
| ------------------ | -------------------------------- | -- | ------------------------------------------------------------- |
| 项目ID               | 字符串                              | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id             | 字符串                              | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| auth_method_type | zitadel.app.v1.APIAuthMethodType | -  | 只有枚举：true<br />                                         |




### 更新 APIApp配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新操作请求



| 字段    | 类型                       | 描述 | 验证                                                                                                                                           |
| ----- | ------------------------ | -- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| id    | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                                |
| 名称    | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                                |
| 脚本    | 字符串                      | -  | string.min_len: 1<br /> string.max_len: 2000<br />                                                                               |
| 超时    | google.protobuf.Duration | -  | duration.lte.seconds: 20<br /> duration.lte.nanos: 0<br /> duration.gte.seconds: 0<br /> duration.gte.nanos: 0<br /> |
| 允许失败！ | 布尔值                      | -  |                                                                                                                                              |




### 更新动作响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级应用请求



| 字段     | 类型  | 描述 | 验证                                                            |
| ------ | --- | -- | ------------------------------------------------------------- |
| 项目ID   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 升级应用响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 CustomLabelPolicyRequest



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




### 更新客户政策响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新CustomLockoutPolicyRequest



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 最大密码尝试 | uint32 | -  |    |




### 更新CustomLockoutPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新CustomLoginPolicyRequest



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




### 更新CustomLoginPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新CustomPasswordAgePolicyRequest



| 字段     | 类型     | 描述 | 验证 |
| ------ | ------ | -- | -- |
| 最大年龄天数 | uint32 | -  |    |
| 过期警告日  | uint32 | -  |    |




### 更新CustomPasswordAgePolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新CustomPasswordComplexityPolicyRequest



| 字段   | 类型     | 描述 | 验证 |
| ---- | ------ | -- | -- |
| 最小长度 | uint64 | -  |    |
| 大写   | 布尔值    | -  |    |
| 小写   | 布尔值    | -  |    |
| 有数字  | 布尔值    | -  |    |
| 有符号  | 布尔值    | -  |    |




### 更新CustomPasswordComplexityPolicyResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新自定义隐私政策



| 字段       | 类型  | 描述 | 验证 |
| -------- | --- | -- | -- |
| tos_link | 字符串 | -  |    |
| 隐私链接     | 字符串 | -  |    |
| 帮助链接     | 字符串 | -  |    |




### 更新自定义隐私政策



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateHuman电子邮件：request



| 字段       | 类型  | 描述 | 验证                                                            |
| -------- | --- | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 电子邮件地址   | 字符串 | -  | string.email: true<br />                                |
| 是电子邮件已验证 | 布尔值 | -  |                                                               |




### UpdateHumanEmailResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 HumanPhoneRequest



| 字段   | 类型  | 描述 | 验证                                                                                        |
| ---- | --- | -- | ----------------------------------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br />                             |
| 电话   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 50<br /> string.prefix: +<br /> |
| 已验证  | 布尔值 | -  |                                                                                           |




### UpdateHumanPhoneResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateHumanProfileRequest



| 字段   | 类型                     | 描述 | 验证                                                            |
| ---- | ---------------------- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名字   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 姓名   | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 昵称   | 字符串                    | -  | string.max_len: 200<br />                               |
| 显示名称 | 字符串                    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 首选语言 | 字符串                    | -  | string.max_len: 10<br />                                |
| 两性平等 | zitadel.user.v1.Gender | -  |                                                               |




### UpdateHumanProfile响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级机器请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 描述   | 字符串 | -  | string.max_len: 500<br />                               |
| 名称   | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 更新机器响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateOIDCApp配置请求



| 字段                            | 类型                                 | 描述 | 验证                                                                                                                                          |
| ----------------------------- | ---------------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 项目ID                          | 字符串                                | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                               |
| app_id                        | 字符串                                | -  | string.min_len: 1<br /> string.max_len: 200<br />                                                                               |
| 重定向urs                        | 重复的字符串                             | -  |                                                                                                                                             |
| 响应类型                          | 重复 zitadel.app.v1.OIDCResponseType | -  |                                                                                                                                             |
| 授予类型                          | 重复 zitadel.app.v1.OIDCGrantype     | -  |                                                                                                                                             |
| app_type                      | zitadel.app.v1.OIDCAppType         | -  | 只有枚举：true<br />                                                                                                                       |
| auth_method_type            | zitadel.app.v1.OIDCAuthMethodType  | -  | 只有枚举：true<br />                                                                                                                       |
| post_logout_redirect_uris   | 重复的字符串                             | -  |                                                                                                                                             |
| dev_模式                        | 布尔值                                | -  |                                                                                                                                             |
| 访问令牌类型                        | zitadel.app.v1.OIDCTokenType       | -  | 只有枚举：true<br />                                                                                                                       |
| access_token_role_position  | 布尔值                                | -  |                                                                                                                                             |
| id_token_role_position      | 布尔值                                | -  |                                                                                                                                             |
| id_token_userinfo_statement | 布尔值                                | -  |                                                                                                                                             |
| 时钟偏移                          | google.protobuf.Duration           | -  | duration.lte.seconds: 5<br /> duration.lte.nanos: 0<br /> duration.gte.seconds: 0<br /> duration.gte.nanos: 0<br /> |
| 额外来源                          | 重复的字符串                             | -  |                                                                                                                                             |




### 更新 OIDCApp配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateOrgIDP JWTConfigRequest



| 字段           | 类型  | 描述 | 验证                                                            |
| ------------ | --- | -- | ------------------------------------------------------------- |
| idp_id       | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| jwt_endpoint | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 发行者          | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 键盘终点         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 标题名称         | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### UpdateOrgIDers JWTConfigResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 OrgIDPOIDCConfigRequest



| 字段         | 类型                              | 描述 | 验证                                                            |
| ---------- | ------------------------------- | -- | ------------------------------------------------------------- |
| idp_id     | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| client_id  | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 客户端_secret | 字符串                             | -  | string.max_len: 200<br />                               |
| 发行者        | 字符串                             | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 范围         | 重复的字符串                          | -  |                                                               |
| 显示名称映射     | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |
| 用户名映射      | zitadel.idp.v1.OIDCMappingField | -  | 只有枚举：true<br />                                         |




### 更新 OrgIDPOIDC配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级OrgIDP请求



| 字段           | 类型                            | 描述 | 验证                                                            |
| ------------ | ----------------------------- | -- | ------------------------------------------------------------- |
| idp_id       | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称           | 字符串                           | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| styling_type | zitadel.idp.v1.IDPStylingType | -  | 只有枚举：true<br />                                         |
| 自动注册         | 布尔值                           | -  |                                                               |




### UpdateOrgIDs 响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新 OrgMemberRequest



| 字段   | 类型     | 描述 | 验证                                                            |
| ---- | ------ | -- | ------------------------------------------------------------- |
| 用户ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | -  |                                                               |




### 更新 OrgMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 升级OrgRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 更新OrgResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateProjectGrantMemberRequest



| 字段       | 类型     | 描述 | 验证                                                            |
| -------- | ------ | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色       | 重复的字符串 | -  |                                                               |




### UpdateProjectGrantMemberResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateProjectGrantRequest



| 字段       | 类型     | 描述 | 验证                                                            |
| -------- | ------ | -- | ------------------------------------------------------------- |
| 项目ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键      | 重复的字符串 | -  |                                                               |




### UpdateProjectGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新项目成员请求



| 字段   | 类型     | 描述 | 验证                                                            |
| ---- | ------ | -- | ------------------------------------------------------------- |
| 项目ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户ID | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色   | 重复的字符串 | -  |                                                               |




### 更新项目成员响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新项目请求



| 字段           | 类型                                        | 描述 | 验证                                                            |
| ------------ | ----------------------------------------- | -- | ------------------------------------------------------------- |
| id           | 字符串                                       | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 名称           | 字符串                                       | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 项目_role_补丁 | 布尔值                                       | -  |                                                               |
| 项目角色检查       | 布尔值                                       | -  |                                                               |
| 已检查项目        | 布尔值                                       | -  |                                                               |
| 私人标签设置       | zitadel.project.v1.PrivateLabelingSetting | -  | 只有枚举：true<br />                                         |




### 更新项目响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新项目角色请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 项目ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 显示名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 群組   | 字符串 | -  | string.max_len: 200<br />                               |




### 更新 ProjectRoleResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateSAMLApp配置请求



| 字段                                                                                                | 类型  | 描述 | 验证                                                            |
| ------------------------------------------------------------------------------------------------- | --- | -- | ------------------------------------------------------------- |
| 项目ID                                                                                              | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| app_id                                                                                            | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_xml | 字节  | -  | bytes.max_len: 500000<br />                             |
| [**1of**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) metadata.metadata_url | 字符串 | -  | string.max_len: 200<br />                               |




### 更新SAMLApp配置响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### UpdateUserGrantRequest



| 字段       | 类型     | 描述 | 验证                                                            |
| -------- | ------ | -- | ------------------------------------------------------------- |
| 用户ID     | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| grant_id | 字符串    | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 角色键      | 重复的字符串 | -  |                                                               |




### UpdateUserGrantResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### 更新用户名请求



| 字段   | 类型  | 描述 | 验证                                                            |
| ---- | --- | -- | ------------------------------------------------------------- |
| 用户ID | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |
| 用户名称 | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### 更新用户名称响应



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |




### ValidateOrgDomainRequest



| 字段 | 类型  | 描述 | 验证                                                            |
| -- | --- | -- | ------------------------------------------------------------- |
| 域  | 字符串 | -  | string.min_len: 1<br /> string.max_len: 200<br /> |




### ValidateOrgDomainResponse



| 字段   | 类型                       | 描述 | 验证 |
| ---- | ------------------------ | -- | -- |
| 详细信息 | zitadel.v1.ObjectDetails | -  |    |






