import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-gradient-to-r from-black px-12 text-white" style={{ zIndex: 2 }}>
      <div className="mt-15 ml-10">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="w-3/6 text-lg mt-5">{overview}</p>
        <div className="mt-3"> 
          <button className="bg-gray-300 p-4 px-10 text-black hover:animate-pulse rounded-md"> 🍿 Play</button>
          <button className="bg-gray-800 p-4 px-10 mx-5 hover:animate-pulse text-white rounded-md">! More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
