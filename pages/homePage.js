class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToWikipedia() {
      await this.page.goto('https://en.wikipedia.org/wiki/Main_Page');
    }
  
    async search(query) {
      await this.page.type('#searchInput', query);
      await this.page.press('#searchInput', 'Enter');
    }

    async getElementTextByXPath(xpath) {
      const elementHandle = await this.page.$(xpath);
  
      if (!elementHandle) {
        throw new Error(`Element not found with XPath: ${xpath}`);
      }
  
      const textContent = await elementHandle.textContent();
      return textContent.trim();
    }
    
    async todaysFeaturedArticleExists (){
      await this.page.locator("#From_today's_featured_article")
    }
     
    async navigateToUkrainianPage(){
      await this.page.goto('https://uk.wikipedia.org/wiki/Main_Page');
   }
  }


    


  
  module.exports = HomePage;
  