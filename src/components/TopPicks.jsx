import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const TopPicks = ({ value }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [input, setInput] = useState("");

  const resData =
    value?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;
  // console.log(resData);

  useEffect(() => {
    if (resData) {
      setFilteredRestaurants(resData);
    }
  }, []);

  const filterr =
    value?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants ||
    value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;
  // console.log(filterr);

  const handleClick = () => {
    const filtered = filterr.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );
    // console.log(filtered);
    setFilteredRestaurants(filtered);
  };

  return (
    <section>
      <div className="flex justify-center mb-[30px] mt-[30px]">
        <input
          type="text"
          className="border border-solid border-black mr-[20px] rounded-xl p-2 text-center"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="bg-slate-400 p-[5px] rounded-lg italic"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <h1 className="italic m-3 font-bold ">TOP PICKS FOR YOU:</h1>
      <div className="flex overflow-x-scroll">
        {filteredRestaurants.map((resList,index) => (
          <RestaurantCard key={index} value={resList} />
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
