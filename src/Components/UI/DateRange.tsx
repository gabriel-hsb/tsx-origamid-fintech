import React, { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [start, setStart] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        value={start}
        onChange={({ target }) => setStart(target.value)}
        label="Start"
      />
      <DateInput
        value={final}
        onChange={({ target }) => setFinal(target.value)}
        label="Final"
      />
    </form>
  );
};

export default DateRange;
