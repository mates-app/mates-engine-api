"use strict";
var Problem = (function () {
    function Problem(problemExpression, options, answer, type, answerType) {
        if (problemExpression === void 0) { problemExpression = ''; }
        if (options === void 0) { options = ['']; }
        if (answer === void 0) { answer = ['']; }
        if (type === void 0) { type = "math"; }
        if (answerType === void 0) { answerType = "math"; }
        this.problemExpression = problemExpression;
        this.options = options;
        this.answer = answer;
        this.type = type;
        this.answerType = answerType;
    }
    return Problem;
}());
exports.Problem = Problem;
