import { IMG_URL } from "../constants";
const RestaurantList = ({ value }) => {
  const restaurantList =
    value?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants || value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;;
  console.log(restaurantList);
  return (
    <section className="w-full">
      <div className="flex overflow-x-scroll">
        {restaurantList.map((restaurant) => (
          <div className="ml-[10px] italic" key={restaurant?.info?.id}>
            <div>
              <img src={IMG_URL+restaurant?.info?.cloudinaryImageId}/>
            </div>
            {restaurant?.info?.name}
            </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
