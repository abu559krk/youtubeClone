import React, { useState } from 'react';
import {BiAlignMiddle } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { ImUpload3 } from "react-icons/im";
import { HiBell } from "react-icons/hi2";
import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";
import Avatar from "@mui/material/Avatar";
import "../src/header.css";
import { Link } from 'react-router-dom';
function Header() {
  const [inputSearch, setinputSearch] = useState("");
  return (
    <div className='header'>
    <div className='header-left'>
    <BiAlignMiddle/>
    <Link to={"/"}>
    <img className='header-logo' src={logo} alt='img'/>
    </Link>
    </div>
    <div className='header-input'>
    <input value={inputSearch} onChange={e => setinputSearch(e.target.value)} type='text' placeholder='Search'/>
    <Link to={`/searchpage/${inputSearch}`}>
    <HiOutlineSearch className='header-searchIcon'/>
    </Link>
    </div>
   <div className='header-icons'>
   <ImUpload3 className='icon-one'/>
    <HiBell className='icon-two'/>
    <Avatar className='avatar-logo' src={avatar} alt='img'/>
   </div>
    </div>
  )
}

export default Header