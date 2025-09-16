// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  // Sample images (replace with your own later)
  const images = [
    "/bookhero.webp",
    "/bookhero1.webp",
    "/bookhero2.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Functions for buttons
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 py-16">
      {/* Left Side */}
      <div className="text-left md:text-left space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
          Create a personalized book in which{" "}
          <span className="font-extrabold">you</span> are the main character
        </h1>

        <p className="text-lg text-gray-800">
          We are one of the few that can boast of{" "}
          <span className="font-semibold">consistent characters</span> generated
          by AI.
        </p>

        <p className="text-lg text-gray-800">
          Turn yourself into the hero of your own book!✨ Add your photo, create
          a story in any language, and edit it to perfection—change
          illustrations, rewrite the plot, and bring your imagination to life.
          Want more? Listen to your book with synchronized text or order a
          printed copy for a magical gift!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Create a Book
          </button>
          <button className="bg-blue-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
            Go to Guide
          </button>
        </div>
      </div>

      {/* Right Side - Carousel */}
<div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
  {/* Images */}
  <img
    src={images[currentIndex]}
    alt="carousel"
    className="w-full h-full object-cover rounded-xl  transition-all duration-700 ease-in-out"
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

    </section>
  );
};

export default Hero;
