"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 bg-opacity-10 border-t border-slate-900 text-white">
      <div className="container mx-auto flex flex-row items-center justify-between md:justify-evenly">
        {/* Social */}
        <ul className="flex flex-col items-start py-5">
          <Button variant="link" className="text-white">
            <Link href="https://github.com/sector127">GitHub</Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="https://www.instagram.com/shatirishviligiorgi/">
              Instagram
            </Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="https://www.linkedin.com/in/giorgi-shatirishvili-ba5224151/">
              LinkedIn
            </Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="https://twitter.com/sector127">Twitter</Link>
          </Button>
        </ul>

        {/* Menu */}
        <ul className="flex flex-col items-start py-5">
          <Button variant="link" className="text-white">
            <Link href="/#about">About</Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="/#portfolio">Portfolio</Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="/#contact">Contact</Link>
          </Button>
          <Button variant="link" className="text-white">
            <Link href="#">Blog</Link>
          </Button>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2 max-w-screen-sm mx-auto pb-5">
        <Image
          src="/assets/images/b-w_logo-sm.png"
          alt="shatira-logo"
          width={30}
          height={30}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />
        <p className="text-sm">
          &copy; {currentYear} Shatira.dev - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
