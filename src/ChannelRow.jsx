import React from 'react';
import "../src/channelRow.css";
import Avatar from "@mui/material/Avatar";
import avatar from "../src/assets/avatar.png";
import { GoVerified } from "react-icons/go";
function ChannelRow({channel, verified, subsc, NoOfvideos, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow-logo' src={avatar} alt='imge'/>
        <h4>{channel} {verified && <GoVerified/>}</h4>
        <p>
            {subsc} subscribers && {NoOfvideos} videos
        </p>
        
        <p>
            {description}
        </p>
    </div>
  )
}

export default ChannelRow