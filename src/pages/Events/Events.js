import React, { useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Event from '../Event/Event';

const Events = () => {
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();

    const [events, setEvents] = useState([]);
    const [matchevents, setMatchEvents] = useState([]);

    useEffect(() => {
        fetch('https://safe-savannah-97305.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    useEffect(() => {
        setMatchEvents(events.filter(event => event.email === user?.email))
    }, [events])

    const deleteEvent = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://safe-savannah-97305.herokuapp.com/events/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingEvents = events.filter(event => event._id !== id);
                        setEvents(remainingEvents);
                    }
                })
        }
    }

    const handleHomePage = () => {
        history.push('/home')
    }


    return (
        <div className="pt-5 mt-5">
            <h2 className='text-primary'> Events You have registered yet are showing below:</h2>
            {matchevents.length ?
                <Row xs={1} md={3} lg={3} className='gy-4'>
                    {matchevents.map(event => <Event
                        key={event._id}
                        event={event}
                        deleteEvent={deleteEvent}
                    ></Event>)}
                </Row>
                :
                <h5 className="text-danger mt-5 pt-5">
                    <p>Oops!! Unfortunately you have not registered yet.</p>
                    <Button variant="primary" onClick={handleShow}>
                        Know more
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Registration detail</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>If you want to register in any service as a volunteer then go to home page by one click in the button(Home Page) below!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={handleHomePage} variant="primary" >
                                Home Page
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </h5>
            }

        </div>
    );
};

export default Events;