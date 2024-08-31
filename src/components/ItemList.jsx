import { IMG_URL } from "../constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || item?.itemCards?.[0]?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 flex">
              <span className="font-medium">
                {item?.card?.info?.name ||
                  item?.itemCards?.[0]?.card?.info?.name}
              </span>
              <p className="font-medium">
                ₹-
                {item?.card?.info?.price / 100 ||
                  item?.itemCards?.[0]?.card?.info?.price / 100}
              </p>
              {/* <img
                src={
                  IMG_URL +
                  (item?.card?.info?.imageId ||
                    item?.itemCards?.[0]?.card?.info?.imageId)
                }
              ></img> */}
            </div>
            <p className="text-xs italic">
              {item?.card?.info?.description ||
                item?.itemCards?.[0]?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div>
              <button className="p-2 mx-16 rounded-lg bg-white shadow-lg absolute">
                Add +
              </button>
            </div>
            {/* <img src={} className="" /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
