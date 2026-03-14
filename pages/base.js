class Base{
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }

    async click(locator){
        await locator.click();
    }

    async sendValue(locator , value){
        await locator.fill(value)
    }

    async getText(locator){
        return await locator.textContent()
    }

    async waitForElement(locator){
        await locator.waitFor();
    }

    async screenshot(name){
        await this.page.screenshot({path : `screenshots/${name}.png`});
    }
}

module.exports = {Base};