const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { Login } = require("../../pages/login");

let login;

Given('user is on Demo Web Shop Login Page', async function () {

    login = new Login(this.page);

    await login.openLoginPage();

});

When('user enter valid email as {string} and password as {string}', async function (userEmail, userPassword) {

    await login.fillEmail(userEmail);
    await login.fillPass(userPassword);

});

When('select Remember me', async function () {

    await login.clickRememberMe();

});

When('clicks on Log in button', async function () {

    await login.clickLogin();

});

Then('user gets on home page and asserts his email {string} as accountname', async function (userEmail) {

    await expect(this.page.getByRole('link', { name: userEmail })).toBeVisible();

});