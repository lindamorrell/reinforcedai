import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-blink-features=AutomationControlled'],
  defaultViewport: { width: 1440, height: 900 },
});
try {
  const page = await browser.newPage();
  await page.goto('https://example.com/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  const data = await page.evaluate(() => ({
    title: document.title,
    h1Color: getComputedStyle(document.querySelector('h1')).color,
    h1FontSize: getComputedStyle(document.querySelector('h1')).fontSize,
    bodyFont: getComputedStyle(document.body).fontFamily,
    bodyBg: getComputedStyle(document.body).backgroundColor,
  }));
  console.log(JSON.stringify(data, null, 2));
} finally {
  await browser.close();
}
