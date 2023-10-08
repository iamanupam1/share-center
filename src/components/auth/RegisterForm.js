"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "../common/Loader";
import HeroIcon from "../common/HeroIcon";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const resetFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (!email || !fullName || !password) {
      setError("All fields are necessary");
      setIsLoading(false);
      return;
    }
    try {
      const resp = await axios.post("/api/v1/user/register", {
        email,
        fullName,
        password,
      });
      if (resp.data) {
        resetFields();
        setIsLoading(false);
        router.push("/core");
      }
      return null;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleFormSubmit}>
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">
            Share Center<span className="text-teal-600">.</span>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-600">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              className="w-full border-none bg-transparent outline-none focus:outline-none"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-600">
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="w-full border-none bg-transparent outline-none focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-column w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-600">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className="w-full border-none bg-transparent outline-none focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <HeroIcon
                name={showPassword ? "EyeIcon" : "EyeSlashIcon"}
                className="text-white-500"
              />
            </span>
          </div>

          <button
            className="transform rounded-sm bg-teal-600 py-2 font-bold duration-300 hover:bg-teal-600"
            onClick={handleFormSubmit}
          >
            {isLoading ? <Loader /> : "Register"}
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <p className="text-center text-lg">
            Have Account ?
            <Link
              href="/"
              className="font-medium text-teal-600 underline-offset-4 hover:underline"
            >
              {" "}
              Login
            </Link>
          </p>
        </section>
      </form>
    </main>
  );
};

export default RegisterForm;
