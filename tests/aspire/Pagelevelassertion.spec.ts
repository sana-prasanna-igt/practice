import {test, expect,chromium} from '@playwright/test';

test('page assertion', async ({}) => {


// below code is used to launch the browser and open a new page
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

// below code is used to navigate to the playwright website
    await page.goto("https://playwright.dev/");


    // below code is used to assert the title and url of the page
    await expect(page).toHaveTitle(" Fast and reliable end-to-end testing for modern web apps | Playwright");
    await expect(page).toHaveURL("https://playwright.dev/");

})