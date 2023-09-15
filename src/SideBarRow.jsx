import React from 'react'
import "../src/sidebarRow.css";
function SideBarRow({Icons,title}) {
  return (
    
    <div className='sidebarRow'>
        <Icons className='sidebarRow-icons'/>
        <h1 className='sidebarRow-title'>{title}</h1>
        
        </div>
        
  )
}

export default SideBarRow