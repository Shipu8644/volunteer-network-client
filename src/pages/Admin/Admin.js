import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AdminList from './AdminList';
import { useHistory } from 'react-router';
import './Admin.css'
const Admin = () => {
    const [events, setEvents] = useState([]);
    const [stat, setStat] = useState(true);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const history = useHistory();
    useEffect(() => {
        fetch('https://shrouded-refuge-84897.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [stat, events])

    const deleteEvent = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://shrouded-refuge-84897.herokuapp.com/events/${id}`, {
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
        const yes = window.confirm("Do you want to approve the status?");
        yes &&
            fetch(`https://shrouded-refuge-84897.herokuapp.com/events/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert("Status approved successfully");
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
                    <Col xs={12} lg={2}>
                        <NavLink to='/admin'><p>Volunteer Register List</p></NavLink>
                        <NavLink to='/addEvent' style={{ cursor: 'pointer', textDecoration: 'none' }}> <p >Add event</p></NavLink>
                    </Col>
                    <Col xs={10} lg={10} className="bg-light pb-3 rounded">

                        {events.length ? <div class="table-responsive"> <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Volunteer List</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Approved Status</th>
                                </tr>
                            </thead>

                            <tbody> {events.map(event => <AdminList
                                key={event._id}
                                event={event}
                                deleteEvent={deleteEvent}
                                manageStatus={manageStatus}
                            ></AdminList>)}
                            </tbody>

                        </table>
                        </div>
                            :

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