class HelpPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToHelpPage() {
        await this.page.locator("//input[@id='vector-main-menu-dropdown-checkbox']").click();
        await this.page.locator('//a[@href="/wiki/Help:Contents"]').click();
    }

}

module.exports = HelpPage