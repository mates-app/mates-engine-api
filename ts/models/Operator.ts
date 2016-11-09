import { MatesNumber } from './MatesNumber'

export class PlusOperator{
    constructor(public sign:boolean){}
    
    public operate = (a:MatesNumber, b:MatesNumber) => {
        let signA:number = a.sign ? -1 : 1
        let signB:number = b.sign ? -1 : 1

        let dividend:number = signA * a.dividend * b.divisor + signB * b.dividend * a.divisor
        

        let divisor: number = a.divisor * b.divisor
        let sign:boolean = dividend < 0

        dividend = dividend < 0 ? dividend * -1 : dividend
        sign = this.sign ? !sign : sign

        return new MatesNumber(dividend, divisor, sign)

    } 

}
