import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Socials from "../constant/Socials"; // Make sure this is correct
import { ImGithub } from "react-icons/im";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 z-50 bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#about-me" className="flex items-center gap-2">
          <img
            src="/Gayatri_Kadhao-removebg-preview.png"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-200 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full">
          <a href="#about-me" className="hover:text-purple-400 transition">About me</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        </nav>

        {/* Socials */}
        <div className="hidden md:flex gap-4 items-center text-white">
          {Socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-all text-xl`}
              >
                <Icon />
              </a>
            );
          })}
        </div>



        {/* Hamburger Menu - Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#030014ec] px-6 py-4 text-white flex flex-col gap-4">
          <a href="#about-me" onClick={toggleMenu}>About me</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <div className="hidden md:flex gap-4 items-center text-white">
          {Socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-all text-xl`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
