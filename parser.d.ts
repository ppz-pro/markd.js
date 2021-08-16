import Readline from './readline/abstract';
import Element from './element/base/html/complex';
import ElementWithChildren from './element/base/html/children';
import ElParser from './element/base/parser';
/** 解析一个文档为一个 Element */
export default class DocParser {
    private readonly readline;
    private readonly root;
    readonly elementParsers: ElParser<Element>[];
    constructor(readline: Readline, root?: ElementWithChildren);
    /** 解析文档，返回 Root 元素 */
    parse(): ElementWithChildren;
}
