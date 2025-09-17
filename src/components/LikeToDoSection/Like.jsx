import React, { useState } from "react";

const Like = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cards = [
    {
      image: "/like1.png",
      title: "Create a book",
      shortDesc:
        "If you have an idea for a book and want to create it based on a short description - use Create Button.",
      details: (
        <>
          <p>
            If you want to generate a personalized book, click the{" "}
            <span className="font-semibold">'Create a book'</span> button.
          </p>

          <p className="mt-2">
            Write what your book will be about, e.g.{" "}
            <span className="italic">Adam learns how to eat healthily</span>. And
            we will create the book's content and illustrations.
          </p>

          <h4 className="font-semibold mt-4">How does it work?</h4>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Click the 'Create a book' button.</li>
            <li>Write the title of your book.</li>
            <li>
              Write briefly what you would like your book to be about. We support
              multiple languages, so write the description in the language you
              want your book to be in.
            </li>
            <li>
              Create characters — based on a form, photo or image. If you want to
              create a character based on a photo, choose a photo of good
              quality, not blurred, with a natural facial expression. The face
              should take up most of the photo — just like a portrait.
            </li>
          </ol>

          <p className="italic mt-3">That's it – quick and simple.</p>

          <h4 className="font-semibold mt-4">Additional features:</h4>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Change in the number of pages — depending on the purchased plan
              (from 8 to 16 pages).
            </li>
            <li>
              Additional option — longer text. Then each chapter will have longer
              content.
            </li>
            <li>
              Each book you generate can be edited — text, title, author,
              illustrations, captions/prompts.
            </li>
            <li>Each book you generate can be downloaded in PDF format.</li>
            <li>
              You can order your book in a printed version with a dedication. We
              ship printed books to all countries.
            </li>
            <li>
              You can also sell the book you have generated yourself at any
              marketplace.
            </li>
          </ul>
        </>
      ),
    },
    {
      image: "/like2.png",
      title: "Use a book template",
      shortDesc:
        "Creating books is even faster and more enjoyable thanks to ready-made templates!",
      details: (
        <>
          <p>
            Creating books is even faster and more enjoyable thanks to book
            templates!
          </p>

          <h4 className="font-semibold mt-4">How does it work?</h4>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>
              Upload a photo of your character (yes, you can be the hero of your
              own story) or generate your own character with AI.
            </li>
            <li>
              Pick a ready-made template from our selection of exciting adventures
              and themes.
            </li>
            <li>Click the "generate" button and you're done!</li>
          </ol>

          <p className="italic mt-3">That's it – quick and simple.</p>

          <h4 className="font-semibold mt-4">Why you'll love it:</h4>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <span className="font-semibold">Super Fast:</span> Book creation in
              just a few clicks!
            </li>
            <li>
              <span className="font-semibold">Personalized:</span> You decide who
              gets to be the main character!
            </li>
            <li>
              <span className="font-semibold">AI Magic:</span> Watch as AI brings
              your story to life in seconds.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-left px-6 mb-12">
        What would you like to do ?
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
        {cards.map((card, index) => {
          const expanded = expandedIndex === index;
          return (
            <div
              key={index}
              style={
                !expanded
                  ? { backgroundImage: `url(${card.image})` }
                  : undefined
              }
              className={`relative rounded-xl p-6 shadow-lg transition-all duration-300 ease-in-out overflow-hidden text-gray-900 ${
                expanded
                  ? "bg-[#f7f7f7]"
                  : "bg-cover bg-center h-120 flex flex-col justify-end"
              }`}
            >
              {/* Expanded → show small image */}
              {expanded && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 object-contain mb-4"
                />
              )}

              <h3 className="text-xl font-semibold">{card.title}</h3>

              {!expanded ? (
                <>
                  <p className="mt-3 text-sm">{card.shortDesc}</p>
                  <button
                    onClick={() => setExpandedIndex(index)}
                    className="mt-4 text-sm font-medium text-yellow-600 hover:underline"
                  >
                    See more →
                  </button>
                </>
              ) : (
                <>
                  <div className="mt-4 text-sm space-y-3">{card.details}</div>
                  <button
                    onClick={() => setExpandedIndex(null)}
                    className="mt-6 text-sm font-medium text-teal-600 hover:underline"
                  >
                    ← See less
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Like;
