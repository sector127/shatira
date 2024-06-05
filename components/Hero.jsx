"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {anton, poppins} from "@/lib/fonts";
import { ClipboardCheck } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex items-center h-[calc(100vh-105px)]">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center text-center hero__dsc ${anton.className}`}
            >
                <h1 className="mb-4 text-4xl lg:text-6xl text-white drop-shadow-2xl">
                    I{"'"}m a Web Developer
                </h1>
                <h2 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-base lg:text-3xl">
                    From Tbilisi, Georgia
                </h2>
                <Link href="/#contact">
                    <Button className={`w-36 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-in-out hover:-translate-y-1 hover:shadow-md ${poppins.className}`}>
                        HIRE ME!
                        <ClipboardCheck className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center hero__image"
            >
                <Image
                    src="/assets/images/hero.png"
                    alt="Hero Image"
                    width={500}
                    height={240}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-auto h-auto"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
