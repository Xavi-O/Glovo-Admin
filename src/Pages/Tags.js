import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Tags() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Tags</h2>
    </div>
    </>
  )
}

export default Tags