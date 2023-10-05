import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function AddProduct() {

    const [product, setProduct] = useState({name:'', price:'', image:''})

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        setProduct({...product,[event.target.name]: event.target.value});
    }

    async function addProduct(event){
        event.preventDefault();
        if(product.name && product.price && product.image && product.price > 0){
            try{
                const { data } = await axios.post('https://fakestoreapi.com/products',{name:product.name, price:product.price, image:product.image});
                toast.success('Product added successfully with id ' + data.id);
                setProduct({ name: '', price: '', image: '' })
            }
            catch(error){
                console.log(error)
            }
        }else{
            toast.error('All fields are mandatory and price must be greater than 0');
        }
    }

  return (
    <div className='add-product'>
        <form onSubmit={addProduct}>
            <label>Product Name </label>
            <input type='text' name='name' onChange={handleChange} value={product.name}/><br/><br/>
            <label>Product Price </label>
            <input type='number' name='price' onChange={handleChange} value={product.price}/><br/><br/>
            <label>product Image Url </label>
            <input type='url' name='image' onChange={handleChange} value={product.image}/><br/><br/>
            <input type='submit'/>
        </form>
        <Toaster/>
    </div>
  )
}

export default AddProduct