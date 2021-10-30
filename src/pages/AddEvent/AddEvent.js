import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddEvent.css"

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Data added successfully')
                    reset();
                }
            })
    }
    return (
        <div>
            <h3 className="mt-5 pt-5">Add a service here</h3>
            <div className="add-service">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 }
                    )} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input {...register("img")} placeholder="Img Url" />
                    <input className='bg-primary text-white' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;