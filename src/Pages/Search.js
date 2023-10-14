import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Search() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <h2>Search</h2>
    </div>
    </>
  )
}

export default Search