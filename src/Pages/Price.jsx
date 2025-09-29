// src/Pages/Price.jsx
import React from "react";
import Footer from "../components/reusable/Footer";

const Price = () => {
  const plans = [
    {
      name: "Basic",
      price: "$5",
      description: "Perfect for trying out story generation.",
      features: [
        "Generate 3 stories",
        "1 illustration per story",
        "Download as text",
      ],
      button: "Get Started",
      color: "bg-yellow-300 hover:bg-yellow-400",
    },
    {
      name: "Pro",
      price: "$15",
      description: "Best for regular creators and storytellers.",
      features: [
        "Generate 15 stories",
        "3 illustrations per story",
        "Editable prompts",
        "Download as PDF",
      ],
      button: "Choose Pro",
      color: "bg-blue-300 hover:bg-blue-400",
    },
    {
      name: "Premium",
      price: "$30",
      description: "For professionals and advanced storytellers.",
      features: [
        "Unlimited stories",
        "5+ illustrations per story",
        "Editable prompts",
        "Download as PDF/EPUB",
        "Priority support",
      ],
      button: "Go Premium",
      color: "bg-purple-300 hover:bg-purple-400",
    },
  ];

  return (
    <>
      <section className="py-20 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Choose Your Plan</h1>
          <p className="mt-3 text-gray-600">
            Pick a pricing plan that fits your storytelling needs.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:scale-105 transition"
              >
                <div>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                  <p className="text-4xl font-extrabold mt-4">{plan.price}</p>

                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-500">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 ${plan.color} text-black px-6 py-3 rounded-lg font-semibold transition`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Price;
