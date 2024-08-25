import React from 'react'

const GenieSection = ({value}) => {
    

    const resData = value?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle?.info;
    console.log(resData);
  return (
    <div className='flex justify-center items-center'>
        {resData.map((resType)=>(
            <div className="ml-[10px] italic" key={resType.id}>
                {resType?.description}
            </div>
        ))}
    </div>
  )
}

export default GenieSection