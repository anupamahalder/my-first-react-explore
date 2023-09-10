import { useState } from "react";

export default function Counter(){
    //Parameter that we pass to useState() function is the initial value
    const [count, setCount] = useState(0);
    // console.log(count,' ', setCount);
    const handleAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    };
    const handleReduce = ()=>{
        const newCount = count-1;
        setCount(newCount);
    }
    return (
        <div style={{margin:'10px',border:'2px solid yellow',borderRadius:'4px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
}