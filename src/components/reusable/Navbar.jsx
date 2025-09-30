import React, { useState } from "react";
import {
  FaPlusCircle,
  FaTags,
  FaBookOpen,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide text-black cursor-pointer hover:text-yellow-500 transition"
      >
        CHILDBOOK.AI
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 items-center font-medium">
        <li>
          <Link
            to="/Create"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
          >
            <FaPlusCircle /> CREATE
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
          >
            <FaTags /> PRICING
          </Link>
        </li>
        <li>
          <Link
            to="/templates"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
          >
            <FaBookOpen /> TEMPLATES
          </Link>
        </li>
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        <FaShoppingCart className="text-black hover:text-yellow-500 text-xl cursor-pointer transition" />

        {/* Register always visible */}
        <Link
          to="/register"
         className="text-black hover:text-yellow-500 transition cursor-pointer">
          REGISTER
        </Link>

        {/* Login / Logout */}
        {!isLoggedIn ? (
          <Link
            to="/login"
            onClick={() => setIsLoggedIn(true)}
            className="text-black hover:text-yellow-500 transition cursor-pointer"
          >
            LOGIN
          </Link>
        ) : (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-black hover:text-yellow-500 transition cursor-pointer"
          >
            LOGOUT
          </button>
        )}
      </div>

      {/* Mobile Right Side: Cart + Toggle */}
      <div className="flex items-center gap-4 md:hidden">
        <FaShoppingCart className="text-black hover:text-yellow-500 text-xl cursor-pointer transition" />
        <button
          className="text-2xl text-black hover:text-yellow-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-left gap-6 px-6 py-6 font-medium md:hidden z-50">
          <Link
            to="/create"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaPlusCircle /> CREATE
          </Link>
          <Link
            to="/pricing"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaTags /> PRICING
          </Link>
          <Link
            to="/templates"
            className="flex items-center gap-2 text-black hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaBookOpen /> TEMPLATES
          </Link>

          {/* Register always visible */}
          <Link
            to="/register"
            className="text-black hover:text-yellow-500 transition cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            REGISTER
          
          </Link>

          {/* Login / Logout */}
          {!isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setMenuOpen(false);
              }}
              className="text-black hover:text-yellow-500 transition cursor-pointer"
            >
              LOGIN
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setMenuOpen(false);
              }}
              className="text-black hover:text-yellow-500 transition cursor-pointer"
            >
              LOGOUT
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
