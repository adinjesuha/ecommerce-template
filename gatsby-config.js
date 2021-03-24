require('dotenv').config({
  path: `.env`,
})

const manifest = {}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://shopify-template.netlify.app/',
    title: `Pet's Club`,
    description: `Alimento Premium para tu mascota`,
    author: `@adinjesuha`,
    gatsbyStorefrontConfig: {
      storeName: `Pet's Club`,
      storeDescription: 'Alimento Premium para tu mascota',
      email: 'ventas@petsclubhn.com',
      logoUrl: 'https://cdn.shopify.com/s/files/1/0495/5111/4394/files/petsclub-logo.png?v=1616179325',
      company: `Pet's Club Honduras`,
      about: `Somos la tienda para mascotas online 100% hondureña. Compra alimento para mascotas, juguetes, anti pulgas y más.`,
      location: 'Tegucigalpa, Honduras',
      phone: '+504 9676-1154',
      socialNetworks: [
        'https://facebook.com/petsclubHonduras',
        'https://instagram.com/petsclub_store',
      ],
      payments: [],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [],
      // 
      // googleAnalyticsId: 'UA-141525658-3',
      //
      // Main page types: "carousel", "collection", "product"
      //
      mainPage: [],
      // Menu types: "header", "collection", "product", "link"
      menu: [
        {
          name: 'Perros',
          link: null,
          subMenu: [
            {
              name: 'Alimento',
              links: [
                {
                  name: 'Alimento Seco',
                  link: '/alimento-seco-para-perro'
                },
                {
                  name: 'Alimento Humedo',
                  link: '/alimento-humedo-para-perro'
                },
                {
                  name: 'Alimento Medicado',
                  link: '/alimento-medicado-para-perro'
                },
                {
                  name: 'Libre de Granos',
                  link: '/alimento-libre-de-granos-para-perro'
                },
                {
                  name: 'Treats',
                  link: '/treats-para-perro'
                },
              ]
            },
            {
              name: 'Higiene y Olor',
              links: [
                {
                  name: 'Shampoo y Jabón',
                  link: '/shampoo-y-jabon'
                },
                {
                  name: 'Perfumes',
                  link: '/shampoo-y-jabon'
                },
                {
                  name: 'Estética',
                  link: '/estetica'
                },
              ],
            },
            {
              name: 'Accesorios',
              links: [
                {
                  name: 'Juguetes',
                  link: '/juguetes-para-perros'
                },
                {
                  name: 'Camas y Tapetes',
                  link: '/camas-y-tapetes-para-perros'
                },
                {
                  name: 'Platos y Bebederos',
                  link: '/platos-y-bebederos-para-perros'
                },
              ],
            },
            {
              name: 'Farmacia',
              links: [
                {
                  name: 'Antipulgas',
                  link: '/antipulgas'
                },
                {
                  name: 'Antibióticos',
                  link: '/antibioticos'
                },
                {
                  name: 'Desparasitantes',
                  link: '/desparasitantes'
                },
                {
                  name: 'Suplementos',
                  link: '/suplementos'
                },
              ],
            },
            {
              name: 'Destacado',
              links: [
                {
                  name: 'Alimento Libre de Granos',
                  link: '/alimento-libre-de-granos'
                },
              ],
            },
          ]
        },  
        {
          name: 'Gatos',
          link: null,
          subMenu: [
            {
              name: 'Alimento',
              links: [
                {
                  name: 'Alimento Seco',
                  link: '/alimento-seco-para-gato'
                },
                {
                  name: 'Alimento Humedo',
                  link: '/alimento-humedo-para-gato'
                },
                {
                  name: 'Alimento Medicado',
                  link: '/alimento-medicado-para-gato'
                },
                {
                  name: 'Treats',
                  link: '/treats-para-gato'
                },
              ]
            },
            {
              name: 'Higiene',
              links: [
                {
                  name: 'Arena y Areneros',
                  link: '/arena-y-areneros'
                },
                {
                  name: 'Limpiza',
                  link: '/limpieza-para-hogar-gatos'
                },
                {
                  name: 'Grooming y Estética',
                  link: '/estetica-para-gatos'
                },
              ]
            },
            {
              name: 'Accesorios',
              links: [
                {
                  name: 'Rascadores y Juguetes',
                  link: '/juguetes-para-gatos'
                },
                {
                  name: 'Platos y Bebederos',
                  link: '/platos-y-bebederos-para-gatos'
                },
              ],
            },
            {
              name: 'Destacado',
              links: [
                {
                  name: 'Royal Canin',
                  link: '/royal-canin'
                },
              ],
            },
          ]
        },
        {
          name: 'Promociones',
          link: '/promociones',
          subMenu: []
        }
      ],
      footerLinks: [
        {
          name: 'Terminos del servicio',
          link: '/policy/termsOfService',
        },
        {
          name: 'Política de privacidad',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Reembolsos',
          link: '/policy/refundPolicy',
        },
      ],
      locales: 'es-HN',
      currency: 'LPS',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_STORE_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: manifest.hasOwnProperty('name')
          ? manifest.name
          : 'Gatsby Storefront',
        short_name: manifest.hasOwnProperty('short_name')
          ? manifest.short_name
          : 'Gatsby Storefront',
        start_url: manifest.hasOwnProperty('start_url')
          ? manifest.start_url
          : '/',
        background_color: manifest.hasOwnProperty('background_color')
          ? manifest.background_color
          : '#fff',
        theme_color: manifest.hasOwnProperty('theme_color')
          ? manifest.theme_color
          : '#f08484',
        display: manifest.hasOwnProperty('display')
          ? manifest.display
          : 'standalone',
        icon: manifest.hasOwnProperty('icon') 
          ? manifest.icon 
          : `src/images/icon.png`,
        icon_options: manifest.hasOwnProperty('icon_options')
          ? manifest.icon_options
          : undefined,
        cache_busting_mode: manifest.hasOwnProperty('cache_busting_mode')
          ? manifest.cache_busting_mode
          : 'none',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
