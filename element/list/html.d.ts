import AbstractChildren from '../base/html/children';
import Abstract from '../base/html/complex';
export declare class ListElement extends AbstractChildren {
    protected readonly children: LiElement[];
    lastChild(): LiElement;
    readonly level: number;
    constructor(level: number);
    push(el: LiElement): void;
    toHTML(): string;
}
export declare class LiElement extends Abstract {
    readonly level: number;
    readonly child: ListElement;
    constructor(content: string, level: number);
    push(child: LiElement): void;
    toHTMLBody(): string;
}
