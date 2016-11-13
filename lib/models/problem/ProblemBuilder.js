"use strict";
var models_1 = require('../models');
var SimpleProblemBuilder = (function () {
    function SimpleProblemBuilder(contants, numberConfig, operationConfig) {
        this.contants = contants;
        this.numberConfig = numberConfig;
        this.operationConfig = operationConfig;
        this.canBeSublist = function (index, array) { return array.length > 2 && array.length - index >= 2; };
        this.sublistLength = function (index, array) {
            var limit = array.length - index;
            return Math.floor(Math.random() * (limit - 2)) + 2;
        };
        this.randomBool = function () { return Math.random() > 0.5; };
    }
    SimpleProblemBuilder.prototype.build = function () {
        console.info('building problem');
        var numbers = this.numberConfig.get(this.contants);
        var problem = new models_1.ProblemItemList(this.createProblemNodes(numbers));
        console.info('getting expression', problem.items);
        var expression = problem.print();
        console.info('getting solution');
        var solution = problem.solution();
        var options = this.createOptions(solution);
        return new models_1.Problem(expression, options.map(function (option) { return option.latex(); }), [solution.latex()]);
    };
    SimpleProblemBuilder.prototype.createProblemNodes = function (numbers) {
        console.info('creating problem nodes');
        var problem = [];
        for (var i = 0; i < numbers.length; i++) {
            if (this.canBeSublist(i, numbers) && this.randomBool()) {
                var sublistLength = this.sublistLength(i, numbers);
                problem.push(new models_1.ProblemItemList(this.createProblemNodes(numbers.splice(i, sublistLength))));
                i -= 1;
            }
            else {
                problem.push(new models_1.ProblemItemNode(numbers[i]));
            }
            if (i !== numbers.length - 1)
                problem.push(new models_1.ProblemItemOperator(this.operationConfig.getOne()));
        }
        return problem;
    };
    SimpleProblemBuilder.prototype.createOptions = function (solution) {
        console.info('creating options');
        var options = [
            new models_1.MatesNumber(solution.dividend - 1, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend - 2, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend - 3, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend + 1, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend + 2, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend + 3, solution.divisor, false).simplify(),
            new models_1.MatesNumber(solution.dividend, solution.divisor, !solution.sign).simplify()
        ];
        options = this.shuffle(options).slice(0, 4);
        options.push(solution);
        return this.shuffle(options);
    };
    SimpleProblemBuilder.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    return SimpleProblemBuilder;
}());
exports.SimpleProblemBuilder = SimpleProblemBuilder;
//# sourceMappingURL=ProblemBuilder.js.map