import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersFetch = () => {
  const [users, setUsers] = useState([]);
  if (users) {
    console.log(users);
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>this is Users List</div>

      {users?.map((value, index) => {
        console.log(value);
        return (
          <div key={index}>
            <Link to={`/users/${value.id}`}>
              <div className="border border-black flex flex-col gap-6 my-8 w-10/12 m-auto  p-4 bg-gray-800 text-white">
                <div className="flex flex-col gap-3">
                  <span>{value.id}</span>
                  <span>{value.title}</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default UsersFetch;
