import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Event = ({ event, deleteEvent }) => {


    const { date, serviceName, status, _id } = event;
    const [services, setServices] = useState([]);
    const [matchService, setMatchService] = useState({});
    useEffect(() => {
        fetch('https://shrouded-refuge-84897.herokuapp.com/services')
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
                    <button onClick={() => deleteEvent(_id)} className='text-white bg-primary rounded'>Cancel</button>
                </Col>
            </div>

        </div>

    );
};

export default Event;