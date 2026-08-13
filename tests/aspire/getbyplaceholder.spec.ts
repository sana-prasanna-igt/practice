import {test,chromium, expect} from '@playwright/test';

test('getbyplaceholder', async ({}) => {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.saucedemo.com/");


    //getbyplaceholder is used to get the element by placeholder attribute of the web element
     
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('//*[@id="login-button"]').click();


})