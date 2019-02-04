var basePage = require("../pageobjects/BasePage");
var loginPage = require("../pageobjects/LoginPage");
var homePage = require("../pageobjects/HomePage");

describe("", function() {
    let EC = protractor.ExpectedConditions;

    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(15000)

    beforeEach(async function() {
        await browser.get("file:///home/local/CONDUCTOR/arthur.antunes/Documentos/projects/example_application/src/views/login_page.html");
        //await browser.get("../../src/views/login_page.html");
    });

    it("should login successfully", async function() {
        await loginPage.login("test@test.com", "12345678");
        await basePage.waitElementToBeClickable(homePage.getLogoutButton());

        expect(await homePage.getLogoutButton().getText()).toEqual("Logout");
    });

    it("should not login with blank fields", async function() {
        await loginPage.login("", "");
        expect(await basePage.getAlertText()).toEqual("Os campos de e-mail e senha devem estar preenchidos!");
    });
});