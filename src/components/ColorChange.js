import React, { useState } from "react";

const ColorChange = () => {
  const [dark, setDark] = useState(false);
  console.log(dark);
  return (
    <>
      <button onClick={() => setDark(!dark)} className="btn">
        Chagne Theme
      </button>
      {dark ? (
        <button className="btn bg-yellow-500">True</button>
      ) : (
        <button className="btn">False</button>
      )}

      <div
        className={` min-h-screen  flex justify-center items-center text-4xl font-bold
        ${
          dark
            ? "bg-black text-white translate-x-0 duration-300"
            : "bg-green-500 text-black border text-6xl duration-300 translate-x-full"
        }`}
      >
        This is Dark
      </div>
    </>
  );
};

export default ColorChange;
