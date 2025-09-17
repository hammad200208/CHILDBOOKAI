// src/pages/Create.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Create = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Create your first children's book
        </h1>

        {/* Subheading */}
        <p className="text-center mt-3 text-gray-600">
          Pick one of the features below to create your first children's book
        </p>

        {/* Cards */}
        <div className="mt-12 max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/like1.png"
              alt="Create a book"
              className="w-28 h-28 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">Create a book</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Create a book with just a short title and description – text and
              illustrations will be created by our AI.
            </p>
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition">
              Create a Book
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/like2.png"
              alt="Book template"
              className="w-28 h-28 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">
              Create a book from template
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Create a book based on a selection of predefined templates.
            </p>
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition">
              Create a book from one of our templates
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Create;
