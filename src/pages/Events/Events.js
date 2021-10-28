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
    console.log(matchevents);


    return (
        <div className="pt-5 mt-5">
            <h2 className='text-primary'> Events You have registered yet are showing below:</h2>
            <Row xs={1} md={3} lg={3} className='gy-4'>
                {matchevents.map(event => <Event
                    key={event._id}
                    event={event}
                ></Event>)}
            </Row>

        </div>
    );
};

export default Events;