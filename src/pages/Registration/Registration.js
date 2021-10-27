import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Registration.css';
const Registration = () => {
    const { id } = useParams();
    console.log(id);
    const { user } = useAuth();

    const [service, setService] = useState({});

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
                    alert("Registration successfull");
                }
            })
    }
    return (
        <div className='pt-5 mt-5 add-service'>
            <h2>Register as a Volunteer </h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />

                <input {...register("email", { required: true, maxLength: 30 })} placeholder="email" />

                <input {...register("date", { required: true, maxLength: 20 })} placeholder="date" />

                <textarea {...register("description")} placeholder="Description" />

                <input {...register("serviceName", { required: true, maxLength: 20 })} placeholder="Service name" value={service.name || ''} />

                <input className='bg-primary text-white' type="submit" value="Registration" />
            </form>

        </div>


    );
};

export default Registration;