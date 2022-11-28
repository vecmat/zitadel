---
title: ZITADEL导入与导出
---

## 从 V1 迁移到 V2

若要从 ZITADEL V1 迁移到 V2，API为您提供了导出所有属于您组织的资源的可能性。 目前，这不包括以下几点：

* 全球政策
* IAM成员
* 全球国内流离失所者
* 全局第二/多因子
* 机器键
* 个人访问令牌
* 应用程序密钥
* 无密码身份验证

如果您想要导入并且您没有定义针对具体组织的自定义政策，哪个结果会导致这种结果。 您的用户的体验在您的旧实例中不会完全一样。

:::note 
注意资源将在没有事件流的情况下迁移。 这意味着您将没有导入对象的审计线索。
:::

### 使用 API

要导出所有必要的数据，您只需使用一个请求作为示例：

```bash
curl  --request POST \
  --url {your_domain}/admin/v1/export \
  --header 'Authorization: Bearer XXXX' \
  --header 'Content-Type: application/json' \
  --data '  "{
    "org_ids":  [ "70669144072186707", "70671105999825752" ],
    "excluded_org_ids": [ ],
    "with_passwords": true,
    "with_otp": true,
    "timeout": "10m",
    "gcs_output": {
        "path": "export.json",
        "bucket": "caos-zitadel-exports",
        "serviceaccount_json": "XXXX"
    }
}'
```

* "org_ids"：选择哪些组织应该导出
* "exclused_org_ids"：排除几个组织，如果没有组织被选择
* "with_passwords": 包括导出中用户的hashed_password
* "with_otp": 在导出中包含OTP 用户代码
* "timeout"：导出数据的呼叫超时
* "response_output": to export the export as response to the caller

:::note 
要导入导出的数据到您的新实例中 您必须在ZITADEL V2上拥有一个已经存在的实例，并且拥有所有所需的配置和全局资源。
:::

然后作为示例，您可以使用一个请求进行导入：

```bash
curl --request POST \
    --url {your_domain}/admin/v1/import \
    --header 'Authorization: Bearer XXXX' \
    --header 'Content-Type: application/json' \
    --data '{
        "data_orgsv1": '$(cat export.json)'
}'
```

### 使用谷歌云存储

:::note 
要使用此请求，您必须拥有足够权限导出和导入的访问令牌。 使用过的服务帐户必须至少具有"存储对象创建者"的角色才能在GCS 上创建对象
:::

若要导出所有必要的数据，您只需使用一个请求，这个请求将导致在您的 GCS 中的文件作为示例：

```bash
curl --request POST \
  --url {your_domain}/admin/v1/export \
  --header 'Authorization: Bearer XXXX' \
  --header 'Content-Type: application/json' \
  --data' "
    "org_ids": [ "70669144072186707", "706711099825752" ],
    "exclued_org_ids": [ ],
    "with_passwords": true ,
    "with_otp": true
    "timeout": "10m",
    "gcs_output": }
        "path": "export. “，”
        “桶”：“caos-zitadel-exports”，
        "serviceaccount_json": "XXXX"
    }
}'
```

* "org_ids"：选择哪些组织应该导出
* "exclused_org_ids"：排除几个组织，如果没有组织被选择
* "with_passwords": 包括导出中用户的hashed_password
* "with_otp": 在导出中包含OTP 用户代码
* "timeout"：导出数据的呼叫超时
* "gcs_output": 将一个文件写入GCS 作为输出到调用
  * "path"：通往GCS上输出文件的路径
  * "bucket"：在GCS上用于输出
  * "serviceaccount_json": base64-encoded serviceaccount.json 用于在GCS 上输出文件

:::note
要导入导出的数据到您的新实例中 您必须在ZITADEL V2上拥有一个已经存在的实例，并且拥有所有所需的配置和全局资源。 使用过的服务帐户必须至少有角色“存储对象查看器”从GCS 读取对象
:::

然后作为示例，您可以使用一个请求进行导入：

```bash
curl --request POST \
    --url {your_domain}/admin/v1/import \
    --header 'Authorization: Bearer XXXX' \
    --header 'Content-Type: application/json' \
    --data '{
    "timeout": "10m",
    "data_orgsv1_gcs": {
        "path": "export.json",
        "bucket": "caos-zitadel-exports",
        "serviceaccount_json": "XXXX"
    }
}'
```

* "timeout"：导入任务超时
* "data_orgsv1_gcs"：直接读取GCS的导出
    * "path"：导出到GCS文件的路径
    * "bucket": 用来从GCS读取的bucket
    * "serviceaccount_json": base64-encoded serviceaccount.json 用来从GCS读取文件

