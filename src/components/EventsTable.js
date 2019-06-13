import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function EventsTable(props) {
    const tableContent = props.events.map((event, index) => {
        return (<TableRow key={index}>
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
        </div>
    );
}

export default EventsTable;