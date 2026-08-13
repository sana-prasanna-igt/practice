const { chromium, test, expect } = require('playwright/test');
test('Page Title Test', async (page) => {
  /*const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();*/

  //to load the application url
  await page.goto('https://playwright.dev/');
  //to get the title of the page
  const title = await page.title();
  expect(title).toBeTruthy();
  console.log('title', title);
});