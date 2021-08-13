"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const children_1 = require("./element/base/html/children");
const parser_1 = require("./element/h/parser");
const parser_2 = require("./element/list/parser");
const parser_3 = require("./element/block-quote/parser");
const html_1 = require("./element/p/html");
/** 解析一个文档为一个 Element */
class DocParser {
    constructor(readline, root) {
        this.readline = readline;
        this.root = root || new children_1.default('div');
        this.elementParsers = [
            new parser_1.default(readline),
            new parser_2.default(readline),
            new parser_3.default(readline)
        ];
    }
    /** 解析文档，返回 Root 元素 */
    parse() {
        while (this.readline.head) {
            let el;
            for (let elParser of this.elementParsers)
                if (el = elParser.check())
                    break;
            if (!el) {
                el = new html_1.default(this.readline.head);
                this.readline.next();
            }
            this.root.push(el);
        }
        return this.root;
    }
}
exports.default = DocParser;
