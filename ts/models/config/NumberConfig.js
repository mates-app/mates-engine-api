"use strict";
var models_1 = require('../models');
var NumberConfig = (function () {
    function NumberConfig(min, max, probablySign, divisors) {
        this.min = min;
        this.max = max;
        this.probablySign = probablySign;
        this.divisors = divisors;
        this.randomDividend = function (min, max, divisor) {
            var segment = (max - min) * divisor;
            var base = min * divisor;
            return Math.floor(Math.random() * segment) + base;
        };
        this.randomSign = function (probablySign) { return Math.random() <= probablySign; };
        this.randomDivisor = function (divisors) {
            var val = Math.random() * divisors.length;
            return divisors[Math.floor(val)];
        };
    }
    NumberConfig.prototype.get = function (howMany) {
        var constans = new Array();
        for (var i = 0; i < howMany; i++) {
            constans.push(this.getOne());
        }
        return constans;
    };
    NumberConfig.prototype.getOne = function () {
        var divisor = this.randomDivisor(this.divisors);
        var dividend = this.randomDividend(this.min, this.max, divisor);
        var sign = this.randomSign(this.probablySign);
        return new models_1.MatesNumber(dividend, divisor, sign);
    };
    return NumberConfig;
}());
exports.NumberConfig = NumberConfig;
