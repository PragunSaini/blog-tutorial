import React from 'react'
import { graphql } from 'gatsby'

// To render Portable text body
import BlockContent from '@sanity/block-content-to-react'

// Styles for posts
import '../styles/post.scss'

// Component to render image
import ImgBlock from '../components/ImageBlock'

// Component to render a post,
// Post data is received in props and destructured in post variable
const Post = ({ data: { post }, errors }) => {
  return (
    <div className="post">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">Date : {post.date}</p>
      <p className="post-auth">Author : {post.author}</p>
      <BlockContent
        className="post-body"
        blocks={post._rawBody}
        serializers={serializer}
      />
    </div>
  )
}

// Custom serializer
const serializer = {
  types: {
    image: ({ node }) => <ImgBlock node={node} />,
  },
}

export default Post

// Query a post by it's slug
export const query = graphql`
  query PostQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      description
      author
      date(formatString: "DD MMMM YYYY")
      _rawBody
    }
  }
`
