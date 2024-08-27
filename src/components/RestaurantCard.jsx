import { IMG_URL } from "../constants";

const RestaurantCard = ({ value }) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfo
  } = value?.info;

  return (
    <div className="w-64 h-72 bg-white  rounded-lg shadow-lg m-4 p-[10px] flex-shrink-0">
      <div className="relative">
        <img
          className="w-full h-36 rounded-lg object-cover"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        {aggregatedDiscountInfo && (
          <div className="absolute top-0 left-0 bg-black text-white text-xs p-1 rounded-tr-lg rounded-bl-lg">
            {aggregatedDiscountInfo.header}
          </div>
        )}
      </div>
      <h5 className="mt-2 text-lg font-bold">{name}</h5>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{avgRating}★</span>
        <span>{sla?.slaString}</span>
      </div>
      <h6 className="text-sm text-gray-600 mt-1">
        {cuisines.join(", ")}
      </h6>
    </div>
  );
};

export default RestaurantCard;
