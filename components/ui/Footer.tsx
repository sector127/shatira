"use client";
import React from "react";
import { Button } from "./button";
import { anton } from "@/lib/fonts";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-4 border-foreground text-foreground">
      <div className="container mx-auto flex flex-row items-center justify-between md:justify-evenly">
        {/* Social */}
        <ul className="flex flex-col items-start py-5">
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="https://github.com/sector127">GitHub</Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="https://www.instagram.com/shatirishviligiorgi/">
              Instagram
            </Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="https://www.linkedin.com/in/giorgi-shatirishvili-ba5224151/">
              LinkedIn
            </Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="https://twitter.com/sector127">Twitter</Link>
          </Button>
        </ul>

        {/* Menu */}
        <ul className="flex flex-col items-start py-5">
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="/#about">About</Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="/#portfolio">Portfolio</Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="/#contact">Contact</Link>
          </Button>
          <Button variant="link" className="text-foreground hover:text-primary transition-colors">
            <Link href="#">Blog</Link>
          </Button>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4 max-w-screen-sm mx-auto pb-5 border-t border-border/50 pt-5 mt-5">
        <p className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 flex-wrap justify-center">
          &copy; {currentYear} 
          <span className={`bg-primary text-black px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_var(--foreground)] ${anton.className} text-lg tracking-tighter`}>
            SHATIRA.DEV
          </span>
          - ENGINEERED FOR EXCELLENCE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
