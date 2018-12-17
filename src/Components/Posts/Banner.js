import React from 'react'
import {string} from 'prop-types'

const Banner = ({src, alt}) => <img alt={alt || 'set picture alt' } src={src}/>

Banner.propTypes = {
  src: string.isRequired,
  alt: string,
}

export default Banner
