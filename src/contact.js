import React from "react";
import './contact.css'; 
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({data, updateData, disable, deleteContact}) {

    const [formData, setFormData] = useState({
        id: data.id,
        name: data.name,
        phone: data.phone,
        website: data.website,
        email: data.email,
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData((prev) => (
            {...prev, [e.target.name]: e.target.value}
        ))
    }

    const updateContact = async(e) => {
        e.preventDefault();
        await updateData({...formData});
        toast.success('Contact Updated!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

    const handleDelete = async(e) => {
        e.preventDefault();
        await deleteContact({...formData});
        toast.success('Contact Deleted!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

    return (
        <div className="my-container-1">
            <div className="contact-bar">
                <div className="name-bar">
                    <h5>{data.name}</h5>
                </div>
                
                <form onSubmit={updateContact}>
                    
                <div className="contact-items">
                        <input disabled = {disable} type="text" onChange={(e) => handleChange(e)} value={formData.phone} name="phone" required></input>
                        <input disabled = {disable} type="text" onChange={(e) => handleChange(e)} value={formData.website} name="website" required></input>
                        <input disabled = {disable} type="text" onChange={(e) => handleChange(e)} value={formData.email} name="email" required></input>
                    </div>
                    
                    <button style={{backgroundColor: "rgb(0, 177, 208)", outline: 'none'}}>Update</button> 
                    <button onClick={handleDelete} style={{backgroundColor: "#ff4646f5"}}>Delete</button>

                </form>
            </div>
        </div>
    )
}

export default Contact;