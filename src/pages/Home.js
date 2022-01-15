import React,{useState} from 'react'
import axios from 'axios';


const Home = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(name,email,phone);
        const data = {name,email,phone};
        axios.post('https://jsonplaceholder.typicode.com/albums',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
           
        }) .then((Response)=>{
            return Response.json();
        }).then((acctualData)=>{
            console.log(acctualData);
        })
    }
    return (
        <>
        <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} value={name} name='name' /><br />
        <input type="text" placeholder='enter your email'  onChange={(e)=>setEmail(e.target.value)} value={email} name='email' /><br />
        <input type="text" placeholder='enter your phone'  onChange={(e)=>setPhone(e.target.value)} value={phone} name='phone' /><br />
        <button onClick={handleClick}>click the button</button>
            
        </>
    )
}

export default Home
