"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiElement = exports.ListElement = void 0;
const children_1 = require("../base/html/children");
const html_1 = require("../base/html");
class ListElement extends children_1.default {
    constructor(level) {
        super('ul');
        this.level = level;
    }
    lastChild() {
        return this.children[this.children.length - 1];
    }
    push(el) {
        const lastChild = this.lastChild();
        if (el.level == this.level)
            super.push(el);
        else if (el.level > this.level && lastChild)
            lastChild.push(el);
        else
            // 1. el.level < this.level 如 1 插 2
            // 2. 没有 lastChild 如 3 插 1（越级，应在 parse 函数内返回）
            throw Error(`向 level${this.level} push level${el.level}？`);
    }
    toHTML() {
        return this.children.length == 0
            ? ''
            : super.toHTML();
    }
}
exports.ListElement = ListElement;
class LiElement extends html_1.default {
    constructor(content, level) {
        super('li', content);
        this.level = level;
        this.child = new ListElement(level + 1);
    }
    push(child) {
        this.child.push(child);
    }
    toHTMLBody() {
        return `<span>${this.content}</span>${this.child.toHTML()}`;
    }
}
exports.LiElement = LiElement;
