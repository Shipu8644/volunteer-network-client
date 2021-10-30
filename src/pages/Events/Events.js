import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Event from '../Event/Event';

const Events = () => {
    const { user } = useAuth();

    const [events, setEvents] = useState([]);
    const [matchevents, setMatchEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    useEffect(() => {
        setMatchEvents(events.filter(event => event.email === user?.email))
    }, [events])

    const deleteEvent = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/events/${id}`, {
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
                <h5 className="text-danger mt-5 pt-5">Opps!! You have not
                    <br />

                    registered single services yet </h5>
            }

        </div>
    );
};

export default Events;