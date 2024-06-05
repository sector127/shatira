import React from "react";
import { Button } from "./button";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={`${poppins.className}`}>
      <ul className="flex">
        <li>
          <Link href="/#about">
            <Button className="font-bold" variant="ghost">About me</Button>
          </Link>
        </li>
        <li>
          <Link href="/#portfolio">
            <Button className="font-bold" variant="ghost">Portfolio</Button>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <Button className="font-bold" variant="ghost">Contact</Button>
          </Link>
        </li>
        <Link href={'/blog'}>
          <Button className="font-bold" variant="ghost">Blog</Button>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
