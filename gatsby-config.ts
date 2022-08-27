import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'PianoBike',
    siteUrl: 'https://www.pianobike.org',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PianoBike',
        short_name: 'PianoBikeLogo',
        start_url: '/',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/logos/Black_Transparent_1900x1900.png',
      },
    },
  ],
}

export default config
