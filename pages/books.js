import {Base} from "./base"

class Books extends Base{
    constructor(page){
        super(page);

        this.sortBy = page.locator('#products-orderby');
        this.productsPerPageSize = page.locator('#products-pagesize');
        this.viewAs = page.locator('#products-viewmode');

        this.filterPriceOption = page.locator('.filter-content');
        this.productGrid = page.locator('.product-grid');
    }

    async SortByNameAtoZ(){
        
    }

    async SortByNameZtoA(){
        
    }
}