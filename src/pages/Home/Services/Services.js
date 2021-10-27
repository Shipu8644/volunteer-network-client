import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="  container pt-5 ">
            {/* <h1 className="pt-5 ">{services.length} Services</h1> */}
            <Row xs={1} md={3} lg={4} className='gy-4'>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}
            </Row>
        </div>
    );
};

export default Services;