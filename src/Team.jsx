import { useState } from "react";

export default function Team(){
    //useState gives us two things one which one we are going to change and another one is a function by which we can manage changing 
    const [team,setTeam] = useState(11);
    const teamStyle = {
        border:'2px solid brown',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    };
    const handleAdd =()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    };
    const handleRemove =()=>{
        const newTeam = team-1;
        setTeam(newTeam);
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}