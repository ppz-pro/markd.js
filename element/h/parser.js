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
var simple_1 = require("../base/parser/simple");
var html_1 = require("./html");
var HParser = /** @class */ (function (_super) {
    __extends(HParser, _super);
    function HParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regExp = /^(#{1,5}) (.+)/;
        return _this;
    }
    HParser.prototype.parse = function (result) {
        var sharpNum = result[1].length;
        if (sharpNum > 5)
            return;
        this.readline.next();
        return new html_1.default(sharpNum, result[2]);
    };
    return HParser;
}(simple_1.default));
exports.default = HParser;
