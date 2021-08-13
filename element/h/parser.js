"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_1 = require("../base/parser/simple");
const html_1 = require("./html");
class HParser extends simple_1.default {
    constructor() {
        super(...arguments);
        this.regExp = /^(#{1,5}) (.+)/;
    }
    parse(result) {
        const sharpNum = result[1].length;
        if (sharpNum > 5)
            return;
        this.readline.next();
        return new html_1.default(sharpNum, result[2]);
    }
}
exports.default = HParser;
