import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Promocodes() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Promo Codes</h2>
    </div>
    </>
  )
}

export default Promocodes