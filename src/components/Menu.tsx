"use client";
import React, { useState } from "react";
import Image from "next/image"; // Correct import for Next.js
import Link from "next/link"; // Assuming Link will be used in the dropdown or somewhere else.

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer" // Changed 'class' to 'className' for React
        onClick={() => setIsOpen((prev) => !prev)} // Corrected arrow function syntax
      />
      {isOpen && (
        <div className="menu-dropdown"> {/* Added a container for the dropdown */}
          {/* You can add menu items here */}
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
