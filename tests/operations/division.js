'use strict'
let assert = require('chai').assert
let MatesNumber = require('../../ts/models/models').MatesNumber
let DivisionOperation = require('../../ts/models/models').DivisionOperation

describe('DivisionOperation', () =>{
    describe('calculation', () => {
        it('Happy path: 2/3 / 5/8', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)

            let result= new DivisionOperation(a,b).getValue()

            assert.equal(result.dividend, 16)
            assert.equal(result.divisor, 15)
            assert.equal(result.sign, false)
        })
        it('Operation with sign:  -(2/3 / 5/8)', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,false)

            let result= new DivisionOperation(a,b, true).getValue()

            assert.equal(result.dividend, 16)
            assert.equal(result.divisor, 15)
            assert.equal(result.sign, true)
        })
        it('One Operand with sign: (-2/3) / 5/8', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new DivisionOperation(a,b).getValue()

            assert.equal(result.dividend, 16)
            assert.equal(result.divisor, 15)
            assert.equal(result.sign, true)
        })
    /*    it('One Operand and Operation with sign: -(-2/3 / 5/8)', () =>{
            let a = new MatesNumber(2,3,true)
            let b = new MatesNumber(5,8,false)

            let result = new DivisionOperation(a, b, true).getValue()

            assert.equal(result.dividend, 31)
            assert.equal(result.divisor, 24)
            assert.equal(result.sign, false)
        })*/
        it('Second Operand with sign: 2/3 / (-5/8)', () =>{
            let a = new MatesNumber(2,3,false)
            let b = new MatesNumber(5,8,true)

            let result = new DivisionOperation(a, b).getValue()

            assert.equal(result.dividend, 16)
            assert.equal(result.divisor, 15)
            assert.equal(result.sign,true)
        })
    })


})