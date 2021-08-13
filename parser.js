"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var children_1 = require("./element/base/html/children");
var parser_1 = require("./element/h/parser");
var parser_2 = require("./element/list/parser");
var parser_3 = require("./element/block-quote/parser");
var html_1 = require("./element/p/html");
/** 解析一个文档为一个 Element */
var DocParser = /** @class */ (function () {
    function DocParser(readline, root) {
        this.readline = readline;
        this.root = root || new children_1.default('div');
        this.elementParsers = [
            new parser_1.default(readline),
            new parser_2.default(readline),
            new parser_3.default(readline)
        ];
    }
    /** 解析文档，返回 Root 元素 */
    DocParser.prototype.parse = function () {
        while (this.readline.head) {
            var el = void 0;
            for (var _i = 0, _a = this.elementParsers; _i < _a.length; _i++) {
                var elParser = _a[_i];
                if (el = elParser.check())
                    break;
            }
            if (!el) {
                el = new html_1.default(this.readline.head);
                this.readline.next();
            }
            this.root.push(el);
        }
        return this.root;
    };
    return DocParser;
}());
exports.default = DocParser;
