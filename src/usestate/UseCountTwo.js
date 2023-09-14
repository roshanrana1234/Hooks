import React, { useState } from "react";

const UseCountTwo = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preValue) => preValue + 1);
    }
  };

  return (
    <>
      <h1>This is Current Value : {count}</h1>
      <button
        onClick={() => setCount((preValue) => preValue + 1)}
        className="btn bg-green-500"
      >
        Increase
      </button>
      <button
        onClick={() => setCount((preValue) => preValue - 1)}
        className="btn bg-red-500"
      >
        Decrease
      </button>
      <button
        onClick={() => setCount(initialState)}
        className="btn bg-blue-500"
      >
        Reset
      </button>
      <button onClick={increaseByFive} className="btn bg-pink-500">
        increase by 5
      </button>

      <button
        onClick={() => setCount((preValue) => preValue + 5)}
        className="btn bg-red-500"
      >
        5
      </button>
    </>
  );
};

export default UseCountTwo;
