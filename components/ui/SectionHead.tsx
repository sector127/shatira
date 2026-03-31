import React from "react";

interface SectionHeadProps {
  title: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title }) => {
  return (
    <div className="flex flex-col mb-16 items-start w-full border-b-4 border-foreground relative h-20">
      <h2 className="absolute top-4 left-0 text-black text-5xl lg:text-7xl font-black uppercase tracking-tighter bg-primary px-6 py-2 shadow-brutal border-2 border-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHead;
