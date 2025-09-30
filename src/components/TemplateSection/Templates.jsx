// src/components/Templates.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const navigate = useNavigate();
  const images = ["/template1.webp", "/template2.webp", "/template3.webp", "/template4.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 py-16">
      {/* Left Side - Custom Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt="template carousel"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-300 text-black p-2 rounded-full shadow-md"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-300 text-black p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Right Side - Content */}
      <div className="text-left md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          Select the ready-made book templates and create personalized book with your character
        </h2>

        <p className="text-lg text-gray-800">
          We have created interesting books on various topics that will serve as
          book templates. Just replace the character with your own and the book
          is ready! Creating personalized books based on templates is even faster
          and easier.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button
            onClick={() => navigate("/templates")}
            className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Go to Book Templates
          </button>
          <button
            onClick={() => navigate("/guide")}
            className="bg-blue-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            Go to Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
