import React from "react";
import { Button } from "./button";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={` ${poppins.className}`}>
      <ul className="flex">
        <li>
          <Link href="#about">
            <Button variant="ghost">About me</Button>
          </Link>
        </li>
        <li>
          <Link href="#portfolio">
            <Button variant="ghost">Portfolio</Button>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </li>
        <li>
          <Button variant="ghost">Blog</Button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
