"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/AuthProvider"; // Asegúrate de usar el contexto

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false); // Estado para manejar la redirección
  const router = useRouter();
  const { login } = useAuth(); // Usamos el contexto para login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    if (!email || !password) {
      setError("Both email and password are required.");
      setLoading(false);
      return;
    }
  
    try {
      const user = await login(email, password); // Asume que `login` devuelve el objeto del usuario
      localStorage.setItem("user", JSON.stringify(user));
      setRedirecting(true); // Cambiar al estado de redirección
      setTimeout(() => {
        router.push("/intranet");
      }, 2000); // Espera 2 segundos antes de redirigir
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  if (redirecting) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Redirecting...</h2>
        <p className="text-sm text-gray-700">
          Please wait while we redirect you to the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="login-container max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4">
            <strong>Error:</strong> {error}
          </p>
        )}
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
