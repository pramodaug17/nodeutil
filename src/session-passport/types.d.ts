import * as passport from "passport"
import { Application } from "express"

export declare namespace SessionNS {
    export interface IApplication extends Application {}
    
    export interface ISessionOptions {
        secret: string | string[];
        name?: string;
        store?: any;
        cookie?: {
        maxAge?: number;
        signed?: boolean;
        expires?: Date;
        httpOnly?: boolean;
        path?: string;
        domain?: string;
        secure?: boolean | 'auto';
        encode?: (val: string) => string;
        sameSite?: boolean | 'lax' | 'strict' | 'none';
        };
        genid?(req: any): string;
        rolling?: boolean;
        resave?: boolean;
        proxy?: boolean;
        saveUninitialized?: boolean;
        /**
         * Control the result of unsetting req.session (through delete, setting to null, etc.).
         * - 'destroy' The session will be destroyed (deleted) when the response ends.
         * - 'keep' The session in the store will be kept, but modifications made during the request are ignored and not saved.
         * @default 'keep'
         */
        unset?: 'destroy' | 'keep';
    }

    export type SerializeDeserializeFn = () => void;

    export interface IPassportOptions {
        serialize: SerializeDeserializeFn
        deserialize: SerializeDeserializeFn
        strategy: passport.Strategy
    }

    export interface IStrategy extends passport.Strategy {}
    export interface IAuthenticateOptions extends passport.AuthenticateOptions {}
}