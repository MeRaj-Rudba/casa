import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import { signIn } from "next-auth/react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        //set auth state
        router.replace("/profile");
      }
      // const response = await fetch(`http://localhost:5000/auth/login`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(loginData),
      // });

      // const jsonResponse = await response.json();

      // console.log(jsonResponse);
      // console.log(jsonResponse.userId);
      // console.log(jsonResponse.token);

      // setLoggedInUser(jsonResponse.user);

      // localStorage.setItem("userData", JSON.stringify(jsonResponse));
      // router.push("/profile/");
      clearData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-sm bg-gray-800  p-5 rounded-md mt-10 mb-10">
      <form className="  rounded  p-5 mb-4" onSubmit={handleLogin}>
        <h1 className="font-semibold mb-4 text-xl text-pink-500">Login</h1>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>

        <div className="mb-4">
          <button
            onClick={props.handleToggle}
            className="mt-4  font-semibold text-pink-500 hover:underline"
          >
            Create an account
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus-within:bg-pink-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
