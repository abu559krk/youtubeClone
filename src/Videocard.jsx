import React from 'react'
import Avatar from "@mui/material/Avatar";
import "../src/videocard.css";
function Videocard({image, title, channel, Views, channelImage,TimeStamp}) {
  return (
    <div className='videoCard'>
       <img className='thumnailImage' src={image} alt="img" />
       <div className='video-infor'>
        <Avatar className= "videoCard-avatar" alt={channel} src={channelImage}/>
        <div className='video-Text'>
            <h4>
                {title}
               
            </h4>
            
            <p>{channel}</p>
            <p>{Views} ? {TimeStamp}</p>
        </div>
       </div>
    </div>
  )
}

export default Videocard