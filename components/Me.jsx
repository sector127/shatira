import React from "react";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import SectionHead from "./ui/SectionHead";

const Me = () => {
  return (
    <>
      <SectionHead title="About Me" />
      <div className="flex flex-row flex-wrap max-w-screen-2xl justify-center md:gap-20">
        <AboutMe />
        <TechStack />
      </div>
    </>
  );
};

export default Me;
