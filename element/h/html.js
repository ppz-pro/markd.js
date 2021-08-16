"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const complex_1 = require("../base/html/complex");
class HElement extends complex_1.default {
    constructor(level, content) {
        super('h' + level, content);
    }
}
exports.default = HElement;
