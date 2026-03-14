const { Before, After } = require("@cucumber/cucumber")
const { chromium } = require("@playwright/test");
const config = require("../../config");

Before(async function() {
    this.browser = await chromium.launch({ headless: config.headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    await this.page.goto('https://demowebshop.tricentis.com/');
})

After(async function() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})


After(async function (scenario) {

    if (scenario.result.status === 'FAILED') {

        await this.page.screenshot({
            path: `screenshots/${scenario.pickle.name}.png`
        });

    }

    await this.browser.close();

});