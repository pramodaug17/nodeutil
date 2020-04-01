import { exSession } from "./session"
import { SessionNS } from "./session/types" 
import { awesomepassport } from "./passport"
import { PassportNS } from "./passport/types";
import { Application } from "express"

import * as passport from "passport"

declare namespace awesomesessionNS {
    interface awesomesessionOptions extends SessionNS.ISessionOptions, PassportNS.IPassportOptions {}
}

class AwSession {
    private _passport: awesomepassport;
    private _exSession: exSession;

    constructor(opts?: awesomesessionNS.awesomesessionOptions) {
        this._passport = new awesomepassport(opts);
        this._exSession = new exSession(opts);
    }

    /**
     * Getter and Setter Method
     */
    set secret(newValue: string | string[]) {
        this._exSession.secret = newValue;
    }

    set sessionFileStore(newValue: string) {
        this._exSession.sessionFileStore = newValue;
    }

    set genidFn(newValue: ((req: any) => string)) {
        this._exSession.genidFn = newValue;
    }

    set serializeFn(newValue: PassportNS.SerializeDeserializeFn) {
        this._passport.serializeFn = newValue;
    }

    set deserializeFn(newValue: PassportNS.SerializeDeserializeFn) {
        this._passport.deserializeFn = newValue;
    }

    set strategy(newValue: passport.Strategy) {
        this._passport.strategy = newValue;
    }

    get passport(): awesomepassport {
        return this._passport;
    }

    /**
     * name
     */
    public init(app: Application) {
        this._passport.init();
        app.use(this._exSession.init());
        app.use(this._passport.self());
        app.use(this._passport.session());
    }

    public static authenticate(strategy:string | string[], option:passport.AuthenticateOptions,  cb?:any) {
        return passport.authenticate(strategy, option, cb)
    }
}

/**
 * Node js Singleton
 */
module.exports = new AwSession()

/**
 * Other Node module exports
 */
module.exports.authenticate = AwSession.authenticate;