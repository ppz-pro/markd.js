"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 元素内容，应尽量少参与 parse */
var Element = /** @class */ (function () {
    function Element(tagname, content) {
        this.tagname = tagname;
        this.content = content;
    }
    /** 获取 html 的内容部分 */
    Element.prototype.toHTMLBody = function () {
        return this.content;
    };
    /** 获取 html */
    Element.prototype.toHTML = function () {
        return "<" + this.tagname + ">" + this.toHTMLBody() + "</" + this.tagname + ">";
    };
    return Element;
}());
exports.default = Element;
