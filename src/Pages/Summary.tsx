import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

const Summary = () => {
  const context = useContext(DataContext);

  if (!context?.fetchedData) return null;

  const totalMonthSells = context.fetchedData
    .filter((sell) => sell.status !== "falha")
    .reduce((acc, cur) => acc + cur.preco, 0)
    .toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  const filterAndSumSales = (status: TypeSellsStatus) => {
    if (!context.fetchedData) return null;

    return context.fetchedData
      .filter((sell) => sell.status === status)
      .reduce((acc, cur) => acc + cur.preco, 0)
      .toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
  };

  return (
    <section>
      <div className="mb-5 text-2xl font-semibold flex-gap">
        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Sales</h2>
          <span>{totalMonthSells}</span>
        </div>

        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Received</h2>
          <span>{filterAndSumSales("pago")}</span>
        </div>

        <div className="box">
          <h2 className="mb-5 text-2xl text-brown-main">Pending</h2>
          <span>{filterAndSumSales("processando")}</span>
        </div>
      </div>

      <div className="box">Gráficos</div>
    </section>
  );
};

export default Summary;
