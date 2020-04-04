import * as passport from "passport"
import { SessionNS } from "./types";
import { isArray } from "util";

export class awesomepassport {
    private _serializeFn: SessionNS.SerializeDeserializeFn;
    private _deserializeFn: SessionNS.SerializeDeserializeFn;
    private _strategy: SessionNS.IStrategy | SessionNS.IStrategy[];

    constructor(opts: SessionNS.IPassportOptions) {
        this._serializeFn = opts.serialize;
        this._deserializeFn = opts.deserialize;
        this._strategy = opts.strategy;
    }

    /**
     * init
     */
    public init() {
        /**
         * Check for passport pre-requisite
         */
        if(!this._strategy || !this._serializeFn || !this._deserializeFn) {
            return;
        }

        if(isArray(this._strategy)) {
            for (let index in this._strategy) {
                let element = this._strategy[index];
                passport.use(element.name, element.object);
            }
        } else {
            passport.use(this._strategy.name, this._strategy.object);
        }
        passport.serializeUser(this._serializeFn);
        passport.deserializeUser(this._deserializeFn);
    }

    public self() {
        return passport.initialize();
    }

    public session() {
        return passport.session();
    }

    public authPassport(strategy: string | string[], cb: (...args: any[])=>void) {
        return passport.authenticate(strategy, cb);
    }

    /**
     * Getter and Setter Methods
     */
    get serializeFn(): SessionNS.SerializeDeserializeFn {
        return this._serializeFn;
    }
    set serializeFn(newValue: SessionNS.SerializeDeserializeFn) {
        this._serializeFn = newValue;
    }

    get deserializeFn(): SessionNS.SerializeDeserializeFn {
        return this._deserializeFn;
    }
    set deserializeFn(newValue: SessionNS.SerializeDeserializeFn) {
        this._deserializeFn = newValue;
    }

    get strategy(): SessionNS.IStrategy | SessionNS.IStrategy[] {
        return this._strategy;
    }
    set strategy(newValue: SessionNS.IStrategy | SessionNS.IStrategy[]) {
        this._strategy = newValue;
    }
}

// export let authPassport = passport.authenticate