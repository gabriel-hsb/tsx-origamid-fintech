import { useContext } from "react";
import DateInput from "./UI/DateInput";

import { DataContext } from "@/contexts/DataContext";
import { daysAgo } from "@/functions/daysAgo";

const DateRange = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) return null;

  return (
    <form
      className="flex flex-col gap-3 md:flex-gap md:flex-row box lg:gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <DateInput
        value={dataContext.startDate}
        onChange={({ target }) => dataContext.setStartDate(target.value)}
        label="Start"
        max={daysAgo(0)}
      />
      <DateInput
        value={dataContext.endDate}
        onChange={({ target }) => dataContext.setEndDate(target.value)}
        label="Final"
        max={daysAgo(0)}
      />
    </form>
  );
};

export default DateRange;
