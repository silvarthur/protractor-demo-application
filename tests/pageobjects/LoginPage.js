var basePage = require("./BasePage");

var LoginPage = function() {
    const emailField = element(by.id("email-field"));
    const passwordField = element(by.id("password-field"));
    const loginButton = element(by.id("login-button"));

    this.login = async function(email, password) {
        await basePage.setField(emailField, email);
        await basePage.setField(passwordField, password);
        await basePage.clickOnButton(loginButton);
    }
}
module.exports = new LoginPage();

// const BasePage = require("./BasePage");

// class LoginPage extends BasePage {
//     constructor() {
//         super();

//         this._emailField = element(by.id("email-field"));
//         this._passwordField = element(by.id("password-field"));
//         this._loginButton = element(by.id("login-button"));
//     }

//     async login() {
//         await this.setField(this._emailField, "test@test.com");
//         await this.setField(this._passwordField, "12345678");
//         await this.clickOnButton(this._loginButton);

//         await browser.wait(ExpectedConditions.visibilityOf(element(by.id("logout-button"))));
//         expect(await element(by.id("logout-button")).getText()).toEqual("Login");
//     }
// }
// module.exports = LoginPage;