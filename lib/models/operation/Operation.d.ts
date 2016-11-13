import { MatesNumber, Valuable } from '../models';
export declare class Operation implements Valuable {
    sign: boolean;
    precedence: number;
    leftOperand: MatesNumber;
    rightOperand: MatesNumber;
    constructor(sign: boolean, precedence: number, leftOperand?: MatesNumber, rightOperand?: MatesNumber);
    getValue(): Valuable;
    latex(): string;
    isAvailable: () => boolean;
}
export declare class PlusOperation extends Operation {
    leftOperand: MatesNumber;
    rightOperand: MatesNumber;
    sign: boolean;
    precedence: number;
    constructor(leftOperand?: MatesNumber, rightOperand?: MatesNumber, sign?: boolean, precedence?: number);
    getValue(): Valuable;
    latex(): string;
}
export declare class MultiplyOperation extends Operation {
    leftOperand: MatesNumber;
    rightOperand: MatesNumber;
    sign: boolean;
    precedence: number;
    constructor(leftOperand?: MatesNumber, rightOperand?: MatesNumber, sign?: boolean, precedence?: number);
    getValue(): Valuable;
    latex(): string;
}
export declare class DivisionOperation extends Operation {
    leftOperand: MatesNumber;
    rightOperand: MatesNumber;
    sign: boolean;
    precedence: number;
    constructor(leftOperand?: MatesNumber, rightOperand?: MatesNumber, sign?: boolean, precedence?: number);
    getValue(): Valuable;
    latex(): string;
}
export declare class MinusOperation extends Operation {
    leftOperand: MatesNumber;
    rightOperand: MatesNumber;
    sign: boolean;
    precedence: number;
    constructor(leftOperand?: MatesNumber, rightOperand?: MatesNumber, sign?: boolean, precedence?: number);
    getValue(): Valuable;
    latex(): string;
}
