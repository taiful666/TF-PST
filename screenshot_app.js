const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['Pixel 5']);
  const page = await context.newPage();
  await page.goto('http://localhost:8000/index.html');
  await page.waitForTimeout(2000);

  // Click on "Choose photo" or "Try a sample" to see the next screen
  await page.click('#btnSample');
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'screenshot_mobile_step1.png', fullPage: true });

  await browser.close();
})();
