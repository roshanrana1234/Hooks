import React, { useState } from "react";

const Basic = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    age: "",
  });

  console.log("formData", formData);

  const handleFormData = (event) => {
    console.log("This is Event", event);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   handleFormData();
  return (
    <>
      <div>
        <form>
          <div>
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="address">Enter Your Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="mobile">Enter Your Mobile</label>
            <input
              type="text"
              name="mobile"
              vlaue={formData.mobile}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="age">Enter Your Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleFormData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Basic;
