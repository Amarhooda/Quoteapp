import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [mode, setmode] = useState("light");
   const [text, settext] = useState("Dark");
    const togglemode = () => {
      if (mode === "light") {
        setmode("dark");
        document.body.style.backgroundColor = "black";
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
      }
       if (text === "Dark") {
         settext("Light");
       } else {
         settext("Dark");
       }
    };
  return (
    <>
      <div className="w-full h-[55px] bg-blue-400 sticky top-0 flex items-center justify-center font-[Poppins]">
        <div className=""></div>
        <div className=" bg-slate-200 p-1 rounded-lg">
          <ul className="flex font-medium">
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold rounded-md">
              <Link to="/Youtube">YouTube</Link>
            </li>
          </ul>
        </div>
        <button
          className="mx-9 bg-black text-white p-1 rounded-lg transition ease-in-out hover:scale-110"
          onClick={togglemode}
        >
          {text}
        </button>
      </div>
    </>
  );
}

export default Navbar;
