import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantMenu = useRestaurantMenu(restaurantId);
  const [showIndex,setShowIndex] = useState(null);
  // console.log(restaurantMenu);
  
  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { id, name, avgRating, cuisines } =
  restaurantMenu?.data?.cards[2]?.card?.card?.info;

  const categories =
    restaurantMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) =>
        type?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

//   console.log(categories);

 

  return (
  <div className="text-center">
    <h1 className="font-bold my-6 text-2xl italic">{name}</h1>
    <p className="font-bold text-lg italic">{cuisines.join(",")}</p>
    {categories.map((category,index)=>(
        <RestaurantCategory 
        key={category?.card?.card?.title}
        value={category?.card?.card}
        setItems={index == showIndex}
        setShowIndex={()=>setShowIndex(index==showIndex ? null:index)}/>
    ))}
  </div>
)};

export default RestaurantMenu;
