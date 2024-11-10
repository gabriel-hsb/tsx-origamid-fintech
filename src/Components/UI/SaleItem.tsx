import { NavLink } from "react-router-dom";

const SaleItem = ({ sale }: { sale: TypeSells }) => {
  return (
    <div className="grid items-center gap-5 mb-2 box grid-cols-auto-auto-1fr">
      <NavLink to={`/sales/${sale.id}`} className="font-mono text-inherit">
        {sale.id}
      </NavLink>

      <div>{sale.nome}</div>

      <div className="justify-self-end">
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
