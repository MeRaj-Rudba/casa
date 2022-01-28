import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();
  const clearData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      gender: gender,
    };

    try {
      const response = await fetch(`http://localhost:5000/auth/signup`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      console.log(response);

      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        //set auth state
        router.replace("/profile");
      }
      clearData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-sm bg-gray-800  p-5 rounded-md mt-10 mb-10">
      <form className="  rounded  p-5 mb-4" onSubmit={handleRegister}>
        <h1 className="font-semibold mb-4 text-xl text-pink-500">Register</h1>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>

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
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Gender
          </label>

          <div className="mt-2">
            <label className="inline-flex items-center text-gray-300">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6 text-gray-300">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          <p className="text-red-500 text-xs italic"></p>
        </div>

        <div className="mb-4">
          <button
            onClick={props.handleToggle}
            className="mt-4 font-semibold text-pink-500 hover:underline"
          >
            Already have an account
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus-within:bg-pink-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
