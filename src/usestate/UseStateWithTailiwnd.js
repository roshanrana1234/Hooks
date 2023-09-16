import React, { useState } from "react";

const UseStateWithTailiwnd = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  //   className=""
  //   className= {``}

  return (
    <>
      <button onClick={() => setOpen(!open)} className="btn">
        Change The State
      </button>
      <h1
        className={`text-white
        p-3 text-center  text-xl duration-1000 ${
          open
            ? "bg-green-500 translate-x-full opacity-0 fixed "
            : "translate-x-0 bg-red-500 opacity-100 "
        } `}
      >
        This is Tailwind with useState
      </h1>

      {/* {open ? (
        <button className="btn bg-green-500">True</button>
      ) : (
        <button className="btn bg-red-500">False</button>
      )} */}
    </>
  );
};

export default UseStateWithTailiwnd;
