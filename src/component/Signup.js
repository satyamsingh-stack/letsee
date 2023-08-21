import React, { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const collectData = () => {
        alert("Name: "+name)
        alert("Password: "+ password)
        alert("Email: "+ email)
        
        // Clear the form data by resetting the state variables
        setName("");
        setPassword("");
        setEmail("");
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