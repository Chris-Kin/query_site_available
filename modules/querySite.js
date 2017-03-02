var request = require('request'),
	fs = require('fs');

/**
 * 生成：查询某域名是否可用 的函数
 * @param  {[type]} token [aliyun.com的查询接口token，从chrome控制台取得]
 * @return {[type]}       [查域名状态函数]
 */

module.exports = function(token) {
	return function(site) {
		console.log(site);
		request('https://checkapi.aliyun.com/check/checkdomain?domain=' + site + '.com&token='+ token, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				if (JSON.parse(body).module[0].avail === 1) {
					console.log(site + ' is available!')
					fs.appendFile('result.txt', site + ' is available\n', (err) => {
						if (err) throw err;
					});
				} else {
					console.log(site + '... bad');
				}
			} else {
				console.log('!!!!!!!!!   net error   !!!!!!!!!!\n');
			}
		})
	}
}