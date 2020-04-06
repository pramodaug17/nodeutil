import { exSession } from "./session"
import { SessionNS } from "./types" 
import { awesomepassport } from "./passport.wrap"


declare namespace awesomesessionNS {
    interface awesomesessionOptions extends SessionNS.ISessionOptions, SessionNS.IPassportOptions {}
}

class AwSession {
    private _passport: awesomepassport;
    private _exSession: exSession;

    constructor() {
    }

    /**
     * Getter and Setter Method
     */
    // set secret(newValue: string | string[]) {
    //     this._exSession.secret = newValue;
    // }

    // set sessionFileStore(newValue: string) {
    //     this._exSession.sessionFileStore = newValue;
    // }

    // set genidFn(newValue: ((req: any) => string)) {
    //     this._exSession.genidFn = newValue;
    // }

    // set serializeFn(newValue: SessionNS.SerializeDeserializeFn) {
    //     this._passport.serializeFn = newValue;
    // }

    // set deserializeFn(newValue: SessionNS.SerializeDeserializeFn) {
    //     this._passport.deserializeFn = newValue;
    // }

    // set strategy(newValue: SessionNS.IStrategy) {
    //     this._passport.strategy = newValue;
    // }

    // get passport(): awesomepassport {
    //     return this._passport;
    // }

    /**
     * name
     */
    public init(app: SessionNS.IApplication, opts?: awesomesessionNS.awesomesessionOptions) {
        this._passport = new awesomepassport(opts);
        this._exSession = new exSession(opts);

        this._passport.init();
        app.use(this._exSession.init());
        app.use(this._passport.self());
        app.use(this._passport.session());
    }

    public authenticate(strategy:string | string[], option:SessionNS.IAuthenticateOptions,  cb?:any) {
        return this._passport.authPassport(strategy, cb)
    }
}

/**
 * Node js Singleton
 */
module.exports = new AwSession()
