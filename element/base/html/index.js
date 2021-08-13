"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 元素内容，应尽量少参与 parse */
class Element {
    constructor(tagname, content) {
        this.tagname = tagname;
        this.content = content;
    }
    /** 获取 html 的内容部分 */
    toHTMLBody() {
        return this.content;
    }
    /** 获取 html */
    toHTML() {
        return `<${this.tagname}>${this.toHTMLBody()}</${this.tagname}>`;
    }
}
exports.default = Element;
