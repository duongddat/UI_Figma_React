import { createContext, useState } from "react";

export const ModeContext = createContext({
  isDark: false,
  toggleMode: () => {},
});

export default function ModeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleMode() {
    setIsDark((preMode) => !preMode);
  }

  const modelContext = {
    isDark,
    toggleMode,
  };

  return (
    <ModeContext.Provider value={modelContext}>{children}</ModeContext.Provider>
  );
}
