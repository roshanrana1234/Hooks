import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setDisplay(!display)} className="btn">
          Toggle Mouse Container
        </button>
      </div>
      {display && <HookMouse />}
    </>
  );
};

export default MouseContainer;
