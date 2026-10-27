const { test, expect } = require('@playwright/test');

test('handles JavaScript alert, confirm, and prompt dialogs', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await Promise.all([
    page.waitForEvent('dialog').then(async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    }),
    page.getByRole('button', { name: 'Click for JS Alert' }).click()
  ]);
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  await Promise.all([
    page.waitForEvent('dialog').then(async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.accept();
    }),
    page.getByRole('button', { name: 'Click for JS Confirm' }).click()
  ]);
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');

  await Promise.all([
    page.waitForEvent('dialog').then(async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept('Playwright');
    }),
    page.getByRole('button', { name: 'Click for JS Prompt' }).click()
  ]);
  await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});
