import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch ("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      };

      setLoading(false);
      setError(null);
      navigate("/");
    } 
    catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
  };

  return (
    <section class="bg-[#e6e6e6] dark:bg-[#242424]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#000000] dark:border-[#ffffff] ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log In
            </h1>
            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your mail address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1d1c1c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1d1c1c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-sm rounded-lg font-bold text-black border-2 border-[#ffffff] bg-[#ffffff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#ffffff]"
              >
                {loading ? "Loading...":"Login"}
              </button>
              <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link to="/signup">
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup here
                  </a>
                </Link>
              </p>
            </form>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
