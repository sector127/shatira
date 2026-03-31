"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { inconsolata } from "@/lib/fonts";

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootLog = [
    "BIOS Date 10/25/11 14:38:55 Ver 08.00.15",
    "CPU: BRUTALIST_ENGINE_V9",
    "Speed: 4.80 GHz",
    "Press DEL to run Setup",
    "Press F8 for BBS POPUP",
    "Initializing USB Controllers... Done.",
    "2048MB OK",
    "[OK] Boot Sequence Initiated",
    "[OK] Loading System Modules......................",
    "[OK] Mounting Visual Engineering Drivers.........",
    "[WARN] High Contrast Mode Enforced",
    "[OK] Connecting to SHATIRA.DEV mainframe.......",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, bootLog[currentLine]]);
      currentLine++;
      
      if (currentLine >= bootLog.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500); // Wait a half second after text completes before snapping to the regular site
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className={`fixed inset-0 z-[10000] bg-background flex flex-col justify-start p-8 ${inconsolata.className}`}
      exit={{ opacity: 0, scale: 1.05, filter: "brightness(2)" }}
      transition={{ duration: 0.15, ease: "easeIn" }}
    >
      <div className="flex flex-col gap-2 max-w-3xl w-full mx-auto mt-20">
        {lines.map((line, i) => (
          <div key={i} className="text-primary text-xl font-bold uppercase tracking-widest leading-none">
            {line}
          </div>
        ))}
        {lines.length < bootLog.length && (
          <div className="w-4 h-6 bg-primary animate-pulse ml-1 mt-2"></div>
        )}
      </div>
    </motion.div>
  );
};

export default BootSequence;
