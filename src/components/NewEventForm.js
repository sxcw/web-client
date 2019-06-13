import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    form: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

function getModalStyle() {
    const top = 50
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function NewEventForm(props) {
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [values, setValues] = useState({
        eventName: '',
        startTime: new Date().toISOString()
    });
    const classes = useStyles();

    const handleChange = attribute => event => {
        setValues({ ...values, [attribute]: event.target.value });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setValues({ eventName: '' });
    };

    const handleSubmit = () => {
        const url = 'http://localhost:3000/api/events';
        const data = { ...values, userId: -1 };

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                handleClose();
                props.fetchEvents(props.setEvents);
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        [
            <Fab key="add-icon" color="primary" aria-label="Add" className={classes.fab} onClick={handleOpen}>
                <AddIcon />
            </Fab>,
            <Modal
                key="form-modal"
                open={open}
                onClose={handleClose}
            >
                <form style={modalStyle} className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="event-name"
                        label="Event Name"
                        className={classes.textField}
                        value={values.eventName}
                        onChange={handleChange('eventName')}
                        margin="normal"
                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
                        Add
                    </Button>
                </form>
            </Modal>
        ]
    )
}

export default NewEventForm;