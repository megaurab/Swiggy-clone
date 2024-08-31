import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({value,setItems,setShowIndex}) => {

  // console.log(value);
  const handleClick = () =>{
    setShowIndex();
  }

  return (
    <div>
    {/* header */}
    <div className="w-[500px] mx-auto my-4 bg-grey-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg ml-[15px]">
          {value.title}({value?.categories?.length || value?.itemCards?.length})
        </span>
        <span onClick={handleClick} className="cursor-pointer">↓</span>
      </div>
      {/* body */}
      {/* {showItems && <ItemList items={data?.itemCards || data?.categories} />} */}
      {setItems && <ItemList items={value?.itemCards || value?.categories}/>}
    </div> 
  </div>
  )
}

export default RestaurantCategory;