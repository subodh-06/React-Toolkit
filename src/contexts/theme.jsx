// src/contexts/theme.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Create the context with default values
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
  toggleTheme: () => {},
});

// ThemeProvider component that manages the state
export const ThemeProvider = ({ children }) => {
  // Initialize from localStorage or default to system preference
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem("themeMode");
    if (saved) return saved;
    
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  const toggleTheme = () => setThemeMode(prev => prev === "dark" ? "light" : "dark");

  // Apply theme to DOM and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Add current theme class
    root.classList.add(themeMode);
    
    // Save to localStorage
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("themeMode")) {
        setThemeMode(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}