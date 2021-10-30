import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AdminList from './AdminList';
import { useHistory } from 'react-router';
const Admin = () => {
    const [events, setEvents] = useState([]);
    const [stat, setStat] = useState(false);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [stat])

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

    const manageStatus = (id) => {
        setStat(!stat);
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
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

    const handleHomePage = () => {
        history.push('/home')
    }



    return (
        <div className="mt-5 pt-5">
            <h3 style={{ fontStyle: 'oblique' }} className="text-primary mb-5">Volunteer Register list</h3>
            <Container>
                <Row>
                    <Col xs={2}>
                        <NavLink to='/admin'><p>Volunteer Register List</p></NavLink>
                        <NavLink to='/addEvent' style={{ cursor: 'pointer', textDecoration: 'none' }}> <p >Add event</p></NavLink>
                    </Col>
                    <Col xs={10} lg={10} className="bg-light pb-3 rounded ">
                        <Row >
                            <Col lg={2} className='p-2'> <strong > Name </strong></Col>
                            <Col lg={2} className='p-2'> <strong> Email id </strong></Col>
                            <Col lg={2} className='p-2'> <strong> Registration date </strong></Col>
                            <Col lg={2} className='p-2'> <strong>Volunteer list </strong></Col>
                            <Col lg={1} className='p-2 '> <strong>Action </strong></Col>
                            <Col lg={1} className='p-2 '> <strong>Status </strong></Col>
                        </Row>
                        {events.length ? events.map(event => <AdminList
                            key={event._id}
                            event={event}
                            deleteEvent={deleteEvent}
                            manageStatus={manageStatus}
                        ></AdminList>) :

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title variant="secondary">No Volunteers found</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Unfortunately no volunteers has been registerd so far. Try to let people know about the services. Good luck!
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button onClick={handleHomePage} variant="primary">Home Page</Button>
                                </Modal.Footer>
                            </Modal>

                        }
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Admin;