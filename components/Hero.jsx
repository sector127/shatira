"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { anton } from "@/lib/fonts";
import { ClipboardCheck, ReceiptText } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center h-[calc(100vh-105px)]">
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className={`justify-center flex flex-col items-center hero__dsc ${anton.className}`}
      >
        <h1 className="mb-4 text-white text-4xl lg:text-6xl drop-shadow-2xl">
          I am Web Developer
        </h1>
        <br />
        <h2 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-base lg:text-3xl text-transparent">
          From 📍 Tbilisi, Georgia
        </h2>
        <Link href="#contact">
          <Button className="w-36 rounded-2xl transition-all ease-in-out duration-1000 hover:-translate-y-1 hover:shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            HIRE ME!
            <ClipboardCheck className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center hero__image"
      >
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={500}
          height={240}
          priority="true"
          style={{ width: "auto", height: "auto" }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
