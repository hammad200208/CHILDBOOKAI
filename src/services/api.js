// --- Base URLs ---
const LOCAL_BASE = "http://localhost:5000/api"; 
const PROD_BASE = "https://childbookai.vercel.app/api"; 
const BASE_URL = import.meta.env.MODE === "development" ? LOCAL_BASE : PROD_BASE;

console.log("🔎 MODE:", import.meta.env.MODE);
console.log("🔎 BASE_URL:", BASE_URL);

// --- Helper to handle responses ---
const handleResponse = async (response) => {
  if (!response.ok) {
    let errorMsg = "Something went wrong";
    try {
      const errorData = await response.json();
      errorMsg = errorData.message || errorMsg;
    } catch {
      const errorText = await response.text();
      if (errorText) errorMsg = errorText;
    }
    throw new Error(errorMsg);
  }
  return await response.json();
};

// --- Book Generation API ---
export const generateBook = async (prompt) => {
  try {
    const token = localStorage.getItem("token"); // ✅ get JWT

    const response = await fetch(`${BASE_URL}/book/generate`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}) // ✅ attach token if exists
      },
      body: JSON.stringify({ prompt }),
    });

    return await handleResponse(response);
  } catch (err) {
    console.error("API error (generateBook):", err);
    throw err;
  }
};

// --- Register API ---
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  } catch (err) {
    console.error("API error (registerUser):", err);
    throw err;
  }
};

// --- Login API ---
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await handleResponse(response);

    // ✅ save token for authenticated requests
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  } catch (err) {
    console.error("API error (loginUser):", err);
    throw err;
  }
};
