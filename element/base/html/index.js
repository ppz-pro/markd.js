"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 元素内容，应尽量少参与 parse */
class Element {
    constructor(tagname, content, attr) {
        this.tagname = tagname;
        if (content)
            this.setContent(content);
        this.attr = attr || {};
    }
    getContent() {
        return this.__content;
    }
    setContent(content) {
        this.__content = content;
    }
    /** 获取 html 的内容部分 */
    toHTMLBody() {
        return this.getContent();
    }
    /** 获取 html */
    toHTML() {
        let attrStr = '';
        for (let attrKey in this.attr)
            attrStr += ` ${attrKey}=${this.attr[attrKey]}`;
        return `<${this.tagname} ${attrStr}>${this.toHTMLBody()}</${this.tagname}>`;
    }
}
exports.default = Element;
