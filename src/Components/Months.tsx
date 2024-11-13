import MonthButton from "./MonthButton";

const Months = () => {
  return (
    <div className="gap-3 flex-gap lg:gap-5 first-child:p-20">
      <MonthButton month={-3} />
      <MonthButton month={-2} />
      <MonthButton month={-1} />
      <MonthButton month={0} />
    </div>
  );
};

export default Months;
