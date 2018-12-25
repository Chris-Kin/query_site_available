/**
 * 遍历指定字符间的所有字符
 */
var fs = require('fs');
var superagent = require('superagent');

var token = 'check-web-hichina-com%3A5njn5t2ztt89h11887p671ugokhargjn';

// 字符转数字
function strToNumber(str) {
    var number = 0;
    var indexArr = str.split('').reverse().map(function(e) {
        return e.charCodeAt() % 96;
    })
    indexArr.forEach(function(el, index) {
        number += el * Math.pow(26, index);
    })
    return number;
}
// 数字转字符
function numberToStr(number) {
    var arr = [];
    while(Math.floor(number / 26)) {
        var i = number % 26;
        arr.push(i ? String.fromCharCode(96 + i) : 'z');
        number = Math.floor(number / 26);
        if(i == 0) {
            number -= 1;
        }
    }
    number && arr.push(String.fromCharCode(96 + number));
    return arr.reverse().join('');
}

/**
 * USAGE
 * @param  {[type]} startStr    [起始字符串]
 * @param  {[type]} endStr      [结束字符串]
 * @param  {[type]} dealStrFunc [获取到字符串后的处理函数]
 */

module.exports = async function(startStr, endStr) {

    if (!/^[a-z]+$/.test(startStr) || !/^[a-z]+$/.test(endStr)) {
        console.log('请输入纯英文字符');
        return false;
    }
    console.log('开始处理');
    var startNumber = strToNumber(startStr),
        endNumber = strToNumber(endStr);
    for(var i = startNumber; i <= endNumber; i++) {
        const site = numberToStr(i);
        console.log('正在处理 ', site);
        var ans = await superagent.get('https://checkapi.aliyun.com/check/checkdomain?domain=' + site + '.com&token='+ token);
        if (ans.body.module[0].avail === 1) {
            console.log(site + '.com is available!')
            fs.appendFile('result.txt', site + '.com is available\n', (err) => {
                if (err) throw err;
            });
        } else {
            console.log(site + '.com bad');
        }
    }
    console.log('处理完毕');
}






