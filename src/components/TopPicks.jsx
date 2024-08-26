import {IMG_URL} from "../constants";

const TopPicks = ({ value }) => {
 
  const resData =
    value?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;
  
  return (
    <section>
      <div className="flex overflow-x-scroll">
        {resData.map((resList) => (
          <div className="ml-[10px] italic" key={resList?.info?.id}>
             <div>
              <img src={IMG_URL+resList?.info?.cloudinaryImageId}/>
            </div>
            {resList?.info?.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
