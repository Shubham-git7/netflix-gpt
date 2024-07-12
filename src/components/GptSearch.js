import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <img
          src={BG_URL}
          alt="Background"
          className="w-full h-full absolute -z-50 "
        />
        <GptSearchBar />
    </div>
  )
}

export default GptSearch