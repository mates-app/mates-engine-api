'use strict'
let assert = require('chai').assert
let MatesNumber = require('../ts/models/models').MatesNumber
let PlusOperation = require('../ts/models/models').PlusOperation
let NumberConfig = require('../ts/models/models').NumberConfig
let ProblemNode = require('../ts/models/models').ProblemNode
let ProblemSection = require('../ts/models/problem/ProblemSection').ProblemSection
let $ = require('../ts/models/models')



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

        // let problem = new $.ProblemItemList([
        //     new $.ProblemItemNode(constants[0]),
        //     new $.ProblemItemOperator(1),
        //     new $.ProblemItemNode(constants[1]),
        //     new $.ProblemItemOperator(2),
        //     new $.ProblemItemNode(constants[2]),
        //     new $.ProblemItemOperator(3),
        //     new $.ProblemItemNode(constants[3]),
        //     new $.ProblemItemOperator(4),
        //     new $.ProblemItemNode(constants[4])
        // ])
        
        // console.log(problem.items)
        console.log(problem.solveSelf())
        
     
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

        console.log(problem.solveSelf())
        
     
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

        console.log(problem.solveSelf())
        
     
    })
})

let printValues = (n) => {
    console.log(n.latex())
}

let getScope = (scopes) => Math.floor(Math.random() * scopes)

