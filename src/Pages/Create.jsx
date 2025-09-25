// src/pages/Create.jsx
import React, { useState } from "react";
import Footer from "../components/reusable/Footer";
import { generateBook } from "../services/api";

const Create = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onGenerate = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt");
    setLoading(true);
    setResult(null);
    try {
      const data = await generateBook(prompt);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Create Your First Children’s Book ✨
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Give a short prompt and our AI will generate a magical story and an
            illustration just for you.
          </p>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full mt-6 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
            placeholder="e.g. A friendly dragon learns to share candies with children"
          />

          <button
            onClick={onGenerate}
            disabled={loading}
            className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Generating..." : "✨ Generate Story + Image"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
            {result.image && (
              <div className="overflow-hidden rounded-lg shadow-md mb-6">
                <img
                  src={result.image}
                  alt="Generated illustration"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">📖 Story</h2>
              <p className="whitespace-pre-wrap leading-relaxed text-gray-700 text-lg">
                {result.story}
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Create;
