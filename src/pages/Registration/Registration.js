import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Registration.css';
const Registration = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [service, setService] = useState({});
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    console.log(service.name, service.img)


    const preloadValues = {
        name: user?.displayName,
        email: user?.email,
    }

    const { register, handleSubmit, reset } = useForm({
        defaultValues: preloadValues
    });
    const onSubmit = data => {
        data.status = "pending";
        console.log(data);
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    data = {};
                    const yes = window.confirm("Registration successful! Do you want to see all the events you have registered? ")
                    yes &&
                        history.push('/events')
                    reset();
                }
            })
    }
    return (

        <div>
            <h3 className="pt-5 mt-5 text-primary">Register as a Volunteer</h3>
            <div className="d-flex justify-content-center  mt-5 pt-5 flex-lg-row flex-column" >

                <div >
                    <img className="img-fluid pe-5" style={{ width: "500px", height: '300px' }} src={service.img} alt="" />
                    <p className='text-primary'> {service.name}</p>
                </div>
                <div className=' add-service'>
                    <br />
                    <form className="ps-5" onSubmit={handleSubmit(onSubmit)} >
                        <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />

                        <input {...register("email", { required: true, maxLength: 30 })} placeholder="email" />

                        <input {...register("date", { required: true, maxLength: 20 })} placeholder="date" />

                        <textarea {...register("description")} placeholder="Description" />

                        <input {...register("serviceName", { required: true, maxLength: 40 })} placeholder="Service name" value={service.name || ''} />

                        <input className='bg-primary text-white' type="submit" value="Registration" />
                    </form>

                </div>

            </div>

        </div>



    );
};

export default Registration;