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
exports.LiElement = exports.ListElement = void 0;
var children_1 = require("../base/html/children");
var html_1 = require("../base/html");
var ListElement = /** @class */ (function (_super) {
    __extends(ListElement, _super);
    function ListElement(level) {
        var _this = _super.call(this, 'ul') || this;
        _this.level = level;
        return _this;
    }
    ListElement.prototype.lastChild = function () {
        return this.children[this.children.length - 1];
    };
    ListElement.prototype.push = function (el) {
        var lastChild = this.lastChild();
        if (el.level == this.level)
            _super.prototype.push.call(this, el);
        else if (el.level > this.level && lastChild)
            lastChild.push(el);
        else
            // 1. el.level < this.level 如 1 插 2
            // 2. 没有 lastChild 如 3 插 1（越级，应在 parse 函数内返回）
            throw Error("\u5411 level" + this.level + " push level" + el.level + "\uFF1F");
    };
    ListElement.prototype.toHTML = function () {
        return this.children.length == 0
            ? ''
            : _super.prototype.toHTML.call(this);
    };
    return ListElement;
}(children_1.default));
exports.ListElement = ListElement;
var LiElement = /** @class */ (function (_super) {
    __extends(LiElement, _super);
    function LiElement(content, level) {
        var _this = _super.call(this, 'li', content) || this;
        _this.level = level;
        _this.child = new ListElement(level + 1);
        return _this;
    }
    LiElement.prototype.push = function (child) {
        this.child.push(child);
    };
    LiElement.prototype.toHTMLBody = function () {
        return "<span>" + this.content + "</span>" + this.child.toHTML();
    };
    return LiElement;
}(html_1.default));
exports.LiElement = LiElement;
