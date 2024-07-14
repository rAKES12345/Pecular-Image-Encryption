// src/app/RootLayoutClient.js
"use client";

import { Inter } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import Menu from "@/routes/menu/Menu";
import Footer from "@/routes/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// Create a context
export const AuthContext = createContext();

export default function RootLayoutClient({ children }) {
  const [menuOptions, setMenuOptions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/admin":
        setMenuOptions(isLoggedIn ? ["HOME", "USERS", "IMAGES", "LOGOUT"] : ["HOME", "USER", "REGISTER", "ADMIN"]);
        break;
      case "/users":
        setMenuOptions(["HOME", "USERS", "IMAGES", "LOGOUT"]);
        break;
      case "/images":
        setMenuOptions(["HOME", "USERS", "IMAGES", "LOGOUT"]);
        break;
      case "/user":
        setMenuOptions(isLoggedIn ? ["HOME", "SHAREIMAGE", "VIEW", "LOGOUT"] : ["HOME", "USER", "REGISTER", "ADMIN"]);
        break;
      case "/view":
        setMenuOptions(["HOME", "SHAREIMAGE", "VIEW", "LOGOUT"]);
        break;
      case "/shareimage":
        setMenuOptions(["HOME", "SHAREIMAGE", "VIEW", "LOGOUT"]);
        break;
        case "/logout":
        setMenuOptions([])
      case "/home":
      default:
        setMenuOptions(["HOME", "USER", "REGISTER", "ADMIN"]);
        break;
    }
  }, [isLoggedIn]); // Add isLoggedIn to dependency array

  return (
    <div className={inter.className}>
      <Menu options={menuOptions} />
      {/* Provide AuthContext value */}
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
      <Footer />
    </div>
  );
}
