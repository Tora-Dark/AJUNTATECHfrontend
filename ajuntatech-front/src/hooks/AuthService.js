import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL; // Asegúrate de definir esta variable en tu .env.local

// Registro de usuario
export const register = (name, email, password) => {
  return axios.post(`${apiURL}/register`, {
    name,
    email,
    password,
    password_confirmation: password,
  });
};

// Inicio de sesión
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiURL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data)); // Guardar token localmente
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem("user");
};

// Obtener usuario actual
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Cabecera de autenticación para peticiones
export const authHeader = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};
