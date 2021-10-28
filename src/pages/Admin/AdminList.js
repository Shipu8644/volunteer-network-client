import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';

const AdminList = (props) => {
    const { name, email, date, serviceName, status, _id } = props.event;
    const [events, setEvents] = useState([]);
    console.log(props.deleteEvent);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const manageStatus = id => {
        console.log(id);
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(props.event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Status approved");

                }
                else {
                    alert('Already approved');
                }

            })
    }




    return (
        <div className='d-flex bg-white p-2'>

            <Col lg={2}>{name.slice(0, 15)}</Col>
            <Col lg={2}>{email}</Col>

            <Col lg={2}>{date}</Col>
            <Col lg={2}>{serviceName}</Col>
            <Col lg={2}
                onClick={() => props.deleteEvent(_id)}
            ><button>Delete</button></Col>

            <Col lg={2} style={{ cursor: 'pointer' }}>
                {status}
            </Col> :



            <button onClick={() => manageStatus(_id)}>Approved status</button>

        </div>
    );
};

export default AdminList;