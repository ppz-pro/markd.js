"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html_1 = require("../base/html");
class HElement extends html_1.default {
    constructor(level, content) {
        super('h' + level, content);
    }
}
exports.default = HElement;
