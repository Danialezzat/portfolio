import React from 'react'
import {  CiLogout } from 'react-icons/ci'

const Button = ({signUserOut}) => {
  return (
    <button onClick={signUserOut} type="button" className="ml-6 flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-lg" to="/bloghome/bloglogin">LogOut<CiLogout className="font-bold text-2xl"/></button>
  )
}

export default Button