import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Subscriptions() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Subscriptions</h2>
    </div>
    </>
  )
}

export default Subscriptions