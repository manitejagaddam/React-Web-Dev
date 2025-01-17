// import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-teal-500 via-blue-400 to-emerald-600">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Login</h1>
        <form className="flex flex-col w-full space-y-4">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition-all duration-200 bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-teal-500 hover:underline">
              Sign up
            </a>
          </p>
          <p>
            <a href="#" className="text-teal-500 hover:underline">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
