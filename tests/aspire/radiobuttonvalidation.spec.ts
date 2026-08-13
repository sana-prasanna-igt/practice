import { test, expect } from '@playwright/test';

test('to validate the radio button functionality', async ({ page }) => {
  await page.goto('https://www.leafground.com/radio.xhtml');

  await page.waitForLoadState('domcontentloaded');

  // Verify default selected radio button in the second group
  const defaultSafari = page.locator('input[id="j_idt87:console2:2"]');
  await expect(defaultSafari).toBeChecked();

  // Select the first option in the favorite browser group by clicking the visible label
  const chromeLabel = page.locator('label[for="j_idt87:console1:0"]');
  await chromeLabel.click();
  const chromeRadio = page.locator('input[id="j_idt87:console1:0"]');
  await expect(chromeRadio).toBeChecked();

  // Select the age group only if not already selected
  const ageGroupInput = page.locator('input[id="j_idt87:age:0"]');
  if (!(await ageGroupInput.isChecked())) {
    await page.locator('label[for="j_idt87:age:0"]').click();
  }
  await expect(ageGroupInput).toBeChecked();
});