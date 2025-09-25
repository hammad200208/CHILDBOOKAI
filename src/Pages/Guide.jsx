// src/pages/Guide.jsx
import React from "react";
import Footer from "../components/reusable/Footer";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <>
      {/* Content */}
      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            📘 How to Create Your Own Story
          </h1>
          <p className="mt-4 text-gray-600 text-center">
            Follow these steps to generate a fun, illustrated children’s story
            using our AI-powered tool.
          </p>

          <div className="mt-10 space-y-8">
            {/* Step 1 */}
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-500">
                1. Write a Prompt ✍️
              </h2>
              <p className="mt-2 text-gray-700">
                Go to the{" "}
                <Link to="/create" className="text-blue-500 underline">
                  Create Page
                </Link>{" "}
                and enter a short description of the story you want. For
                example:
              </p>
              <pre className="mt-3 bg-gray-100 p-3 rounded-md text-sm">
                "A brave little cat who saves a village from a storm"
              </pre>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-500">
                2. Generate Story & Image 🎨
              </h2>
              <p className="mt-2 text-gray-700">
                Click on <span className="font-semibold">Generate</span>. The AI
                will create a unique story and a beautiful illustration to match
                your prompt.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-500">
                3. Edit & Save 📖
              </h2>
              <p className="mt-2 text-gray-700">
                Read your generated story. You can refine your prompt and
                generate again if you want different results. Save your story
                for later use or share it with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Guide;
