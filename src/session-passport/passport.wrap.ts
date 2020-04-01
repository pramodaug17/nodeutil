import * as passport from "passport"
import { SessionNS } from "./types";

export class awesomepassport {
    private _serializeFn: SessionNS.SerializeDeserializeFn;
    private _deserializeFn: SessionNS.SerializeDeserializeFn;
    private _strategy: passport.Strategy;

    constructor(opts: SessionNS.IPassportOptions) {
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

    get strategy(): passport.Strategy {
        return this._strategy;
    }
    set strategy(newValue: passport.Strategy) {
        this._strategy = newValue;
    }
}

export let authPassport = passport.authenticate