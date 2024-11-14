import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const BASE_URL = new URL("https://nominatim.openstreetmap.org");

type TypeGeoLocationAPI = {
  ["address"]: {
    ["town"]: string;
  };
};

const useGeoLocation = () => {
  const [latitude, setLatitude] = useState<null | number>(null);
  const [longitude, setLongitude] = useState<null | number>(null);
  const [apiError, setApiError] = useState<any>();

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      setLatitude(coords.latitude), setLongitude(coords.longitude);
    },
    (err) => setApiError(err)
  );

  useEffect(() => {
    const { fetchedData, error, isLoading } = useFetch<TypeGeoLocationAPI>({
      URL: `${BASE_URL}/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    });

    console.log(fetchedData);
    console.log(latitude);
    console.log(longitude);
    console.log(apiError);
  }, [latitude, longitude, apiError]);

  // if (error) return null;

  // if (isLoading) return null;

  // return fetchedData;
};

export default useGeoLocation;
