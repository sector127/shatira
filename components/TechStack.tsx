"use client";
import React from "react";
import Image from "next/image";
import { techStack } from "@/lib/techStackConstants";
import { inconsolata } from "@/lib/fonts";

const TechStack = () => {
  return (
    <div className="w-full flex justify-center py-10 lg:py-0">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0 border-t-2 border-l-2 border-foreground w-full max-w-5xl bg-foreground">
        {techStack.map((stack, index) => (
          <div
            key={stack.name}
            className="group relative flex flex-col items-center justify-center p-6 bg-background border-r-2 border-b-2 border-foreground hover:bg-primary transition-none cursor-crosshair"
          >
            {/* Tech Index */}
            <span className={`absolute top-2 left-2 text-xs font-bold text-muted-foreground group-hover:text-background ${inconsolata.className}`}>
              [{String(index + 1).padStart(2, '0')}]
            </span>
            
            {/* Tech Icon */}
            <div className="relative w-16 h-16 mb-4 filter transition-none group-hover:scale-110">
              <Image 
                src={stack.image} 
                fill
                alt={stack.name} 
                className="object-contain drop-shadow-[2px_2px_0px_rgba(204,255,0,0.5)] group-hover:drop-shadow-none"
              />
            </div>
            
            {/* Tech Name */}
            <span className={`text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-background ${inconsolata.className}`}>
              {stack.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
