// src/Pages/Templates.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Template = () => {
  const navigate = useNavigate();

  const templates = [
    {
      title: "Fairy Tale",
      description: "Whimsical adventures with magical creatures and happy endings.",
      image: "/tempcard1.png", // make sure images are in public/
      prompt: "A kind fairy helps children find a magical treasure in the forest.",
    },
    {
      title: "Sci-Fi",
      description: "Futuristic stories about space, AI, and technology.",
      image: "/tempcard2.png",
      prompt: "A young astronaut travels with her AI robot to explore a new planet.",
    },
    {
      title: "Adventure",
      description: "Exciting journeys full of discovery and challenges.",
      image: "/tempcard3.png",
      prompt: "Two friends sail across the ocean and discover a hidden island.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Story Templates
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Pick a template to quickly start creating your magical story.
        </p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {templates.map((template, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 flex flex-col border border-gray-100"
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-44 object-cover rounded-lg shadow-sm"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {template.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">
                {template.description}
              </p>
              <button
                onClick={() =>
                  navigate("/create", { state: { prompt: template.prompt } })
                }
                className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                ✨ Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Template;
