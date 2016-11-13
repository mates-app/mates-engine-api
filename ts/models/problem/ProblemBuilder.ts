import {
    NumberConfig,
    OperationConfig,
    MatesNumber,
    Problem,
    ProblemItem,
    ProblemItemList,
    ProblemItemNode,
    ProblemItemOperator
} from '../models'

export class SimpleProblemBuilder {
    constructor(
        public contants: number,
        public numberConfig: NumberConfig,
        public operationConfig: OperationConfig
    ) { }

    build():Problem {
        console.info('building problem')
        let numbers: MatesNumber[] = this.numberConfig.get(this.contants)

        let problem:    ProblemItemList = new ProblemItemList(this.createProblemNodes(numbers))
        console.info('getting expression', problem.items)
        let expression: string = problem.print()
        console.info('getting solution')
        let solution:   MatesNumber = problem.solution()
        
        let options:    MatesNumber[] = this.createOptions(solution)
        
        return new Problem(expression, options.map(option => option.latex()), [solution.latex()])
    }

    private createProblemNodes(numbers: MatesNumber[]): ProblemItem[] {
        console.info('creating problem nodes')
        let problem: ProblemItem[] = [];

        for(let i = 0; i < numbers.length; i++){
            if(this.canBeSublist(i,numbers) && this.randomBool()){
                let sublistLength = this.sublistLength(i, numbers)
                problem.push(new ProblemItemList(this.createProblemNodes(numbers.splice(i,sublistLength))))
                i -= 1
            }else{
                problem.push(new ProblemItemNode(numbers[i]))
            }

            if (i !== numbers.length - 1)
                problem.push(new ProblemItemOperator(this.operationConfig.getOne()))
        }
        return problem
    }

    private canBeSublist = (index, array):boolean => array.length > 2 && array.length - index >= 2
    private sublistLength = (index, array):number => {
        let limit:number = array.length - index
        return Math.floor(Math.random() * (limit - 2)) + 2
    } 
    private randomBool = () => Math.random() > 0.5

    private createOptions(solution: MatesNumber):MatesNumber[] {
        console.info('creating options')
        let options: MatesNumber[] = [
            new MatesNumber(solution.dividend - 1, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend - 2, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend - 3, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend + 1, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend + 2, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend + 3, solution.divisor, false).simplify(),
            new MatesNumber(solution.dividend, solution.divisor, !solution.sign).simplify()
        ]

        options = this.shuffle(options).slice(0,4)
        options.push(solution)
        return this.shuffle(options)
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


}