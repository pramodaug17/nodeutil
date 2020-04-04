let path = require("path")
let awesomepassport = require(path.resolve("./dist/session-passport/passport.wrap"));
function dummyfn(thees, req, options) {

}

describe("awesomepassport init function return value", () => {
    it("should be defined", () => {
        const awpassport = new awesomepassport.awesomepassport({
            serialize: () => {
                return;
            },
            deserialize: () => {},
            strategy: {
                authenticate: dummyfn
            }
        });

        expect(awpassport.init).toBeDefined("It is defined");
    });
    it("should be executed", () => {
        const awpassport = new awesomepassport.awesomepassport({
            serialize: () => {
                return;
            },
            deserialize: () => {},
            strategy: {
                name: "local",
                object: dummyfn
            }
        });

        expect(awpassport.init());
    });
    it("should be executed with multiple array", () => {
        const awpassport = new awesomepassport.awesomepassport({
            serialize: () => {
                return;
            },
            deserialize: () => {},
            strategy: [{
                name: "local",
                object: dummyfn
            }]
        });

        expect(awpassport.init());
    });
})