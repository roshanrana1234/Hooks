import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((value) => value.id !== id);
    setBlogs(newBlog);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {blogs && (
        <BlogList
          listData={blogs}
          title="This is All Blogs"
          handleDelete={handleDelete}
        />
      )}

      {/* <BlogList
        data={blogs.filter((value) => value.author == "Roshan")}
        title="This is Roshan's Blogs"
      /> */}
      {/* <BlogList
        data={blogs.filter((value) => value.author == "Sandeep")}
        title="This is Sandeep's Blogs"
      /> */}
    </>
  );
};

export default Blogs;

// props = {data: blogs}

// 100% == 10%
