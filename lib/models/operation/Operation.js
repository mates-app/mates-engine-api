"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var models_1 = require('../models');
var Operation = (function () {
    function Operation(sign, precedence, leftOperand, rightOperand) {
        var _this = this;
        if (leftOperand === void 0) { leftOperand = null; }
        if (rightOperand === void 0) { rightOperand = null; }
        this.sign = sign;
        this.precedence = precedence;
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.isAvailable = function () { return _this.leftOperand != null && _this.rightOperand != null; };
    }
    Operation.prototype.getValue = function () {
        return;
    };
    Operation.prototype.latex = function () {
        return;
    };
    return Operation;
}());
exports.Operation = Operation;
var PlusOperation = (function (_super) {
    __extends(PlusOperation, _super);
    function PlusOperation(leftOperand, rightOperand, sign, precedence) {
        if (leftOperand === void 0) { leftOperand = null; }
        if (rightOperand === void 0) { rightOperand = null; }
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
        return new models_1.MatesNumber(dividend, divisor, sign);
    };
    PlusOperation.prototype.latex = function () {
        return '+';
    };
    return PlusOperation;
}(Operation));
exports.PlusOperation = PlusOperation;
var MultiplyOperation = (function (_super) {
    __extends(MultiplyOperation, _super);
    function MultiplyOperation(leftOperand, rightOperand, sign, precedence) {
        if (leftOperand === void 0) { leftOperand = null; }
        if (rightOperand === void 0) { rightOperand = null; }
        if (sign === void 0) { sign = false; }
        if (precedence === void 0) { precedence = 0; }
        _super.call(this, sign, precedence, leftOperand, rightOperand);
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.sign = sign;
        this.precedence = precedence;
    }
    MultiplyOperation.prototype.getValue = function () {
        var a = this.leftOperand;
        var b = this.rightOperand;
        var signA = a.sign ? -1 : 1;
        var signB = b.sign ? -1 : 1;
        var dividend = signA * signB * a.dividend * b.dividend;
        var divisor = a.divisor * b.divisor;
        var sign = dividend < 0;
        dividend = dividend < 0 ? dividend * -1 : dividend;
        sign = this.sign ? !sign : sign;
        return new models_1.MatesNumber(dividend, divisor, sign);
    };
    MultiplyOperation.prototype.latex = function () {
        return '\\centerdot';
    };
    return MultiplyOperation;
}(Operation));
exports.MultiplyOperation = MultiplyOperation;
var DivisionOperation = (function (_super) {
    __extends(DivisionOperation, _super);
    function DivisionOperation(leftOperand, rightOperand, sign, precedence) {
        if (leftOperand === void 0) { leftOperand = null; }
        if (rightOperand === void 0) { rightOperand = null; }
        if (sign === void 0) { sign = false; }
        if (precedence === void 0) { precedence = 0; }
        _super.call(this, sign, precedence, leftOperand, rightOperand);
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.sign = sign;
        this.precedence = precedence;
    }
    DivisionOperation.prototype.getValue = function () {
        var a = this.leftOperand;
        var b = this.rightOperand;
        var signA = a.sign ? -1 : 1;
        var signB = b.sign ? -1 : 1;
        var dividend = signA * signB * a.dividend * b.divisor;
        var divisor = a.divisor * b.dividend;
        var sign = dividend < 0;
        dividend = dividend < 0 ? dividend * -1 : dividend;
        sign = this.sign ? !sign : sign;
        return new models_1.MatesNumber(dividend, divisor, sign);
    };
    DivisionOperation.prototype.latex = function () {
        return '/';
    };
    return DivisionOperation;
}(Operation));
exports.DivisionOperation = DivisionOperation;
var MinusOperation = (function (_super) {
    __extends(MinusOperation, _super);
    function MinusOperation(leftOperand, rightOperand, sign, precedence) {
        if (leftOperand === void 0) { leftOperand = null; }
        if (rightOperand === void 0) { rightOperand = null; }
        if (sign === void 0) { sign = false; }
        if (precedence === void 0) { precedence = 0; }
        _super.call(this, sign, precedence, leftOperand, rightOperand);
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.sign = sign;
        this.precedence = precedence;
    }
    MinusOperation.prototype.getValue = function () {
        var a = this.leftOperand;
        var b = this.rightOperand;
        var signA = a.sign ? -1 : 1;
        var signB = b.sign ? -1 : 1;
        var dividend = signA * a.dividend * b.divisor - signB * b.dividend * a.divisor;
        var divisor = a.divisor * b.divisor;
        var sign = dividend < 0;
        dividend = dividend < 0 ? dividend * -1 : dividend;
        sign = this.sign ? !sign : sign;
        return new models_1.MatesNumber(dividend, divisor, sign);
    };
    MinusOperation.prototype.latex = function () {
        return '-';
    };
    return MinusOperation;
}(Operation));
exports.MinusOperation = MinusOperation;
//# sourceMappingURL=Operation.js.map