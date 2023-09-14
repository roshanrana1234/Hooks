import React, { useState } from "react";

const UseCountThree = () => {
  const [name, setName] = useState({ firstName: "Roshan", lastName: "Rana" });
  return (
    <>
      <div>
        <label htmlFor="">Enter Your First Name</label>
        <input
          type="text"
          placeholder="Enter Your First name here"
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

      <h1>{JSON.stringify(name)}</h1>
    </>
  );
};

export default UseCountThree;
