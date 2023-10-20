import React from 'react'
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Storeslist from '../Components/Storeslist';

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
            <li><img alt='Validate Prices' src='icons/validate prices.svg'></img><p>Validate Prices</p></li>
            <li><img alt='Categories' src='icons/categories.svg'></img><p>Categories</p></li>
            <li><img alt='Filters' src='icons/filters.svg'></img><p>Filters</p></li>
            <li><img alt='Bulk Updates' src='icons/bulk updates.svg'></img><p>Bulk Updates</p></li>
            <li><img alt='Stores Calendar' src='icons/calendar.svg'></img><p>Stores Calendar</p></li>
          </ul>
          <Storeslist />
        </div>
        
    </div>  
    </>
  )
}

export default Content