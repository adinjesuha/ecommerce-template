const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `);

  const productsPerPage = 10
  const numPages = Math.ceil(data.allShopifyProduct.edges.length / productsPerPage)

  Array.from({length:numPages}).forEach((_, i)=>{
    createPage({
      path: i === 0 ? '/products' : `/products/${i + 1}`,
      component: path.resolve('./src/templates/ProductsTemplate/index.js'),
      context: {
        limit:productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      }
    });
  })

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js'),
    });
  });
};