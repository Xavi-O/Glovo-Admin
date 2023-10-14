import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Ordersdashboard() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Orders Dashboard</h2>
    </div>
    </>
  )
}

export default Ordersdashboard