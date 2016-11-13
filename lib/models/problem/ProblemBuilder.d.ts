import { NumberConfig, OperationConfig, Problem } from '../models';
export declare class SimpleProblemBuilder {
    contants: number;
    numberConfig: NumberConfig;
    operationConfig: OperationConfig;
    constructor(contants: number, numberConfig: NumberConfig, operationConfig: OperationConfig);
    build(): Problem;
    private createProblemNodes(numbers);
    private canBeSublist;
    private sublistLength;
    private randomBool;
    private createOptions(solution);
    shuffle(array: any): any;
}
