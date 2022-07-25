import React from 'react'
import '../../index.css'
import ReactPlayer from "react-player";


const TutVideo = () => {
  return (
    <div className="grid grid-cols-3 gap-3 py-12 container mx-auto sm:grid-cols-1 sm:gap-12 xs:grid-cols-1 xs:gap-10 xxs:grid-cols-1 xxs:gap-10">
    <ReactPlayer
      width="auto"
      height="auto"
      controls
      url="https://www.youtube.com/watch?v=sQAR8_CXDfc"
    />
    <ReactPlayer
      width="auto"
      height="auto"
      controls
      url="https://www.youtube.com/watch?v=N0QqNGbpTK0"
    />
    <ReactPlayer
      width="auto"
      height="auto"
      controls
      url="https://www.youtube.com/watch?v=7WuFsnHzpUg"
    />
  </div>
  )
}

export default TutVideo