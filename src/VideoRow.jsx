import React from 'react'
import "../src/videorow.css";
function VideoRow({views, 
    subsc, 
    description, 
    timestamp, 
    channel, 
    title, 
    image}) {
  return (
    <div className='videorow'>
        <img src={image} alt='imag'/>
        <div className='videorow-text'>
            <h3>{title}</h3>
            <p className='videoRow-headlines'>
                {channel} && <span className='video-row-subsc'> <span className='videorow-subscribers'>{subsc} </span> </span>subscribers && {views} views && {timestamp}
            </p>
            <p className='videorow-description'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default VideoRow