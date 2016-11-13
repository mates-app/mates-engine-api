import {
    Valuable,
    Operation,
    MatesNumber,
    MultiplyOperation,
    DivisionOperation
} from '../models'

export interface ProblemItem{
    solveSelf()
    print():string
    solution():MatesNumber
}

export class ProblemItemList implements ProblemItem {
    constructor(public items:ProblemItem[] = []){

    }

    solveSelf():ProblemItem{
        this.items = this.items
            .map(item => item instanceof ProblemItemList ? item.solveSelf() : item)
        this.resolveOperations()

        return this.items[0]
    }

    solution():MatesNumber{
        let node:ProblemItem = this.solveSelf()
        return (<MatesNumber>(<ProblemItemNode>node).valuable).simplify()
    }

    print():string{
        let result:string = ''
        let levels:number = this.analyzeLevels()
        
        result = this.items
            .map(item => item.print())
            .reduce((acc, curr) => acc + curr, '')
        
        result = levels === 0 
                    ? `( ${result} )`
                    : levels === 1
                        ? `[ ${result} ]`
                        : `{ ${result} }`

        return result
    }

    private resolveOperations(){
        let index
        
        this.items.some(this.hasPrecedence)
            ? index = this.items.findIndex(this.hasPrecedence)
            : index = this.items.findIndex((item) => item instanceof ProblemItemOperator)
        
        if(index > 0){
            this.items.splice(
                        index-1, 
                        3, 
                        new ProblemItemNode(
                            (<ProblemItemOperator>this.items[index]).operate(
                                (<ProblemItemNode>this.items[index-1]).valuable, 
                                (<ProblemItemNode>this.items[index+1]).valuable)))
            
            // console.log(
            //     this.items
            //         .filter(item => item instanceof ProblemItemNode)
            //         .map(   item => (<MatesNumber>(<ProblemItemNode>item).valuable).dividend)
            // )                                
            this.resolveOperations()
        }
    }

    private analyzeLevels = ():number =>{
        let levels = 0;
        if(this.items.some(this.isSubList)){
            levels = 1
            if((<ProblemItemList[]>this.items
            .filter(this.isSubList))
            .some(sublist => sublist.items.some(this.isSubList)))
                levels = 2
        }
        return levels
        
    }
    private isSubList = item => item instanceof ProblemItemList

    private hasPrecedence = item =>
     item instanceof ProblemItemOperator 
        && (item.operation instanceof MultiplyOperation 
        || item.operation instanceof DivisionOperation)
        


}

export class ProblemItemNode implements ProblemItem {
    constructor(public valuable:Valuable){}  

    solveSelf(){
        this.valuable = this.valuable.getValue()
    }

    print():string{
        return (<MatesNumber>this.valuable).latex()
    }

    solution():MatesNumber{
        return <MatesNumber>this.valuable
    }
}

export class ProblemItemOperator implements ProblemItem {
    constructor(public operation:Operation){}


    operate(a:Valuable, b:Valuable):MatesNumber{
        this.operation.leftOperand = <MatesNumber>a;
        this.operation.rightOperand = <MatesNumber>b;
        return <MatesNumber>this.operation.getValue()
    }

    print():string{
        return this.operation.latex()
    }

    solution():MatesNumber{
        return 
    }




    solveSelf(){}
}