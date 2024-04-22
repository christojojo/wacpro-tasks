import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calenderstyle.css";

function Calender() {
  const [initialView, setInitialView] = useState("dayGridMonth");

  const calendarRef = useRef(null);

  const [currentMonth, setCurrentMonth] = useState("");
  const updateCurrentMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentDate = calendarApi.getDate(); // Get the current date
      const monthName = currentDate.toLocaleString("default", {
        month: "long",
      });
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setInitialView("timeGridWeek");
      } else {
        setInitialView("dayGridMonth");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDateClick = (arg) => {
    // alert(arg.dateStr)
  };

  const handleEventDrop = (dropInfo) => {
    const updatedEvents = events.map((event) =>
      event.id === dropInfo.event.id
        ? { ...event, date: dropInfo.event.startStr } // Update the event date
        : event
    );
    setEvents(updatedEvents); // Update the state with the new event dates
  };
  const switchToListView = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView("listWeek"); // Switch to the "listWeek" view
    }
  };
  const switchToGridView = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView("dayGridMonth"); // Switch to the "dayGridMonth" view
    }
  };

  return (
    <div className="calender-container w-full h-full">
      <div className="calender-header flex justify-between py-[15px] px-4 border border-[#D1D7DB] border-b-0 flex-col xl:flex-row">
        <div className="flex justify-center items-center">
          <span
            className="font-bold text-[18px] leading-[30px]"
            onClick={handleDatesSet}
          >
            {currentMonth}
          </span>
          <span className="font-medium text-[18px] leading-[30px]">2024</span>
        </div>
        <div className="flex gap-4 justify-end">
          <a
            href="https://pro.webandcrafts.com/profile/leave/file-viewer?file=aHR0cHM6Ly9mb3Jtcy53ZWJhbmRjcmFmdHMuY29tL21lZGlhL2xlYXZlX3BvbGljeS9FbXBsb3llZSBiZW5lZml0cyAtIExlYXZlIFBvbGljeS5wZGY%3D&file_name=RW1wbG95ZWUgYmVuZWZpdHMgLSBMZWF2ZSBQb2xpY3kucGRm"
            target="_blank"
            className="flex items-center gap-x-1.5 font-medium text-[14px] leading-[16.94px] py-[7px] px-2 border border-[#D1D7DB] text-[#111111] rounded-md"
          >
            <span className="material-symbols-outlined text-lg">info</span>
            Leave policy
          </a>
          <div className="flex gap-x-2.5 items-center">
            <button
              className="flex justify-center items-center p-1 border border-[#D1D7DB] rounded-md"
              onClick={handlePreviousButtonClick}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              className="flex justify-center items-center p-1  border border-[#D1D7DB] rounded-md"
              onClick={handleNextButtonClick}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="flex rounded-md ">
            <button
              className="flex justify-center items-center border border-[#D1D7DB] border-r-0 rounded-s-md p-[5px]"
              onClick={switchToListView}
            >
              <span className="material-symbols-outlined">list</span>
            </button>
            <button
              className="flex justify-center items-center border border-[#D1D7DB] rounded-e-md  p-[5px]"
              onClick={switchToGridView}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </div>
          <button className="flex justify-center items-center border border-[#D1D7DB] rounded-md py-[3px] px-[9px]">
            View <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]} // require4d plugins
        selectable="true" // Allow users to select dates
        editable="true"
        initialView="dayGridMonth" // initial view
        dateClick={handleDateClick}
        weekends={true} //show weekends in the calender
        eventDrop={handleEventDrop} // Handle event drop
        headerToolbar={false}
        titleFormat={
          { year: "numeric", month: "long" } //title format for calender
        }
        events={[
          { title: "Anniversery", date: "2024-04-01", color: "#4DAEFF" },
          { title: "Holiday", date: "2024-04-04", color: "#FA9600" },
          { title: "Holiday", date: "2024-05-04", color: "#FA9600" },
          { title: "Holiday", date: "2024-03-04", color: "#FA9600" },
          { title: "Deployment Date", date: "2024-04-10", color: "#4DAEFF" },
          { title: "Meeting", date: "2024-04-18", color: "#4DAEFF" },
          { title: "Meeting", date: "2024-05-08", color: "#4DAEFF" },
          {
            title: "Sick Leave",
            start: "2024-04-22",
            end: "2024-04-25",
            color: "#89170F",
          },
        ]}
        firstDay={1}
        datesSet={handleDatesSet}
        
        // hiddenDays: [ 2, 4 ]        hide the week days if required
      />
    </div>
  );
}

export default Calender;
