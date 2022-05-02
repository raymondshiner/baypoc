import { prefetch, Prefetcher } from '@layer0/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@layer0/prefetch/sw/DeepFetchPlugin'
import { clientsClaim, skipWaiting } from 'workbox-core'

skipWaiting()
clientsClaim()

new Prefetcher({
  plugins: [
    // Uncomment to enable
    new DeepFetchPlugin([
      {
        selector: 'img',
        maxMatches: 15,
        attribute: 'src',
        as: 'image',
        callback: deepFetchImages,
      },
    ]),
  ],
}).route()
// Specific domain caching based on a regex match
// .cache(/^https:\/\/assets-global\.website-files\.com\/.*/)

// Callback function image selector
// Customize as needed
function deepFetchImages({ $el }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('src')
  const width = '900'
  if (urlTemplate) {
    const url = urlTemplate.replace(/\{width\}/, width)
    prefetch(url, 'image')
  }
}
