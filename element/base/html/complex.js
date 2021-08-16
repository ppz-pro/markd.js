"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const inline_1 = require("../parser/inline");
class ComplexElement extends index_1.default {
    setContent(content) {
        content = this.escape(content);
        for (let parser of inline_1.inlineParsers)
            content = parser.parse(content);
        super.setContent(content);
    }
    escape(content) {
        content = replaceAll(content, '&', '&amp;');
        content = replaceAll(content, ' ', '&nbsp;');
        content = replaceAll(content, '<', '&lt;');
        content = replaceAll(content, '>', '&gt;');
        content = replaceAll(content, "'", '&apos;');
        content = replaceAll(content, '"', '&quot;');
        return content;
    }
}
exports.default = ComplexElement;
function replaceAll(target, sub, replacer) {
    while (true) {
        var tmp = target.replace(sub, replacer);
        if (tmp == target)
            return tmp;
        else
            target = tmp;
    }
}
