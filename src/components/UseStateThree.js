import React, { useState } from "react";

const UseStateThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        This is Object
        <div>
          <label htmlFor="">Enter Your First Name</label>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Enter Your Last Name</label>
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </div>
        {JSON.stringify(name)}
      </div>
    </>
  );
};

export default UseStateThree;
