import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ value }) => {
  const restaurantList =
    value?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants ||
    value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <section className="p-4">
      <h1 className="italic m-3 font-bold">RESTAURANTS TO CHOOSE FROM:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard key={index} value={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
