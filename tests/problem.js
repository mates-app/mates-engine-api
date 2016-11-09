'use strict'
let assert = require('chai').assert
let MatesNumber = require('../ts/models/models').MatesNumber
let PlusOperation = require('../ts/models/models').PlusOperation
let NumberConfig = require('../ts/models/models').NumberConfig
let ProblemNode = require('../ts/models/models').ProblemNode
let ProblemSection = require('../ts/models/problem/ProblemSection').ProblemSection

describe('Problem', ()=>{
    it('generation of problem', () =>{
        let constantNumber = 10
        let scopes = 2
        let numberConfig = new NumberConfig(1,10,0,[1])
        let constants = numberConfig.get(constantNumber)

        let node1 = new ProblemSection(
            [new PlusOperation(constants[0], constants[1])], 0)
        let node2 = new ProblemSection(
            [new PlusOperation(constants[1], constants[2])], 1)
        let node3 = new ProblemSection([
            new ProblemSection(
                [new PlusOperation(constants[3], constants[4])],1),
            new ProblemSection(
                [new PlusOperation(constants[5], constants[6]),
                new PlusOperation(constants[6], constants[7])],1)
        ], 2)
        let node4 = new ProblemSection(
            [new PlusOperation(constants[8], constants[9])], 1)

        console.log(
            new ProblemSection([node1,node2,node3,node4],0).latex()
        )

        console.log(node1.latex())
        console.log(node2.latex())
        console.log(node3.latex())
        console.log(node4.latex())

    })
})

let printValues = (n) => {
    console.log(n.latex())
}

let getScope = (scopes) => Math.floor(Math.random() * scopes)