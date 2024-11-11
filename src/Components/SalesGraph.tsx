import {
  LineChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

type DailySale = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const salesPricesPerDay = (sales: TypeSells[]): DailySale[] => {
  const days = sales.reduce((acc: { [key: string]: DailySale }, cur) => {
    const day = cur.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[day][cur.status] += cur.preco;

    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
};

const SalesGraph = ({ data }: { data: TypeSells[] }) => {
  const refinedData = salesPricesPerDay(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        width={730}
        height={250}
        data={refinedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#08792B" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#AD0116"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
