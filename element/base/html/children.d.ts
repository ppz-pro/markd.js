import { content, attr } from './index';
import Base from './complex';
export default class ElementWithChildren extends Base {
    /** 子元素 */
    protected children: Base[];
    constructor(tagname: string, content?: content, children?: Base[], attr?: attr);
    /** 追加子元素 */
    push(el: Base): void;
    toHTMLBody(): string;
}
