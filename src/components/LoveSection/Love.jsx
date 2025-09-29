// src/components/Love.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; 
 
const Love = () => {
  const navigate = useNavigate();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 py-16">
      {/* Left Side - Content */}
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          What is love? 💕
        </h2>

        <p className="text-lg text-gray-800">
          <span className="font-semibold">Title:</span> What is love?
        </p>

        <p className="text-lg text-gray-800">
          <span className="font-semibold">Description:</span> Sarah and Ben are
          loving siblings. Valentine's Day is coming up and Sarah explains to Ben
          what love and the holiday of love are.
        </p>

        <p className="text-lg text-gray-800">
          <span className="font-semibold">Characters:</span> Sarah - 12 years old
          girl, Ben - 4 years old boy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button
            onClick={() => navigate("/create")}
           className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Create a Book
          </button>
          <button
            onClick={() => navigate("/guide")}
           className="bg-blue-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
            Go to Guide
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center">
        <img
          src="/love.png" 
          alt="Love illustration"
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Love;
