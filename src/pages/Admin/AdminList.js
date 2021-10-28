import React from 'react';
import { Col } from 'react-bootstrap';

const AdminList = ({ event }) => {
    const { name, email, date, serviceName } = event;
    return (
        <div className='d-flex bg-white p-2'>

            <Col lg={2}>{name.slice(0, 15)}</Col>
            <Col lg={3}>{email}</Col>

            <Col lg={2}>{date}</Col>
            <Col lg={3}>{serviceName}</Col>
            <Col lg={2}>Delete</Col>

        </div>
    );
};

export default AdminList;