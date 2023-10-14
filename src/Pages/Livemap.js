import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'


function Livemap() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Live Map</h2>
    </div>
    </>
  )
}

export default Livemap