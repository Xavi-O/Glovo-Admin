import React from 'react'
import './Sidebar.css';
import { useState } from "react";
import { MenuData, SidebarData } from "./SidebarData";


function Sidebar() {
  const [show, toggleShow] = useState(false)
  return (
    <div className='Sidebar'>
            {MenuData.map((val, key) => {
            return (
            <nav key={key} onClick={()=>toggleShow(!show)} className='Menu'>{val.menu}{show}</nav>
            )
            })}
        <ul className='Sidenav'>{SidebarData.map((val, key) => {
            return (
            <li key={key} 
            title={val.title}
            className='Navitem'
            id={window.location.pathname === val.link ? "active" : ""} 
            onClick={()=>window.location.pathname = val.link}>
                <div className='Icon'>{val.icon}</div>{""}
                <div className='Title'>{show && "\xa0\xa0" + val.title}</div>
            </li>
            )
            })}
        </ul>
    </div>
  )
}

export default Sidebar