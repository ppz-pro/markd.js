import Base from '../base/html';
export declare type level = 1 | 2 | 3 | 4 | 5;
export default class HElement extends Base {
    constructor(level: level, content: string);
}
