"use client";
import React, { useState } from "react";
import { inconsolata } from "@/lib/fonts";
import { ChevronRight, FileImage, FileJson, Info, X } from "lucide-react";
import { tabContents } from "@/components/tabContents";

const AboutMe = () => {
  // Array of line numbers
  const lineNumbers = Array.from(Array(20).keys());
  const [activeTab, setActiveTab] = useState<keyof typeof tabContents>("ABOUTME.md");

  return (
    <div
      id="about"
      className={`text-foreground w-full md:w-[672px] lg:flex-1 max-h-[500px] ${inconsolata.className} relative group`}
    >
      <div className="brutal-card rounded-none p-0 flex flex-col h-full bg-card min-h-[500px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b-2 border-border bg-primary px-4 py-2 text-black">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((tab, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 whitespace-nowrap px-3 py-1.5 transition-all text-xs font-bold border-2 ${
                  activeTab === tab
                    ? "bg-card border-border text-foreground border-b-0 translate-y-[2px]"
                    : "bg-transparent border-transparent text-black/70 hover:text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "ABOUTME.md" && <Info size={14} className="text-blue-500" />}
                {tab === "skills.json" && <FileJson size={14} className="text-yellow-500" />}
                {tab === "my-pic.png" && <FileImage size={14} className="text-purple-500" />}
                <span>{tab}</span>
                {tab === activeTab && <X size={12} className="ml-1 opacity-50 hover:opacity-100" />}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="h-4 w-4 bg-foreground border-2 border-background" />
            <div className="h-4 w-4 bg-foreground border-2 border-background" />
            <div className="h-4 w-4 bg-foreground border-2 border-background" />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-muted px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground border-b-2 border-border">
          <span>{activeTab === "my-pic.png" ? "public / assets / images" : activeTab === "skills.json" ? "lib" : "root"}</span>
          <ChevronRight size={12} />
          <span className="text-foreground/60">{activeTab}</span>
        </div>

        {/* Content Area */}
        <div className="flex bg-background/50 h-[400px] overflow-hidden">
          {/* Gutter */}
          <div className="flex flex-col items-center border-r border-border bg-muted/20 py-4 px-3 select-none">
            {lineNumbers.map((number, index) => (
              <span key={index} className="text-muted-foreground/30 text-[10px] leading-6 h-6">
                {number + 1}
              </span>
            ))}
          </div>
          
          {/* Code Editor */}
          <div className="flex-1 p-6 h-full overflow-y-auto custom-scrollbar text-sm leading-relaxed">
            <div className="text-foreground/90 animate-in fade-in slide-in-from-left-2 duration-500">
              {tabContents[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
