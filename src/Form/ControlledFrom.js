import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";

const ControlledFrom = () => {
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [hide, setHide] = useState(false);

  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };

  const handleFromData = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    // console.log(formData);
    validateForm();
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  //   FormValidation

  const validateForm = () => {
    let newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(formData.email);

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const isValidPassword = passwordRegex.test(formData.password);

    if (!formData.fullName) {
      newErrors.fullName = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is Required";
    } else if (!isValidPassword) {
      newErrors.password = "Password is to week";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div>this is Controlled Form </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded bg-black/30 shadow-xl w-11/12 sm:9/12 md:w-7/12 m-auto"
      >
        <div className="flex w-full gap-3 flex-col md:flex-row">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullName">Enter Your Full Name</label>
            <input
              className={`${
                errors.fullName
                  ? "ring-4 ring-offset-2 ring-red-500"
                  : "ring-4 ring-offset-2 ring-green-500"
              }`}
              // className="placeholder:pl-4 rounded focus:bg-black focus:text-white focus:ring-4 focus:ring-offset-4 focus:ring-purple-500 focus:scale-105 duration-300 focus:translate-x-4"
              type="text"
              required
              minLength="5"
              maxLength="20"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleFromData}
            />
            <div className="text-sm text-red-500">
              {errors.fullName && errors.fullName}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFromData}
            />
            <div className="text-sm text-red-500">
              {errors.email && errors.email}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Enter Your Password</label>
          <input
            type={hide ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleFromData}
          />
          <AiFillEye
            onClick={() => setHide(!hide)}
            className={` text-2xl ${hide ? "text-green-500" : "text-red-500"}`}
          />
          <div className="text-sm text-red-500">
            {errors.password && errors.password}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Mobile Number</label>
          <input
            className="placeholder:text-blue-500"
            type="number"
            name="phone"
            placeholder="Enter Your Mobile Number "
            value={formData.phone}
            onChange={handleFromData}
          />
        </div>

        <button
          className="btn disabled:cursor-not-allowed disabled:bg-red-400"
          type="submit"
          //   disabled={errors.length > 0}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledFrom;

// import React, { useState } from "react";

// const ControlledFrom = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { fullName, email, password, phone };
//     console.log("Form Data", formData);
//   };

//   return (
//     <>
//       <div>this is Controlled Form </div>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 p-6 rounded bg-black/30 shadow-xl  w-7/12 m-auto"
//       >
//         <div className="flex flex-col gap-1">
//           <label htmlFor="fullName">Enter Your Full Name</label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="email">Enter Your Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="password">Enter Your Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="phone">Mobile Number</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>

//         <button className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default ControlledFrom;
