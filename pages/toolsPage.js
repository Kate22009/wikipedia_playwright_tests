class ToolsPage {
    constructor (page){
        this.page = page
    }

    async clickOnMenu () {
        await this.page.locator('#vector-page-tools-dropdown-checkbox').click();

    }

}

module.exports = ToolsPage