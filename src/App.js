import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import EventsTable from './components/EventsTable';
import NewEventForm from './components/NewEventForm';

const fetchEvents = (callback) => {
  fetch('http://localhost:3000/api/events?userId=-1')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              callback(data.Items);
          });
}
function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => fetchEvents(setEvents), []);
  return (
    <div className="App">
      <header className="App-header">
        <EventsTable events={events} />
      </header>
      <NewEventForm fetchEvents={fetchEvents} setEvents={setEvents} />
    </div>
  );
}

export default App;
