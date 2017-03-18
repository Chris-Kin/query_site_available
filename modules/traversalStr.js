/**
 * 遍历指定字符间的所有字符
 */

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

module.exports = function(startStr, endStr, dealStrFunc) {
    
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
