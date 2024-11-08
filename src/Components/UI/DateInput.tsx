import React from "react";

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...restProps }: DateInputProps) => {
  return (
    <div>
      <label className="text-red-400" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={(e) => console.log(e)}
        type="date"
        name={label}
        id={label}
        {...restProps}
      />
    </div>
  );
};

export default DateInput;
