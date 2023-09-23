import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <span>Logo</span>
          <ul className="flex gap-6">
            <Link to="blog">
              <li>Home</li>
            </Link>
            <Link to="blog">
              <li>Blogs</li>
            </Link>
            <Link to="employee">
              <li>Employee</li>
            </Link>
            <Link to="developer">
              <li>Developer</li>
            </Link>
            <Link to="addeveloper">
              <li>Add Developer</li>
            </Link>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
