import React from 'react'
import './Pages.css'; 
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useEffect, useState } from 'react';

function Home() {

  const [storesData, setStoresData] = useState ([])
  const [courierData, setCourierData] = useState ([])
  const [slicedStoresData, setSlicedStoresData] = useState ([])
  const [slicedCourierData, setSlicedCourierData] = useState ([])
    useEffect(() => {
      fetchTableData()
    }, [])

    async function fetchTableData() {
        const storesURL = "https://xavi-o.github.io/JSONadmindata-api/StoresData.json"
        const courierURL = "https://xavi-o.github.io/JSONadmindata-api/CourierData.json"
        const storesResponse = await fetch (storesURL)
        const courierResponse = await fetch (courierURL)

        const stores = await storesResponse.json()
        const couriers = await courierResponse.json()

        //Sorting through the stores data deliveries in descending order
        const storesResult = stores.sort((a, b) =>
        (b.deliveries/(b.deliveries+b.cancellations))-(a.deliveries/(a.deliveries+a.cancellations)))

        //Sorting through the couriers data ratings in descending order
        const couriersResult = couriers.sort((a, b) =>
        (b.delivered/(b.delivered+b.cancelled)*100)-(a.delivered/(a.delivered+a.cancelled)*100))

        setStoresData(storesResult)
        setCourierData(couriersResult)

        //Slicing the results to display only the top 5 and 10
        setSlicedStoresData(storesResult.slice(0, 5))
        setSlicedCourierData(couriersResult.slice(0, 10))
    }

    //Counting of live and disabled stores
    const live = storesData.filter(row => row.status === 'enabled').length
    const closed = storesData.filter(row => row.status === 'disabled').length
    const livePercent = (live / (live + closed)) * 100
    const closePercent = (closed / (live + closed)) * 100

    //Calculation of menu quality of the stores
    const healthy = storesData.filter(row => row.menu === 'healthy').length
    const unhealthy = storesData.filter(row => row.menu === 'unhealthy').length
    const healthyPercent = (healthy / (healthy + unhealthy)) * 100
    const unhealthyPercent = (unhealthy / (healthy + unhealthy)) * 100

    //Calculation of deliveries vs cancellations
    const totalDeliveries = storesData.reduce((accumulator, row) => accumulator + row.deliveries, 0)
    const totalCancellations = storesData.reduce((accumulator, row) => accumulator + row.cancellations, 0)
    const cancelPercent = (totalCancellations / (totalDeliveries + totalCancellations)) * 100
    const deliverPercent = (totalDeliveries / (totalDeliveries + totalCancellations)) * 100
    
    //Calculation of active vs inactive couriers
    const active = courierData.filter(row => row.status === 'active').length
    const inactive = courierData.filter(row => row.status === 'inactive').length
    const activePercent = (active / (active + inactive)) * 100
    const inactivePercent = (inactive / (active + inactive)) * 100

  return (
    <>
    <Header />
    <div className='Container'>
        <Sidebar />
        <div className='Subcontainer'>

          <div className='Dashboard'>
            <div className='Maincard'>
              <h2>Admin Dashboard</h2>
            <ul className='Cards'>
            <li><p className='Crdtitle'>Stores</p>{livePercent.toFixed(0)}%
              <span className='Postve'> Live &#9210;</span>
              <p className='Crdfooter'>Disabled:&#160;<span className='Negtve'>{closePercent.toFixed(0)}%</span></p>
            </li>
            <li><p className='Crdtitle'>Menu </p> {healthyPercent.toFixed(0)}%
              <span className='Postve'> Quality &#127836;</span>
              <p className='Crdfooter'>Not Achieved:&#160;<span className='Negtve'>{unhealthyPercent.toFixed(0)}%</span></p>
            </li>
            <li><p className='Crdtitle'>Orders</p>{deliverPercent.toFixed(0)}%
              <span className='Postve'> Delivery &#128230;</span>
              <p className='Crdfooter'>Cancelled:&#160;<span className='Negtve'>{cancelPercent.toFixed(0)}%</span></p>
            </li>
          </ul>
          <table className='Storesrank'>
              <tr><th colspan="4">{'\xa0\xa0'}Top 5 Performing Stores</th></tr>
                <tr>
                  <th></th>
                  <th>Store</th>
                  <th>Category</th>
                  <th>Delivered</th>
                  <th>Cancelled</th>
                </tr>
                  { slicedStoresData ? slicedStoresData.map((row, i) => {
                    return (
                      <tr>
                        <td className='Top'>{'\xa0\xa0\xa0\xa0'}&#128285;</td>
                        <td>{row.store_name}</td>
                        <td>{row.category}</td>
                        <td>{row.deliveries}</td>
                        <td>{row.cancellations}</td>
                      </tr>
                    )  
                  }) : "No Data"}
              </table>
            </div>
            <nav className='Sidecard'>
            <ul className='Cardfour'>
            <li><p className='Crdtitle'>{activePercent.toFixed(0)}% <br></br></p>
            <span className='Postve'> Active Couriers <br></br>&#128757;</span>
            <p className='Crdfooter'>Inctive:&#160;<span className='Negtve'>{inactivePercent.toFixed(0)}%</span></p>
            </li>
            </ul>
            <table className='Couriersrating'>
              <tr><th colspan="4">Top 10 Rated Couriers</th></tr>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Rating</th>
                </tr>
                  { slicedCourierData ? slicedCourierData.map((row, i) => {
                    return (
                      <tr>
                        <td className='Stars'>&#9733;</td>
                        <td>{row.first_name}&#160;{row.last_name}</td>
                        <td>{row.location}</td>
                        <td>{(row.delivered/(row.delivered+row.cancelled)*100).toFixed(0)}%</td>
                      </tr>
                    )  
                  }) : "No Data"}
              </table>            
            </nav>
          </div>
        </div>  
    </div>    
    </>

  )
}

export default Home