import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import toast, { Toaster }  from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/AxiosConfig';

function YourProducts() {
    const [yourProducts, setYourProducts] = useState([]);

    const router = useNavigate();

    const { state } = useContext(AuthContext);

    const getYourProducts = async () => {
        try{
            const response = await api.post('/product/your-products',{id:state?.user?.id});
            if(response.data.success){
                setYourProducts(response.data.products);
            }
        }catch(error){
            toast.error(error?.response.data.message);
        }
    }

    useEffect(() => {
        if(state?.user?.name === undefined){
            toast.error('Please login to access this page');
            setTimeout(() => {
                router('/login2');
            },3000)
        }

        if(state?.user && state?.user?.name !== undefined){
            getYourProducts();
        }
    },[state]);

  return (
    <div className='your-products-container'>
         {yourProducts.length?
            <div className="products-row">
                {yourProducts.map((pro) => (
                    <div className="product-template" onClick={() => {router(`/product/${pro.id}`)}}>
                        <img src={pro.image} />
                        <h3>Name :{pro.name}</h3>
                        <h3>Price : ₹{pro.price} </h3>
                        <h3>Category : {pro.category}</h3>
                        <button>View</button>
                    </div>
                ))}
            </div>
            :<div>Loading...</div>
        }<Toaster/>
    </div>
  )
}

export default YourProducts