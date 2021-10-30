import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-savannah-97305.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {!services.length ? <Button variant="primary mt-5 " disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
                :
                <div className="  container pt-5 ">
                    <Row xs={1} md={3} lg={4} className='gy-4'>
                        {services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)}
                    </Row>
                </div>}
        </div>

    );
};

export default Services;