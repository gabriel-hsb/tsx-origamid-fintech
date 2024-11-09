const SaleItem = ({ sale }: { sale: TypeSells }) => {
  return (
    <div className="grid items-center gap-5 mb-2 box grid-cols-auto-auto-1fr">
      <a href="" className="font-mono text-inherit">
        {sale.id}
      </a>

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
