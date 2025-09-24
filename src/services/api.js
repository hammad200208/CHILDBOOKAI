// src/services/api.js

export const generateBook = async (prompt, imageCount = 1) => {
  try {
    const response = await fetch("http://localhost:5000/api/book/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, imageCount }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate story");
    }

    const data = await response.json();
    return data; // { story, images: [...] }
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
