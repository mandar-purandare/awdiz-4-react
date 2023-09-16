import React from "react";
import { useNavigate } from "react-router-dom";

function Ternary({loggedIn, setIsLoggedIn}){
    const router = useNavigate();
    function backToHomePage(){
        router('/');
    }

    return(
        <div>
            <h1>Ternary</h1>
            <p>Using ternary orpertor for toggling between logged in / logged out</p>
            {loggedIn?
                <h1 onClick={() => (setIsLoggedIn(prevValue => !prevValue))}>Welcome</h1>
                :
                <h1 onClick={() => (setIsLoggedIn(prevValue => !prevValue))}>Please Login</h1>
            }
            {loggedIn && <h1>Logged In</h1>}
            <button onClick={backToHomePage}>Back To Homepage</button>
        </div>
    )
}

export default Ternary;