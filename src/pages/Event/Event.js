import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Event = ({ event }) => {
    const { user } = useAuth();

    const { name, date, serviceName, email, status } = event;
    const [services, setServices] = useState([]);
    const [matchService, setMatchService] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        setMatchService((services.find(service => service?.name ===
            serviceName)))

    }, [services, serviceName])


    return (
        <div>
            <div>
                <Col className='pt-5'>
                    <img style={{ width: '280px', height: '250px' }}
                        src={matchService?.img} alt="" />
                    <h5>{serviceName}</h5>
                    <p>{date}</p>
                    <p>Status: {status}</p>
                </Col>
            </div>

        </div>

    );
};

export default Event;