import { Valuable } from './Valuable';
export declare class MatesNumber implements Valuable {
    dividend: number;
    divisor: number;
    sign: boolean;
    constructor(dividend: number, divisor: number, sign: boolean);
    private primes;
    toString: () => string;
    rawNumber: () => number;
    isInteger: () => boolean;
    latex: () => string;
    getValue(): Valuable;
    simplify(): MatesNumber;
}
