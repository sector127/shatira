"use client";
import React from "react";
import Hexagon from "./ui/Hexagon";
import { techStack } from "@/lib/techStackConstants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHead from "./ui/SectionHead";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation is triggered only once
  });
  return (
    <div className="w-1/3">
      <div ref={ref}>
        <motion.div
          className="flex flex-col"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hidden md:flex flex-row flex-wrap justify-start techStackContainer">
            {techStack.map((stack, index) => {
              if (stack) {
                return (
                  <motion.div
                    key={stack.name}
                    className={`${
                      index % 2 !== 0 ? "oddRow" : ""
                    } techStackItem`}
                    variants={item}
                  >
                    <Hexagon
                      image={stack.image}
                      name={stack.name}
                      isOddRow={index % 2 !== 0}
                    />
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
