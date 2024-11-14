// sales api
type TypeSells = {
  id: string;
  nome: string;
  preco: number;
  status: TypeSellsStatus;
  pagamento: TypeSellsPayments;
  parcelas: number | null;
  data: "string";
};

type TypeSingleSell = Omit<TypeSells, "data">;

type TypeSellsStatus = "pago" | "processando" | "falha";

type TypeSellsPayments = "boleto" | "cartao" | "pix";

// weather api
type TypeWeatherCurrent = {
  ["current"]: {
    temp_c: number;
    temp_f: number;
    [condition]: {
      text: string;
      code: number;
    };
  };
  ["location"]: {
    country: string;
    name: string;
  };
};
