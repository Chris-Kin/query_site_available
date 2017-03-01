var fs = require('fs'),
	request = require('request');

function querySite(site) {
	console.log(site);
	request('https://checkapi.aliyun.com/check/checkdomain?domain='+site+'.com&token=check-web-hichina-com%3Ah0gi1j7axw31c5h2n2np27vdel5l0sqd', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			if (JSON.parse(body).module[0].avail === 1) {
				console.log(site + ' is available!!!!!!!!!!!!!!!!!!!!!!!!!!')
				fs.appendFile('result.txt', site+' is available\n', (err) => {
					if (err) throw err;
					console.log('ok.\n');
				});
			} else {
				console.log(site + ' NOT available.\n');
				fs.appendFile('result.txt', site+' is NOT available\n', (err) => {
					if (err) throw err;
				});
			}
		} else {
			console.log('!!!!!!!!!   net error   !!!!!!!!!!\n');
		}
	})
}

fs.writeFileSync('result.txt', '');


// 遍历指定字符间的所有字符
function traversalStr(startStr, endStr, dealStrFunc) {
    // 字符转数字
    function strToNumber(str) {
        var number = 0;
        var indexArr = str.split('').reverse().map(function(e) {
            return e.charCodeAt() % 96;
        })
        indexArr.forEach(function(el, index) {
            number+=el*Math.pow(26, index)
        })
        return number;
    }
    // 数字转字符
    function numberToStr(number) {
        var arr = [];
        while(Math.floor(number/26)) {
            var i = number%26;
            arr.push(i ? String.fromCharCode(96+i) : 'z');
            number = Math.floor(number/26);
            if(i==0) {
                number-=1;
            }
        }
        number && arr.push(String.fromCharCode(96+number));
        return arr.reverse().join('');
    }
    
    if (!/^[a-z]+$/.test(startStr) || !/^[a-z]+$/.test(endStr)) {
        console.log('请输入纯英文字符');
        return false;
    }
    var startNumber = strToNumber(startStr),
        endNumber = strToNumber(endStr);
    for(var i = startNumber; i <= endNumber; i++) {
        dealStrFunc && dealStrFunc(numberToStr(i));
    }
}

traversalStr('aa', 'cc', querySite);