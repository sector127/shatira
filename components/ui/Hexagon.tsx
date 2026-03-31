import Image from "next/image";
import React from "react";

interface HexagonProps {
  image: string;
  name: string;
  isOddRow?: boolean;
}

const Hexagon: React.FC<HexagonProps> = ({ image, name }) => {
  return (
    <div className="flex flex-row hexagon-container group">
      <div className="hexagon-border transition-all duration-500 group-hover:bg-primary/50">
        <div className="flex flex-col items-center justify-center hexagon bg-card border border-border/50 shadow-inner transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/50">
          <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Image 
                src={image} 
                fill
                alt={name} 
                className="object-contain"
                sizes="48px"
            />
          </div>
          <span className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
