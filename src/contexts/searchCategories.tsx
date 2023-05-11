import { createContext, useContext, useState } from "react";

interface CategoryContextData {
  categoryId: string;
  setCategoryId: (id: string) => void;
}

interface CategoryContextProps {
  children: React.ReactNode;
}

const CategoryContext = createContext<CategoryContextData>({} as CategoryContextData);

export const CategoryProvider: React.FC<CategoryContextProps> = ({ children }) => {
  const [categoryId, setCategoryId] = useState('0');
  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategoryContext() {
  return useContext(CategoryContext);
}