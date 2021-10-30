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
                    alert("Registration Successfull");

                }
            })
    }
    return (
        <div className="row " >
            <div className="mt-5 pt-5 col-6">
                <img className="img-fluid" style={{ width: "350px" }} src={service.img} alt="" />
                <p className='text-primary'>Event: {service.name}</p>
            </div>
            <div className='pt-5 mt-5 add-service col-6'>
                <h2>Register as a Volunteer </h2>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />

                    <input {...register("email", { required: true, maxLength: 30 })} placeholder="email" />

                    <input {...register("date", { required: true, maxLength: 20 })} placeholder="date" />

                    <textarea {...register("description")} placeholder="Description" />

                    <input {...register("serviceName", { required: true, maxLength: 40 })} placeholder="Service name" value={service.name || ''} />

                    <input className='bg-primary text-white' type="submit" value="Registration" />
                </form>

            </div>

        </div>


    );
};

export default Registration;