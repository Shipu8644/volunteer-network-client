import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';

const AdminList = (props) => {

    const { name, email, date, serviceName, status, _id } = props.event;





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
            </Col>


            <button onClick={() => props.manageStatus(_id)}>Approved status</button>

        </div>
    );
};

export default AdminList;