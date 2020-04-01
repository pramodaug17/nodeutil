import * as passport from "passport"
import { PassportNS } from "./types";

export class awesomepassport {
    private _serializeFn: PassportNS.SerializeDeserializeFn;
    private _deserializeFn: PassportNS.SerializeDeserializeFn;
    private _strategy: passport.Strategy;

    constructor(opts: PassportNS.IPassportOptions) {
        this._serializeFn = opts.serialize;
        this._deserializeFn = opts.deserialize;
        this._strategy = opts.strategy
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

        passport.use(this._strategy);
        passport.serializeUser(this._serializeFn);
        passport.deserializeUser(this._deserializeFn);
    }

    public self() {
        return passport.initialize();
    }

    public session() {
        return passport.session();
    }

    /**
     * Getter and Setter Methods
     */
    get serializeFn(): PassportNS.SerializeDeserializeFn {
        return this._serializeFn;
    }
    set serializeFn(newValue: PassportNS.SerializeDeserializeFn) {
        this._serializeFn = newValue;
    }

    get deserializeFn(): PassportNS.SerializeDeserializeFn {
        return this._deserializeFn;
    }
    set deserializeFn(newValue: PassportNS.SerializeDeserializeFn) {
        this._deserializeFn = newValue;
    }

    get strategy(): passport.Strategy {
        return this._strategy;
    }
    set strategy(newValue: passport.Strategy) {
        this._strategy = newValue;
    }
}
