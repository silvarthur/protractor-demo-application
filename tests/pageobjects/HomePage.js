// var HomePage = function() {
//     const header = element(by.id("header"));
//     const logoutButton = element(by.id("logout-button"));

//     this.getLogoutButton = function() {
//         return logoutButton;
//     }

//     this.logout = async function() {
//         await this.isElementVisible(logoutButton);
//         await this.clickOnButton(logoutButton);
//     }  
// }
// module.exports = new HomePage();

const BasePage = require("./BasePage")

class HomePage extends BasePage {
    constructor() {
        super();

        this._header = element(by.id("header"));
        this._logoutButton = element(by.id("logout-button"));
    }

    getLogoutButton() {
        return this._logoutButton;
    }

    async logout() {
        await this.clickOnButton(this._logoutButton);
    }
}
module.exports = HomePage;