// context/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Type {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<Type | undefined>(undefined);

const MyProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default MyProvider;
