export class Problem{
    constructor(
        public problemExpression:string = '' ,
        public options:string[] = [''],
        public answer:string[] = [''],
        public type:string = "math",
        public answerType:string = "math"
    ){}
}