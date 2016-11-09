import { Valuable } from './Valuable'

export class MatesNumber implements Valuable{
    constructor(
        public dividend:number,
        public divisor:number,
        public sign:boolean
    ){}

    public toString = ():string => this.sign ? (this.rawNumber() * -1)+'' : this.rawNumber()+'' 
    public rawNumber = ():number  => this.dividend / this.divisor
    public isInteger = ():boolean => this.rawNumber() % 1 === 0
    
    public latex    = ():string => {
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
    
}