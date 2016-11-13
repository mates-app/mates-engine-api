import { Valuable, Operation, MatesNumber } from '../models';
export interface ProblemItem {
    solveSelf(): any;
    print(): string;
    solution(): MatesNumber;
}
export declare class ProblemItemList implements ProblemItem {
    items: ProblemItem[];
    constructor(items?: ProblemItem[]);
    solveSelf(): ProblemItem;
    solution(): MatesNumber;
    print(): string;
    private resolveOperations();
    private analyzeLevels;
    private isSubList;
    private hasPrecedence;
}
export declare class ProblemItemNode implements ProblemItem {
    valuable: Valuable;
    constructor(valuable: Valuable);
    solveSelf(): void;
    print(): string;
    solution(): MatesNumber;
}
export declare class ProblemItemOperator implements ProblemItem {
    operation: Operation;
    constructor(operation: Operation);
    operate(a: Valuable, b: Valuable): MatesNumber;
    print(): string;
    solution(): MatesNumber;
    solveSelf(): void;
}
