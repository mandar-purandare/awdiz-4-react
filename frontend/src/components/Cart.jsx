import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/AxiosConfig';

const Cart = () => {
    const [cartProducts, setCartProducts]  = useState([]);

    const { state } = useContext(AuthContext);
    const router = useNavigate();

    async function getYourCartProducts() {
        try{
            const response = await api.get(`/user/cart?id=${state?.user?.id}`);
            if(response.data.success){
                let products = response.data.products;
                console.log(products);
                setCartProducts(products)
                
               

                // console.log(cartProducts);
            }
        }catch(error){
            toast.error(error.message);
        }
        
    }

    useEffect(() => {
        if (state?.user && state?.user?.id === undefined) {
            toast.error("Please login to access your cart products, redirecting yout login page in 3 sec.")
            setTimeout(() => {
                router("/login")
            }, 3000)
        } else {
            if (state?.user?.id) {
                getYourCartProducts()
            }

        }
    }, [state])


    return (
        <div className="products-container">
            {cartProducts.length?
            <div className="products-row">
                {cartProducts.map((pro) => (
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
        }
        <Toaster/></div>
    )
}

export default Cart