import React from 'react';
import { Col } from 'react-bootstrap';
import deleteLogo from '../../delete.png'

const AdminList = (props) => {

    const { name, email, date, serviceName, status, _id } = props.event;

    return (
        <div className='d-flex bg-white p-2'>

            <Col lg={2}>{name.slice(0, 15)}</Col>
            <Col lg={2}>{email}</Col>

            <Col lg={2}>{date}</Col>
            <Col lg={2}>{serviceName}</Col>

            <Col lg={1}
                onClick={() => props.deleteEvent(_id)}
            >
                <img style={{ cursor: "pointer", width: '25px' }} className="bg-danger " src={deleteLogo} title="delete" alt="" />
            </Col>

            <Col lg={3} style={{ cursor: 'pointer' }}>
                <span className='me-3 text-danger'>{status}</span>
                <button className='ms-4 bg-primary text-white rounded' onClick={() => props.manageStatus(_id)}>Approved </button>

            </Col>


        </div>
    );
};

export default AdminList;