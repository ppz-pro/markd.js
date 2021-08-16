export declare type content = string | null;
export declare type attr = Record<string, string>;
/** 元素内容，应尽量少参与 parse */
export default class Element {
    /** 标签名 */
    tagname: string;
    /** 文字节点内容 */
    private __content;
    /** 元素属性 */
    protected attr: attr;
    constructor(tagname: string, content?: content, attr?: attr);
    protected getContent(): content;
    protected setContent(content: string): void;
    /** 获取 html 的内容部分 */
    toHTMLBody(): string;
    /** 获取 html */
    toHTML(): string;
}
