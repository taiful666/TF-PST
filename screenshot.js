const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['Pixel 5']);
  const page = await context.newPage();
  await page.goto('http://localhost:8000/index.html');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot_mobile.png', fullPage: true });

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.setViewportSize({ width: 1280, height: 800 });
  await page2.goto('http://localhost:8000/index.html');
  await page2.waitForTimeout(1000);
  await page2.screenshot({ path: 'screenshot_desktop.png', fullPage: true });

  await browser.close();
})();
