type TypeSells = {
  id: string;
  nome: string;
  preco: number;
  status: TypeSellsStatus;
  pagamento: TypeSellsPayments;
  parcelas: number | null;
  data: "string";
};

type TypeSellsStatus = "pago" | "processando" | "falha";

type TypeSellsPayments = "boleto" | "cartao" | "pix";
