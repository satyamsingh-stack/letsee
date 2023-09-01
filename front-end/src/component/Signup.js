import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const nevigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
            nevigate('/');
    })
    const collectData = async () => {

        try {
            let result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-type': 'application/json',
                },
            });
    
            if (!result.ok) {
                // Handle non-200 HTTP response statuses here
                console.error('HTTP Error:', result.status, result.statusText);
            } else {
                result = await result.json()
                console.warn(result);
                // Clear the form data by resetting the state variables
                // localStorage.setItem("user",JSON.stringify(result));
                if(result)
                    nevigate('/');
                setName("");
                setPassword("");
                setEmail("");
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    }
    return (
        <div className="register">
            <form>
                <h1>Register</h1>
                <input  type="text"
                    value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name : " />
                <input  type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password : " />
                <input  type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email : " />
                <button onClick={collectData}  type="button"> signup</button>
            </form>
        </div>
    )
}

export default Signup;