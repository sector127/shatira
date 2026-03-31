"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { anton, inconsolata } from "@/lib/fonts";
import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-105px)] py-20 px-4 overflow-hidden border-b-4 border-border bg-[url('/assets/images/noise.png')] bg-repeat">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className={`flex flex-col items-center text-center z-10 w-full max-w-5xl ${anton.className}`}
      >
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`flex items-center gap-2 px-4 py-2 bg-primary text-black border-2 border-foreground shadow-brutal mb-10 ${inconsolata.className}`}
        >
            <Zap size={16} className="animate-pulse" />
            <span className="uppercase tracking-widest font-bold text-sm">System Online // Available for hire</span>
        </motion.div>
        
        <h1 className="mb-6 text-6xl md:text-8xl lg:text-[10rem] text-foreground font-black leading-none tracking-tighter uppercase inline-block animate-brutal-glitch">
          FRONTEND <br/> 
          <span className="text-primary relative inline-block">
            <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] text-border -z-10 bg-transparent">ENGINEER</span>
            ENGINEER
          </span>
        </h1>
        
        <div className={`mt-8 mb-12 max-w-2xl mx-auto border-2 border-foreground bg-card p-6 shadow-brutal relative ${inconsolata.className}`}>
          <div className="absolute -top-3 -left-3 bg-primary w-6 h-6 border-2 border-foreground shadow-brutal"></div>
          <div className="absolute -bottom-3 -right-3 bg-primary w-6 h-6 border-2 border-foreground shadow-brutal"></div>
          <p className="text-xl md:text-2xl text-foreground font-bold">
            Based in Tbilisi, Georgia. I don&apos;t just write code; I engineer high-performance visual experiences. BOLD decisions only. Uncompromising quality.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 w-full justify-center max-w-lg ${inconsolata.className} mt-8`}>
          <Link href="/#contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto text-lg h-16 px-8 flex items-center justify-center gap-2">
              INITIATE CONTACT
              <ArrowUpRight className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/#portfolio" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto text-lg h-16 px-8 flex items-center justify-center font-bold">
              VIEW LOGS
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Marquee Background Element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t-4 border-border bg-primary text-black py-4 z-20">
        <div className={`flex whitespace-nowrap animate-marquee items-center space-x-8 text-3xl font-black uppercase ${anton.className}`}>
          {[...Array(6)].map((_, i) => (
             <span key={i} className="mx-4 flex-shrink-0">MODERN FRONTEND DEV • BOLD DECISIONS • PRECISION EXECUTION • VISUAL ENGINEERING • </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
