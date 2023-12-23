class ArticlePage {
    static getArticleTitle() {
      throw new Error("Method not implemented.");
    }
    constructor(page) {
      this.page = page;
    }
  
    async getArticleTitle() {
      await this.page.waitForSelector('h1#firstHeading');
      const title = await this.page.$eval('h1#firstHeading', (el) => el.textContent);
      return title;
    }
  }
  
  module.exports = ArticlePage;
  