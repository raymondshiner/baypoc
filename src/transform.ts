import Request from '@layer0/core/router/Request'
import Response from '@layer0/core/router/Response'
import { injectBrowserScript } from '@layer0/starter'
import cheerio from 'cheerio'
// uncomment this line to enable replacePersonalizedData
// import replacePersonalizedData from './utils/replacePersonalisedData'

export default function transform(response: Response, request: Request) {
  // inject browser.ts into the document returned from the origin
  injectBrowserScript(response)

  if (response.body) {
    const $ = cheerio.load(response.body)

    // This script is added using server side transformation just for Proof of Concept purposes.
    // For production this script should be included in original website base code.
    // However it can work here as well
    $('head').append(`
      <script src="/main.js" defer="defer"></script>
    `)

    // uncomment this line to enable replacePersonalizedData
    // replacePersonalizedData($)

    response.body = $.html()
  }
}
