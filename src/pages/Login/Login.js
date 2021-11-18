import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../logo.png';

const Login = () => {
    const { googleSignIn, user } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from || 'home';
    const history = useHistory();

    if (user.email) {
        history.push('/')
    }

    const manageRidirectory = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <div className='mt-5 pt-5'>
                <img className='img-fluid' style={{ width: '350px' }} src={logo} alt="" />
            </div>
            <div className='pt-5 mt-5 d-flex flex-column justify-content-center align-items-center '>
                <h1 className='mb-5' >Please login Here</h1>
                <button onClick={manageRidirectory} className='bg-primary text-white fs-5 rounded'>Login with Google</button>
            </div>
        </div>

    );
};

export default Login;