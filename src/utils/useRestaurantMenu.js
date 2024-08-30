import React, { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useRestaurantMenu = ( restaurantId ) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_URL + restaurantId);
    const jsonData = await data.json();
      // console.log(jsonData);
    setRestaurantInfo(jsonData);
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
