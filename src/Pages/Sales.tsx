import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

import SaleItem from "@/Components/UI/SaleItem";

const Sales = () => {
  const context = useContext(DataContext);

  if (!context?.fetchedData) return null;

  return (
    <ul>
      {context.fetchedData.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
