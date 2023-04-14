import Contact from './contact';
import { AddContact } from './addContact';
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';

function App() {

  const [data, setdata] = useState([]);
  const [disable, setdisable] = useState(true);

useEffect(() => {
  async function fetchingApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const newData = await response.json();
  setdata(newData);
  }
  fetchingApi();
}, [])

  const updateData = async(updation) => {
    console.log('updated');
    setdisable(false);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${updation.id}`, {
    method: 'PUT',
    body: JSON.stringify(updation),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    const newData = await response.json();
    const myObject = {...newData};
    console.log(myObject);
    setdata(data.map((listItem) => {
      if(listItem.id === updation.id){
        return myObject;
      } else {
        return listItem;
      }
    }));
  }

  const deleteContact = async(deletion) => {
    console.log('deleted', deletion);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${deletion.id}`, {
      method: 'DELETE',
    });
    setdata(data.filter((listItem) => {
      if(listItem.id !== deletion.id){
        return listItem;
      }
    }))
  }

  return (
    <>
    <h1 style={style}>--Your Contacts--</h1>
    <ToastContainer/>
    {data.map((listItem, index) => (
      <Contact
        key = {listItem.id}
        data = {listItem}
        updateData = {updateData}
        deleteContact={deleteContact}
        disable={disable}
      />
    ))}

      <div className='my-container-2'>
      <AddContact
      data = {data}
      setdata = {setdata}
      />
      </div>

    </>
  );
}

const style = {
  color: "white",
  padding: '10px',
  marginLeft: '6.3rem'
}

export default App;