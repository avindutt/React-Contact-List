import './addContact.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddContact = ({data, setdata}) => {

    const [newArray, setnewArray] = useState({
        name : '',
        phone: '',
        website: '',
        email: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setnewArray((prev) => ({...prev, [e.target.name] : e.target.value}));
    }

const newContact = async(e) => {
    console.log('added');
    e.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newArray),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }, 
    });

    const newData = await response.json();
    console.log({...newData});
    newData.id = Date.now(); //this being very tricky as console was giving same key props error everytime
    setdata((prev) => [
        {...newData},
        ...prev
    ]);
    toast.success('New Contact Created!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
    });
    setnewArray({
        name : '',
        phone: '',
        website: '',
        email: ''
    });
}

    return (

        <div className='container'>
        <form onSubmit={(e) => newContact(e)}>
        <label htmlFor = 'name'>Name</label>
        <input className='name' name='name' value={newArray.name} onChange={handleChange}></input>
        <br></br>
        <label htmlFor = 'phone'>Phone</label>
        <input className='phone' name='phone' value={newArray.phone} onChange={handleChange}></input>
        <br></br>
        <label htmlFor = 'website'>Website</label>
        <input className='website' name='website' value={newArray.website} onChange={handleChange}></input>
        <br></br>
        <label htmlFor = 'email'>Email</label>
        <input className='email' name='email' value={newArray.email} onChange={handleChange}></input>
        <br></br>
        <button>Add Contact</button>
        </form>
        </div>
    );
}