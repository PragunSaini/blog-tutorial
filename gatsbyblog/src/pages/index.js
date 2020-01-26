import React from 'react'
import { Link, graphql } from 'gatsby'

// For styling
import '../styles/main.scss'

// Main component
const IndexPage = ({ data }) => {
  // Store all posts in an array
  const posts = data.allSanityPost.edges.map(post => post.node)

  // Render all posts
  const renderPosts = () => {
    return posts.map(post => <Post post={post} key={post.id} />)
  }

  return (
    <>
      <h1>Welcome to my blog !</h1>
      <div className="main">{renderPosts()}</div>
    </>
  )
}

// Component to render a single post
const Post = ({ post }) => {
  return (
    <Link to={`/${post.slug.current}`} className="post">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.description}</p>
    </Link>
  )
}

export default IndexPage

// Query the Sanity API for all posts
export const postsQuery = graphql`
  query {
    allSanityPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug {
            _key
            _type
            current
          }
          date(formatString: "DD MMMM YYYY")
          description
        }
      }
    }
  }
`
