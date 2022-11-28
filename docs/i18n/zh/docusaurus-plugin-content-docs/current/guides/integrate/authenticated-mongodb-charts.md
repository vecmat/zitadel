---
title: 认证的 MongoDB 图表
---

此集成指南展示了您如何可以使用 ZITADEL作为身份验证提供者将MongoDB 图嵌入您的网络应用程序。

## 设置 ZITADEL 应用程序

在你可以在你的应用程序中嵌入经认证的图表之前，你必须在ZITADEL控制台中做几个配置步骤。 您需要提供一些关于您的应用的信息。 我们建议创建一个新的应用程序从零开始。

1. 导航到您的项目
2. 在页面顶部添加一个新的应用程序。
3. 选择 Web 应用程序类型并继续。
4. 使用 [认证码](../../apis/openidoauth/grant-types#authorization-code) 与 [验证码交换代码 (PKCE)](../../apis/openidoauth/grant-types#proof-key-for-code-exchange) 一起使用。
5. 跳过重定向设置并确认应用程序创建
6. 复制客户端 ID，您需要告诉MongoDB 图表
7. 当你创建应用程序时，扩展它的 _OIDC 配置_ 部分。 将 _认证令牌类型_ 更改为 _JWT_ 并保存更改。

您的应用程序配置现在应该类似于：

![在控制台中创建应用](/img/integrations/mongodb-charts-app-create-light.png)

## 设置MongoDB 图表的自定义 JWT 提供商

在 [MongoDB 文档](https://docs.mongodb.com/charts/configure-auth-providers/) 之后配置ZITADEL作为您的 _自定义 JWT 提供商_。

配置以下值：
- 签名算法： RS256
- 签名密钥：JWK 或 JWKS URL
- JWKS: https:////{your_domain}.zitadel.cloud/oauth/v2/keys
- 听众：当您创建ZITADEL应用程序时您复制的应用程序客户端 ID

您的配置应该类似于：

![配置自定义 JWT 提供商](/img/integrations/mongodb-charts-auth-provider-light.png)

## 嵌入您的图表

按照相应的 [MongoDB 文档](https://docs.mongodb.com/charts/saas/embed-chart-jwt-auth/) ，现在将一个图嵌入到您的应用程序中。

如果您完成了 [Angular Quickstart](../../examples/login/angular.md)，您的代码可能看起来像这样：

```html
<!-- chart.component.html -->
<div id="chart"></div>
```

```css
/* chart.component.css */
div#chart {
    height: 500px;    
}
```

```ts
// chart.component.ts
import { Component, OnInit } from '@angular/core';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.renderChart().catch(e => window.alert(e.message));    
  }

  async renderChart() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "<YOUR CHARTS BASE URL HERE>",
      getUserToken: () => {
        return this.auth.getAccessToken()
      },
    });

    const chart = sdk.createChart({
      chartId: "<YOUR CHART ID HERE>"
    });
    await chart.render(<HTMLElement>document.getElementById("chart"));
  }  
}
```
