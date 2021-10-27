import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Registration.css';
const Registration = () => {
    const { user } = useAuth();
    const preloadValues = {
        name: user?.displayName,
        email: user?.email,
        serviceName: 'user'
    }
    const { register, handleSubmit, reset } = useForm({
        defaultValues: preloadValues
    });
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='pt-5 mt-5 add-service'>
            <h2>Register as a Volunteer</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />

                <input {...register("email", { required: true, maxLength: 30 })} placeholder="email" />

                <input {...register("date", { required: true, maxLength: 20 })} placeholder="date" />

                <textarea {...register("description")} placeholder="Description" />

                <input {...register("serviceName", { required: true, maxLength: 20 })} placeholder="Service name" />

                <input className='bg-primary text-white' type="submit" value="Registration" />
            </form>

        </div>


    );
};

export default Registration;