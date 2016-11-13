import { MatesNumber, Valuable } from '../models'

export class Operation implements Valuable{
    constructor(
        public sign:boolean,
        public precedence:number,
        public leftOperand:MatesNumber = null,
        public rightOperand:MatesNumber = null
    ){}

    getValue():Valuable{
        return  
    }

    latex():string{
        return
    }

    isAvailable = ():boolean => this.leftOperand != null && this.rightOperand != null
}

export class PlusOperation extends Operation{
    constructor(
        public leftOperand:MatesNumber = null,
        public rightOperand:MatesNumber = null,
        public sign:boolean = false,
        public precedence:number = 0
    ){
        super(sign, precedence, leftOperand, rightOperand)
    }

    getValue():Valuable{
        let a:MatesNumber = this.leftOperand
        let b:MatesNumber = this.rightOperand
        let signA:number = a.sign ? -1 : 1
        let signB:number = b.sign ? -1 : 1

        let dividend:number = signA * a.dividend * b.divisor + signB * b.dividend * a.divisor
        
        let divisor: number = a.divisor * b.divisor
        let sign:boolean = dividend < 0
        
        dividend = dividend < 0 ? dividend * -1 : dividend
        sign = this.sign ? !sign : sign

        return new MatesNumber(dividend, divisor, sign)
    }

    latex():string{        
        return '+'
    }

}



export class MultiplyOperation extends Operation{
    constructor(
        public leftOperand:MatesNumber = null,
        public rightOperand:MatesNumber = null,
        public sign:boolean = false,
        public precedence:number = 0
    ){
        super(sign, precedence, leftOperand, rightOperand)
    }

    getValue():Valuable{
        
        let a:MatesNumber = this.leftOperand
        let b:MatesNumber = this.rightOperand
        let signA:number = a.sign ? -1 : 1
        let signB:number = b.sign ? -1 : 1

        let dividend:number = signA * signB * a.dividend * b.dividend 
        
        let divisor: number = a.divisor * b.divisor
        let sign:boolean = dividend < 0
        
        dividend = dividend < 0 ? dividend * -1 : dividend
        sign = this.sign ? !sign : sign
        
        return new MatesNumber(dividend, divisor, sign)
    }

    latex():string{
        return '\\centerdot'
    }

}


export class DivisionOperation extends Operation{
    constructor(
        public leftOperand:MatesNumber = null,
        public rightOperand:MatesNumber = null,
        public sign:boolean = false,
        public precedence:number = 0
    ){
        super(sign, precedence, leftOperand, rightOperand)
    }

    getValue():Valuable{
        let a:MatesNumber = this.leftOperand
        let b:MatesNumber = this.rightOperand
        let signA:number = a.sign ? -1 : 1
        let signB:number = b.sign ? -1 : 1

        let dividend:number = signA * signB * a.dividend * b.divisor 
        
        let divisor: number = a.divisor * b.dividend
        let sign:boolean = dividend < 0
        
        dividend = dividend < 0 ? dividend * -1 : dividend
        sign = this.sign ? !sign : sign
        
        return new MatesNumber(dividend, divisor, sign)
    }

    latex():string{
        return '/'
    }

}


export class MinusOperation extends Operation{
    constructor(
        public leftOperand:MatesNumber = null,
        public rightOperand:MatesNumber = null,
        public sign:boolean = false,
        public precedence:number = 0
    ){
        super(sign, precedence, leftOperand, rightOperand)
    }

    getValue():Valuable{
        let a:MatesNumber = this.leftOperand
        let b:MatesNumber = this.rightOperand
        let signA:number = a.sign ? -1 : 1
        let signB:number = b.sign ? -1 : 1

        let dividend:number = signA * a.dividend * b.divisor - signB * b.dividend * a.divisor
        
        let divisor: number = a.divisor * b.divisor
        let sign:boolean = dividend < 0
        
        dividend = dividend < 0 ? dividend * -1 : dividend
        sign = this.sign ? !sign : sign

        return new MatesNumber(dividend, divisor, sign)
    }

    latex():string{
        return '-'
    }

}