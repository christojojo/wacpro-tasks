import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./rangepicker.module.scss";
import CalenderIcon from "../../Shared/components/CalenderIcon";
import { startOfWeek, endOfWeek } from "date-fns";

import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";

const predefinedRanges = [
  {
    label: "Today",
    value: [new Date(), new Date()],
    placement: "left",
  },
  {
    label: "Yesterday",
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: "left",
  },
  {
    label: "This week",
    value: [startOfWeek(new Date()), endOfWeek(new Date())],
    placement: "left",
  },
  {
    label: "Last 7 days",
    value: [subDays(new Date(), 6), new Date()],
    placement: "left",
  },
  {
    label: "Last 30 days",
    value: [subDays(new Date(), 29), new Date()],
    placement: "left",
  },
  {
    label: "This month",
    value: [startOfMonth(new Date()), new Date()],
    placement: "left",
  },
  {
    label: "Last month",
    value: [
      startOfMonth(addMonths(new Date(), -1)),
      endOfMonth(addMonths(new Date(), -1)),
    ],
    placement: "left",
  },
  {
    label: "This year",
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
    placement: "left",
  },
  {
    label: "Last year",
    value: [
      new Date(new Date().getFullYear() - 1, 0, 1),
      new Date(new Date().getFullYear(), 0, 0),
    ],
    placement: "left",
  },
  {
    label: "All time",
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
    placement: "left",
  },

  {
    date_type: "",
    label: "Reset",
    value: [1, 1],
    placement: "bottom",
    type: "common",
    className: "reset-btn",
  },
];

const DateRangePickerExample = () => {
  const [dateRange, setDateRange] = useState(null);

  const handleChange = (range) => {
    if (range && range[0] === 1 && range[1] === 1) {
      setDateRange(null);
    } else {
      setDateRange(range);
    }
  };

  return (
    <div className="">
      <h3>Select Date Range:</h3>
      <DateRangePicker
        className="custom-daterangepicker"
        menuClassName="daterangepicker-popup"
        format="MMM dd yyyy"
        placeholder="Choose a date range"
        character=" - "
        caretAs={CalenderIcon}
        ranges={predefinedRanges}
        value={dateRange}
        onChange={handleChange}
        placement="bottomStart"
        size="md"
      />
    </div>
  );
};

export default DateRangePickerExample;
