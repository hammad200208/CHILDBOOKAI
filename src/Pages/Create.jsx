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
      const data = await generateBook(prompt, 1); // 1 image by default
      setResult(data); // { story, images: [...] }
    } catch (err) {
      console.error(err);
      alert("Failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Create your first children's book
          </h1>
          <p className="mt-3 text-gray-600">
            Give a short prompt and our AI will generate a story and an illustration.
          </p>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full mt-6 p-3 border rounded-lg"
            placeholder="e.g. A friendly dragon learns to share candies with children"
          />

          <button
            onClick={onGenerate}
            disabled={loading}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Story + Image"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
            {result.images?.[0] && (
              <img
                src={result.images[0]}
                alt="Generated illustration"
                className="w-full h-[480px] object-cover rounded-md mb-6"
              />
            )}

            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap">{result.story}</pre>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Create;
