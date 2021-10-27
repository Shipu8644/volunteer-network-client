import React from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Event = ({ event }) => {
    const { user } = useAuth();
    const { name, date, serviceName, email } = event;
    if (user.email === email) {
        console.log("yes");
    }
    return (
        <div>
            {(user.email === email) && <Col className='pt-5'>
                <h5>{serviceName}</h5>
                <p>{date}</p>
            </Col>}
        </div>
    );
};

export default Event;