import { Operation } from '../models';
export declare class OperationConfig {
    operations: Array<string>;
    static PLUS: string;
    static MINUS: string;
    static MULTIPLY: string;
    static DIVISION: string;
    constructor(operations: Array<string>);
    getOne(): Operation;
    private randomInt(threshold);
}
