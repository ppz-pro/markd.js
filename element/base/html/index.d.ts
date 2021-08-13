export declare type content = string | null;
/** 元素内容，应尽量少参与 parse */
export default class Element {
    /** 标签名 */
    tagname: string;
    /** 文字节点内容 */
    content: content;
    constructor(tagname: string, content: content);
    /** 获取 html 的内容部分 */
    toHTMLBody(): string;
    /** 获取 html */
    toHTML(): string;
}
