import { MatesNumber } from './MatesNumber'

export class NumberConfig{
    constructor(
        public min:number,
        public max:number,
        public probablySign:number,
        public divisors:Array<number>
    ){}

    public get(howMany:number):Array<MatesNumber>{
        let constans:Array<MatesNumber> = new Array<MatesNumber>()
        for(let i = 0; i < howMany; i++){
            constans.push(this.getOne())
        }
        return constans
    }

    public getOne():MatesNumber{
        let divisor = this.randomDivisor(this.divisors)
        let dividend = this.randomDividend(this.min, this.max, divisor)
        let sign = this.randomSign(this.probablySign)
        return new MatesNumber(dividend, divisor, sign)
    }

    private randomDividend = 
        (min:number, max:number, divisor:number) => {
            let segment = (max - min) * divisor
            let base    = min * divisor
            
            return Math.floor(Math.random() * segment) + base
        }
    
    private randomSign = 
        (probablySign:number) => Math.random() <= probablySign
    
    private randomDivisor = 
        (divisors:Array<number>) => {
            let val:number = Math.random()*divisors.length
            return divisors[Math.floor(val)]
        }

}
