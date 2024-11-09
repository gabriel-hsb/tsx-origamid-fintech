import DateRange from "./DateRange";
import Months from "./Months";

const Header = () => {
  return (
    <div className="mb-5">
      <div className="mb-5">
        <DateRange />
      </div>
      <Months />
    </div>
  );
};

export default Header;
