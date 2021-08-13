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
var _1 = require("./");
var ElementWithChildren = /** @class */ (function (_super) {
    __extends(ElementWithChildren, _super);
    function ElementWithChildren(tagname, content, children) {
        var _this = _super.call(this, tagname, content) || this;
        _this.children = children || [];
        return _this;
    }
    /** 追加子元素 */
    ElementWithChildren.prototype.push = function (el) {
        this.children.push(el);
    };
    ElementWithChildren.prototype.toHTMLBody = function () {
        return this.children.map(function (el) { return el.toHTML(); }).join('');
    };
    return ElementWithChildren;
}(_1.default));
exports.default = ElementWithChildren;
