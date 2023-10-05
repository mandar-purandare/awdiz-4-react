import React, {useEffect, useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import './Products.css';
import { useNavigate } from "react-router-dom";

function Products(){
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        async function getProducts(){
            try{
                const { data } = await axios.get('https://fakestoreapi.com/products');
                setProducts(data);
                // console.log(products);
            }catch(error){
                toast.error(error.message)
            }
        }
        getProducts();
    },[]);

    return(
        <div className="products-container">{products.length?
            <div className="products-row">
                {products.map((pro) => (
                    <div className="product-template" onClick={() => {router(`/product/${pro.id}`)}}>
                        <img src={pro.image} />
                        <h3>Name :{pro.title}</h3>
                        <h3>Price : {pro.price} $</h3>
                        <button>View</button>
                    </div>
                ))}
            </div>
            :<div>Loading...</div>
        }</div>
    )
    

}

export default Products;

