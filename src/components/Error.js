import React from "react";

const Error = ({ errors }) => {
  return (
    <div className="flex h-screen bg-gray-400 text-red-600 text-2xl justify-center items-center font-bold">
      {errors}
    </div>
  );
};

export default Error;
