import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const router = useNavigate();
    const [count, setCount] = useState(5);
    useEffect(() => {
        setTimeout(() => {
            router('/')
        },5000);
    },[]);

    setInterval(() => {
          setCount(count -1)  
            },1000);

    return (
        <div>
            <h1>Page Not Found, redirecting you to home page in {count} sec..</h1>
            <button onClick={() => router('/')}>Go to home</button>
        </div>
    )
}

export default PageNotFound;