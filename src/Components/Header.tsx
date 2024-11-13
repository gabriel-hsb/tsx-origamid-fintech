import useTitle from "@/hooks/useTitle";

import DateRange from "@Components/DateRange";
import Months from "@Components/Months";

const Header = () => {
  const title = useTitle();

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
