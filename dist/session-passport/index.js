"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var passport_wrap_1 = require("./passport.wrap");
var AwSession = /** @class */ (function () {
    function AwSession(opts) {
        this._passport = new passport_wrap_1.awesomepassport(opts);
        this._exSession = new session_1.exSession(opts);
    }
    Object.defineProperty(AwSession.prototype, "secret", {
        /**
         * Getter and Setter Method
         */
        set: function (newValue) {
            this._exSession.secret = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "sessionFileStore", {
        set: function (newValue) {
            this._exSession.sessionFileStore = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "genidFn", {
        set: function (newValue) {
            this._exSession.genidFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "serializeFn", {
        set: function (newValue) {
            this._passport.serializeFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "deserializeFn", {
        set: function (newValue) {
            this._passport.deserializeFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "strategy", {
        set: function (newValue) {
            this._passport.strategy = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AwSession.prototype, "passport", {
        get: function () {
            return this._passport;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * name
     */
    AwSession.prototype.init = function (app) {
        this._passport.init();
        app.use(this._exSession.init());
        app.use(this._passport.self());
        app.use(this._passport.session());
    };
    AwSession.authenticate = function (strategy, option, cb) {
        return passport_wrap_1.authPassport(strategy, option, cb);
    };
    return AwSession;
}());
/**
 * Node js Singleton
 */
module.exports = new AwSession();
/**
 * Other Node module exports
 */
module.exports.authenticate = AwSession.authenticate;
