// src/services/api.js
export const generateBook = async (prompt) => {
  try {
    const response = await fetch("https://childbookai.vercel.app/api/book/generate", {
    // const response = await fetch("http://localhost:5000/api/book/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate book");
    }

    const data = await response.json();
    return data; // { story, image }
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
