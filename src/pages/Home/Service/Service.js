import React from 'react';
import { Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <Col style={{ cursor: 'pointer' }} >
            <img style={{ width: '280px', height: '250px' }} className="img-fluid" src={img} alt="" />
            <h5 className="text-primary">{name}</h5>
        </Col>
    );
};

export default Service;