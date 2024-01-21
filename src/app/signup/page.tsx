"use client";
import React, { useState } from "react";

const Signup: React.FC = () => {
  const [user, setUser] = useState<Signup>({
    email: "",
    password: "",
    name: "",
    username: "",
  });
  return (
    <>
      <h1>SignUp Here </h1>
      <hr />
      <div className="gap-2 flex flex-col pt-10">
        <label htmlFor="name" className=" block ">
          Name
        </label>
        <input
          className=" text-black w-fit p-1"
          type="name"
          placeholder="Name"
          name="name"
          id="name"
          value={user.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="email" className=" block ">
          Email
        </label>
        <input
          className=" text-black w-fit p-1"
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
        <label htmlFor="username" className=" block ">
          Username
        </label>
        <input
          className=" text-black w-fit p-1"
          type="username"
          placeholder="Username"
          name=""
          id="username"
          value={user.username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({
              ...user,
              username: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          className=" text-black w-fit p-1"
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
          SignUp
        </button>
      </div>
    </>
  );
};

export default Signup;
