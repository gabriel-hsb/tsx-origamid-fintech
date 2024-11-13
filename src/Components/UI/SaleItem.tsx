import { NavLink } from "react-router-dom";

const SaleItem = ({ sale }: { sale: TypeSells }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-3 mb-2 md:gap-5 box md:grid-cols-auto-auto-1fr">
      <NavLink
        to={`/sales/${sale.id}`}
        className="font-mono underline text-inherit"
      >
        {sale.id}
      </NavLink>

      <div>{sale.nome}</div>

      <div className="justify-self-start md:justify-self-end">
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
