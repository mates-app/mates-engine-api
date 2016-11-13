import { Valuable } from './Valuable'

export class MatesNumber implements Valuable{
    constructor(
        public dividend:number,
        public divisor:number,
        public sign:boolean
    ){}
    private primes:number[] = [2,3,5,7,11,13,17,19,23,31]
    public toString  = ():string => this.sign ? (this.rawNumber() * -1)+'' : this.rawNumber()+'' 
    public rawNumber = ():number  => this.dividend / this.divisor
    public isInteger = ():boolean => this.rawNumber() % 1 === 0
    
    public latex     = ():string => {
         let result:string = 
            this.isInteger() 
                ? this.sign
                    ? `{ -${ this.rawNumber() } }`
                    :  `{ ${ this.rawNumber() } }`
                : this.sign
                    ? `\\frac{ -${ this.dividend } }{ ${ this.divisor } }`
                    :  `\\frac{ ${ this.dividend } }{ ${ this.divisor } }`
        return `{ ${result} }`
    } 

    public getValue():Valuable{
        return this
    }

    public simplify():MatesNumber{
        for(let i = 0; i < this.primes.length; i++){
            let prime = this.primes[i]
            
            while(this.dividend % prime === 0 && this.divisor % prime === 0){
                this.dividend = this.dividend / prime
                this.divisor  = this.divisor  / prime
            }
        }
        return this
    }


    
}