"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tab = exports.space2 = exports.space4 = void 0;
exports.space4 = {
    regExp: /^(    )*\+ (.+)/,
    preLength: 4
};
exports.space2 = {
    regExp: /^(  )*\+ (.+)/,
    preLength: 2
};
exports.tab = {
    regExp: /^(\t)*\+ (.+)/,
    preLength: 1
};
