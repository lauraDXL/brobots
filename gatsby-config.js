module.exports = {
  siteMetadata: {
    title: 'BroBots',
    description: 'We are....',
    author: `@exampleuser`,
    siteUrl: `https://brobots.gatsbyjs.io/`
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/logo.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/translation`,
        // supported language
        languages: ['en', 'ro'],
        // language file path
        defaultLanguage: `ro`
        // option to redirect to `/en` when connecting `/`
        // redirect: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dosis`,
          `Lato \:100, 300, 400, 400i, 700`,
          `Montserrat \:100, 300, 400, 400i, 700`,
          `Roboto`,
          `Quicksand`,
          `Open Sans`
        ],
        display: 'swap'
      }
    }
  ]
};
