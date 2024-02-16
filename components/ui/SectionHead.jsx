import React from "react";

const SectionHead = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-auto">
      <h2 className="my-16 text-white md:text-3xl lg:text-5xl relative">
        <span className="block pb-4 relative z-10 p-4">{props.title}</span>
        <span className="border-gradient-shatira"></span>
      </h2>
    </div>
  );
};

export default SectionHead;
