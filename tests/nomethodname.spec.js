const { chromium} = require('playwright');
(async () => 

{
const browser = await chromium.launch({headless:false});
const context = await browser.newContext()
const page = await context.newPage();

//to load the application url

await page.goto('https://playwright.dev/');
//to get the title of the page
const title = await page.title();
expect(title).title
console.log('title',title);

})();
