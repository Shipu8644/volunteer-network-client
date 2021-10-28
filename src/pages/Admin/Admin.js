import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AdminList from './AdminList';

const Admin = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

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
        <div className="mt-5 pt-5">
            <h3 className="text-primary mb-5">Volunteer Register list</h3>
            <Container>
                <Row>
                    <Col xs={2}>
                        <NavLink to='/admin'><p>Volunteer Register List</p></NavLink>
                        <NavLink to='/addEvent' style={{ cursor: 'pointer', textDecoration: 'none' }}> <p >Add event</p></NavLink>
                    </Col>
                    <Col xs={10} lg={10} className="bg-light pb-3 rounded ">
                        <Row lg={6}>
                            <Col className='p-2'> <strong > Name </strong></Col>
                            <Col className='p-2'> <strong> Email id </strong></Col>
                            <Col className='p-2'> <strong> Registration date </strong></Col>
                            <Col className='p-2'> <strong>Volunteer list </strong></Col>
                            <Col className='p-2'> <strong>Action </strong></Col>
                            <Col className='p-2'> <strong>Status </strong></Col>
                        </Row>
                        {events.map(event => <AdminList
                            key={event._id}
                            event={event}
                            deleteEvent={deleteEvent}
                        ></AdminList>)}
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Admin;