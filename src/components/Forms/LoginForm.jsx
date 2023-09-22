import React, { useState } from "react";
import backgroundImage from "../../assets/bg.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      {/* Background Image */}
      <div
        className="w-screen bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay to center content */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          {/* Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Welcome Back!
            </h1>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              // onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            {/* <Link to="/" className="text-blue-500 hover:underline">
              Register
            </Link> */}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
