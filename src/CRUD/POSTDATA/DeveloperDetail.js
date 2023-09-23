import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeveloperDetail = () => {
  const { develoerID } = useParams();
  const [singleData, setSingleData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(null);
  //   console.log(singleData);

  const navigate = useNavigate();

  const notify = () => {
    // toast("Default Notification !");

    toast.warn("Deleted Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/developer/${develoerID}`)
      .then((res) => {
        console.log(res);
        setSingleData(res.data);
        setisLoading(false);
        setisError(null);
      })
      .catch((err) => {
        console.log(err);
        setisError(err.message);
        setisLoading(false);
        setSingleData(null);
      });
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8000/developer/${develoerID}`, {
      method: "DELETE",
    }).then((res) => {
      //   console.log(res);
      //   console.log("after Deleting Post ", res);
      if (res.ok) {
        setTimeout(() => {
          navigate("/developer");
        }, 1000);
        notify();
      }
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl font-bold bg-orange-400">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl font-bold bg-orange-400">
        {isError}
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-gray-700">
          This is Develoer Get By Id{" "}
        </h1>
        <div className="w-7/12 rounded border bg-purple-900 text-white text-center m-auto p-4">
          This is Developer Whose id is{" "}
          <span className="text-3xl font-bold"> {singleData.id}</span>
          <div>{singleData.name}</div>
          <div>{singleData.designation}</div>
        </div>

        <button onClick={handleDelete} className="btn bg-red-500 text-white">
          Delete Developer Data
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default DeveloperDetail;
