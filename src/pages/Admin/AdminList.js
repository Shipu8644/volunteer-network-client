import React from 'react';
import deleteLogo from '../../delete.png'

const AdminList = ({ event, deleteEvent, manageStatus }) => {

    const { name, email, date, serviceName, status, _id } = event;

    return (
        <tr className="bg-white">
            <td>{name}</td>

            <td>{email}</td>

            <td>{date}</td>

            <td>{serviceName}</td>

            <td onClick={() => deleteEvent(_id)}>  <img style={{ cursor: "pointer", width: '25px' }} className="bg-danger " src={deleteLogo} title="delete" alt="" /></td>

            <td>{status}</td>
            <td> <button className='ms-4 bg-primary text-white rounded' onClick={() => manageStatus(_id)}>Approved </button></td>
        </tr>
    );
};

export default AdminList;