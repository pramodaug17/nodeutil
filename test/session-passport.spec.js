let path = require("path")
let awesomepassport = require(path.resolve("./dist/")).session_passport;
function dummyfn(thees, req, options) {

}

let dummyapp = {
    use: (obj) => {
        return obj;
    }
}

let sessionStorage = {
    storage: {},
    setItem: function (field, value) {
        this.storage.field = value;
    },
    getItem: function (field) {
        return this.storage.field;
    },
    on: (str, fn) => {
        return this;
    }
}


describe("awesomepassport init function", () => {

    test("should be defined", () => {
        expect(awesomepassport.init).toBeDefined();
    });
    test("should be executed", () => {
        expect(awesomepassport.init(dummyapp, {
            serialize: () => {
                return;
            },
            deserialize: () => {},
            strategy: {
                name: "local",
                object: dummyfn
            }
        })).toBe(undefined);
    });
    test("should be executed with multiple array", () => {
        expect(awesomepassport.init(dummyapp, {
            secret: "Hi",
            store: sessionStorage,
            genid: (req) => { return "how are you?"; },
            serialize: () => {
                return;
            },
            deserialize: () => {},
            strategy: [{
                name: "local",
                object: dummyfn
            }]
        })).toBe(undefined);
    });
    test("should be executed without strategy", () => {
        expect(awesomepassport.init(dummyapp, {
            secret: "Hi",
            store: sessionStorage,
            genid: (req) => { return "how are you?"; },
            serialize: () => {
                return;
            },
            deserialize: () => {},
        })).toBe(undefined);
    });
})