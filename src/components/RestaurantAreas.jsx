const RestaurantAreas = () => {
    return (
      <section className="px-4">
        {/* Best Places to Eat Across Cities */}
        <div className="flex flex-col mt-10">
          <h1 className="text-xl font-semibold mb-4 italic">Best Places to Eat Across Cities</h1>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Bangalore</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Pune</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Mumbai</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Delhi</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Hyderabad</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Kolkata</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Chennai</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Chandigarh</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Ahmedabad</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Jaipur</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Best Restaurants in Nagpur</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">See More</button>
          </div>
        </div>
  
        {/* Best Cuisines Near Me */}
        <div className="flex flex-col mt-10">
          <h1 className="text-xl font-semibold mb-4 italic">Best Cuisines Near Me</h1>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Chinese Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">South Indian Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Indian Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Kerala Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Korean Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">North Indian Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Seafood Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Bengali Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Punjabi Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Italian Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Andhra Restaurant Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">See More</button>
          </div>
        </div>
  
        {/* Explore Every Restaurant Near Me */}
        <div className="flex flex-col mt-10">
          <h1 className="text-xl font-semibold mb-4 italic">Explore Every Restaurant Near Me</h1>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Explore Restaurants Near Me</button>
            <button className="flex-1 min-w-[150px] px-4 py-2 border rounded-lg shadow-md italic">Explore Top Rated Restaurants Near Me</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default RestaurantAreas;
  