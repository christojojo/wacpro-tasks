import React, { useState } from "react";
import { DatePicker } from "rsuite";
import subDays from "date-fns/subDays";
import CalenderIcon from "../../Shared/components/CalenderIcon";
import "./DatePicker.module.scss";
import addDays from "date-fns/addDays";

const ranges = [
  {
    label: "today",
    value: new Date(),
  },
  {
    label: "yesterday",
    value: addDays(new Date(), -1),
  },
];
const DatePickerExample = () => {
  const [dateRange, setDateRange] = useState(null);

  const handleChange = (range) => {
    if (range && range[0] === 1 && range[1] === 1) {
      setDateRange(null);
    } else {
      setDateRange(range);
    }
  };
  console.log("dateRange==>", dateRange);
  return (
    <div>
      <h3>Select a date:</h3>
      <DatePicker
        size="md"
        ranges={ranges}
        caretAs={CalenderIcon}
        menuClassName="datepicker-popup"
        placeholder="Select a Date"
        onShortcutClick={(shortcut, event) => {
          console.log(shortcut);
        }}
        onChange={handleChange}
        value={dateRange}
      />
    </div>
  );
};

export default DatePickerExample;
