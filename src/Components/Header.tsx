import { useState } from "react";

import DateRange from "./DateRange";
import Months from "./Months";

const Header = () => {
  const [title, setTitle] = useState("Summary");

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
