import { useEffect, useState} from "react";

export default function Users(){
    //here default value for array is empty array
    //declare state
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        //load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    return (
        <div>
            <h3>Total User: {users.length}</h3>
        </div>
    )
    /*
        1. Declare a state to hold the data
        2. useEffect with callback and dependency array
        3. Fetch to load data
    */
}