import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import RecomendedVideos from './RecomendedVideos';
import "../src/homepage.css";
function Navigation() {
  return (
    <div>
        <Fragment>
        <div className='app-page'>
        <Link to={"/"}>
        <Sidebar/>
       
            </Link>
            <Link to={"/"}>
                 <RecomendedVideos/>
            </Link>
        </div>
            
        </Fragment>
    </div>
  )
}

export default Navigation