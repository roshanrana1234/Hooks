import React from "react";

const BlogList = ({ listData, title, handleDelete }) => {
  //   console.log("This is Props Value", props);

  //   props = {data: blogs, title="This is All Blogs", handleDelete: handleDelete}

  //   const { data, title,handleDelete } = props;

  //   const data = props.data;
  //   const title = props.title;

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-orange-500 my-3">{title}</h1>
        {listData.map((value, index) => {
          //   console.log("This is Map Value", value);
          return (
            <div key={index} className="flex gap-3 items-start">
              <span>{value.id}</span>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-orange-500">
                  {value.title}
                </span>
                <span className="text-black/60">{value.author}</span>
              </div>
              <button
                onClick={() => handleDelete(value.id)}
                className="btn bg-red-600"
              >
                Delete Blog
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
