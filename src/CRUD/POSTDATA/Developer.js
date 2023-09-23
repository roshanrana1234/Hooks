import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Developer = () => {
  const [developer, setDeveloper] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(null);
  console.log("Main Data", developer);

  useEffect(() => {
    axios
      .get("http://localhost:8000/developer")
      .then((res) => {
        setDeveloper(res.data);
        setisLoading(false);
        setisError(null);
      })
      .catch((err) => {
        setisError(err.message);
        setisLoading(false);
        setDeveloper(null);
      });
  }, []);

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
      <div className="p-4">
        <div>This is Developer's</div>
        {developer.map((value, index) => {
          return (
            <Link to={`/developer/${value.id}`} key={index} className="p-4">
              <div>
                <div className="flex gap-3">
                  <span>{value.id}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-orange-600">
                      {value.name}
                    </span>
                    <span>{value.designation}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Developer;
