// var BasePage = function() {
//     this.clickOnButton = async function(element) {
//         await this.waitElementToBeClickable(element);
//         await element.click();
//     }

//     this.setField = async function(element, input) {
//         await this.waitElementToBeVisible(element);
//         await element.sendKeys(input);
//     }

//     this.waitElementToBeClickable = async function(element) {
//         await browser.wait(ExpectedConditions.elementToBeClickable(element));
//     }

//     this.waitElementToBeVisible = async function(element) {
//         await browser.wait(ExpectedConditions.visibilityOf(element));
//     }

//     this.getAlertText = async function() {
//         await browser.wait(ExpectedConditions.alertIsPresent());

//         return await browser.switchTo().alert().getText();
//     }
// }
// module.exports = new BasePage();

class BasePage {
    constructor() {
        this.EC = protractor.ExpectedConditions;
    }

    async clickOnButton(element) {
        await this.waitElementToBeClickable(element);
        await element.click();
    }

    async setField(element, input) {
        await this.waitElementToBeVisible(element);
        await element.sendKeys(input);
    }

    async waitElementToBeClickable(element) {
        await browser.wait(this.EC.elementToBeClickable(element));
    }

    async waitElementToBeVisible(element) {
        await browser.wait(this.EC.visibilityOf(element));
    }

    async getAlertText() {
        await browser.wait(ExpectedConditions.alertIsPresent());

        return await browser.switchTo().alert().getText();
    }
}
module.exports = BasePage;