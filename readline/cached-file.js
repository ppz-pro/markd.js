"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cached_abstract_1 = require("./cached-abstract");
const fs_1 = require("fs");
class CachedFileReadline extends cached_abstract_1.default {
    constructor(path) {
        super();
        this.readPromise = new Promise((res, rej) => {
            fs_1.readFile(path, (err, buf) => {
                if (err)
                    return rej(err);
                this.arr = this.split(buf.toString());
                res();
            });
        });
    }
}
exports.default = CachedFileReadline;
