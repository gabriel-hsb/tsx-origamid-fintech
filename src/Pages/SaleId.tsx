import { useParams } from "react-router-dom";

import { BASE_URL } from "@/api/apiConstants";
import useFetch from "@/hooks/useFetch";

import Error from "@/Components/UI/Error";
import Loading from "@/Components/UI/Loading";

const SaleId = () => {
  const { id } = useParams();

  const { fetchedData, error, isLoading } = useFetch<TypeSingleSell>({
    URL: `${BASE_URL}/${id}`,
  });

  const formatedPrice = fetchedData?.preco.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });

  if (isLoading) return <Loading />;

  if (!fetchedData) return null;

  if (error) return <Error />;

  return (
    <div>
      <div className="mb-5 box">
        <span className="font-bold">ID:</span> {fetchedData.id}
      </div>
      <div className="mb-5 box">
        <span className="font-bold">Name:</span> {fetchedData.nome}
      </div>
      <div className="mb-5 box">
        <span className="font-bold">Price:</span> {formatedPrice}
      </div>
      <div className="mb-5 box">
        <span className="font-bold">Status:</span>{" "}
        <span className="capitalize">{fetchedData.status}</span>
      </div>
      <div className="mb-5 box">
        <span className="font-bold">Payment:</span>{" "}
        <span className="capitalize"> {fetchedData.pagamento}</span>
      </div>
    </div>
  );
};

export default SaleId;
