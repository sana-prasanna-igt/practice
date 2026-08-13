module.exports = {
  testDir: 'tests',
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 200
    }
  }
};
