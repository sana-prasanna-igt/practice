import { test, expect, chromium } from '@playwright/test';

test("element assertion", async ({}) => {

    const browser = await chromium.launch({Headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/", { waitUntil: 'domcontentloaded' });


    //locator we use it for xpath, css, text, role, search, id, attribute of the web element Property etc

   const docelem = await page.locator('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[2]');

//supose if you want to use text contentor message  you need to use this

const apiele = await page.locator('text=API').first();
// css selector
const complink = page.locator('a[href="/docs/api/class-playwright"]').first();



await expect(docelem).toBeVisible();
await expect(docelem).toHaveText('Docs');
await expect(docelem).toHaveAttribute('class', 'navbar__item navbar__link');

await expect(apiele).toBeVisible();
await expect(apiele).toHaveText('API');
await expect(apiele).toHaveAttribute('class', 'navbar__item navbar__link');

await expect(complink).toBeVisible();
})