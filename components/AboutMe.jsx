"use client";
import React, { useState } from "react";
import { inconsolata } from "@/lib/fonts";
import { ChevronRight, FileImage, FileJson, Info, X } from "lucide-react";
import { tabContents } from "@/components/tabContents";

const AboutMe = () => {
  // Array of line numbers
  const lineNumbers = Array.from(Array(20).keys());
  const [activeTab, setActiveTab] = useState("ABOUTME.md");

  return (
    <div
      id="about"
      className={`text-white w-[300px] md:w-[768px] max-h-[500px] ${inconsolata.className} relative`}
    >
      <div className="bg-gray-900 rounded-sm shadow-2xl container max-h-[500px] px-0 mx-auto border border-slate-700 hero__image">
        <div className="flex items-center justify-between border-b border-gray-950">
          <div className="flex items-center overflow-hidden">
            {Object.keys(tabContents).map((tab, index) => (
              <button
                key={index}
                className={`flex flex-row items-center min-w-36 text-blue-400 border-r border-gray-950 text-sm p-3 ${
                  activeTab === tab
                    ? "border-b border-b-blue-400 text-white"
                    : "hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "ABOUTME.md" && <Info className="mr-1" size={16} />}
                {tab === "skills.json" && (
                  <FileJson className="mr-1" size={16} />
                )}
                {tab === "my-pic.png" && (
                  <FileImage className="mr-1" size={16} />
                )}
                {tab}
                {tab === activeTab ? (
                  <X size={16} className="ml-2 text-gray-700" />
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center p-3">
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            <div className="h-4 w-4 bg-yellow-500 rounded-full mx-1"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center text-sm text-slate-700 px-3 py-0.5 border-b-slate-950 border-b">
          {activeTab === "ABOUTME.md" && (
            <>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                <Info className="mr-1" size={16} />
                {activeTab}
              </span>
            </>
          )}
          {activeTab === "skills.json" && (
            <>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                lib
                <ChevronRight className="ml-1" size={16} />
              </span>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                <FileJson className="mr-1" size={16} />
                {activeTab}
              </span>
            </>
          )}
          {activeTab === "my-pic.png" && (
            <>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                public
                <ChevronRight className="ml-1" size={16} />
              </span>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                assets
                <ChevronRight className="ml-1" size={16} />
              </span>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                images
                <ChevronRight className="ml-1" size={16} />
              </span>
              <span className="flex flex-row items-center hover:text-cyan-300 cursor-pointer">
                <FileImage className="mr-1" size={16} />
                {activeTab}
              </span>
            </>
          )}
        </div>
        <div className="flex">
          <div className="flex-shrink-0 flex flex-col items-center border-r border-slate-800 px-3">
            {lineNumbers.map((number, index) => (
              <span key={index} className="text-slate-700 text-sm">
                {number + 1}
              </span>
            ))}
          </div>
          <div className="ml-3 h-[400px] w-full overflow-y-scroll text-sm">
            {tabContents[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
