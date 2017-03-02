var traversalStr = require('./modules/traversalStr'),
    querySite = require('./modules/querySite'),
    fs = require('fs');

fs.writeFileSync('result.txt', '');

var token = 'check-web-hichina-com%3Amj7hivdivji80bcy1k79j14566h7j8o2';

traversalStr('stara', 'starz', querySite(token));
