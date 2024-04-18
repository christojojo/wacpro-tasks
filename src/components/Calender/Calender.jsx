import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import './calenderstyle.css'

function Calender() {
  const handleDateClick = (arg) => {
    // alert(arg.dateStr)
  }
  return (
    <FullCalendar
    plugins={[ dayGridPlugin ,interactionPlugin  ]}
    selectable='true'
    // editable='false'
    initialView="dayGridMonth"
    dateClick={handleDateClick}
    weekends={true}
    events={[
      { title: 'Anniversery', date: '2024-04-01' },
      { title: 'Meeting', date: '2024-04-01' },
      { title: 'Deployment Date', date: '2024-04-16' }, 
      { title: 'Meeting', start: new Date() }
  ]}  
  />
  )
}

export default Calender
