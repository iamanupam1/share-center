"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../common/Loader";
import HeroIcon from "../common/HeroIcon";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        setIsLoading(false);
        return;
      }
      router.replace("core");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit}>
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">
            Share Center<span className="text-teal-600">.</span>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-600">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </div>

          <div className="flex flex-column w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-600">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none focus:outline-none"
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <HeroIcon
                name={showPassword ? "EyeIcon" : "EyeSlashIcon"}
                className="text-[#fff]"
              />
            </span>
          </div>
          <button
            className="transform rounded-sm bg-teal-600 py-2 font-bold duration-300 hover:bg-teal-600"
            onClick={handleSubmit}
          >
            {isLoading ? <Loader /> : "Log In"}
          </button>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <p className="text-center text-lg">
            No account?
            <Link
              href="/register"
              className="font-medium text-teal-600 underline-offset-4 hover:underline"
            >
              {" "}
              Create One
            </Link>
          </p>
        </section>
      </form>
    </main>
  );
};

export default LoginForm;
