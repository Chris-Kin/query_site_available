# query_site_available
查询指定范围内的字符串.com域名是否被注册

### 使用方法
- 安装node
- 克隆项目并进入根目录执行npm install
- 修改app.js
`
var token = 'check-web-hichina-com%3Amj7hivdivji80bcy1k79j14566h7j8o2';
traversalStr('startStr', 'endStr', querySite(token));
`
其中token需要手动去[https://checkapi.aliyun.com](https://checkapi.aliyun.com)抓'/check/checkdomain'请求获取到
traversalStr函数中第一个和第二个参数表示查询范围

### 其他
- 本项目暂时只支持.com域名的查询，且查询内容必须为小写英文字母（域名不区分大小写）
- 可用域名将被写入result.txt文件