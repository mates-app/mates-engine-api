"use strict";
var MatesNumber = (function () {
    function MatesNumber(dividend, divisor, sign) {
        var _this = this;
        this.dividend = dividend;
        this.divisor = divisor;
        this.sign = sign;
        this.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 31];
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
    MatesNumber.prototype.simplify = function () {
        for (var i = 0; i < this.primes.length; i++) {
            var prime = this.primes[i];
            while (this.dividend % prime === 0 && this.divisor % prime === 0) {
                this.dividend = this.dividend / prime;
                this.divisor = this.divisor / prime;
            }
        }
        return this;
    };
    return MatesNumber;
}());
exports.MatesNumber = MatesNumber;
//# sourceMappingURL=MatesNumber.js.map