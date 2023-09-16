import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const positionOfMouse = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Mouse  inside UseEffect");
    window.addEventListener("mousemove", positionOfMouse);

    return () => {
      console.log("removing listenter");
      window.removeEventListener("mousemove", positionOfMouse);
    };
  }, []);

  return (
    <>
      <div className="bg-green-300">
        X-axis == {x}
        Y-axis == {y}
      </div>
    </>
  );
};

export default HookMouse;
