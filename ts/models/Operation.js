"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MatesNumber_1 = require('./MatesNumber');
var Operation = (function () {
    function Operation(sign, precedence, leftOperand, rightOperand) {
        this.sign = sign;
        this.precedence = precedence;
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
    }
    Operation.prototype.getValue = function () {
        return null;
    };
    return Operation;
}());
exports.Operation = Operation;
var PlusOperation = (function (_super) {
    __extends(PlusOperation, _super);
    function PlusOperation(leftOperand, rightOperand, sign, precedence) {
        if (sign === void 0) { sign = false; }
        if (precedence === void 0) { precedence = 0; }
        _super.call(this, sign, precedence, leftOperand, rightOperand);
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.sign = sign;
        this.precedence = precedence;
    }
    PlusOperation.prototype.getValue = function () {
        var a = this.leftOperand;
        var b = this.rightOperand;
        var signA = a.sign ? -1 : 1;
        var signB = b.sign ? -1 : 1;
        var dividend = signA * a.dividend * b.divisor + signB * b.dividend * a.divisor;
        var divisor = a.divisor * b.divisor;
        var sign = dividend < 0;
        dividend = dividend < 0 ? dividend * -1 : dividend;
        sign = this.sign ? !sign : sign;
        return new MatesNumber_1.MatesNumber(dividend, divisor, sign);
    };
    PlusOperation.prototype.latex = function () {
        return '';
    };
    return PlusOperation;
}(Operation));
exports.PlusOperation = PlusOperation;
