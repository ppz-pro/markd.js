import Element from '../html';
declare abstract class InlineParser {
    protected readonly regExp: RegExp;
    constructor(regExp: RegExp);
    parse(line: string): string;
    protected abstract one(result: RegExpExecArray): Element;
}
declare abstract class InlineParserWithName extends InlineParser {
    protected readonly tagname: string;
    constructor(regExp: RegExp, tagname: string);
}
/** 解析“加粗”、“斜体”等 */
declare class SimpleInlineParser extends InlineParserWithName {
    one(result: RegExpExecArray): Element;
}
declare class BoldItalicParser extends InlineParser {
    constructor();
    one(result: RegExpExecArray): Element;
}
declare class LinkParser extends InlineParserWithName {
    constructor();
    one(result: RegExpExecArray): Element;
}
declare class ImgParser extends InlineParserWithName {
    constructor();
    one(result: RegExpExecArray): Element;
}
export declare const inlineParsers: (SimpleInlineParser | BoldItalicParser | LinkParser | ImgParser)[];
export {};
