var traversalStr = require('./modules/traversalStr'),
    querySite = require('./modules/querySite'),
    fs = require('fs');

fs.writeFileSync('result.txt', '');

var token = 'check-web-hichina-com%3A5njn5t2ztt89h11887p671ugokhargjn';

traversalStr('miniwqa', 'miniwqz', querySite(token));

