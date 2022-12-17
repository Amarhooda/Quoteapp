import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Youtube from "./Components/Youtube";
import index from './/Components/app.css'
function App() {
   const [qoute, setQuote] = useState("Wake up to reality! Nothing ever goes as planned in life!");
   const handleQuote = async () => {
     const res = await axios.get("https://api.quotable.io/random");
     setQuote(res.data.content);
   };
  return (
    <Router>
      <div>
          <Navbar/>
        <Routes>
          <Route
            path="/"
          ></Route>
          <Route path="/Youtube" element={<Youtube/>}></Route>
        </Routes>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="relative">
            <p className="quote max-w-[720px] rounded-3xl bg-lime-300 text-center p-8 text-3xl leading-10">
              " {qoute} "
            </p>
            <div className="flex items-center justify-center m-8 relative ">
              <button
                className="bg-orange-600 hover:scale-110 transition ease-in-out rounded-2xl p-4 text-2xl hover:rounded-3xl hover:bg-blue-300"
                onClick={handleQuote}
              >
                {" "}
                Get New Quote{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
