"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var awesomepassport = /** @class */ (function () {
    function awesomepassport(opts) {
        this._serializeFn = opts.serialize;
        this._deserializeFn = opts.deserialize;
        this._strategy = opts.strategy;
    }
    /**
     * init
     */
    awesomepassport.prototype.init = function () {
        /**
         * Check for passport pre-requisite
         */
        if (!this._strategy || !this._serializeFn || !this._deserializeFn) {
            return;
        }
        passport.use(this._strategy);
        passport.serializeUser(this._serializeFn);
        passport.deserializeUser(this._deserializeFn);
    };
    awesomepassport.prototype.self = function () {
        return passport.initialize();
    };
    awesomepassport.prototype.session = function () {
        return passport.session();
    };
    Object.defineProperty(awesomepassport.prototype, "serializeFn", {
        /**
         * Getter and Setter Methods
         */
        get: function () {
            return this._serializeFn;
        },
        set: function (newValue) {
            this._serializeFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(awesomepassport.prototype, "deserializeFn", {
        get: function () {
            return this._deserializeFn;
        },
        set: function (newValue) {
            this._deserializeFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(awesomepassport.prototype, "strategy", {
        get: function () {
            return this._strategy;
        },
        set: function (newValue) {
            this._strategy = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return awesomepassport;
}());
exports.awesomepassport = awesomepassport;
exports.authPassport = passport.authenticate;
