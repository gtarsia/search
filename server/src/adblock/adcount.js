import warmUp from './warmup'
import engine from './engine'

export default async function adcount(url) {
  const browser = await warmUp()

  const [page] = await browser.pages()

  let matches = 0
  const callback = (request) => {
    const type = request.resourceType()
    console.log(request.url())
    console.log(type)
    if (type && engine.check(request.url(), url, type)) {
      matches += 1
      console.log(matches)
    }
  }
  page.on('request', callback)

  await page.goto(url)
  page.removeListener('request', callback)
  return matches
  // const result = client.check("http://example.com/-advertisement-icon.", "http://example.com/helloworld", "image")

  // extPage.close()
  // return count
}
