import {
    Operation,
    PlusOperation,
    MinusOperation,
    MultiplyOperation,
    DivisionOperation
} from '../models'

export class OperationConfig{
    public static PLUS:string =     'plus'
    public static MINUS:string =    'minus'
    public static MULTIPLY:string = 'multiply'
    public static DIVISION:string = 'division'

    constructor(
        public operations:Array<string>
    ){}

    getOne():Operation{
        let operationString = this.operations[this.randomInt(this.operations.length)]
        let operation:Operation
        console.info(
            'this.operations',this.operations)
        switch(operationString){
            case OperationConfig.PLUS:
                operation = new PlusOperation()
                break
            case OperationConfig.MINUS:
                operation = new MinusOperation()
                break
            case OperationConfig.MULTIPLY:
                operation = new MultiplyOperation()
                break
            case OperationConfig.DIVISION:
                operation = new DivisionOperation()
                break
            default:
                break
        }

        return operation
    }

    private randomInt(threshold:number):number{
        return Math.floor(Math.random() * threshold)
    }

}