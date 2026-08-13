import { test, chromium, expect } from '@playwright/test';

test('to validate the radio button functionality', async ({ }) => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator('.figure:nth-child(3)').hover();
    

});
