import React from "react";
import './contact.css'; 

function Contact({data}) {
    return (
        <div className="container">
            <div className="contact-bar">
                <div className="name-bar">
                    <h5>{data.name}</h5>
                </div>
                <div className="contact-items">
                        <p>{data.phone}</p>
                        <p className="email">{data.email}</p>
                        <p>{data.website}</p>
                    </div>
            </div>
        </div>
    )
}

export default Contact;