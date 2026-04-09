import { useState } from "react";

export const SimpleCounter = () =>{
    const [count, setCount] = useState(0);
    console.log("Simple Rendere, count: ",count)
    const handleClick = () =>{
        console.log("Before count: ",count);
        setCount(count+1);
        console.log("After count: ",count);

        setTimeout(()=>{
            console.log("After 2 seconds, count: ",count)
        },2000)
    }
    return(
        <div>
            <h2>Count2: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
} 