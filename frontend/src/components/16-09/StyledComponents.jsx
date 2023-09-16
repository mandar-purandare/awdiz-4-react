import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function StyledComponents(){
    const Div = styled.div`
    margin: 10% 15%;
    width: 70%;
    height: 10%;
    padding: 5% 0%;
    border: 1px solid black;
    border-radius: 1em;`;

    const router = useNavigate();
    function backToHome(){
        router('/');
    }

    return(
        <div>
            <Div>
                <h1>Awdiz</h1>
                <p>(Done using styled-components)</p>
                <button onClick={backToHome}>Back To Homepage</button>
                </Div>
        </div>
    )
}

export default StyledComponents;