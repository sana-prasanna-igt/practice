module.exports = {
  testDir: 'tests',
  timeout: 30000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 200
    }
  }
};
