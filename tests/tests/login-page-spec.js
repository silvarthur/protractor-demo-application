var path = require("path");
var basePage = require("../pageobjects/BasePage");
var loginPage = require("../pageobjects/LoginPage");
var homePage = require("../pageobjects/HomePage");

describe("", function() {
    let EC = protractor.ExpectedConditions;

    let pathToTheLoginPageFile = "../../../src/views/login_page.html",
        absolutePathToTheLoginFile = path.resolve(__dirname + pathToTheLoginPageFile);

    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(15000)

    beforeEach(async function() {
        await browser.get("file://" + absolutePathToTheLoginFile);
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