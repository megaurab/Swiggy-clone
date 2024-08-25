import React, { useEffect, useState } from 'react'
import { URL } from "../constants";
import GenieSection from './GenieSection';
import TopPicks from './TopPicks';
import Shimmer from './Shimmer';
import RestaurantList from './RestaurantList';

const Homepage = () => {

    const [restaurantData,setrestaurantData] = useState([]);


    useEffect(()=>{
      fetchData();
    },[])
    // FETCHING DATA
    const fetchData = async() =>{
        const data = await fetch(URL);
        const json = await data.json();
        // console.log(json);
        setrestaurantData(json);
        console.log(json);
    }

    if(restaurantData.length == 0){
        return <Shimmer />
    }

  return (
    <section className='w-2/3'>
        <div>
            <GenieSection value={restaurantData}/>
        </div>
        <div>
            <TopPicks value={restaurantData}/>
        </div>
        <div>
            <RestaurantList value={restaurantData}/>
        </div>
        <div>
            Best restaurant Areas
        </div>
    </section>
  )
}

export default Homepage