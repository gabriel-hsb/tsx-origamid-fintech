import MonthButton from "./UI/MonthButton";

const Months = () => {
  return (
    <div className="flex-gap">
      <MonthButton month={-2} />
      <MonthButton month={-1} />
      <MonthButton month={0} />
    </div>
  );
};

export default Months;
