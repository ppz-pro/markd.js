export default abstract class AbstractReadline {
    /** 返回下一行 */
    abstract get head(): string;
    /** 删除，后返回 head。非 shift：shift 应返回被删元素 */
    abstract next(): string;
    /** 装回去一行 */
    abstract unshift(line?: string): void;
}
