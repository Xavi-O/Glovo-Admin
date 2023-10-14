import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Billinginvoicing() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Billing & invoicing</h2>
    </div>
    </>
  )
}

export default Billinginvoicing