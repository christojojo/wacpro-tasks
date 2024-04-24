import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calenderstyle.css";
import Button from "../Button";

function Calender() {
  const [initialView, setInitialView] = useState("dayGridMonth");
  const [currentMonth, setCurrentMonth] = useState("");

  const calendarRef = useRef(null);

  const updateCurrentMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentDate = calendarApi.getDate(); // Get the current date
      // console.log(currentDate);
      const monthName = currentDate.toLocaleString("default", {
        month: "long",
      });
      // console.log(monthName);
      setCurrentMonth(monthName); // Update state with the current month name
    }
  };

  // Function to handle the custom "Next" button
  const handleNextButtonClick = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next(); // Move to the next date range
    }
  };
  // Function to handle the custom "Previous" button
  const handlePreviousButtonClick = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev(); // Move to the previous date range
    }
  };

  useEffect(() => {
    updateCurrentMonth(); // Set the initial month on component mount
  }, []); // Empty dependency array to ensure it runs only once

  // Event handler for when the calendar's date range changes
  const handleDatesSet = () => {
    updateCurrentMonth(); // Update the current month
  };

  // display an alert box and display the date while clicking the date
  // const handleDateClick = (arg) => {
  //   alert(arg.dateStr)
  // };

  const handleEventDrop = (dropInfo) => {
    const updatedEvents = events.map((event) =>
      event.id === dropInfo.event.id
        ? { ...event, date: dropInfo.event.startStr } // Update the event date
        : event
    );
    setEvents(updatedEvents); // Update the state with the new event dates
  };

  const [isListView, setIsListview] = useState(false);
  const toggleView = () => {
    setIsListview(!isListView);
  };

  const [datesAndWeekdays, setDatesAndWeekdays] = useState([]);
  // Utility function to get all dates and weekdays for a given month
  const getDatesAndWeekdaysForMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    // Get the first and last days of the given month
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);

    const datesAndWeekdays = [];
    // Loop through each day in the month
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const weekday = d.toLocaleString("en-US", { weekday: "short" }); // Weekday name
      const day = d.getDate(); // Day of the month
      datesAndWeekdays.push({ weekday, day }); // Add to result array
    }

    return datesAndWeekdays;
  };
  useEffect(() => {
    const currentDate = new Date();
    const result = getDatesAndWeekdaysForMonth(currentDate);
    setDatesAndWeekdays(result);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="calender-container w-full h-full">
      <div className="calender-header flex justify-between py-[15px] px-4 border border-[#D1D7DB] border-b-0 flex-col xl:flex-row">
        <div className="flex justify-center items-center">
          <span
            className="font-bold text-[18px] leading-[30px]"
            // onClick={handleDatesSet}
          >
            {currentMonth}
          </span>
          <span className="font-medium text-[18px] leading-[30px]">2024</span>
        </div>
        <div className="flex gap-4 justify-end">
          <a
            href="https://pro.webandcrafts.com/profile/leave/file-viewer?file=aHR0cHM6Ly9mb3Jtcy53ZWJhbmRjcmFmdHMuY29tL21lZGlhL2xlYXZlX3BvbGljeS9FbXBsb3llZSBiZW5lZml0cyAtIExlYXZlIFBvbGljeS5wZGY%3D&file_name=RW1wbG95ZWUgYmVuZWZpdHMgLSBMZWF2ZSBQb2xpY3kucGRm"
            target="_blank"
            className="flex items-center gap-x-1.5 font-medium h-[36px] text-[14px] leading-[16.94px] py-[7px] px-2 border border-[#D1D7DB] text-[#111111] rounded-md transition-all duration-300 ease-in-out hover:bg-[#D1D7DB]"
          >
            <span className="material-symbols-outlined text-lg">info</span>
            Leave policy
          </a>
          <div className="flex gap-x-2.5 items-center">
            <Button
              variant="secondary"
              classNames={"!p-1 !h-[34px] rounded-md border-[#D1D7DB]"}
            >
              <span
                className="material-symbols-outlined"
                onClick={handlePreviousButtonClick}
              >
                chevron_left
              </span>
            </Button>
            <Button
              variant="secondary"
              classNames={"!p-1 !h-[34px] rounded-md border-[#D1D7DB]"}
            >
              <span
                className="material-symbols-outlined"
                onClick={handleNextButtonClick}
              >
                chevron_right
              </span>
            </Button>
          </div>
          <div className="flex rounded-md ">
            <Button
              variant="secondary"
              classNames={`listType !p-[5px] rounded-s-md rounded-r-none border-r-0 !h-[36px]`}
              // onClick={handleClickList}
              onClick={toggleView}
            >
              <span className="material-symbols-outlined">list</span>
            </Button>
            <Button
              variant="secondary"
              classNames={"!p-[5px] rounded-r-md rounded-l-none !h-[36px]"}
              // onClick={handleClickGrid}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </Button>
          </div>
          <Button
            variant="secondary"
            classNames={"!py-[3px] !px-[9px] !h-[36px] rounded-md"}
          >
            View <span className="material-symbols-outlined">expand_more</span>
          </Button>
        </div>
      </div>

      {isListView ? (
        <div className="list-type border border-b-0 ">
          {datesAndWeekdays.map((item, index) => (
            <div key={index} className="flex h-[40px] divide-x border-b">
              <div className="flex justify-center items-center basis-[5%] font-medium text-[13px]">
                {item.day}
              </div>
              <div className="flex justify-center items-center basis-[5%] font-medium text-[13px]">
                {item.weekday}
              </div>
              <div className="flex justify-center items-center flex-grow"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="calender-body">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]} // required plugins
            selectable="true" // Allow users to select dates
            editable="true"
            initialView="dayGridMonth" // initial view
            weekends={true} //show weekends in the calender
            eventDrop={handleEventDrop} // Handle event drop
            headerToolbar={false}
            datesSet={handleDatesSet}
            firstDay={1} // Set first day
            titleFormat={
              { year: "numeric", month: "long" } //title format for calender
            }
            events={[
              { title: "Anniversery", date: "2024-04-01", color: "#4DAEFF" },
              { title: "Holiday", date: "2024-04-04", color: "#FA9600" },
              { title: "Holiday", date: "2024-05-04", color: "#FA9600" },
              { title: "Holiday", date: "2024-03-04", color: "#FA9600" },
              {
                title: "Deployment Date",
                date: "2024-04-10",
                color: "#4DAEFF",
              },
              { title: "Meeting", date: "2024-04-18", color: "#4DAEFF" },
              { title: "Meeting", date: "2024-05-08", color: "#4DAEFF" },
              {
                title: "Sick Leave",
                start: "2024-04-22",
                end: "2024-04-25",
                color: "#89170F",
              },
            ]}
            // dateClick={handleDateClick}
            // hiddenDays: [ 2, 4 ]        hide the week days if required
          />
        </div>
      )}
    </div>
  );
}

export default Calender;
