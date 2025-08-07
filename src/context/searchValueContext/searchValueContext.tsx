// context/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Type {
  isValue: string;
  setIsValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchValueContext = createContext<Type | undefined>(undefined);

const MyProviderSearch = ({ children }: { children: ReactNode }) => {
  const [isValue, setIsValue] = React.useState("");
  return (
    <SearchValueContext.Provider value={{ isValue, setIsValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export const useSearchValue = () => {
  const context = useContext(SearchValueContext);
  if (!context) {
    throw new Error("useSearchValue must be used within a MyProvider");
  }
  return context;
};

export default MyProviderSearch;
