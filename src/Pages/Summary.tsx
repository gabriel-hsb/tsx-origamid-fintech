import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

import SalesGraph from "@/Components/SalesGraph";

const Summary = () => {
  const context = useContext(DataContext);

  if (!context?.fetchedData) return null;

  const totalMonthSells = context.fetchedData
    .filter((sell) => sell.status !== "falha")
    .reduce((acc, cur) => acc + cur.preco, 0)
    .toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });

  const filterAndSumSales = (status: TypeSellsStatus) => {
    if (!context.fetchedData) return null;

    return context.fetchedData
      .filter((sell) => sell.status === status)
      .reduce((acc, cur) => acc + cur.preco, 0)
      .toLocaleString("en-us", {
        style: "currency",
        currency: "USD",
      });
  };

  return (
    <section>
      <div className="mb-5 text-2xl font-semibold flex-gap">
        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Total Sales</h2>
          {context.isLoading ? (
            <span className="italic">Loading...</span>
          ) : (
            <span>{totalMonthSells}</span>
          )}
        </div>

        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Received</h2>
          {context.isLoading ? (
            <span className="italic">Loading...</span>
          ) : (
            <span>{filterAndSumSales("pago")}</span>
          )}
        </div>

        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Pending</h2>
          {context.isLoading ? (
            <span className="italic">Loading...</span>
          ) : (
            <span>{filterAndSumSales("processando")}</span>
          )}
        </div>
      </div>

      <div className="mb-5 box">
        <SalesGraph fetchedData={context.fetchedData} />
      </div>
    </section>
  );
};

export default Summary;
