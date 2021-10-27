import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, _id } = service;
    return (
        <NavLink to={`/register/${_id}`}>
            <Col style={{ cursor: 'pointer' }} >
                <img style={{ width: '280px', height: '250px' }} className="img-fluid" src={img} alt="" />
                <h5 className="text-primary">{name}</h5>
            </Col>
        </NavLink>

    );
};

export default Service;