import React, { useState, useEffect } from "react";

const UseCounterEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   UseEffect Will Run Every time when ever the page is rendered or some thing is updated .
  useEffect(() => {
    console.log("useEffect run");
    document.title = `clicked ${count} time`;
  }, [count]);

  //   console.log("Out side of useEffect");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => setCount((preCount) => preCount + 1)}
      >
        Increase count
      </button>
      <h1> clicked Count Time {count}</h1>
    </>
  );
};

export default UseCounterEffect;
