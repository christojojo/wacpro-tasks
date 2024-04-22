import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calenderstyle.css";

function Calender() {
  const [initialView, setInitialView] = useState("dayGridMonth");

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

  return (
    <div className="calender-container w-full h-full">
      <div className="calender-header flex justify-between py-[15px] px-4 border border-[#D1D7DB] border-b-0 flex-col xl:flex-row">
        <div className="flex justify-center items-center">
          <span className="font-bold text-[18px] leading-[30px]">April</span>
          <span className="font-medium text-[18px] leading-[30px]">2024</span>
        </div>
        <div className="flex gap-4 justify-end">
          <button className="flex items-center gap-x-1.5 font-medium text-[14px] leading-[16.94px] py-[7px] px-2 border border-[#D1D7DB] text-[#111111] rounded-md">
            <span className="material-symbols-outlined text-lg">info</span>
            Leave policy
          </button>
          <div className="flex gap-x-2.5 items-center">
            <button className="flex justify-center items-center p-1 border border-[#D1D7DB] rounded-md">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex justify-center items-center p-1  border border-[#D1D7DB] rounded-md">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="flex rounded-md ">
            <button className="flex justify-center items-center border border-[#D1D7DB] border-r-0 rounded-s-md p-[5px]">
              <span className="material-symbols-outlined">list</span>
            </button>
            <button className="flex justify-center items-center border border-[#D1D7DB] rounded-e-md  p-[5px]">
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </div>
          <button className="flex justify-center items-center border border-[#D1D7DB] rounded-md py-[3px] px-[9px]">
            View <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
      <FullCalendar
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
          // { title: "Meeting", date: "2024-04-18", color: "#4DAEFF" },
          // { title: "Meeting", date: "2024-05-08", color: "#4DAEFF" },
          {
            title: "Sick Leave",
            start: "2024-04-22",
            end: "2024-04-25",
            color: "#89170F",
          },
        ]}
        firstDay={1}

        // hiddenDays: [ 2, 4 ]        hide the week days if required
      />
    </div>
  );
}

export default Calender;
