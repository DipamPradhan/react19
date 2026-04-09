import { useState } from "react";
export const Counter = () =>{
    const [count, setCount] = useState(()=>{
        console.log("Initial State function called");
        return 0;
    })
    //currentVal, setterFunction
    console.log("Counter Component : ",count);
    const handleClick = () =>{
        setCount(count + 1);
    }
    return <button onClick={handleClick}>Count: {count}</button>
}