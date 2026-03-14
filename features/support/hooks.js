const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

Before(async function () {

    this.browser = await chromium.launch({ headless: false });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

});

After(async function () {

    if (this.browser) {
        await this.browser.close();
    }

});


After(async function (scenario) {

  if (scenario.result.status === "FAILED" && this.page) {

      await this.page.screenshot({
          path: `screenshots/${scenario.pickle.name}.png`
      });

  }

  if (this.browser) {
      await this.browser.close();
  }

});