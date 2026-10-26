const { test, expect } = require('@playwright/test');

test('playwright.dev has Playwright in title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/i);
});
