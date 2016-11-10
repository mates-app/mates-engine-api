import {
    Valuable,
    Operation,
    MatesNumber,
    MultiplyOperation,
    DivisionOperation
} from '../models'

export interface ProblemItem{
    solveSelf()
}

export class ProblemItemList implements ProblemItem {
    constructor(public items:ProblemItem[] = []){

    }

    solveSelf():ProblemItem{
        this.items = this.items
            .map(item => item instanceof ProblemItemList ? item.solveSelf() : item)
            console.log("ASDASDASDASD", this.items)
        this.resolveOperations()

        return this.items[0]
    }

    private resolveOperations(){
        let index
        
        this.items.some(this.hasPrecedence)
            ? index = this.items.findIndex(this.hasPrecedence)
            : index = this.items.findIndex((item) => item instanceof ProblemItemOperator)
        


        console.log(`index ${index}`)
        if(index > 0){
            this.items.splice(
                        index-1, 
                        3, 
                        new ProblemItemNode(
                            (<ProblemItemOperator>this.items[index]).operate(
                                (<ProblemItemNode>this.items[index-1]).valuable, 
                                (<ProblemItemNode>this.items[index+1]).valuable)))
            
            console.log(
                this.items
                    .filter(item => item instanceof ProblemItemNode)
                    .map(   item => (<MatesNumber>(<ProblemItemNode>item).valuable).dividend)
            )                                
            this.resolveOperations()
        }
    }

    private hasSubList = item => item instanceof ProblemItemList

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
}

export class ProblemItemOperator implements ProblemItem {
    constructor(public operation:Operation){}


    operate(a:Valuable, b:Valuable):MatesNumber{
        this.operation.leftOperand = <MatesNumber>a;
        this.operation.rightOperand = <MatesNumber>b;
        return <MatesNumber>this.operation.getValue()
    }

    print(a:Valuable, b:Valuable):string{
        return ''+(<MatesNumber>a).rawNumber() + (<MatesNumber>b).rawNumber()
    }




    solveSelf(){}
}