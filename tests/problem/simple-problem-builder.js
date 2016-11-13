'use strict'
let assert = require('chai').assert
let $ = require('../../ts/models/models')


describe('SimpleProblemBuilder', ()=>{
    it('', ()=>{
        let numberConfig = new $.NumberConfig(1,7,0,[1,2,3])
        let operationConfig = new $.OperationConfig(0, [
            $.OperationConfig.PLUS,
            $.OperationConfig.MINUS,
            $.OperationConfig.MULTIPLY,
            $.OperationConfig.DIVISION])
        let problemBuilder = new $.SimpleProblemBuilder(5,numberConfig, operationConfig)
        
        for(let i = 0; i < 10; i++){
            // console.log(problemBuilder.build())
            problemBuilder.build()
        }

    })    
})