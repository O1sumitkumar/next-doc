"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [user, setUser] = useState<Login>({
    email: "",
    password: "",
  });
  return (
    <>
      <h1>Login </h1>
      <hr />
      <div className="gap-2 flex flex-col">
        <label htmlFor="email" className=" block ">
          Email
        </label>
        <input
          className=" w-fit p-1"
          type="email"
          placeholder="Email"
          name=""
          id="email"
          value={user.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          className="p-1 w-fit"
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({ ...user, password: e.target.value });
          }}
          value={user.password}
        />
        <br />
        <button
          className=" bg-gray-600 w-fit p-2 border-spacing-1 rounded-sm"
          type="submit"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
