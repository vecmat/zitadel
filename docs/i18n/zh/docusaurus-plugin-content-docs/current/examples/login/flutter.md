---
title: Flutter
---

本指南展示了您如何将 **ZITADEL** 整合到Flutter应用中。 它引用了我们在 [GitHub 上的示例](https://github.com/zitadel/zitadel_flutter)

在指南末尾，您有一个移动应用程序 **Android**。 **iOS** 和 **Web** 具有通过 ZITADEL 认证用户的能力。

如果你需要任何关于Flutter的其他信息，请跳转到 [文档](https://flutter.dev/)。

## 设置应用程序

在我们开始构建我们的应用程序之前，我们必须在ZITADEL控制台采取一些配置步骤。 您需要提供一些关于您的应用的信息。 我们建议创建一个新的应用程序从零开始。 导航到您的项目，然后在页面顶部添加一个新的应用程序。 选择 **本机的** 应用程序类型并继续。

![在控制台中创建应用](/img/flutter/nativeapp.png)

### 重定向 URI

使用重定向 URI 字段，您告诉ZITADEL，它可以在验证后将用户重定向到哪里。 由于我们的应用程序也将支持web，我们必须确保设置HTTP和http的重定向。 以及我们原生的 Android 和 IOS 设置的 **个性化方案**。

对于我们的本地网页开发，使用您的自定义端口为 `http://localhost:4444/auth.html添加一个重定向URI` 对于Android 和 IOS，添加您的 **自定义方案**。 在我们的情况下，它是 `com.example.zitadelflutter`。

::::谨慎使用自定义重定向 URI!

您的自定义方案必须符合移动设备的 OAuth 2.0 认证([RFC 8252 规格](https://tools.ietf.org/html/rfc8252))。 否则，您的应用可能会被拒绝。

:::

为了开发，您需要将开发模式设置为 `true` ，以启用不安全的 HTTP 并重定向到 `本地主机` URI。

如果您想要将用户重定向到您的应用程序上的路由，他们已注销， 在帖子注销地址字段中添加可选的重定向。

继续创建应用程序。

创建后，前往 **令牌设置** 并检查刷新令牌复选框。 这允许我们通过 `离线访问` 范围请求刷新令牌。 确保保存应用程序。

### 客户端ID

成功创建应用后，弹出窗口将会出现，显示应用客户端ID。 复制客户端ID，因为您需要它来配置您的 Flutter 应用程序。

## Flutter的前提条件

要在这个快速启动中继续前进，您需要做好以下准备：

- 已安装Flutter (和Dart) ([怎么做](https://flutter.dev/docs/get-started/install))
- 已经为开发Flutter设置了 IDE ([怎么做](https://flutter.dev/docs/get-started/editor))
- 创建基本Flutter应用程序([怎么做](https://flutter.dev/docs/get-started/codelab))
- 在 ZITADEL中创建一个“Native”应用程序

在你创建起始Flutter应用后，这个应用将显示一个简单、模板的Flutter应用。

### 安装依赖关系

要在移动应用程序中认证ZITADEL用户，需要一些特定的软件包。 [RFC 8252规范](https://tools.ietf.org/html/rfc8252) 定义了 [OOOUTH2.0 移动和本地应用程序](https://oauth.net/2/native-apps/) 工作方式。 基本上，这一规格有两个要点：

1. 它建议使用 [PKCE](https://oauth.net/2/pkce/)
2. 它不允许第三方应用程序打开浏览器进行登录。 应用程序必须在内嵌浏览器视图中打开登录页面

首次安装 [http](https://pub.dev/packages/http) 一个用于调用 HTTP 的库， 然后 [`flutter_web_auth_2`](https://pub.dev/packages/flutter_web_auth_2) 和存储身份验证/刷新令牌的安全存储 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage)

要安装运行：

```bash
flutter pub add http
flutter pub add flutter_web_auth_2
flutter pub add flutter_secure_storage
```

#### 安卓设置

导航到您的 `AndroidManifest.xml` at `<projectRoot>/android/app/src/main/AndroidManifest.xml` 并将以下活动添加到您的自定义方案。

```xml reference
https://github.com/zitadel/zitadel_flutter/blob/main/android/app/src/main/AndroidManifest.xml#L29-L38
```

此外，对于 `secure_storage`, 您需要在 `<projectRoot>/android/app/src/build.gradle` 设置最低SDK 版本为18

### 添加身份验证

为了减少评论的默认代码，我们将修改 `main.dart` 文件。

首先， `MyApp` 类：它仍然是一个无条件的部件：

```dart reference
https://github.com/zitadel/zitadel_flutter/blob/main/lib/main.dart#L14-L28
```

第二， `MyHomePage` 类仍将是一个带有 标题的具有状态的小部件，我们在此不会更改任何代码。

```dart reference
https://github.com/zitadel/zitadel_flutter/blob/main/lib/main.dart#L30-L37
```

我们现在要改变的是 `_MyHomePageState` 类，通过ZITADEL启用 身份验证并删除启动应用程序的计数按钮。 我们会显示认证用户的用户名。

我们确定我们状态所需的要素：

```dart
var _busy = false;
var _authenticated = false;
var _username = '';
final storage = const FlutterSecureStorage();
```

Then the builder method, which does show the login button if you're not authenticated, a loading bar if the login process is going on and your name if you are authenticated:

```dart reference
https://github.com/zitadel/zitadel_flutter/blob/main/lib/main.dart#L119-L159
```

最后调用授权端点的 `_authate` 方法。 然后获取用户信息并将代币存储到安全存储。

```dart reference
https://github.com/zitadel/zitadel_flutter/blob/main/lib/main.dart#L45-L117
```

请注意，我们必须为网页应用程序使用我们的 http 重定向URL，或者使用我们的 Android 和 iOS 设备的自定义方案。 要设置其他平台，请阅读 [流量网络认证](https://pub.dev/packages/flutter_web_auth_2) 的文档。

为了确保我们的应用程序捕获回调URL，您必须创建一个 `auth。 tml` 文件在 `/web` 文件夹中包含以下内容：

```html reference
https://github.com/zitadel/zitadel_flutter/blob/main/web/auth.html
```

现在，您可以通过 iOS 和 Android 设备运行您的应用程序

```bash
flutter run
```

或者直接选择您的设备

```bash
flutter run -d iphone
```

对于网页请确保您在固定端口运行应用程序，以便它与您在 ZITADEL应用程序中的重定向URI 相匹配。 我们先使用 4444 作为端口，因此命令看起来像这样：

```bash
flutter run -d chrome --web-port=4444
```

我们的 Android 和 iOS 应用程序在自定义标签页中打开ZITADEL的登录。网络上打开了一个新标签。

### 结果

如果一切都正确，您的应用程序应该看起来就像这样：

<div style={{display: 'grid', 'grid-column-gap': '1rem', 'grid-template-columns': '1fr 1fr', 'max-width': '500px', 'margin': '0 auto'}}>
    <img src="/img/flutter/not-authed.png" alt="未验证" height="500px" />
    <img src="/img/flutter/authed.png" alt="已通过Flutter验证" height="500px" />
</div>

<div style={{display: 'grid', 'grid-column-gap': '1rem', 'grid-template-columns': '1fr 1fr', 'max-width': '800px', 'margin': '0 auto'}}>
    <img src="/img/flutter/web-not-authed.png" alt="未验证" height="500px" />
    <img src="/img/flutter/web-authed.png" alt="已通过Flutter验证" height="500px" />
</div>
