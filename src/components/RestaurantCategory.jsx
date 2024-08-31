import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({value}) => {

  console.log(value);
  return (
    <div>
    {/* header */}
    <div className="w-[500px] mx-auto my-4 bg-grey-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg ml-[15px]">
          {value.title}({value?.categories?.length || value?.itemCards?.length})
        </span>
        <span className="cursor-pointer">↓</span>
      </div>
      {/* body */}
      {/* {showItems && <ItemList items={data?.itemCards || data?.categories} />} */}
      <ItemList items={value?.itemCards || value?.categories}/>
    </div> 
  </div>
  )
}

export default RestaurantCategory;