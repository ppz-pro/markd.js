"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cached_abstract_1 = require("./cached-abstract");
class StringReadline extends cached_abstract_1.default {
    constructor(str) {
        super();
        this.arr = str.split('\n');
    }
}
exports.default = StringReadline;
