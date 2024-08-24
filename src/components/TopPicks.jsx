const TopPicks = ({ value }) => {
  //   console.log(value);
  const resData =
    value?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log(resData);
  return (
    <section>
      <div className="flex overflow-x-scroll">
        {resData.map((resList) => (
          <div className="ml-[10px]" key={resList?.info?.id}>
            {console.log(resList?.info?.name)}
            {resList?.info?.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
