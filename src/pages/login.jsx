import React from 'react'
import '../App.css';

function login() {
  return (
    <div className="login1 containerStyle flex justify-center items-center min-h-screen">
      <div className="hello">
        <h3 className="text-4xl font-semibold text-center mb-6 text-green-500">Welcome To BUY ME</h3>
        <div className="loginbox mb-4">
          <label htmlFor="username" className="block font-medium mb-2  text-green-500">Username:</label>
          <input
            type="text"
          
            name="username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-green-500"
          />
        </div>
        <div className="loginbox mb-6">
          <label htmlFor="password" className="block font-medium mb-2  text-green-500">Password:</label>
          <input
            type="password"
            
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  text-green-400"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ">
          Login
        </button>
      </div>
    </div>
  );
}

export default login
