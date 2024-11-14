import { BASE_WEATHER_URL } from "@/api/apiConstants";
import useFetch from "@/hooks/useFetch";
import useGeoLocation from "@/hooks/useGeoLocation";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherData = () => {
  const { fetchedData, isLoading, error } = useFetch<TypeWeatherCurrent>({
    URL: `${BASE_WEATHER_URL}?key=${WEATHER_API_KEY}&q=${"Boituva"}`,
  });

  const foo = useGeoLocation();

  const tempC = fetchedData?.current.temp_c;
  const tempF = fetchedData?.current.temp_f;

  if (error) return null;

  if (isLoading === true) return null;

  if (fetchedData)
    return (
      <div className="flex flex-col">
        <span>{tempF}ºF</span>
        <span>
          {fetchedData?.location.name}, {fetchedData?.location.country}
        </span>
      </div>
    );
};

export default WeatherData;
