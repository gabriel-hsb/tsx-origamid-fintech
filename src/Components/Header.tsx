import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import DateRange from "./DateRange";
import Months from "./Months";

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
    <div className="mb-5">
      <div className="grid grid-cols-2 mb-5 text-4xl">
        <DateRange />
        <h1 className="box bg-cream-main">{title}</h1>
      </div>
      <Months />
    </div>
  );
};

export default Header;
