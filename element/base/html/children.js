"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class ElementWithChildren extends _1.default {
    constructor(tagname, content, children) {
        super(tagname, content);
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
