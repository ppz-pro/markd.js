import Base, { content } from './';
export default class ElementWithChildren extends Base {
    /** 子元素 */
    protected children: Base[];
    constructor(tagname: string, content?: content, children?: Base[]);
    /** 追加子元素 */
    push(el: Base): void;
    toHTMLBody(): string;
}
