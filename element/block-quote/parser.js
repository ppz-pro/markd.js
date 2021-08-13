"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_1 = require("../base/parser/simple");
const html_1 = require("./html");
const html_2 = require("../p/html");
class HParser extends simple_1.default {
    constructor() {
        super(...arguments);
        this.regExp = /^> (.+)/;
    }
    parse(result) {
        const bq = new html_1.default();
        bq.push(new html_2.default(result[1]));
        return this.parseMore(bq);
    }
    parseMore(bq) {
        const next = this.readline.next();
        if (next == undefined)
            return bq;
        const nextResult = this.regExp.exec(next);
        if (nextResult)
            return this.parseMore(bq);
        else
            return bq;
    }
}
exports.default = HParser;
