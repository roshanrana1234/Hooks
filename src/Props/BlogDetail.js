import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { userID } = useParams();
  return (
    <>
      <div>This is Blog Detail Page {userID} </div>
    </>
  );
};

export default BlogDetail;
