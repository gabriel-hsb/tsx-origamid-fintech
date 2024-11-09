import useFetch from "@/hooks/useFetch";
import React, { createContext, useState } from "react";

import { BASE_URL } from "@/api/apiConstants";

import { daysAgo } from "@/functions/daysAgo";

type TypeDataContext = {
  isLoading: boolean;
  error: string | null;
  fetchedData: TypeSells[] | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<TypeDataContext | null>(null);

const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = useState(daysAgo(14));
  const [endDate, setEndDate] = useState(daysAgo(0));

  const { fetchedData, error, isLoading } = useFetch<TypeSells[]>({
    URL: `${BASE_URL}/?inicio=${startDate}&final=${endDate}`,
  });

  return (
    <DataContext.Provider
      value={{
        fetchedData,
        error,
        isLoading,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
