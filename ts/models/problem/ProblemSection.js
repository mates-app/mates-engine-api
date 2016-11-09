"use strict";
var models_1 = require('../models');
var ProblemSection = (function () {
    function ProblemSection(nodes, scope) {
        this.nodes = nodes;
        this.scope = scope;
    }
    ProblemSection.prototype.getValue = function () {
        return this;
    };
    ProblemSection.prototype.latex = function () {
        var str = this.open();
        this.nodes.forEach(function (n) {
            console.log(n instanceof models_1.Operation);
            n instanceof ProblemSection
                ? str += n.latex()
                : str += n.getValue().toString();
        });
        str += this.close();
        return str;
    };
    ProblemSection.prototype.open = function () {
        return this.scope === 2 ? '[ '
            : this.scope === 1 ? '( '
                : '';
    };
    ProblemSection.prototype.close = function () {
        return this.scope === 2 ? ' ]'
            : this.scope === 1 ? ' )'
                : '';
    };
    return ProblemSection;
}());
exports.ProblemSection = ProblemSection;
