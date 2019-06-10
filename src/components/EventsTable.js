import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function EventsTable(props) {
    const [events, setEvents] = useState([]);
    const classes = useStyles();

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
        [<Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Start</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableContent}
            </TableBody>
        </Table>,
        <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
        </Fab>
        ]
    );
}

export default EventsTable;