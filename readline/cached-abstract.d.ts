import Abstract from './abstract';
export default abstract class CachedAbstractReadline extends Abstract {
    protected arr: string[];
    split(str: string): string[];
    get head(): string;
    next(): string;
    /** 上一行，用于 unshift */
    protected last: string;
    unshift(line?: string): void;
}
