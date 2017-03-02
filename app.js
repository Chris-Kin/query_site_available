var traversalStr = require('./modules/traversalStr'),
    querySite = require('./modules/querySite'),
    fs = require('fs');

fs.writeFileSync('result.txt', '');

var token = 'check-web-hichina-com%3Atc4p1t7y8pfrtfwe4qukewc52jc4ikw3&';

traversalStr('efvxfmaa', 'a', querySite(token));
