import React from "react";
import UseState from "./components/UseState";
import UseStateTwo from "./components/UseStateTwo";
import UseStateThree from "./components/UseStateThree";
import ColorChange from "./components/ColorChange";

const App = () => {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseStateTwo /> */}
      {/* <UseStateThree /> */}
      <ColorChange />
    </>
  );
};

export default App;

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