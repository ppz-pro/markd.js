"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineParsers = void 0;
const html_1 = require("../html");
class InlineParser {
    constructor(regExp) {
        this.regExp = regExp;
    }
    parse(line) {
        var result;
        while (result = this.regExp.exec(line)) {
            const el = this.one(result);
            line = line.replace(this.regExp, el.toHTML());
        }
        return line;
    }
}
class InlineParserWithName extends InlineParser {
    constructor(regExp, tagname) {
        super(regExp);
        this.tagname = tagname;
    }
}
/** 解析“加粗”、“斜体”等 */
class SimpleInlineParser extends InlineParserWithName {
    one(result) {
        return new html_1.default(this.tagname, result[1]);
    }
}
class BoldItalicParser extends InlineParser {
    constructor() {
        super(/\*\*\*(.+?)\*\*\*/);
    }
    one(result) {
        const italic = new html_1.default('i', result[1]);
        return new html_1.default('b', italic.toHTML());
    }
}
class LinkParser extends InlineParserWithName {
    constructor() {
        super(/\[(.+?)\]\((.+?)\)/, 'a');
    }
    one(result) {
        return new html_1.default(this.tagname, result[1], {
            href: result[2]
        });
    }
}
class ImgParser extends InlineParserWithName {
    constructor() {
        super(/!\[(.+?)\]\((.+?) "(.+?)"\)]/, 'img');
    }
    one(result) {
        return new html_1.default(this.tagname, result[1], {
            href: result[2]
        });
    }
}
exports.inlineParsers = [
    new LinkParser(),
    new ImgParser(),
    new BoldItalicParser(),
    new SimpleInlineParser(/\*\*(.+?)\*\*/, 'b'),
    new SimpleInlineParser(/\*(.+?)\*/, 'i'),
    new SimpleInlineParser(/__(.+?)__/, 'u'),
    new SimpleInlineParser(/~~(.+?)~~/, 'del'),
];
