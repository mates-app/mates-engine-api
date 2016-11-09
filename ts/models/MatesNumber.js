"use strict";
var MatesNumber = (function () {
    function MatesNumber(dividend, divisor, sign) {
        var _this = this;
        this.dividend = dividend;
        this.divisor = divisor;
        this.sign = sign;
        this.toString = function () { return _this.sign ? (_this.rawNumber() * -1) + '' : _this.rawNumber() + ''; };
        this.rawNumber = function () { return _this.dividend / _this.divisor; };
        this.isInteger = function () { return _this.rawNumber() % 1 === 0; };
        this.latex = function () {
            var result = _this.isInteger()
                ? _this.sign
                    ? "{ -" + _this.rawNumber() + " }"
                    : "{ " + _this.rawNumber() + " }"
                : _this.sign
                    ? "\\frac{ -" + _this.dividend + " }{ " + _this.divisor + " }"
                    : "\\frac{ " + _this.dividend + " }{ " + _this.divisor + " }";
            return "{ " + result + " }";
        };
    }
    MatesNumber.prototype.getValue = function () {
        return this;
    };
    return MatesNumber;
}());
exports.MatesNumber = MatesNumber;
