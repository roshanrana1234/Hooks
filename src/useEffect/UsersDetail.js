import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UsersDetail = () => {
  const { userID } = useParams();
  const [singleUser, setSingleUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userID}`)
      .then((res) => {
        console.log(res);
        setSingleUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div>This is Users Detail {userID} </div>
      {singleUser.title}
      <br />
      <br />
      {singleUser.body}
    </>
  );
};

export default UsersDetail;

// CRUD
