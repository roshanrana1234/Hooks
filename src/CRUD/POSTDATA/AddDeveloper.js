import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDeveloper = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Added Developer Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    const data = { name, designation };
    // console.log(data);
    setisSubmitting(true);
    fetch("http://localhost:8000/developer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Data is Posted In Back end");
      console.log("Response After Posting the data", res);
      if (res.status == 201) {
        setisSubmitting(false);
        setTimeout(() => {
          navigate("/developer");
        }, 1000);
        notify();
      }
    });
  };

  return (
    <>
      <div>
        <div>This is Adding Section</div>
        {/* Form For Addin Developer */}
        <form
          onSubmit={handleSumit}
          className="w-6/12 m-auto p-6 border bg-gray-200 flex flex-col gap-5"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Enter Develoer Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="designation">Enter Developer Designation</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          {!isSubmitting ? (
            <button className="btn" type="submit">
              Submit
            </button>
          ) : (
            <button className="btn bg-red-500" type="submit">
              Submitting....
            </button>
          )}
        </form>
        {name} : {designation}
      </div>
      <ToastContainer />
    </>
  );
};

export default AddDeveloper;
