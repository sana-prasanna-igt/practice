import { expect, test } from '@playwright/test';

test('Role by implementation', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/', { waitUntil: 'domcontentloaded' });

// getByRole is used to get the element by role attribute of the web element 
  const searchBox = page.getByRole('searchbox');
  await searchBox.waitFor({ state: 'visible', timeout: 15000 });
  //below line is used to fill the search box with the text "Playwright"
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/wiki\/Playwright/i);

});

