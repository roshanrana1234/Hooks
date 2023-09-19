import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ data, title, handleDelet }) => {
  //    props == {data: blogs, title:"This is All Blogs"}
  //   console.log("This is Props", props);

  // const blogs = props.data;
  // const titleofBlog = props.title;

  // const { data, title } = props;

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-pink-600">{title}</h1>
        {data?.map((value, index) => {
          return (
            <Link
              to={`${value.id}`}
              //   to={`/blog/${value.id}`}
              key={index}
              className="flex gap-3 items-start bg-green-400 p-4"
            >
              <div>
                <span>{value.id}</span>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-pink-400">
                    {value.title}
                  </span>
                  <span className="text-black/60">{value.author}</span>
                </div>
                <button
                  onClick={() => handleDelet(value.id)}
                  className="btn bg-red-500"
                >
                  Delete Blog
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
