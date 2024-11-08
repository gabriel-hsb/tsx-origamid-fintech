import useFetch from "@/hooks/useFetch";
import React, { createContext } from "react";

import { BASE_URL } from "@/api/apiConstants";

type TypeDataContext = {
  isLoading: boolean;
  error: string | null;
  fetchedData: TypeSells[] | null;
};

const DataContext = createContext<TypeDataContext | null>(null);

const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { fetchedData, error, isLoading } = useFetch<TypeSells[]>({
    URL: BASE_URL,
  });

  return (
    <DataContext.Provider value={{ fetchedData, error, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
