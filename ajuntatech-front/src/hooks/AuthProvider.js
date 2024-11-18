"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { login as authServiceLogin, logout as authServiceLogout, getCurrentUser } from "@/hooks/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Al cargar, verificamos si el usuario está logueado
  useEffect(() => {
    const loggedInUser = getCurrentUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    setLoading(false); // Una vez verificado, dejamos de cargar
  }, []);

  const login = async (email, password) => {
    try {
      const userData = await authServiceLogin(email, password); // Llamada al servicio
      setUser(userData); // Actualiza el contexto
    } catch (error) {
      throw error; // Propaga el error
    }
  };

  const logout = () => {
    authServiceLogout(); // Elimina el token del localStorage
    setUser(null); // Actualiza el estado del usuario en el contexto
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
