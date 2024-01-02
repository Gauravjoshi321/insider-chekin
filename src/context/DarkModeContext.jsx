import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // Don't use the useState hook for the Dark mode or other thing like this because, on refreshing the state will come to its default position like here on refreshing state will become false again and dark mode will turn to light mode.
  // So that's why we have stored that state in localStorage which will not change on any refresh, only change when you will intentionally remove all data from your browser's local storage.

  // const [isDarkMode, setIsDarkMode] = useState(false);

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia('(prefers-color-scheme: dark)').matches
    , "isDarkMode");

  useEffect(function () {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    }
    else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(mode => !mode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of the DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
