import React from 'react'
import { IMG_CDN_URl } from '../utils/constants'

const MoviCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img alt='movie card' src={IMG_CDN_URl + posterPath}></img>
    </div>
  )
}

export default MoviCard