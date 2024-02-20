import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  UserAuth } from "../../AthContext";

const BlogLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { logIn, signInWithGoogle } = UserAuth(); // user

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
      await logIn(formData.email, formData.password);
      navigate("/bloghome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-start items-center  bg-[#e3eaf0] w-[400px] rounded-3xl shadow-2xl relative"
      >
        <img
          className="rounded-[50%] h-[100px] w-[100px] border border-white=800 absolute top-[-50px]"
          src="../../../images/profile.png"
          alt="profilepic"
        />
        <h1 className="text-4xl font-bold  mt-[55px] p-4 w-[90%] text-[#7198d2] text-center border-b-2 font-Pacifico">
          Welcome Back
        </h1>
        <div className={`${
              formData.email
                ? "before:font-bold befor:absolute before:top-[-16px] before:left-[28px] "
                : "before:top-[18px] before:left-[28px]"
            } flex justify-center items-center w-full relative    before:absolute before:content-['Email...'] before:font-semibold focus-within:before:font-bold
           before:left-[10px]
          focus-within:before:top-[-16px]  before:duration-300 d] rounded-lg my-4 mt-6 text-black`}>
            <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="bg-[#d5e1eb] w-[90%] h-[60px] border rounded-2xl  p-2 outline-none text-black"
            type="email"
            />
        </div>
        <div className={`${
              formData.password
                ? "before:font-bold befor:absolute before:top-[-16px] before:left-[28px] "
                : "before:top-[18px] before:left-[28px]"
            } flex justify-center items-center w-full relative    before:absolute before:content-['Password...'] before:font-semibold focus-within:before:font-bold
           before:left-[10px]
          focus-within:before:top-[-16px] before:duration-300 d] rounded-lg my-4 mt-6 text-black`}>
            <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            className="bg-[#d5e1eb] w-[90%] h-[60px] border rounded-2xl  p-2 outline-none text-black"
            type="password"
            />
        </div>
        <div className="w-[90%] flex h-[60px] justify-between items-center">
        <button 
            disabled={
                formData.email && formData.password && formData.rePass
                ? false
                : true
            }
            className={`${
                formData.email && formData.password
                ? "   font-bold text-white text-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center"
                : " bg-slate-300   font-bold text-white text-xl  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center  "
            } w-[48%] h-[60px] mr-1 `}
            type="submit"
            >
            Log In
            </button>
              <div className="w-[48%] flex items-center justify-center h-screen dark:bg-gray-800">
                <button
                type="button"
                 onClick={signInWithGoogle} className="px-4 py-2 border flex justify-center items-center gap-2 bg-white border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 h-[60px] ">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
              </button>
            </div>
        </div>
        <div className="flex justify- w-full p-6">
          <p className="text-black">
            You don't have an account:{" "}
            <Link className="text-[#7a69a1]" to="/bloghome/signup">
              sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default BlogLogin;
