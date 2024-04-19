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
    // hiddenDays: [ 2, 4 ]
    initialView="dayGridMonth"
    dateClick={handleDateClick}
    titleFormat={
      { year: 'numeric', month: 'long' }   
    }   
    weekends={true}
    events={[
      { title: 'Anniversery', date: '2024-04-01', color: '#4DAEFF' },
      { title: 'Holiday', date: '2024-04-04',color: '#FA9600' },
      { title: 'Holiday', date: '2024-05-04',color: '#FA9600' },
      { title: 'Deployment Date', date: '2024-04-10' ,color: '#4DAEFF'}, 
      { title: 'Meeting', date: '2024-04-18', color: '#4DAEFF'},
      { title: 'Meeting', date: '2024-05-08', color: '#4DAEFF'},
      { title: 'Sick Leave', start: '2024-04-22' ,end : '2024-04-25' , color: '#89170F'}
  ]}  
  />
  )
}

export default Calender
