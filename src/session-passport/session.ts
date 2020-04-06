import * as session from "express-session"
import * as express from "express"
import { SessionNS } from "./types"

export class exSession {
    private _secret: string | string[];
    private _sessionFileStore: string;
    private _genidFn: (req: any) => string;

    constructor(opts: SessionNS.ISessionOptions) {
        this._secret = opts.secret;
        this._sessionFileStore = opts.store;
        this._genidFn = opts.genid;
    }

    /**
     * init
     */
    public init(): express.RequestHandler {
        let sessOpt:SessionNS.ISessionOptions = {
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
    }

    /**
     * Getter and Setter Methods
     */
    // get secret(): string | string[] {
    //     return this._secret;
    // }
    // set secret(newValue: string | string[]) {
    //     this._secret = newValue;
    // }

    // get sessionFileStore(): string {
    //     return this._sessionFileStore;
    // }
    // set sessionFileStore(newValue: string) {
    //     this._sessionFileStore = newValue;
    // }

    // get genidFn(): ((req: any) => string) {
    //     return this._genidFn;
    // }
    // set genidFn(newValue: ((req: any) => string)) {
    //     this._genidFn = newValue;
    // }
}
