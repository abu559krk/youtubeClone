import React from 'react'
import "../src/Sidebar.css";
import SideBarRow from './SideBarRow';
import { FiHome } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { CiCircleChevDown} from "react-icons/ci";
import { CiYoutube} from "react-icons/ci";
import { AiFillCloseSquare } from "react-icons/ai";
import { GrLike } from "react-icons/gr";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SideBarRow Icons={FiHome} title={"Home"}/>
      <SideBarRow Icons={FiArrowRightCircle} title={"Trending"}/>
      <SideBarRow Icons={FiDollarSign} title={"Subscription"}/>
      <hr/>
      <SideBarRow Icons={FiHome} title={"Library"}/>
      <SideBarRow Icons={AiFillCloseSquare} title={"History"}/>
      <SideBarRow Icons={CiYoutube} title={"Your Videos"}/>
      <SideBarRow Icons={FiDollarSign} title={"Watch Later"}/>
      <SideBarRow Icons={GrLike} title={"Liked Videos"}/>
      <SideBarRow Icons={CiCircleChevDown} title={"Show More"}/>
    </div>
  )
}

export default Sidebar