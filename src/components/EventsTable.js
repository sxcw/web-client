import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NewEventForm from './NewEventForm';

function EventsTable(props) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/events?userId=-1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEvents(data.Items);
            });
    }, []);

    const tableContent = events.map(event => {
        return (<TableRow>
            <TableCell>
                {event.eventName}
            </TableCell>
            <TableCell>
                {event.startTime}
            </TableCell>
        </TableRow>);
    });
    return (
        <div>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Start</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableContent}
                </TableBody>
            </Table>
            <NewEventForm />
        </div>
    );
}

export default EventsTable;