import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, UserAuth } from "../../AthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePass: "",
  });
  const {signInWithGoogle} = useContext(AuthContext)
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      navigate("/bloghome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <form
        on
        onSubmit={handleSubmit}
        className=" flex flex-col justify-start items-center  bg-white w-[400px] rounded-lg shadow-2xl relative"
      >
        <img
          className="rounded-[50%] h-[100px] w-[100px] border border-white=800 absolute top-[-50px]"
          src="../../../images/profile.png"
          alt="profilepic"
        />
        <h1 className="text-4xl font-bold font-sans mt-[55px] p-4 w-[90%] text-center border-b-2">
          Sign Up
        </h1>
        <div className={`${
              formData.email
                ? "before:font-bold befor:absolute before:top-[-16px] before:left-[28px] before:bg-white"
                : "before:top-[18px] before:left-[28px]"
            } flex justify-center items-center w-full relative    before:absolute before:content-['Email...'] before:font-semibold focus-within:before:font-bold
           before:left-[10px]
          focus-within:before:top-[-16px] focus-within:before:bg-white before:duration-300 d] rounded-lg my-4 mt-6`}>
            <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="w-[90%] h-[60px] border rounded-lg  p-2 outline-none "
            type="email"
            />
        </div>
        <div className={`${
              formData.password
                ? "before:font-bold befor:absolute before:top-[-16px] before:left-[28px] before:bg-white"
                : "before:top-[18px] before:left-[28px]"
            } flex justify-center items-center w-full relative    before:absolute before:content-['Password...'] before:font-semibold focus-within:before:font-bold
           before:left-[10px]
          focus-within:before:top-[-16px] focus-within:before:bg-white before:duration-300 d] rounded-lg my-4 mt-6`}>
            <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            className="w-[90%] h-[60px] border rounded-lg  p-2 outline-none"
            type="password"
            />
        </div>
        <div className={`${
              formData.rePass
                ? "before:font-bold befor:absolute before:top-[-16px] before:left-[28px] before:bg-white"
                : "before:top-[18px] before:left-[28px]"
            } flex justify-center items-center w-full relative    before:absolute before:content-['Password...'] before:font-semibold focus-within:before:font-bold
           before:left-[10px]
          focus-within:before:top-[-16px] focus-within:before:bg-white before:duration-300 d] rounded-lg my-4 mt-6`}>
            <input
            name="rePass"
            value={formData.rePass}
            onChange={handleChange}
            className="w-[90%] h-[60px] border rounded-lg  p-2 outline-none"
            type="password"
            />
        </div>
        <div className="w-[90%] flex h-[60px] justify-center items-center">
        <button
            disabled={
                formData.email && formData.password && formData.rePass
                ? false
                : true
            }
            className={`${
                formData.email && formData.password
                ? "w-[50%]   font-bold text-white text-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center"
                : " bg-slate-300 w-[50%]   font-bold text-white text-xl  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center  "
            } h-[60px] mr-1 `}
            type="submit"
            >
            Sign Up
            </button>
            <button
                onClick={signInWithGoogle}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[50%] h-[60px]"
            >
                Sign In with Google
            </button>
        </div>
        <div className="flex justify- w-full p-6">
          <p>
            You already have an account:{" "}
            <Link className="text-[#7a69a1]" to="/bloghome/bloglogin">
              login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
