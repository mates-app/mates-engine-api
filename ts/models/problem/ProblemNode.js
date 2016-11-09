"use strict";
var ProblemNode = (function () {
    function ProblemNode(left, right, scope, previous, next) {
        this.left = left;
        this.right = right;
        this.scope = scope;
        this.previous = previous;
        this.next = next;
    }
    return ProblemNode;
}());
exports.ProblemNode = ProblemNode;
