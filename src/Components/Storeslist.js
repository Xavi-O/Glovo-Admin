import React from 'react'
import './Components.css';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

function Storeslist() {
    const [Data, setData] = useState ([])
    const [Loading, setLoading] = useState (false)
    const columns = [
        {
            name: "Id",
            selector: (row) => row.id
        },
        {
            name: "Name",
            selector: (row) => row.store_name,
        },
        {
            name: "Category",
            selector: (row) => row.category,
        },
        {
            name: "Location",
            selector: (row) => row.location
        },
        {
            name: "Account Manager",
            selector: (row) => row.account_manager
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true
        },
    ]

    useEffect(() => {
      fetchTableData()
    }, [])
    

    async function fetchTableData() {
        setLoading (true)
        const URL = "https://xavi-o.github.io/JSONadmindata-api/StoresData.json"
        const response = await fetch (URL)

        const users = await response.json()
        setData(users)
        setRecords(users)
        setLoading(false)
    }

    const [Records, setRecords] = useState(Data)

    const nameSearch = (event) => {
        setRecords(Data.filter(row => row.store_name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

  return (
    <div className='Table'>
        <input placeholder='Search Store Name' className='Search' onChange={nameSearch}></input>
        <DataTable 
        columns={columns}
        data={Records}
        progressPending={Loading}
        striped
        highlightOnHover
        pointerOnHover
        selectableRows
        fixedHeader
        pagination
        />
    </div>
  )
}

export default Storeslist