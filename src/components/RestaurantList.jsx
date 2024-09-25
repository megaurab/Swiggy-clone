import RestaurantCard,{ EnhancedRestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { addRestaurant } from '../utils/restaurantSlice';
import {useDispatch} from "react-redux";
// import { Link } from "react-router-dom";


const PromotedCard = EnhancedRestaurantCard(RestaurantCard);


const RestaurantList = ({ value }) => {
  const dispatch = useDispatch();
  const restaurantList =
    value?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants ||
    value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;
  // console.log(restaurantList);
  dispatch(addRestaurant(restaurantList));



  return (
    <section className="p-4">
      <h1 className="italic ml-5 font-bold">RESTAURANTS TO CHOOSE FROM:</h1>
      <div className="flex ml-5 mt-5 mb-5 overflow-x-auto hide-scrollbar py-3">
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Filter</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Sort By</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Fast Delivery</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">New on Swiggy</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Rating 4.0+</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Pure Veg</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Offers</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Rs.300-Rs.600</button>
        <button className="rounded-xl shadow-md p-2 italic mr-2 whitespace-nowrap hover:scale-110 transition-all duration-300 ease-in-out">Less than Rs.300</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurantList.map((restaurant, index) => (
         <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
         { restaurant.info.promoted == true?<PromotedCard value={restaurant}/>:<RestaurantCard value={restaurant} />}
        </Link>
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
