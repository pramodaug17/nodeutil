"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session = require("express-session");
var exSession = /** @class */ (function () {
    function exSession(opts) {
        this._secret = opts.secret;
        this._sessionFileStore = opts.store;
        this._genidFn = opts.genid;
    }
    /**
     * init
     */
    exSession.prototype.init = function () {
        var sessOpt = {
            secret: "keyboard cat"
        };
        if (this._secret) {
            sessOpt["secret"] = this._secret;
        }
        if (this._sessionFileStore) {
            sessOpt["store"] = this._sessionFileStore;
        }
        if (this._genidFn) {
            sessOpt["genid"] = this._genidFn;
        }
        return session(sessOpt);
    };
    Object.defineProperty(exSession.prototype, "secret", {
        /**
         * Getter and Setter Methods
         */
        get: function () {
            return this._secret;
        },
        set: function (newValue) {
            this._secret = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(exSession.prototype, "sessionFileStore", {
        get: function () {
            return this._sessionFileStore;
        },
        set: function (newValue) {
            this._sessionFileStore = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(exSession.prototype, "genidFn", {
        get: function () {
            return this._genidFn;
        },
        set: function (newValue) {
            this._genidFn = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return exSession;
}());
exports.exSession = exSession;
