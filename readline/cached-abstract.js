"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class CachedAbstractReadline extends abstract_1.default {
    split(str) {
        return str.split('\n');
    }
    get head() {
        return this.arr[0];
    }
    next() {
        this.last = this.arr.shift();
        return this.head;
    }
    unshift(line) {
        if (!line) {
            if (this.last) {
                line = this.last;
                this.last = null;
            }
            else {
                throw Error('未传入 line，last 为空');
            }
        }
        this.arr.unshift(line);
    }
}
exports.default = CachedAbstractReadline;
