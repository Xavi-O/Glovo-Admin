import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Content() {
  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <div className='Subcontainer'>
          <h2>Content</h2>
          <ul className='Firstrow'>
            <li><img alt='Create Store' src='icons/create store.svg'></img><p>Create Store</p></li>
            <li><img alt='Validate Prices' src='icons/validate prices.svg'></img></li>
            <li><img alt='Categories' src='icons/categories.svg'></img></li>
            <li><img alt='Filters' src='icons/filters.svg'></img></li>
            <li><img alt='Bulk Updates' src='icons/bulk updates.svg'></img></li>
            <li><img alt='Stores Calendar' src='icons/calendar.svg'></img></li>
          </ul>
          
        </div>
        
    </div>
    </>
  )
}

export default Content