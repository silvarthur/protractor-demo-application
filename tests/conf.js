exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",

    browserName: "chrome",
    directConnect: true,

    SELENIUM_PROMISE_MANAGER: false,

    suites: {
        loginPage: "./tests/login-page-spec.js"
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};