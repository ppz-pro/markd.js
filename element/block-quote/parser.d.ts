import Parser from '../base/parser/simple';
import Element from './html';
export default class HParser extends Parser<Element> {
    protected regExp: RegExp;
    protected parse(result: RegExpExecArray): Element;
    protected parseMore(bq: Element): Element;
}
