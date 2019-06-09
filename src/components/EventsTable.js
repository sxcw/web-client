import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class EventsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/events?userId=-1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ events: data.Items });
            });

    }

    render() {
        const tableContent = this.state.events.map(event => {
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
        );
    }
}

export default EventsTable;