import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calenderstyle.css";

function Calender() {
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
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]} // require4d plugins
      selectable="true" // Allow users to select dates
      editable='true'
      // hiddenDays: [ 2, 4 ]                         hide the week days if required
      initialView="dayGridMonth" // initial view
      dateClick={handleDateClick}
      titleFormat={
        { year: "numeric", month: "long" } //title format for calender
      }
      weekends={true} //show weekends in the calender
      eventDrop={handleEventDrop} // Handle event drop
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
    />
  );
}

export default Calender;
