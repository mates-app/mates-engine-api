"use strict";
var models_1 = require('../models');
var ProblemItemList = (function () {
    function ProblemItemList(items) {
        var _this = this;
        if (items === void 0) { items = []; }
        this.items = items;
        this.analyzeLevels = function () {
            var levels = 0;
            if (_this.items.some(_this.isSubList)) {
                levels = 1;
                if (_this.items
                    .filter(_this.isSubList)
                    .some(function (sublist) { return sublist.items.some(_this.isSubList); }))
                    levels = 2;
            }
            return levels;
        };
        this.isSubList = function (item) { return item instanceof ProblemItemList; };
        this.hasPrecedence = function (item) {
            return item instanceof ProblemItemOperator
                && (item.operation instanceof models_1.MultiplyOperation
                    || item.operation instanceof models_1.DivisionOperation);
        };
    }
    ProblemItemList.prototype.solveSelf = function () {
        this.items = this.items
            .map(function (item) { return item instanceof ProblemItemList ? item.solveSelf() : item; });
        this.resolveOperations();
        return this.items[0];
    };
    ProblemItemList.prototype.solution = function () {
        var node = this.solveSelf();
        return node.valuable.simplify();
    };
    ProblemItemList.prototype.print = function () {
        var result = '';
        var levels = this.analyzeLevels();
        result = this.items
            .map(function (item) { return item.print(); })
            .reduce(function (acc, curr) { return acc + curr; }, '');
        result = levels === 0
            ? "( " + result + " )"
            : levels === 1
                ? "[ " + result + " ]"
                : "{ " + result + " }";
        return result;
    };
    ProblemItemList.prototype.resolveOperations = function () {
        var index;
        this.items.some(this.hasPrecedence)
            ? index = this.items.findIndex(this.hasPrecedence)
            : index = this.items.findIndex(function (item) { return item instanceof ProblemItemOperator; });
        if (index > 0) {
            this.items.splice(index - 1, 3, new ProblemItemNode(this.items[index].operate(this.items[index - 1].valuable, this.items[index + 1].valuable)));
            // console.log(
            //     this.items
            //         .filter(item => item instanceof ProblemItemNode)
            //         .map(   item => (<MatesNumber>(<ProblemItemNode>item).valuable).dividend)
            // )                                
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
    ProblemItemNode.prototype.print = function () {
        return this.valuable.latex();
    };
    ProblemItemNode.prototype.solution = function () {
        return this.valuable;
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
    ProblemItemOperator.prototype.print = function () {
        return this.operation.latex();
    };
    ProblemItemOperator.prototype.solution = function () {
        return;
    };
    ProblemItemOperator.prototype.solveSelf = function () { };
    return ProblemItemOperator;
}());
exports.ProblemItemOperator = ProblemItemOperator;
//# sourceMappingURL=ProblemItem.js.map