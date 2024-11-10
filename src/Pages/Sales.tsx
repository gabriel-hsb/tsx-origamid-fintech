import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

import Loading from "@/Components/UI/Loading";
import SaleItem from "@/Components/UI/SaleItem";

const Sales = () => {
  const context = useContext(DataContext);

  if (!context) return null;

  if (!context?.fetchedData) return null;

  if (context.isLoading) return <Loading />;

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
