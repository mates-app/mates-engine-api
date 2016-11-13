"use strict";
var models_1 = require('./models/models');
var min = 3;
var max = 10;
var probablySign = 0.5;
var divisors = [1, 2, 3, 5, 8];
for (var i = 0; i < 10; i++) {
    var number = new models_1.NumberConfig(min, max, probablySign, divisors).getOne();
    console.log(number.toString(), number);
}
//# sourceMappingURL=main.js.map