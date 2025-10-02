// src/Pages/Login.jsx
import React, { useState } from "react";
import Footer from "../components/reusable/Footer";
import { loginUser } from "../services/api"; // import API function
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await loginUser(formData); // { message, token }

      // ✅ Save auth token
      localStorage.setItem("authToken", response.token);

      // ✅ Save user email for session reference
      localStorage.setItem("userEmail", formData.email);

      setMessage("Login successful!");
      navigate("/create"); // redirect to Create.jsx
    } catch (err) {
      setMessage(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 py-16">
        <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Login to continue creating your magical stories
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
          )}

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-yellow-500 hover:underline font-semibold"
            >
              Register here
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
