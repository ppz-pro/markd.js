"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html_1 = require("../base/html");
class PElement extends html_1.default {
    constructor(content) {
        super('p', content);
    }
}
exports.default = PElement;
