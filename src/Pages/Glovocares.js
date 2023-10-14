import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Glovocares() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Glovo Cares</h2>
    </div>
    </>
  )
}

export default Glovocares