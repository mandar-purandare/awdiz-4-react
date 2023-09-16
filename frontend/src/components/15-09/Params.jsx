import React from 'react';
import { useNavigate } from 'react-router-dom';

const Params = () => {
    const router = useNavigate();
    return (
        <div>
            <h1>Product Listing (params) Page</h1>
            <button onClick={()=> router("/singleproduct/8888888/productName") }>Click to go single product</button>
            <button onClick={()=> router("/") }>Home</button>
        </div>
    )
}

export default Params;