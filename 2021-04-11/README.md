2021-04-11
====

### 表单 form

#### URL
  - protocol//username:password@host/path?param1=value&param2=value#hash
  - http://127.0.0.1:8080/index.html?a=1#hash
  - http://127.0.0.1:8080/index.html?a#hash

  search - query

#### form提交
  - 默认
    - method get
    - action baseURL

### HTTP请求
通过http协议发送的请求，http协议是一个文本协议

- request 发往服务器的请求
- response 服务器的响应对象

Method: GET POST PUT DELETE PATCH OPTION

```http
GET http://127.0.0.1:5500/01.html?username=%E4%B8 HTTP/1.1
Accept: text/html
Accept-Encoding: gzip
Accept-Language: zh-CN
Host: 127.0.0.1:5500
Referer: http://127.0.0.1:5500/01.html?username=%E4%B8
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36
```

```http
POST http://127.0.0.1:5500/01.html HTTP/1.1
Accept: text/html
Accept-Encoding: gzip
Accept-Language: zh-CN
Host: 127.0.0.1:5500
Content-Type: text/html; charset=UTF-8
Content-Length: 1938
Referer: http://127.0.0.1:5500/01.html
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form - 01</title>
</head>
<body>
</body>
</html>
```

```http
HTTP/1.1 200 OK
Content-Length: 1938
Content-Type: text/html; charset=UTF-8
Date: Sun, 11 Apr 2021 11:28:14 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form - 01</title>
</head>
<body>
</body>
</html>
```
