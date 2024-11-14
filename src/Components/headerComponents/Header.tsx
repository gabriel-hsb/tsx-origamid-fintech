import useTitle from "@/hooks/useTitle";

import DateRange from "@Components/headerComponents/DateRange";
import Months from "@Components/Months";
import WeatherData from "./WeatherData";

const Header = () => {
  const title = useTitle();

  return (
    <header className="mb-5">
      <div className="grid grid-cols-1 gap-3 mb-5 md:gap-5 lg:grid-cols-2">
        <DateRange />
        <div className="box bg-cream-main lg:p-2.5 p-4 row-[1] lg:row-auto grid grid-cols-2 grid-rows-2">
          {/*TODO: global storage username ('login')*/}
          <h1 className="col-span-2 text-4xl text-brown-main">
            Hello, Gabriel!
          </h1>
          <div className="font-mono col-[2] row-[2] text-xl self-center justify-self-end text-right">
            <WeatherData />
          </div>
          <h2 className="self-end text-3xl row-[2] ">{title}</h2>
        </div>
      </div>
      <Months />
    </header>
  );
};

export default Header;
