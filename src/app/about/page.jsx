"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
  };

  return (
    <div>
      <div>This is about page </div>
      <br />
      <br />
      <button type="button" onClick={() => navigateTo("about/aboutCollege")}>
        Next
      </button>
    </div>
  );
};

export default About;
