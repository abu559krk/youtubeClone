import React from 'react';
import Videocard from './Videocard';
import "../src/RecommendedVideos.css";
import thumbnail from "../src/assets/thumb.jpg";
function RecomendedVideos() {
  return (
    <div className='recommended-videos'>
      <h1>
      videos
      </h1>
      <div className='recommended-videos-cards'>
        <Videocard image={thumbnail} title="Become a Web Developer in 10 Minutes" channel="Sonny Sagha" channelImage = {thumbnail} Views= "2.3M Views" TimeStamp="3 Days Ago"/>
        <Videocard image={thumbnail} title="Become a Web Developer in 10 Minutes" channel="Sonny Sagha" channelImage = {thumbnail} Views= "2.3M Views" TimeStamp="3 Days Ago"/>
        <Videocard image={thumbnail} title="Become a Web Developer in 10 Minutes" channel="Sonny Sagha" channelImage = {thumbnail} Views= "2.3M Views" TimeStamp="3 Days Ago"/>
        <Videocard image={thumbnail} title="Become a Web Developer in 10 Minutes" channel="Sonny Sagha" channelImage = {thumbnail} Views= "2.3M Views" TimeStamp="3 Days Ago"/>
        <Videocard image={thumbnail} title="Become a Web Developer in 10 Minutes" channel="Sonny Sagha" channelImage = {thumbnail} Views= "2.3M Views" TimeStamp="3 Days Ago"/>
      </div>
    </div>
  )
}

export default RecomendedVideos