import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import Homepage from "./components/Homepage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-white overflow-hidden flex flex-col">
        <div className=" bg-black w-full flex justify-center items-center">
          <Navbar />
        </div>
        <div className="flex justify-center items-center w-full">
          <Outlet />
        </div>
        <div className="flex justify-center items-center bg-black mt-[20px]">
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
