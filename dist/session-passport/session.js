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
    return exSession;
}());
exports.exSession = exSession;
