"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("../base/parser");
var html_1 = require("./html");
var li_reg_exp_1 = require("./li-reg-exp");
var ListParser = /** @class */ (function (_super) {
    __extends(ListParser, _super);
    function ListParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListParser.prototype.check = function () {
        var head = this.readline.head;
        var result = /^\+ (.+)/.exec(head);
        if (!result)
            return;
        this.rootElement = new html_1.ListElement(1);
        this.rootElement.push(new html_1.LiElement(result[1], 1));
        var next = this.readline.next(); // 解析确定成功，消一行
        // 通过下一行确定使用哪种缩进
        if (next != undefined) {
            if (next[0] == '\t')
                this.liRegExp = li_reg_exp_1.tab;
            else if (next.indexOf('    ') == 0)
                this.liRegExp = li_reg_exp_1.space4;
            else
                this.liRegExp = li_reg_exp_1.space2;
        }
        return this.parse();
    };
    ListParser.prototype.parse = function () {
        var line = this.readline.head;
        var result = this.liRegExp.regExp.exec(line);
        if (!result)
            return this.rootElement;
        var levelStrLength = line.indexOf(result[2]) - 2;
        var level = levelStrLength / this.liRegExp.preLength + 1; // 当前元素等级确定
        // --- 如果跨级，则废弃 --- //
        // 找到上一个被插元素元素（即最下，最后）
        var lastLowestLi = this.rootElement.lastChild();
        while (lastLowestLi.child.lastChild())
            lastLowestLi = lastLowestLi.child.lastChild();
        // 比较 level：最后一个元素 和 当前元素
        if (level - lastLowestLi.level > 1)
            return this.rootElement;
        // --- 未跨级，是正经元素 --- //
        this.rootElement.push(new html_1.LiElement(result[2], level));
        var next = this.readline.next(); // 确定插入，消除一行
        return next
            ? this.parse()
            : this.rootElement;
    };
    return ListParser;
}(parser_1.default));
exports.default = ListParser;
