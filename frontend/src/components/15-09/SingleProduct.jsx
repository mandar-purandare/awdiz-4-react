import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {

    const router = useNavigate();

    const { id, name } = useParams();

    function backToProductList(){
        router('/params');
    }

    return (
        <div>
            <h1>{name} - {id}</h1>
            <button onClick={backToProductList}>Back To Product Listing</button>
        </div>
    )
}

export default SingleProduct;