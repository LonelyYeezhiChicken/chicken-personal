import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkMap } from "../../../models";

interface NavLink {
  to: string;
  label: string;
  emoji: string;
}

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("fixed", "top-0", "shadow-md");
        } else {
          header.classList.remove("fixed", "top-0", "shadow-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks: NavLink[] = [
    { to: LinkMap.Home.toString(), label: "雞舍", emoji: "🏠" },
    { to: LinkMap.About.toString(), label: "關於", emoji: "📋" },
    { to: LinkMap.Portfolio.toString(), label: "筆記", emoji: "🎨" },
  ];

  const toggleDarkMode = () => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.toggle("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="h-10 sm:h-16 flex items-center z-30 w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
          {/* <span role="img" aria-label="chicken" className="text-yellow-600">
            🐓
          </span>
          <span className="mr-2">Chicken Say Hi</span> */}
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex md:flex items-center hidden">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="py-1 px-4 flex hover:text-gray-400 transition duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg sm:flex lg:hidden md:hidden items-center hidden">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="py-1 px-4 flex hover:text-gray-300 transition duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:hidden md:hidden sm:hidden  items-center flex">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="py-1 px-4 flex hover:text-gray-300 transition duration-300">
                <span className="sr-only">{link.label}</span>
                <span className="lg:hidden md:hidden">{link.emoji}</span>
              </Link>
            ))}
          </nav>
          <button className="ml-4 focus:outline-none" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <span role="img" aria-label="moon">
              {isDarkMode ? "🌙" : "☀️"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
