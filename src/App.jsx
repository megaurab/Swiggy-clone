import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from 'react'
import Homepage from "./components/Homepage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div className=" bg-black w-full flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex justify-center items-center w-full">
        <Outlet />
      </div>
      <div className="flex justify-center items-center bg-black mt-[20px]">
        <Footer/>
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/restaurants/:restaurantId",
        element:<RestaurantMenu />
      }
    ]
  }
])

export default appRouter;