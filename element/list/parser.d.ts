import Parser from '../base/parser';
import { ListElement } from './html';
export default class ListParser extends Parser<ListElement> {
    /** 当前所在的 ListElement */
    private rootElement;
    /** 当前使用的正则表达式 */
    private liRegExp;
    check(): ListElement;
    parse(): ListElement;
}
