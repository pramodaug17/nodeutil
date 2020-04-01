import * as passport from "passport"
export declare namespace PassportNS {
    export type SerializeDeserializeFn = () => void;

    export interface IPassportOptions {
        serialize: SerializeDeserializeFn
        deserialize: SerializeDeserializeFn
        strategy: passport.Strategy
    }
}