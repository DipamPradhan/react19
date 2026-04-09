import { useState } from "react"
export const UserDashboard = ({isPremium}) =>{
    const [credits, setCredits] = useState(100);

    if(!isPremium){
        return <div>Upgrade to premium</div>
    }
    const handleCredit = (type)=>{
        setCredits(
            credits=>{
                if(type=="add"){
                    return credits<100?credits+10:credits;
                }else{
                    return credits>0?credits-10:credits;
                }
            }
        )
    }

    return(
        <div>
            <p>Credits: {credits}</p>
            <button onClick={()=>setCredits(0)}>Spend all Credits</button>
            <button onClick={()=>{handleCredit("add")}}>Add 10 Credit</button>
            <button onClick={()=>{handleCredit("minus")}}>Spend 10 Credit</button>
        </div>
    )
}