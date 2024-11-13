import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DateRange from "@Components/DateRange";
import Months from "@Components/Months";

const Header = () => {
  const [title, setTitle] = useState("Summary");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Summary");
        document.title = "Fintech | Summary";
        break;

      case "/sales":
        setTitle("Sales");
        document.title = "Fintech | Sales";
        break;
    }
  }, [pathname]);

  return (
    <header className="mb-5">
      <div className="grid grid-cols-1 gap-3 mb-5 text-4xl md:gap-5 lg:grid-cols-2">
        <DateRange />
        <h1 className="box bg-cream-main lg:p-2.5 p-4 row-[1] lg:row-auto">
          {title}
        </h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
