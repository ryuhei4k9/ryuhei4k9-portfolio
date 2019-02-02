const pkg = require('./package')
const { createApolloFetch } = require('apollo-fetch')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/date_fns'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  generate: {
    routes () {
      const uri = 'https://api-apeast.graphcms.com/v1/cjqt57xvb2q7c01eqlmj2n8y7/master'
      const apolloFetch = createApolloFetch({ uri })
      const query = `
      query {
        posts(orderBy: createdAt_DESC, where: { status: PUBLISHED }) {
          id
          title
          content
          createdAt
          slug
          thumbnail {
            url
          }
        }
      }
      `
      return apolloFetch({ query }) // all apolloFetch arguments are optional 
        .then(result => {
          const { data } = result
          return data.posts.map(post => {
            return {
              route: `/blog/${post.slug}`,
              payload: post
            }
          })
        })
        .catch(error => {
          console.log('got error')
          console.log(error)
        })
    }
  },
  
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },

  markdownit: {
    injected: true
  }
}
