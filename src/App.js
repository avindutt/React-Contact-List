import Contact from './contact'
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [data, setdata] = useState([]);

// useEffect(()=> {
// async function logJSONData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonData = await response.json();
//   // console.log(jsonData);
//   jsonData.map((user)=>{
//     const contact = {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       address: user.email
//     };
//     setdata((prev)=> [...prev, contact]);
//     // console.log(contact)
//     console.log(data)
//   });
// }
//     logJSONData();
//       return setdata([]);
//   }, []);

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => setdata(data));
// }, []);

useEffect(() => {
  async function fetchingApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const newData = await response.json();
  setdata(newData);
  console.log(newData);
  }
  fetchingApi();
}, [])


  return (
    <>

    {data.map((listItem) => (
      <Contact
        key = {listItem.id}
        data = {listItem}
      />
    ))}
    
    </>
  );
}

export default App;