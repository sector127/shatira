import Image from "next/image";
import React from "react";

const Hexagon = (props) => {
  return (
    <div className="flex flex-row hexagon-container">
      <div className="hexagon-border">
        <div className="flex flex-col items-center justify-center hexagon bg-shatira hover:bg-blend-exclusion">
          <Image src={props.image} height={50} width={50} alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
