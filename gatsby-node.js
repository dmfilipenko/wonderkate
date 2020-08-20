const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              title
              url
              listOfImages {
                path
                url
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.forEach(({ node: { url } }) => {
        createPage({
          path: `${url}`,
          component: path.resolve(`./src/templates/page.tsx`),
          context: {
            url
          }
        })
      })

      // result.data.allDatoCmsWork.edges.forEach(({ node: work }) => {
      //   createPage({
      //     path: `works/${work.slug}`,
      //     component: path.resolve(`./src/templates/page.tsx`),
      //     context: {
      //       slug: work.slug
      //     }
      //   })
      // })
      resolve()
    })
  })
}
