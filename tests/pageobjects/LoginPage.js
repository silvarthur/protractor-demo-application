// var basePage = require("./BasePage");

// var LoginPage = function() {
//     const emailField = element(by.id("email-field"));
//     const passwordField = element(by.id("password-field"));
//     const loginButton = element(by.id("login-button"));

//     this.login = async function(email, password) {
//         await basePage.setField(emailField, email);
//         await basePage.setField(passwordField, password);
//         await basePage.clickOnButton(loginButton);
//     }
// }
// module.exports = new LoginPage();

const BasePage = require("./BasePage");

class LoginPage extends BasePage {
    constructor() {
        super();

        this._emailField = element(by.id("email-field"));
        this._passwordField = element(by.id("password-field"));
        this._loginButton = element(by.id("login-button"));
    }

    async login(email, password) {
        await this.setField(this._emailField, email);
        await this.setField(this._passwordField, password);
        await this.clickOnButton(this._loginButton);
    }
}
module.exports = LoginPage;