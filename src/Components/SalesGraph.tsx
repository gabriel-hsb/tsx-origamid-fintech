import { LineChart } from "lucide-react";
import { CartesianGrid, Line, Tooltip, XAxis } from "recharts";

const graphData = [
  {
    data: "2024-10-01",
    pago: 20000,
    processando: 3000,
    falha: 200,
  },
  {
    data: "2024-10-02",
    pago: 20010,
    processando: 2990,
    falha: 500,
  },
];

const SalesGraph = ({ fetchedData }: { fetchedData: TypeSells[] }) => {
  return (
    <LineChart
      width={400}
      height={400}
      data={graphData}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="data" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="pago" stroke="#ff7300" />
      <Line type="monotone" dataKey="processando" stroke="#387908" />
      <Line type="monotone" dataKey="falha" stroke="#000" />
    </LineChart>
  );
};

export default SalesGraph;
