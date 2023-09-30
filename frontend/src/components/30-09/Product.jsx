import React, {useEffect, useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast";

function Product(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts(){
            try{
                const { data } = await axios.get('https://fakestoreapi.com/products');
                setProducts(data);
            }catch(error){
                toast.error(error.message)
            }
        }
        getProducts();
    },[]);

    return(
        <div>{products.length?
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
                {products.map((pro) => (
                    <div style={{ border: "1px solid black", width: "23%", height: "550px", marginBottom: "10px" }}>
                        <img style={{ width: "80%", height: "300px", marginTop:"10%" }} src={pro.image} />
                        <h3>Name :{pro.title}</h3>
                        <h3>Price : {pro.price} $</h3>
                        <button style={{border: "1px solid transparent", backgroundColor:"lightgreen", }}>Add to cart</button>
                    </div>
                ))}
            </div>
            :<div>Loading...</div>
        }</div>
    )
    

}

export default Product;

