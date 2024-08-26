
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React from 'react'

const App = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div className=" bg-black w-full flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex justify-center items-center w-full">
        <Homepage />
      </div>
      <div className="flex justify-center items-center bg-black mt-[20px]">
        <Footer/>
      </div>
    </div>
  )
}

export default App