"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class AbstractSimpleElementParser extends _1.default {
    check() {
        const result = this.regExp.exec(this.readline.head);
        if (!result)
            return;
        return this.parse(result);
    }
}
exports.default = AbstractSimpleElementParser;
