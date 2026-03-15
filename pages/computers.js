const { Base } = require("./base");

class Computers extends Base {

    constructor(page){
        super(page);

        this.computerNav = page.locator(`a:has-text("Computers")`);
        this.desktopsOption = page.locator(`a:has-text("Desktops")`);
        this.notebookOption = page.locator(`a:has-text("Notebooks")`);
        this.accessoriesOption = page.locator(`a:has-text("Accessories")`);
    }


    async hoverComputersNavbar(){
        this.computerNav.hover();
    }

    async selectDesktopsAfterHover(){
        this.desktopsOption.click();
    }


    async selectNotebooksAfterHover(){
        this.notebookOption.click();
    }

    async selectAccessoriesAfterHover(){
        this.accessoriesOption.click();
    }


}