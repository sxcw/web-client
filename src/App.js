import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import EventsTable from './components/EventsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventsTable />
      </header>
    </div>
  );
}

export default App;
