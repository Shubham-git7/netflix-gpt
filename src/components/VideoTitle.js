import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='mt-36 px-12'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-3/6 text-lg  mt-5'>{overview}</p>

      <div className='mt-3'> 
        <button className='  bg-gray-500 p-4 px-10 opacity-50 hover:opacity-100  text-white rounded-md'> ▶Play</button>
        <button className='bg-gray-500 p-4 px-10 opacity-50 mx-5 hover:opacity-100  text-white rounded-md'>More</button>
      </div>
    </div>
  )
}

export default VideoTitle
