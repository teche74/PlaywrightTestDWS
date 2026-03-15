const { Base } = require("./base");

class Books extends Base {

    constructor(page){
        super(page);

        this.sortBy = page.locator('#products-orderby');
        this.productsPerPageSize = page.locator('#products-pagesize');
        this.viewAs = page.locator('#products-viewmode');

        this.priceFilter = page.locator('.price-range-selector a');
    }

    async selectSortByNameAtoZ(){
        await this.sortBy.selectOption({ label: "Name: A to Z" });
    }

    async selectSortByNameZtoA(){
        await this.sortBy.selectOption({ label: "Name: Z to A" });
    }

    async selectSortByPosition(){
        await this.sortBy.selectOption({ label: "Position" });
    }

    async selectSortByPriceLowToHigh(){
        await this.sortBy.selectOption({ label: "Price: Low to High" });
    }

    async selectSortByPriceHighToLow(){
        await this.sortBy.selectOption({ label: "Price: High to Low" });
    }

    async selectSortByCreatedOn(){
        await this.sortBy.selectOption({ label: "Created on" });
    }

    async selectDisplay4ProductsPerPage(){
        await this.productsPerPageSize.selectOption({ label: "4" });
    }

    async selectDisplay8ProductsPerPage(){
        await this.productsPerPageSize.selectOption({ label: "8" });
    }

    async selectDisplay12ProductsPerPage(){
        await this.productsPerPageSize.selectOption({ label: "12" });
    }

    async selectPriceUnder25Filter(){
        await this.page.getByRole('link', { name: 'Under 25.00' }).click();
    }

    async selectPriceBetween25To50Filter(){
        await this.page.getByRole('link', { name: '25.00 - 50.00' }).click();
    }

    async selectPriceAbove50Filter(){
        await this.page.getByRole('link', { name: 'Over 50.00' }).click();
    }


    async countProductsDisplayed(){
        return  await this.page.locator(".item-box").count();
    }

    async getProductDisplayedAt(index){
        var totalCount = this.page.locator(".item-box").count();
        if(index > totalCount) return;
        await this.page.locator(".item-box").nth(index).click();
    }

    async getViewAsGrid(){
        await this.viewAs.selectOption({label : "Grid"});
    }

    async getViewAsList(){
        await this.viewAs.selectOptionI({label : "List"});
    }

    async openBooksPage(){
        await this.navigate("https://demowebshop.tricentis.com/books");
    }

}

module.exports = { Books };