'use strict'
let assert = require('chai').assert
let MatesNumber = require('../ts/models/models').MatesNumber
let PlusOperation = require('../ts/models/models').PlusOperation
let NumberConfig = require('../ts/models/models').NumberConfig
let ProblemNode = require('../ts/models/models').ProblemNode
let $ = require('../ts/models/models')
require('../ts/models/models')


describe('Problem', ()=>{
    it('generation of problem', () =>{
        let constantNumber = 10
        let scopes = 2
        let numberConfig = new NumberConfig(1,10,0,[1])
        let constants = numberConfig.get(constantNumber)
        

        let problem = new $.ProblemItemList([
            new $.ProblemItemNode(new MatesNumber(3,1,false)),
            new $.ProblemItemOperator(new $.MultiplyOperation),
            new $.ProblemItemNode(new MatesNumber(2,1,false)),
            new $.ProblemItemOperator(new PlusOperation),
            new $.ProblemItemNode(new MatesNumber(5,1,false)),
            new $.ProblemItemOperator(new PlusOperation),
            new $.ProblemItemNode(new MatesNumber(1,1,false)),
            new $.ProblemItemOperator(new $.DivisionOperation),
            new $.ProblemItemNode(new MatesNumber(3,1,false))
        ])
        
        console.log(problem.print())
     
    })

    it('problem with subSections', () =>{
        let constantNumber = 10
        let scopes = 2
        let numberConfig = new NumberConfig(1,10,0,[1])
        let constants = numberConfig.get(constantNumber)
        

        let problem = new $.ProblemItemList([
            new $.ProblemItemNode(new MatesNumber(3,1,false)),
            new $.ProblemItemOperator(new $.MultiplyOperation),
            new $.ProblemItemList([
                new $.ProblemItemNode(new MatesNumber(2,1,false)),
                new $.ProblemItemOperator(new PlusOperation),
                new $.ProblemItemNode(new MatesNumber(5,1,false))
            ]),
            new $.ProblemItemOperator(new PlusOperation),
            new $.ProblemItemNode(new MatesNumber(1,1,false)),
            new $.ProblemItemOperator(new $.DivisionOperation),
            new $.ProblemItemNode(new MatesNumber(3,1,false))
        ])

        // console.log(problem.solveSelf())
        console.log(problem.print())
     
    })
    it('problem with two level subSections', () =>{
        let constantNumber = 10
        let scopes = 2
        let numberConfig = new NumberConfig(1,10,0,[1])
        let constants = numberConfig.get(constantNumber)
        

        let problem = new $.ProblemItemList([
            new $.ProblemItemNode(new MatesNumber(5,1,false)),
            new $.ProblemItemOperator(new $.MultiplyOperation),
            new $.ProblemItemList([
                new $.ProblemItemNode(new MatesNumber(1,1,false)),
                new $.ProblemItemOperator(new PlusOperation),
                new $.ProblemItemNode(new MatesNumber(3,1,false))
            ]),
            new $.ProblemItemOperator(new PlusOperation),
            new $.ProblemItemList([
                new $.ProblemItemList([
                    new $.ProblemItemNode(new MatesNumber(5,1,false)),
                    new $.ProblemItemOperator(new PlusOperation),
                    new $.ProblemItemNode(new MatesNumber(1,1,false))
                ]),
                new $.ProblemItemOperator(new $.DivisionOperation),
                new $.ProblemItemList([
                    new $.ProblemItemNode(new MatesNumber(4,1,false)),
                    new $.ProblemItemOperator(new PlusOperation),
                    new $.ProblemItemNode(new MatesNumber(2,1,false)),
                    new $.ProblemItemOperator(new $.DivisionOperation),
                    new $.ProblemItemNode(new MatesNumber(3,1,false))
                ])
            ]),
            new $.ProblemItemOperator(new $.MultiplyOperation),
            new $.ProblemItemList([
                new $.ProblemItemNode(new MatesNumber(3,1,false)),
                new $.ProblemItemOperator(new PlusOperation),
                new $.ProblemItemNode(new MatesNumber(5,1,false))
            ]),
        ])

        // console.log(problem.solveSelf())
        console.log(problem.print())
     
    })
})

let printValues = (n) => {
    console.log(n.latex())
}

let getScope = (scopes) => Math.floor(Math.random() * scopes)

