import React, {useEffect, useState} from "react";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import './Products.css';
import { useNavigate } from "react-router-dom";
import api from "../../helpers/AxiosConfig";

function Products(){
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        async function getProducts(){
            try{
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const {data} = await api.get('/product/get-all-products');
                if(data.success){
                    setProducts(data.products);
                }
                
                // console.log(products);
            }catch(error){
                toast.error(error.message);
            }
        }
        getProducts();
    },[]);

    return(
        <div className="products-container">{products.length?
            <div className="products-row">
                {products.map((pro) => (
                    <div className="product-template" onClick={() => {router(`/product/${pro._id}`)}}>
                        <img src={pro.image} />
                        <h3>Name :{pro.name}</h3>
                        <h3>Price : ₹{pro.price} </h3>
                        <h3>Category : {pro.category}</h3>
                        <button>View</button>
                    </div>
                ))}
            </div>
            :<div>Loading...</div>
        }<Toaster/></div>
    )
    

}

export default Products;

