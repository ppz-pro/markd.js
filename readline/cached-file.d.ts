import Abstract from './cached-abstract';
export default class CachedFileReadline extends Abstract {
    readonly readPromise: Promise<void>;
    constructor(path: string);
}
