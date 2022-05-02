import { RouteHandler } from '@layer0/core/router/Router'
import { CACHE_PAGES } from './cache'
import transform from './transform'

const modifyResponse = (response: any, request: any) => {
  response.body = response.body.replace(/https?:\/\/www.thebay.com\//gi, '/')
  transform(response, request)
}

const handler: RouteHandler = async ({
  cache,
  proxy,
  updateResponseHeader,
  setResponseHeader,
  removeUpstreamResponseHeader,
}) => {
  cache(CACHE_PAGES)
  removeUpstreamResponseHeader('set-cookie') // The presence of a set-cookie header would prevent the response from being cached, so ensure set-cookie headers are removed.
  setResponseHeader('cache-control', 'public, max-age=86400') // change the cache headers to be cachable

  // convert absolute redirects to origin to relative
  // so that the user isn't transferred to the origin.
  updateResponseHeader('location', /https?:\/\/www.thebay.com\//gi, '/')

  proxy('origin', { transformResponse: transform }) // inject browser.ts into the document returned from the origin
}

export default handler
