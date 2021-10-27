import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Events = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    console.log(user);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="pt-5 mt-5">
            <h2 className='text-primary'>'{events.length}' Events You have registered yet are showing below:</h2>

        </div>
    );
};

export default Events;