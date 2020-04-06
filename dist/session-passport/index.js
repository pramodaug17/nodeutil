"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var passport_wrap_1 = require("./passport.wrap");
var AwSession = /** @class */ (function () {
    function AwSession() {
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
    AwSession.prototype.init = function (app, opts) {
        this._passport = new passport_wrap_1.awesomepassport(opts);
        this._exSession = new session_1.exSession(opts);
        this._passport.init();
        app.use(this._exSession.init());
        app.use(this._passport.self());
        app.use(this._passport.session());
    };
    AwSession.prototype.authenticate = function (strategy, option, cb) {
        return this._passport.authPassport(strategy, cb);
    };
    return AwSession;
}());
/**
 * Node js Singleton
 */
module.exports = new AwSession();
