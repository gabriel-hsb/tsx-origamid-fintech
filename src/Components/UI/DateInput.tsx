import React from "react";

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...restProps }: DateInputProps) => {
  return (
    <div>
      <label
        className="block px-4 py-3 mb-3 text-base font-bold bg-cream-secondary text-brown-light rounded-3xl"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="px-4 py-3 font-mono text-base border-none bg-cream-secondary text-brown-light rounded-3xl"
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
