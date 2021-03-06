module.exports = {
  siteMetadata: {
    title: 'Nick Meincken',
    subtitle: 'Front End Developer',
    description:
      'Welcome to the online profile of Nick Meincken, full stack, front end developer. I specialise in reusable UI component libraries and front end styleguides for rapid development.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro\:200,400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/img/favicon-32x32.png`,
        name: `Nick Meincken`,
        short_name: `nickmeincken`,
        start_url: `/`,
        background_color: `#e1e1e1`,
        theme_color: `#a9cc17`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        allPages: false,
        paths: ['/resume/'],
        outputPath: `/public/exports`,
        filePrefix: `nick-meincken-`,
        pdfOptions: {
          format: 'a4',
          margin: {
            top: '50px',
            right: '50px',
            left: '50px',
          },
        },
        styleTagOptions: {
          url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;900&display=swap'
        },
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
