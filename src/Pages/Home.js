import React from 'react'
import './Pages.css'; 
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Home() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <div className='Subcontainer'>
          <h2>Welcome!</h2>
        </div>
        
    </div>    
    </>

  )
}

export default Home