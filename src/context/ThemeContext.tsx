
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    // Load theme from localStorage or system preference
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setClass(stored);
      setThemeState(stored);
    } else {
      // Auto-detect
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setClass(prefersDark ? "dark" : "light");
      setThemeState(prefersDark ? "dark" : "light");
    }
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    localStorage.setItem("theme", next);
    setClass(next);
  };

  function setClass(next: Theme) {
    if (next === "system") {
      // fallback to user's OS preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      document.documentElement.classList.toggle("light", !prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.classList.toggle("light", next === "light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
