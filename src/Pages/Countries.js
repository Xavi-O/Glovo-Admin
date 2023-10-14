import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Countries() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Countries</h2>
    </div>
    </>
  )
}

export default Countries