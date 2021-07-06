### GET 请求

```http
GET /path?id=12 HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
cache-control: no-cache
content-length: 0


HTTP/1.1 200 OK
content-length: 10
content-type: text/html; charset=UTF-8

<html>
</html>
```

### POST 请求
```http
POST /path?id=12 HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
cache-control: no-cache
content-length: 20
content-type: text/json

{ id: 10 }


HTTP/1.1 201 Create
content-length: 10
content-type: text/json; charset=UTF-8

[{},{}]
```

### PUT 请求

```http
PUT /path?id=12 HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
cache-control: no-cache
content-length: 20
content-type: text/json

{ id: 12, name: 'abc', age: 10 }

HTTP/1.1 200 OK
content-length: 10
content-type: text/json; charset=UTF-8

[{},{}]
```

### PATCH 请求
```http
PATCH /path?id=12 HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
cache-control: no-cache
content-length: 20
content-type: text/json

{ "name": "abc" }

HTTP/1.1 200 OK
content-length: 10
content-type: text/json; charset=UTF-8

[{},{}]
```

### Delete
```http
DELETE /path?id=12 HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
cache-control: no-cache
content-length: 0


HTTP/1.1 200 OK
content-length: 10
content-type: text/json; charset=UTF-8

{ "message": "ok", code: 0 }
```
