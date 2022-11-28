---
title: .NET
---

此集成指南向您展示了如何将 **ZITADEL** 整合到您的 .NET 应用程序中。 它展示了如何从ZITADEL管理API获取一些数据。

在指南末尾，您应该有一个能够阅读您组织的详细信息的应用程序。

如果您需要任何关于.NET SDK的其他信息，请前往SDK本身的 [文档](https://zitadel.github.io/zitadel-net/)。
## 必备条件

客户端 [SDK](https://github.com/zitadel/zitadel-net) 将处理所有必要的 OAuth 2.0 请求，并将所需的头发送到 ZITADEL API。 所有需要的都是一个服务帐户，拥有一个Og Owner Owner (或另一个角色, 取决于所需的 api 请求) 角色及其密钥 JSON 。

但是，我们建议您阅读有关[如何访问zitadel API](../../guides/integrate/access-zitadel-apis)的指南和相关指南，以了解以下基本知识：
 - [推荐授权流动](../../guides/integrate/oauth-recommended-flows.md)
 - [服务用户](../../guides/integrate/serviceusers.md)

> 请务必有一个有效的JSON，其服务帐户要么是ORG_OWNER，要么至少是ORG_OWNER_VIEWER 才能继续本指南。

## .NET Setup

### 创建 .NET 应用程序

使用您选择的 IDE 或命令行来创建一个新的应用程序。

```bash
dotnet new web
```

### 安装软件包

通过nugh安装软件包

```bash
dotnet add package Zitadel.Api
```

### 创建示例客户端

更改程序文件到下面的内容。 这将为管理api创建一个客户端，并调用它的 `GetMyUser` 功能。 SDK 将通过使用 JWT 配置文件获取一个 JWT 令牌来确保您访问 API (`openid` and `urn:zitadel:iam:org:project:id:{projectID}:aud`)。

确保使用您自己的实例数据填充const `apiUrl`, `apiProject` 和 `personalAccessToken`。 下面使用的变量来自测试实例，以显示它应该如何看待。 The apiURL is the domain of your instance you can find it on the instance detail in the Customer Portal or in the Console The apiProject you will find in the ZITADEL project in the first organization of your instance.

```csharp
/ 此文件包含两个例子：
// 1。 一个带有服务帐户“个人访问令牌”的示例来访问 ZITADELAPI。
// 2. 一个带有服务帐户“jwt profile 密钥”的示例来访问 ZITADEL API。

using Zitadel.Api;
using Zitadel.Credentials;

const string apiUrl = "https://zitadel-libraries-l8boqa.zitadel.cloud";
const string personalAccessToken = "ge85fvmgTX4XAhjpF0XGpelB2vn9LZanJaqmUQDuf7iTpKVowb44LFl-86pqY2mfJCEoIOk";

// or create the token provider directly:
// new StaticTokenProvider(token)
var client = Clients.AuthService(new(apiUrl, ITokenProvider.Static(personalAccessToken)));
var result = await client.GetMyUserAsync(new());
Console.WriteLine($"User: {result.User}");

const string apiProject = "170078979166961921";
var serviceAccount = ServiceAccount.LoadFromJsonString(
    @"
{
  ""type"": ""serviceaccount"",
  ""keyId"": ""170084658355110145"",
  ""key"": ""-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAnQisbU4FuLmjLR9I2Q01Rm9Mx6WySat2mbxgmOzu04oXuESI\nyS+RkiimdN0khjqouBftYqtVes7yngMLq3E8hMCwv/kLE+YeXphZXnn8tps8M2gV\n7S//uCp9LooK9qeh0lSkOqIsh0atj/l7NAHFxnhuNhfmn8XIYJNLVNSj5yzTri5E\nSn92SAsUQLSONgr7IEmIjcuPtYeU0iLvVno52ljZHnPX2WJ0HEZv44nZpkR4qBfv\n3hJzNx7sd4TdPGHHugJD8jdG/X4bAxwL5XGHZu18cUVM5RerSMpFQHSuIGgpKmK4\nWlM1AJGeut6EX/SrCxUDvhyOnXAgqhunTUmi6QIDAQABAoIBAHn7y92Y1y743X3m\nqHMbJIBTYyRPXaCGljm0MKF6o8clpWlZq5wE3KLZ+vwa8Q1oMbnXtGqKR3t/mM4P\n9Ze2/djtyh9GOUm632qCFCIkxp+fFPOl7ipyt8V7FAT77KpP6490eqKlacunppmJ\nph/vJJAY6xwQEvGX9SC4KrN5/txLKXbVtR3V2RXy9sxbbL4cpnklmRBMeXQkpwEM\nTKELUr5Rmhg9KvS3yALgVv0dIRtOA8Z995R234hXfY0St48YEvZtsxeme47u2CVl\nHJcVH4aa9Sw6XlgAEQBxqbQHpcLvUIu3XempO7VfGklWE6OlGuEcnUWpJCD8jMZW\nPYtt9LUCgYEAwi8josS3Iyto+DMJjJKCw175N2cmFMxBGu9Rw4aHjTiN57z7AUkn\nbmT44WnSmc1bCLC+nMB34vhiEyBKXYrH7zgbeMO8QDG3aO6gXdod/IdsieZR8E3b\ngUA1wtZYyRbc7eo8U4Nqkv1NXVRuDJkz/Mfoy+m1BVKcW7YeZaaZN9MCgYEAzwYB\n/LAiJoyx5UPwuieizlT7kHI7uvZRo4oLx+cZipNCJ0NGKgX4l1NIYLaNDbCoT9N0\nylico+kn+nihzDmD6SjY2hHGSIHk7AnJOcW+Bk5TfsYb8clxfgX40udLMIS0F13R\nrJt0gD9x0O3AZv4MV9cSI0/Md0tbWePgrLI44NMCgYEAojj7TlmEnY8AbIlGqvci\n4tCO5qf3elyA712LMwtKZsIeWsDX+OUCWglkmfvsAq06JfJx60YnYagbVtsdBTSR\nftmiqarrs71U+gaQVpeHgZYpKLMPNO/2Nu5Le2/SUHwXKXML3sDk4dNXNGb6YPAE\nLGNdqiyeG8o98agdkNIzIh0CgYEAlTGhMPfGRL3UXoNN8vopjEUWXozUmvJ090S/\nJLtZXtKtNBp5cEOJWZT9biVhFeKgCZc8ba7ahA29b/aLs+AnPlrfnJh+qzZhQfHz\ngJ0PSwAbkBs5fFBOaCHppiRlvXuFRemo95m4pcwTPBx7Mj4Xqx4lxij2E2rNVMSy\n4AI4l10CgYBwefqXt8B+D+0EvmhyHk19Tk8/fPelclJUv/IVI59c0F9UMAA2rD1U\nNW6k9251OGU7mQkztluNvl13qtAW/DveOjkFeDJIMzhFjravpLQXhUK4ETnM44YL\nFbClVGJaHYSHgOkNpcN5lYVLoyEvzv9rEPwBqpZRVnwWj6L+/I2L5Q==\n-----END RSA PRIVATE KEY-----\n"",
  ""userId"": ""170079991923474689""
}");
client = Clients.AuthService(
    new(
        apiUrl,
        ITokenProvider.ServiceAccount(
            serviceAccount,
            apiUrl,
            apiProject)));
result = await client.GetMyUserAsync(new());
Console.WriteLine($"User: {result.User}");
```

### 测试客户端

在你正确配置了一切后，你可以简单地开始示例：

```bash
dotnet run
```

这将输出类似于：

```
User: {"FirstName": "MyName", "LastName": "MyLastName" ... }
```

## 完成

您已成功使用 ZITADEL .NET SDK 调用认证API！ 要使用认证 API ，您将不需要一个特定的角色，因为只需要经过验证的用户。

要访问管理员或管理 API ，用户将需要一些特定的角色。 如果您遇到了一个错误 (例如) `code = PermissionDenied desc = No matching permissions found`), 通过分配 `ORG_OWNER` 或 `ORG_OWNER_VIEWEEWER` 角色 并在开始时检查上述 [指南](#prerequisites)。

如果您遇到了任何其他问题。 在 [ZITADEL](https://github.com/zitadel/zitadel/issues) 或 [SDK](https://github.com/zitadel/zitadel-go/issues) 中不要犹豫与我们联系或提出问题。

### 接下来？

现在您可以通过添加更多通话来执行我们的 API。

查看更多 [SDK 示例](https://github.com/zitadel/zitadel-go/blob/main/example) 或参考我们的 [API 文档](../../apis/introduction)。

> 本指南将很快更新，告诉您如何使用 SDK 作为您自己的 API。
