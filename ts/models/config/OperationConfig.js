"use strict";
var models_1 = require('../models');
var OperationConfig = (function () {
    function OperationConfig(probablySign, operations) {
        this.probablySign = probablySign;
        this.operations = operations;
    }
    OperationConfig.prototype.getOne = function () {
        var operationString = this.operations[this.randomInt(this.operations.length)];
        var operation;
        switch (operationString) {
            case OperationConfig.PLUS:
                operation = new models_1.PlusOperation();
                break;
            case OperationConfig.MINUS:
                operation = new models_1.MinusOperation();
                break;
            case OperationConfig.MULTIPLY:
                operation = new models_1.MultiplyOperation();
                break;
            case OperationConfig.DIVISION:
                operation = new models_1.DivisionOperation();
                break;
            default:
                break;
        }
        return operation;
    };
    OperationConfig.prototype.randomInt = function (threshold) {
        return Math.floor(Math.random() * threshold);
    };
    OperationConfig.PLUS = 'plus';
    OperationConfig.MINUS = 'minus';
    OperationConfig.MULTIPLY = 'multiply';
    OperationConfig.DIVISION = 'division';
    return OperationConfig;
}());
exports.OperationConfig = OperationConfig;
