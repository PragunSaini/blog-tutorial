// gatsby-node.js

//  Code to generate pages from posts fetched from Sanity
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Fetch the data
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const posts = result.data.allSanityPost.edges || []

  // Render each post using template file from /src/templates/post.js
  // and at the url /{slug}
  posts.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: { slug: edge.node.slug.current },
    })
  })
}
