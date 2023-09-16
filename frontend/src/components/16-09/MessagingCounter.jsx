import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MessagingCounter(){

    const Button = styled.button`
    margin-top: 5%;`;

    const [count, setCounter] = useState(0);

    function updateCounter(){
        setCounter(prevValue => prevValue +1);
    }

    const router = useNavigate();

    function backToHome(){
        router('/');
    }

    useEffect(() => {
        if(count%10 === 0){
            alert(`You clicked ${count} times!`);
        }  
    },[count]);

    return(
        <div>
            <h1>Messaging Counter</h1>
            <p>Alerts when count reaches multiples of 10</p>
            <h2>Count - {count}</h2>
            <button onClick={updateCounter}>Click Here</button>
            <div>
                <Button onClick={backToHome}>Back To Homepage</Button>
            </div>
        </div>
    )
}

export default MessagingCounter;