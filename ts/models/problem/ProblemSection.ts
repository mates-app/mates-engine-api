import { Valuable, MatesNumber, Operation } from '../models'

export class ProblemSection implements Valuable{

    constructor(
        public nodes:Array<Valuable>,
        public scope:number
    ){}

    public getValue():Valuable{
        return this
    }

    latex(){
        let str:string = this.open()    
        this.nodes.forEach((n) => {
            console.log(n instanceof Operation)
            n instanceof ProblemSection
                ? str += n.latex()
                : str += n.getValue().toString()            
        })
        str += this.close()

        return str
    }


    private open():string{
        return this.scope === 2 ? '[ '
                : this.scope === 1 ? '( '
                    : '' 
    }

    private close():string{
        return this.scope === 2 ? ' ]'
                : this.scope === 1 ? ' )'
                    : '' 
    }



}