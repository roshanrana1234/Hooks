import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditDeveloper = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dataReceived = params.get("data");

  // console.log("This is Edit Component ID", dataReceived);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/developer/${dataReceived}`)
      .then((res) => {
        // console.log("Response Data", res);
        if (res.data) {
          setName(res.data.name);
          setDesignation(res.data.designation);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSumit = (e) => {
    e.preventDefault();
    const data = { name, designation };
    fetch(`http://localhost:8000/developer/${dataReceived}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Update failed");
      }
      console.log("Data is Posted In Back end");
      console.log("Response After Posting the data", res);
      if (res.status == 200) {
        setTimeout(() => {
          navigate("/developer");
        }, 1000);
        notify();
      }
    });
  };
  return (
    <>
      <div>Edit Data</div>
      {dataReceived}
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

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default EditDeveloper;
