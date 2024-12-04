'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import "../style/header.css";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      {/* Left Section */}
      <div>
        <h1 className="logo">MUBASHIR</h1>
      </div>

      {/* Right Section */}
      <nav className="header-right" aria-label="Main navigation">
        {/* Navigation Links (Visible on Desktop) */}
        <ul className="header-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Toggle Icon (Visible on Mobile) */}
        <div className="menu-icon">
          <Image
            src="/menu.png"
            alt="menu"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Dropdown Menu (Visible on Mobile when toggled) */}
        {isMenuOpen && (
          <div className="menu-dropdown">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
