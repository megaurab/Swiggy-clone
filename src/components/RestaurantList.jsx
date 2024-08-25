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
            {restaurant?.info?.name}
            </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
