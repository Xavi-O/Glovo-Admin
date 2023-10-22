import React from 'react'
import { useState } from 'react';
import './Pages.css';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Search() {
  
  const [input, setInput] = useState('')

  const fetchData = (value) => {
    fetch("https://xavi-o.github.io/JSONadmindata-api/StoresData.json")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((row) => {
        return value && row && row.id.toString() === (value)
      })
      setResults(results)
    })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const [results, setResults] = useState([])

  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <div className='Subcontainer'>
          <h2>Admin Search</h2>
          <div className='Dashboard'>
          <ul className='Searches'>
            <li>Stores <br></br>
              <input
              placeholder='Enter Store ID'
              value={input}
              setResults={setResults}
              onChange={(e) => handleChange(e.target.value)}
              ></input>
            </li>
            <li>Orders <br></br>
              <input placeholder='Coming Soon' disabled></input>
            </li>
            <li>Couriers <br></br>
              <input placeholder='Temporarily Disabled' disabled></input>
            </li>
            <li>Account Managers <br></br>
              <input placeholder='Temporarily Disabled' disabled></input>
            </li>
          </ul>
          </div>
          <div> 
            {results ? results.map((row, i) => {
              return (
                <nav className='Searchresults'>
                  <ul>
                  <h3>Search Results</h3>
                  <h4>{row.store_name} #{row.id}</h4>
                    <div className='Storeinfo'>
                      <ul>
                        <li>Category: {row.category}</li>
                        <li>Account Manager: {row.account_manager}</li>
                        <li>Location: {row.location}</li>
                        <li>
                        <span className='Pstive'>Delivered Orders: {row.deliveries}{'\xa0\xa0'}</span>
                        </li>
                      </ul>
                      <ul>
                        <li>Store Status: {row.status}</li>
                        <li>Menu Health: {row.menu}</li>
                        <li>Star Rating: {row.star_rating}</li>
                        <li><span className='Ngtive'>Cancelled Orders: {row.cancellations}</span></li>
                      </ul>
                    </div>
                  </ul>
                </nav>
              )  
            }) : "Not Found!"}
          </div>
        </div>
    </div>
    </>
  )
}

export default Search