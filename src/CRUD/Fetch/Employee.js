import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import UseFetch from "./UseFetch";

const Employee = () => {
  //   const [employee, setEmployee] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(null);

  //   console.log(isError);

  const { data, isLoading, isError } = UseFetch(
    "http://localhost:8000/employee"
  );

  //   Using Fetch
  // useEffect(() => {
  //   fetch("http://localhost:8000/employ")
  //     .then((res) => {
  //       // console.log(res);
  //       if (!res.ok) {
  //         throw new Error("The Data is Unable To Fetch");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setEmployee(data);
  //       setIsLoading(false);
  //       setIsError(null);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsError(err.message);
  //       setIsLoading(false);
  //       setEmployee(null);
  //     });
  // }, []);

  //   using Axios
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/employee")
  //     .then((res) => {
  //       console.log(res);
  //       setEmployee(res.data);
  //       setIsLoading(false);
  //       setIsError(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsError(error.message);
  //       setIsLoading(false);
  //       setEmployee(null);
  //     });
  // }, []);

  //   async and await

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/employee");
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await res.json();
  //       console.log(data);
  //       setEmployee(data);
  //       setIsLoading(false);
  //       setIsError(null);
  //     } catch (error) {
  //       // console.log(error.message);
  //       setIsError(error.message);
  //       setIsLoading(false);
  //       setEmployee(null);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  //   if (isError) {
  //     return isError && <Error errors={isError} />;
  //   }

  return (
    <>
      <div>this is Employee Component</div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data &&
        data?.map((value, index) => {
          return (
            <div key={index} className=" flex gap-3 items-start">
              <span>{value?.id}</span>
              <div className="flex flex-col gap-1">
                <span>{value?.author}</span>
                <span>{value?.designation}</span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Employee;

// TaskOne
// TaskTwo 2sec
// TaskThree
