import React, { useState } from "react";
import {
  FaPlusCircle,
  FaTags,
  FaBookOpen,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-transparent px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <h1
        onClick={handleLogoClick}
        className="text-2xl font-bold tracking-wide text-black cursor-pointer hover:text-yellow-500 transition"
      >
        CHILDBOOK.AI
      </h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 items-center font-medium">
        <li className="flex items-center gap-2 text-black hover:text-yellow-500 transition cursor-pointer">
          <FaPlusCircle /> CREATE
        </li>
        <li className="flex items-center gap-2 text-black hover:text-yellow-500 transition cursor-pointer">
          <FaTags /> PRICING
        </li>
        <li className="flex items-center gap-2 text-black hover:text-yellow-500 transition cursor-pointer">
          <FaBookOpen /> TEMPLATES
        </li>
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        {/* Cart */}
        <FaShoppingCart className="text-black hover:text-yellow-500 text-xl cursor-pointer transition" />

        {/* Show Login / Logout based on state */}
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-black hover:text-yellow-500 transition cursor-pointer"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="text-black hover:text-yellow-500 transition cursor-pointer"
          >
            LOGIN
          </button>
        )}
      </div>

      {/* Mobile Right Side: Cart + Toggle */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Cart */}
        <FaShoppingCart className="text-black hover:text-yellow-500 text-xl cursor-pointer transition" />

        {/* Toggle Button */}
        <button
          className="text-2xl text-black hover:text-yellow-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-left gap-6 px-2 py-6 font-medium md:hidden z-50">
          <a className="flex items-center gap-2 text-black hover:text-yellow-500 transition">
            <FaPlusCircle /> CREATE
          </a>
          <a className="flex items-center gap-2 text-black hover:text-yellow-500 transition">
            <FaTags /> PRICING
          </a>
          <a className="flex items-center gap-2 text-black hover:text-yellow-500 transition">
            <FaBookOpen /> TEMPLATES
          </a>

          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setMenuOpen(false);
              }}
              className="text-black hover:text-yellow-500 transition cursor-pointer"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setMenuOpen(false);
              }}
              className="text-black hover:text-yellow-500 transition cursor-pointer"
            >
              LOGIN
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
