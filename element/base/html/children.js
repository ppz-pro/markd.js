"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const complex_1 = require("./complex");
class ElementWithChildren extends complex_1.default {
    constructor(tagname, content, children, attr) {
        super(tagname, content, attr);
        this.children = children || [];
    }
    /** 追加子元素 */
    push(el) {
        this.children.push(el);
    }
    toHTMLBody() {
        return this.children.map(el => el.toHTML()).join('');
    }
}
exports.default = ElementWithChildren;
