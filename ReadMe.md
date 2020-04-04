# server-util
![npm (custom registry)](https://img.shields.io/npm/v/@pramodaug17/server-util/latest?style=plastic)
![NPM](https://img.shields.io/npm/l/@pramodaug17/server-util)
![GitHub issues](https://img.shields.io/github/issues/pramodaug17/nodeutil)
![npm](https://img.shields.io/npm/dw/@pramodaug17/server-util)
---
server-util is a utility package which is [Express](https://www.expressjs.com) compatible. It has many useful utility that can minimize your code.   

## Install
```bash
npm i @pramodaug17/server-util
```

## Modules
### 1. session-passport
This is combination of [express session](https://www.npmjs.com/package/express-session) and [passport](http://passportjs.org).

#### 1.1 API
This module is to provide single entry point to both session and passport.

```javascript
var sessionPassport = require("@pramodaug17/server-util").session_passport;

sessionPassport.init(app, {
    genid: (req) => {
        return "some uuid";
    },
    serialize: function_same_as_passport_serialize() {},
    deserialize: function_same_as_passport_deserialize() {},
    strategyname: "local",
    startegyobj: new YourStrategy()
})
```   

Authorize request same as passport
```javascript
app.get("/", sessionPassport.authenticate("local", { failureRedirect: "/login"},
    (req, res) => {
        res.redirect("/");
    }
))
```
