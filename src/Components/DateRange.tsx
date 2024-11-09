import { useContext } from "react";
import DateInput from "./UI/DateInput";

import { DataContext } from "@/contexts/DataContext";
import { daysAgo } from "@/functions/daysAgo";

const DateRange = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) return null;

  return (
    <form className="flex-gap box" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        value={dataContext.startDate}
        onChange={({ target }) => dataContext.setStartDate(target.value)}
        label="Start"
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