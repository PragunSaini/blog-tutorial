import React from 'react'

// Images with lazy-loading
import Img from 'gatsby-image'

// To convert Sanity image source to gatsby fluid image
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

// Sanity project config
const sanityConfig = { projectId: 't60wuf9c', dataset: 'production' }

const ImageBlock = ({ node }) => {
  const { asset } = node

  // Convert to a Fluid Gatsby image
  const fluidProps = getFluidGatsbyImage(
    asset._ref,
    { maxWidth: 1024, sizes: '(max-width: 560px) 100vw, 560px' },
    sanityConfig
  )

  // Render the image
  return (
    <div className="block-image">
      <Img fluid={fluidProps} />
    </div>
  )
}

export default ImageBlock
