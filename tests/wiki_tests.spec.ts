const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/homePage");
const ArticlePage = require("../pages/articlePage");
const ToolsPage = require("../pages/toolsPage");
const HelpPage = require("../pages/helpPage");

test("Wikipedia Search and Navigation Test", async ({ page }) => {
  const homePage = new HomePage(page);
  const articlePage = new ArticlePage(page);

  // Navigate to Wikipedia
  await homePage.navigateToWikipedia();
  expect(page.url()).toBe("https://en.wikipedia.org/wiki/Main_Page");

  // Search for a term
  await homePage.search("Playwright");
  const articleTitle = await articlePage.getArticleTitle();
  console.log(articlePage);
  expect(articleTitle).toContain("Playwright");
});

test("Test if today's Featured Article is present", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToWikipedia();
  expect(page.url()).toBe("https://en.wikipedia.org/wiki/Main_Page");
  await homePage.navigateToWikipedia();
  await homePage.todaysFeaturedArticleExists();
});

test("Test if Tools drop down menu works", async ({ page }) => {
  const homePage = new HomePage(page);
  const toolsPage = new ToolsPage(page);

  // Navigate to Wikipedia
  await homePage.navigateToWikipedia();
  expect(page.url()).toBe("https://en.wikipedia.org/wiki/Main_Page");
  await toolsPage.clickOnMenu();
  const xpath = "//div[@id='p-tb']//div[@class='vector-menu-heading']";
  const textContent = await homePage.getElementTextByXPath(xpath);
  expect(textContent.trim()).toBe("General");
});

test("Test if pages in Ukrainian work", async ({ page }) => {
  const homePage = new HomePage(page);
  // Navigate to the Ukrainian page
  await homePage.navigateToUkrainianPage();
  // XPath selector to locate the specific element
  const xpath =
    "//div[@id='main-head-left']//span[@class='mw-headline' and contains(text(), 'Ласкаво просимо до')]";
  // Get text content of the element using the custom function
  const textContent = await homePage.getElementTextByXPath(xpath);
  // Assertion
  expect(textContent).toContain("Ласкаво просимо до");
});

test("Test if redirect works correctly for Help page", async ({ page }) => {
  const homePage = new HomePage(page);
  const helpPage = new HelpPage(page);

  // Navigate to Wikipedia homepage
  await homePage.navigateToWikipedia();

  // Navigate to Help page
  await helpPage.navigateToHelpPage();

  // Assertion
  expect(page.url()).toBe("https://en.wikipedia.org/wiki/Help:Contents");
});
