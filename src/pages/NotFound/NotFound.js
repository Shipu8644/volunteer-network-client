import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../notFound.jpg'
const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <img style={{ width: '100%' }} src={notFound} alt="" />
            <br />
            <br />
            <Link to='/' ><button className="bg-dark rounded text-white btn-lg">Home page</button></Link>
        </div>
    );
};

export default NotFound;