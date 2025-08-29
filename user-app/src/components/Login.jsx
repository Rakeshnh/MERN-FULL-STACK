
import axios from "axios";
import './Login.css'
import { useState } from 'react'


const Login = () => {

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[msg,setMsg]=useState("");

const handelSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res=await axios.post("http://localhost:3000/auth/login",{
            email,
            password
        });
        console.log("token from backend:",res.data.token);
        localStorage.setItem("token",res.data.token);
        setMsg("login successful Token saved.");
    }catch(err){
        setMsg(err.message);
    }
};


  return (
     <div className="form-container">
    <form onSubmit={handelSubmit}>
   
         <h1>Login</h1><br/>
        <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br />
         <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br />
         <button>submit</button> 
         
     </form> 
     {msg && <p className="ghg">{msg}</p>}
    </div>
  )

}
export default Login