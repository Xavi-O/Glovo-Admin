import React from 'react'
import './Components.css';
import { useState } from "react";
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

function Storeslist() {
    const [Data, setData] = useState ([])
    const [Loading, setLoading] = useState (false)
    const columns = [
        {
            name: "Id",
            selector: (row) => row.address.zipcode
        },
        {
            name: "Name",
            selector: (row) => row.company.name
        },
        {
            name: "Category",
            selector: (row) => row.address.suite
        },
        {
            name: "City",
            selector: (row) => row.address.city
        },
        {
            name: "Supervisor",
            selector: (row) => row.username
        },
        {
            name: "Partnership",
            selector: (row) => row.name
        },
    ]

    useEffect(() => {
      fetchTableData()
    }, [])
    

    async function fetchTableData() {
        setLoading (true)
        const URL = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch (URL)

        const users = await response.json()
        setData(users)
        setLoading(false)
    }

  return (
    <div className='Table'>
        <DataTable 
        columns={columns}
        data={Data}
        progressPending={Loading}
        pagination
        />
    </div>
  )
}

export default Storeslist