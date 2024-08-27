import { useState, useEffect } from "react";
import { IMG_URL } from "../constants";

const TopPicks = ({ value }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [input, setInput] = useState("");

  const resData =
    value?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;

  useEffect(() => {
    if (resData) {
      setFilteredRestaurants(resData);
    }
  }, []);

  // console.log(resData);

  const filterr = value?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
    ?.restaurants || value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
    ?.restaurants;

  // console.log(filterr);

  const handleClick = () => {
    const filtered = filterr.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <section>
      <div className="flex justify-center mb-[30px] mt-[30px]">
        <input
          type="text"
          className="border border-solid border-black mr-[20px] rounded-xl"
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
      <div className="flex overflow-x-scroll">
        {filteredRestaurants.map((resList) => (
          <div className="ml-[10px] italic" key={resList?.info?.id}>
            <div>
              <img src={IMG_URL + resList?.info?.cloudinaryImageId} />
            </div>
            {resList?.info?.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
