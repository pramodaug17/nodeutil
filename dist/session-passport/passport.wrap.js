"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var util_1 = require("util");
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
        if (util_1.isArray(this._strategy)) {
            for (var index in this._strategy) {
                var element = this._strategy[index];
                passport.use(element.name, element.object);
            }
        }
        else {
            passport.use(this._strategy.name, this._strategy.object);
        }
        passport.serializeUser(this._serializeFn);
        passport.deserializeUser(this._deserializeFn);
    };
    awesomepassport.prototype.self = function () {
        return passport.initialize();
    };
    awesomepassport.prototype.session = function () {
        return passport.session();
    };
    awesomepassport.prototype.authPassport = function (strategy, opts, cb) {
        return passport.authenticate(strategy, opts, cb);
    };
    return awesomepassport;
}());
exports.awesomepassport = awesomepassport;
// export let authPassport = passport.authenticate
