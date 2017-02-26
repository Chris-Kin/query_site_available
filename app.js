var fs = require('fs'),
	request = require('request');

var want = 102120000;

function querySite(site) {
	request('https://checkapi.aliyun.com/check/checkdomain?domain='+site+'.com&token=check-web-hichina-com%3Ackq9l5yz88g9h7vh7xufznicxpzyw1ec', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			if (JSON.parse(body).module[0].avail === 1) {
				console.log(site + ' is available.')
				fs.appendFile('result.txt', site+' is available\n', (err) => {
					if (err) throw err;
					console.log('ok.\n');
				});
			} else {
				console.log(site + ' NOT available.\n');
				fs.appendFile('result.txt', site+' is NOT available\n', (err) => {
					if (err) throw err;
					console.log('fuck.\n');
				});
			}
			want++;
			if (want < 102121100) {
				querySite(want);
			}
		} else {
			console.log('!!!!!!!!!   net error   !!!!!!!!!!\n');
		}
	})
}

fs.writeFile('result.txt', '', (err) => {
	if (err) throw err;
	console.log('clear file.\n');
});
querySite(want);

