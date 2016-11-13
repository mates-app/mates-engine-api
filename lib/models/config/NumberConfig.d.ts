import { MatesNumber } from '../models';
export declare class NumberConfig {
    min: number;
    max: number;
    probablySign: number;
    divisors: Array<number>;
    constructor(min: number, max: number, probablySign: number, divisors: Array<number>);
    get(howMany: number): Array<MatesNumber>;
    getOne(): MatesNumber;
    private randomDividend;
    private randomSign;
    private randomDivisor;
}
