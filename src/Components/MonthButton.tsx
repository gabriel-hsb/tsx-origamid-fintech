import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

const monthName = (offset: number) => {
  const now = new Date();

  now.setMonth(now.getMonth() + offset);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(now);
};

const dateToString = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const MonthButton = ({ month }: { month: number }) => {
  const context = useContext(DataContext);

  const setMonth = (offset: number) => {
    const now = new Date();

    now.setMonth(now.getMonth() + offset);

    const firstDayOfTheMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const lastDayOfTheMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    );

    context?.setStartDate(dateToString(firstDayOfTheMonth));

    context?.setEndDate(dateToString(lastDayOfTheMonth));
  };

  return (
    <button
      className="px-2 py-5 font-semibold capitalize border-none rounded-[1.25rem] bg-cream-main text-brown-light first:hidden first:md:block hover:brightness-[90%]"
      onClick={() => setMonth(month)}
    >
      {monthName(month)}
    </button>
  );
};

export default MonthButton;
