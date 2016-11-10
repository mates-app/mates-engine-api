"use strict";
var models_1 = require('../models');
var ProblemItemList = (function () {
    function ProblemItemList(items) {
        if (items === void 0) { items = []; }
        this.items = items;
        this.hasSubList = function (item) { return item instanceof ProblemItemList; };
        this.hasPrecedence = function (item) {
            return item instanceof ProblemItemOperator
                && (item.operation instanceof models_1.MultiplyOperation
                    || item.operation instanceof models_1.DivisionOperation);
        };
    }
    ProblemItemList.prototype.solveSelf = function () {
        this.items = this.items
            .map(function (item) { return item instanceof ProblemItemList ? item.solveSelf() : item; });
        console.log("ASDASDASDASD", this.items);
        this.resolveOperations();
        return this.items[0];
    };
    ProblemItemList.prototype.resolveOperations = function () {
        var index;
        this.items.some(this.hasPrecedence)
            ? index = this.items.findIndex(this.hasPrecedence)
            : index = this.items.findIndex(function (item) { return item instanceof ProblemItemOperator; });
        console.log("index " + index);
        if (index > 0) {
            this.items.splice(index - 1, 3, new ProblemItemNode(this.items[index].operate(this.items[index - 1].valuable, this.items[index + 1].valuable)));
            console.log(this.items
                .filter(function (item) { return item instanceof ProblemItemNode; })
                .map(function (item) { return item.valuable.dividend; }));
            this.resolveOperations();
        }
    };
    return ProblemItemList;
}());
exports.ProblemItemList = ProblemItemList;
var ProblemItemNode = (function () {
    function ProblemItemNode(valuable) {
        this.valuable = valuable;
    }
    ProblemItemNode.prototype.solveSelf = function () {
        this.valuable = this.valuable.getValue();
    };
    return ProblemItemNode;
}());
exports.ProblemItemNode = ProblemItemNode;
var ProblemItemOperator = (function () {
    function ProblemItemOperator(operation) {
        this.operation = operation;
    }
    ProblemItemOperator.prototype.operate = function (a, b) {
        this.operation.leftOperand = a;
        this.operation.rightOperand = b;
        return this.operation.getValue();
    };
    ProblemItemOperator.prototype.print = function (a, b) {
        return '' + a.rawNumber() + b.rawNumber();
    };
    ProblemItemOperator.prototype.solveSelf = function () { };
    return ProblemItemOperator;
}());
exports.ProblemItemOperator = ProblemItemOperator;
