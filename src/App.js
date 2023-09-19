import React from "react";
import { Routes, Route } from "react-router-dom";
import UseState from "./components/UseState";
import UseStateTwo from "./components/UseStateTwo";
import UseStateThree from "./components/UseStateThree";
import ColorChange from "./components/ColorChange";

import Functinal from "./Functinal";
import ClassCompnent from "./ClassCompnent";
import UseCount from "./usestate/UseCount";
import UseCountTwo from "./usestate/UseCountTwo";
import UseCountThree from "./usestate/UseCountThree";
import NavBar from "./usestate/NavBar";
import UseStateWithTailiwnd from "./usestate/UseStateWithTailiwnd";
import UseCounterEffect from "./useEffect/UseCounterEffect";
import HookMouse from "./useEffect/HookMouse";
import MouseContainer from "./useEffect/MouseContainer";
import UsersFetch from "./useEffect/UsersFetch";
import UsersDetail from "./useEffect/UsersDetail";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Blog from "./Props/Blog";
import BlogDetail from "./Props/BlogDetail";

const App = () => {
  return (
    <>
      {/* <UseState />
      <UseStateTwo />
      <UseStateThree />
      <ColorChange /> */}

      {/* <Functinal /> */}
      {/* <ClassCompnent /> */}
      {/* <UseCount /> */}
      {/* <UseCountTwo /> */}
      {/* <UseCountThree /> */}
      {/* <NavBar /> */}

      {/* <HookCounterOne /> */}
      {/* <UseStateWithTailiwnd /> */}

      {/* <UseCounterEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogID" element={<BlogDetail />} />
        <Route path="users" element={<UsersFetch />} />
        <Route path="users/:userID" element={<UsersDetail />} />
      </Routes>
      {/* <UsersFetch  /> */}
    </>
  );
};

export default App;

// UseEffect
// UseState

// jsx ===  Javascript Extension

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var a = array[0];
// var b = array[1];
// var c = array[2];
// var d = array[3];
// console.log(a, b, c, d);
// ES6
// const [a, b, c, d, e, f] = array;
// const [a, b, , , , , , c, d] = array;
// const [a, b, ...rest] = array;
// console.log(a, b, rest);

// const arranew = ["roshan", "nidhi", "khushi", "abhilasha", "sandeep"];
// let [a, b, c, d, e] = arranew;

// console.log(`he is a ${a} she is ${b} she is ${c}`);
// console.log("he is ", a, "she is ", b, " she is", c);

// Object
// const {a,b} = object.
// const { a, b } = { a: "one", b: "five" };
// console.log(a, b);

// const object = { ...array };
// console.log(object);

// const sum = (v1, v2, v3) => {
//   return v1 + v2 + v3;
// };
// console.log(sum(1, 2, 3));
// console.log(sum(...array));
// console.log(...array);

// let obj2 = {
//   name: "Roshan",
//   company: "OnlineHoja",
//   address: "XYZ",
// };

// let { name, company, address } = obj2;

// console.log({ ...obj2, name: "Rana" });
// console.log({ name: "Rana", ...obj2 });
