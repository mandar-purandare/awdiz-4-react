import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import api from '../../helpers/AxiosConfig';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const router = useNavigate();

    const { state } = useContext(AuthContext);

    const [product, setProduct] = useState({name:'', price:'', category:'', image:''});

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        setProduct({...product,[event.target.name]: event.target.value});
    }

    async function addProduct(event){
        event.preventDefault();
        if(product.name && product.price && product.image && product.category && product.price > 0){
            try{
                // const { data } = await axios.post('https://fakestoreapi.com/products',{name:product.name, price:product.price, image:product.image});
                const { data } = await api.post('/product/add-product',{name:product.name, price:product.price, category:product.category, image:product.image, id: state?.user?.id});
                if(data.success){
                    toast.success('Product added successfully with id ' + state?.user?.id);
                    setProduct({ name: '', price: '', category:'',image: '' });
                }
                
            }
            catch(error){
                console.log(error)
            }
        }else{
            toast.error('All fields are mandatory and price must be greater than 0');
        }
    }

    useEffect(() => {
        if(state?.user?.name == undefined){
            toast.error('Please login to access this page');
            setTimeout(()=>{
                router('/');
            },3000)   
        }
    },[state]);

  return (
    <div className='add-product'>
        <form onSubmit={addProduct}>
            <label>Product Name </label>
            <input type='text' name='name' onChange={handleChange} value={product.name}/><br/><br/>
            <label>Product Price </label>
            <input type='number' name='price' onChange={handleChange} value={product.price}/><br/><br/>
            <label>product Image Url </label>
            <input type='url' name='image' onChange={handleChange} value={product.image}/><br/><br/>
            <label>Product Category </label>
            <input type='text' name='category' onChange={handleChange} value={product.category}/><br/><br/>
            <input type='submit'/>
        </form>
        <Toaster/>
    </div>
  )
}

export default AddProduct