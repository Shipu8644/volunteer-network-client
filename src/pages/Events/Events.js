import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])



    return (
        <div className="pt-5 mt-5">
            <h2 className='text-primary'> Events You have registered yet are showing below:</h2>
            <Row xs={1} md={3} lg={3} className='gy-4'>
                {events.map(event => <Event
                    key={event._id}
                    event={event}
                ></Event>)}
            </Row>

        </div>
    );
};

export default Events;