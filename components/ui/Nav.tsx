"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { Button } from "./button";
import { inconsolata, anton } from "@/lib/fonts";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on the scroll position
      setScrolled(window.scrollY > 50);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex items-center w-full justify-center mb-20">
      <nav
        className={`flex fixed top-0 justify-between items-center w-screen max-w-screen-xl p-8 lg:p-4 text-foreground z-[60] transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-background border-b-2 border-border shadow-[0px_4px_0px_0px_rgba(204,255,0,0.3)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="relative flex items-center w-full justify-between overflow-hidden">
          <Link href="/" className="flex items-center">
            <span
              className={`text-2xl md:text-3xl uppercase tracking-tighter ${anton.className} bg-primary text-black px-3 py-1 border-2 border-foreground shadow-[4px_4px_0px_var(--foreground)] transition-transform duration-300 hover:-translate-y-1`}
            >
              SHATIRA.DEV
            </span>
          </Link>
          <div className="lg:hidden text-foreground">
            {/* Burger menu for small and medium screens */}
            <button onClick={toggleMenu} className="p-2 focus:outline-none z-[70] relative">
              {menuOpen ? (
                <svg
                  className="w-6 h-6 transition-transform transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(45)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    animationDuration: "0.5s", // Adjust the duration as needed
                    animationFillMode: "forwards", // Keep the final state after the animation
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Menu />
          </div>
        </div>
      </nav>
      {/* Burger menu contents for small and medium screens */}
      {menuOpen && (
        <div className={`lg:hidden fixed top-0 left-0 w-screen h-screen bg-background z-50 text-foreground animate-burgerSlideIn flex flex-col items-center justify-center border-l-4 border-primary ${inconsolata.className}`}>
          <ul className="flex flex-col items-center justify-center h-full">
            <li>
              <Link href="/#about" onClick={closeMenu}>
                <Button variant="ghost" className="text-lg">About me</Button>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" onClick={closeMenu}>
                <Button variant="ghost" className="text-lg">Portfolio</Button>
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={closeMenu}>
                <Button variant="ghost" className="text-lg">Contact</Button>
              </Link>
            </li>
            <li>
              <Link href={"/blog"} onClick={closeMenu}>
                <Button variant="ghost" className="text-lg">Blog</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
