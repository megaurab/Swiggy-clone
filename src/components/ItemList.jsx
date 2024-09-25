import { IMG_URL } from "../constants";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleItems = (item) =>{
    // dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || item?.itemCards?.[0]?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex rounded-xl justify-between transition-all duration-300 ease-in-out scale-105 hover:scale-100 hover:shadow-2xl"
        >
          <div className="w-9/12 flex flex-col">
            <div className="py-2 flex flex-col">
              <span className="font-medium italic">
                {item?.card?.info?.name ||
                  item?.itemCards?.[0]?.card?.info?.name}
              </span>
              <p className="font-normal italic">
                ₹-
                {item?.card?.info?.price / 100 ||
                  item?.itemCards?.[0]?.card?.info?.price / 100}
              </p>
            </div>
            <p className="text-xs italic">
              {item?.card?.info?.description ||
                item?.itemCards?.[0]?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="w-full">
              <button className="mt-11 ml-3 p-1 rounded-lg bg-white shadow-lg absolute italic transition-all duration-300 ease-in-out scale-105 hover:scale-100 hover:shadow-2xl"
              onClick={()=>handleItems(item)}>
                Add +
              </button>
              <img src={
                  IMG_URL +
                  (item?.card?.info?.imageId ||
                    item?.itemCards?.[0]?.card?.info?.imageId)
                } className="rounded-xl" />
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
