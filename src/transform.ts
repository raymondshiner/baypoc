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

    const prioritizeImage = (el: any, src: string = $(el).attr('src') || '') => {
      $(el).attr('loading', 'eager').attr('fetchpriority', 'high')
      if (src && src.length > 0 && src !== 'undefined') {
        preloadImage(src)
      }
      // el: Provide <img> element you want prioritized
      // src (optional): Image url. By default it uses <img> `src` attribute.
    }

    const preloadImage = (src: string) => {
      $('head').prepend(`<link rel="preload" class="l0-preload" as="image" href="${src}">`)
    }

    const preloadCss = (src: string) => {
      $('head').prepend(`<link rel="preload" class="l0-preload" as="style" href="${src}">`)
    }

    const preloadFont = (src: string) => {
      $('head').prepend(`<link rel="preload" class="l0-preload" as="font" href="${src}">`)
    }

    preloadCss('/on/demandware.static/Sites-TheBay-Site/-/en_CA/v1649831552895/css/global.css')

    // Home
    if (request.path == '/') {
      $('body').prepend('<a href="/c/women/womens-clothing"/>')
      prioritizeImage('.content-body.withinRight .content-image img')
    }

    // Lazy load all images and run through moovweb optimizer //
    $('img').each((i, el) => {
      $(el)
        .attr('loading', 'lazy')
        .attr('fetchpriority', 'low')
        .attr('src', `https://opt.moovweb.net?img=${el.attribs.src}`)
    })

    // uncomment this line to enable replacePersonalizedData
    // replacePersonalizedData($)

    response.body = $.html()
  }
}
