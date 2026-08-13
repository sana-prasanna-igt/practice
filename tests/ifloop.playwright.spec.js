const { test, expect } = require('@playwright/test');

test('ifloop passes when i > 50', async () => {
  const i = 51;
  const passed = i > 50;
  expect(passed).toBeTruthy();
});
