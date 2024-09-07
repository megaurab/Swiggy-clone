import { IMG_URL } from "../constants";

const RestaurantCard = ({ value }) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfoV3,
  } = value?.info;

  return (
    <div className="bg-white rounded-lg shadow-lg m-4 p-[10px] flex-shrink-0 w-64 h-72 sm:w-56 sm:h-64 md:w-48 md:h-60 lg:w-72 lg:h-80 overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-36 sm:h-32 md:h-28 lg:h-36 rounded-lg object-cover"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        {/* <h1 className="text-white font-bold"></h1> */}
        {aggregatedDiscountInfoV3 && (
          <div className="absolute top-0 left-0 opacity-90 text-white text-lg font-extrabold mt-28 bg-gradient-to-t from-slate-400 p-1 rounded-tr-lg rounded-bl-lg ">
            {aggregatedDiscountInfoV3.header +
              " " +
              aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>
      <h5 className="mt-2 text-lg font-bold">{name}</h5>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{avgRating}★</span>
        <span>{sla?.slaString}</span>
      </div>
      <h6 className="text-sm text-gray-600 mt-1">{cuisines.join(", ")}</h6>
    </div>
  );
};

export const EnhancedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 text-white bg-black text-lg font-bold p-1 rounded-tr-lg rounded-bl-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
