import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelet = (id) => {
    const newBlog = blogs.filter((value) => value.id !== id);
    setBlogs(newBlog);
  };

  return (
    <>
      <div className="p-4">
        <BlogList
          data={blogs}
          title="This is All Blogs"
          handleDelet={handleDelet}
        />

        {/* <BlogList
          data={blogs.filter((value) => value.author == "Roshan")}
          title="This is Roshan's Blogs"
        />

        <BlogList
          data={blogs.filter((value) => value.author == "Sandeep")}
          title="This is Sandeep's Blogs"
        /> */}
      </div>
    </>
  );
};

export default Blog;
