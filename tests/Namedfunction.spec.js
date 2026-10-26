const { test, expect } = require('@playwright/test');
test('Page Title Test', async ({ page }) => {

  //to load the application url
  await page.goto('https://playwright.dev/');
  //to get the title of the page
  const title = await page.title();
  expect(title).toBeTruthy();
  console.log('title', title);
});