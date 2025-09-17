import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Column 1 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Book icons created by Freepik - Flaticon
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@childbook.ai"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="#affiliate" className="hover:text-yellow-400">Affiliate Program</a></li>
            <li><a href="#customer" className="hover:text-yellow-400">Customer Portal</a></li>
          </ul>
        </div>

        {/* Column 3 - Features */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#generator" className="hover:text-yellow-400">AI Story Book Generator</a></li>
            <li><a href="#create" className="hover:text-yellow-400">Create Book</a></li>
            <li><a href="#illustrator" className="hover:text-yellow-400">AI Illustrator</a></li>
            <li><a href="#articles" className="hover:text-yellow-400">Articles</a></li>
          </ul>
        </div>

        {/* Column 4 - Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-yellow-400">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Childbook.ai — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
