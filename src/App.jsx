
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import React from 'react'

const App = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Homepage />
      </div>
      <div className="bg-white ">
        {/* <Hero /> */}
      </div>
      <div>
        <div>
          {/* <EventList /> */}
          {/* <JoinUs /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default App