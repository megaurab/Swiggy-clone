import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantMenu = useRestaurantMenu(restaurantId);
  // console.log(restaurantMenu);

  const categories =
    restaurantMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) =>
        type?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

//   console.log(categories);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  return (
  <div className="text-center">
    {categories.map((category)=>(
        <RestaurantCategory 
        key={category?.card?.card?.title}
        value={category?.card?.card}/>
    ))}
  </div>
)};

export default RestaurantMenu;
