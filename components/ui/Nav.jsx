"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { Button } from "./button";

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
    console.log("close");
  };

  return (
    <div className="flex items-center w-full justify-center mb-20">
      <nav
        className={`flex fixed top-0 justify-between items-center w-screen max-w-screen-2xl p-8 lg:p-2 text-white z-20 transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-shatira bg-opacity-40 border-r border-b border-l border-slate-900 shadow-md rounded-b-lg"
            : "bg-opacity-0 border-transparent"
        }`}
        style={{
          backdropFilter: `blur(${scrolled ? "10px" : "0px"})`,
        }}
      >
        <div className="relative flex items-center w-full justify-between overflow-hidden">
          <Link href="/" className="flex flex-col justify-between items-center">
            <Image
              src="/assets/images/b-w_logo-sm.png"
              alt="shatira-logo"
              width={30}
              height={30}
              className={`object-contain transition-all duration-700 ${
                scrolled ? "md:translate-y-3" : ""
              }`}
              style={{ width: "auto", height: "auto" }}
              loading="lazy"
            />
            <span
              className={`hidden lg:flex text-lg transition-opacity duration-300 ease-in-out ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              Shatira.dev
            </span>
          </Link>
          <div className="lg:hidden">
            {/* Burger menu for small and medium screens */}
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
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
          {/* Navigation menu for large screens */}
          <div className="hidden lg:flex">
            <Menu />
          </div>
        </div>
      </nav>
      {/* Burger menu contents for small and medium screens */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-shatira bg-opacity-80 z-10 text-white animate-burgerSlideIn">
          <ul className="flex flex-col items-center justify-center h-full">
            <li>
              <Link href="#about" onClick={closeMenu}>
                <Button variant="ghost">About me</Button>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" onClick={closeMenu}>
                <Button variant="ghost">Portfolio</Button>
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMenu}>
                <Button variant="ghost">Contact</Button>
              </Link>
            </li>
            <li>
              <Button variant="ghost">Blog</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
