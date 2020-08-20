require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Sotnychenko Kateryna | Personal Portfolio',
    description: '',
    keywords: 'design, ui/ux',
    siteUrl: 'https://sotnychenko.com',
    author: {
      // name: 'Resi Respati',
      // url: 'https://twitter.com/resir014',
      // email: 'resir014@gmail.com'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_API_TOKEN,

        // The project environment to read from. Defaults to the primary environment:
        // environment: `master`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en']
        }
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://sotnychenko.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
