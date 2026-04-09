import { useState } from "react"
export const LoginCard = () =>{
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [message,setMessage] = useState("");

    const handleLogin = () =>{
        setIsLoggedin(!isLoggedIn);
    }

    const handleChange=(event)=>{
        setMessage(event.target.value)        
    }


    return(
        <>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <div>
            <input type="text" placeholder="Type a message" value={message} onChange={handleChange} />
            <p>{message}</p>
        </div>
        </>
    )
}