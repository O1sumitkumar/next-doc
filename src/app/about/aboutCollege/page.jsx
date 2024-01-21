"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutCollege = () => {
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
  };

  return (
    <div>
      <div>This is aboutCollege page </div>
      <br />
      <br />
      <button type="button" onClick={() => navigateTo("/about")}>
        Back
      </button>
    </div>
  );
};

export default AboutCollege;
