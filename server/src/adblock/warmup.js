import puppeteer from 'puppeteer'

let browser = null

export default async function warmUp() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: true, // extension are allowed only in head-full mode
    })
    const [page] = await browser.pages()
    await page.goto('http://www.reddit.com')
  }
  return browser
}
