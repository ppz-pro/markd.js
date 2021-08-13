import Parser from '../base/parser/simple';
import Html from './html';
export default class HParser extends Parser<Html> {
    protected regExp: RegExp;
    protected parse(result: RegExpExecArray): Html;
}
