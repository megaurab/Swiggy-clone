import React, { useEffect, useState } from 'react'
import { URL } from "../constants";
import GenieSection from './GenieSection';
import Shimmer from './Shimmer';

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
    <section>
        <div>
            <GenieSection value={restaurantData}/>
        </div>
        <div>
            Top picks for you.
        </div>
        <div>
            Restaurant List
        </div>
        <div>
            Best restaurant Areas
        </div>
        <div>
            footer
        </div>
    </section>
  )
}

export default Homepage