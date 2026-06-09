import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  
  // JWT Token నుండి యూజర్ రోల్ ని సేఫ్‌గా డికోడ్ చేసే ఫంక్షన్
  const getUserRole = () => {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    } catch (e) {
      return null;
    }
  };

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user: token, role: getUserRole(), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}