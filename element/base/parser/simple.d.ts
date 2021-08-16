import Abstract from '.';
import BaseElement from '../html/complex';
export default abstract class AbstractSimpleElementParser<Element extends BaseElement> extends Abstract<Element> {
    /** 用以校验某行是否验证成功 */
    protected regExp: RegExp;
    protected abstract parse(result: RegExpExecArray): Element;
    check(): Element;
}
