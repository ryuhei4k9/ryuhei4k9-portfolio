import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = "https://api-apeast.graphcms.com/v1/cjqt57xvb2q7c01eqlmj2n8y7/master"

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})
