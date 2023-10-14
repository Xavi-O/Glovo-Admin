import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Cities() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Cities</h2>
    </div>
    </>
  )
}

export default Cities