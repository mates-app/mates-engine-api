'use strict'
let assert = require('chai').assert
let MatesNumber = require('../ts/models/models').MatesNumber
let PlusOperation = require('../ts/models/models').PlusOperation

describe('MatesNumber', () => {
    it('Must 2/3 == 2/3', () =>{
        let number = new MatesNumber(2,3,false)
        assert.equal(number.toString(), (2.0 / 3.0)+'')
        assert.equal(number.latex(), '{ \\frac{ 2 }{ 3 } }')
    })
    it('8/8 must be 1', () =>{
        let number = new MatesNumber(8,8,false)
        assert.equal(number.toString(), (8.0 / 8.0)+'')
        assert.equal(number.latex(), '{ { 1 } }')
    })
})

describe('PlusOperation', () =>{
    describe('calculation', () => {
        it('Happy path', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)

            let result= new PlusOperation(a,b).getValue()

            assert.equal(result.dividend, 31)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, false)
        })
        it('Operation with sign', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)

            let result= new PlusOperation(a,b, true).getValue()

            assert.equal(result.dividend, 31)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, true)
        })
        it('One Operand with sign', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new PlusOperation(a,b).getValue()

            assert.equal(result.dividend, 1)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, true)
        })
        it('One Operand and Operation with sign', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new PlusOperation(a, b, true).getValue()

            assert.equal(result.dividend, 1)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, false)
        })
        it('Second Operand with sign', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,true)

            let result = new PlusOperation(a, b).getValue()

            assert.equal(result.dividend, 1)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, false)
        })
    })
    describe('Print', () => {
        it('Happy path', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)
        })
        it('Operation with sign', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)

            let result= new PlusOperation(a, b, true).getValue()

            assert.equal(result.dividend, 31)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, true)
        })
        it('One Operand with sign', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new PlusOperation(a, b).getValue()

            assert.equal(result.dividend, 1)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, true)
        })
        it('One Operand and Operation with sign', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new PlusOperation(a, b, true).getValue()

            assert.equal(result.dividend, 1)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, false)
        })
    })




})