import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../helpers/AxiosConfig";
import toast from "react-hot-toast";

function UpdateProduct(){

    const {id} = useParams();

    const router = useNavigate();

    const [product, setProduct] = useState({name:'', price:'', category:'', image:''});

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        setProduct({...product,[event.target.name]: event.target.value});
    }

    const getProductDetails = async () => {
        try{
            const response = await api.get(`/product/get-single-product?id=${id}`);
            if (response.data.success){
                setProduct({...response.data.product})
            }
        }catch(error){
            toast.error(error.message);
        } 
    }

    const updateProduct = async (event) => {
        try{
            event.preventDefault();
                const response = await api.post(`/product/update-product`,{id, product});
                if(response.data.success){
                        toast.success(response.data.message);
                        // setTimeout(()=>{getProductDetails()},3000);
                        // getProductDetails();
                        router('/your-products');
                }
        }catch(error){
            toast.error(error.message);
        }
    }

    useEffect(() => {

            getProductDetails();
            // console.log(id);

    },[id])

    return(
            <div className="update-product">
                 <form onSubmit={updateProduct}>
                    <label>Product Name </label>
                    <input type='text' name='name' onChange={handleChange} value={product.name}/><br/><br/>
                    <label>Product Price </label>
                    <input type='number' name='price' onChange={handleChange} value={product.price}/><br/><br/>
                    <label>product Image Url </label>
                    <input type='url' name='image' onChange={handleChange} value={product.image}/><br/><br/>
                    <label>Product Category </label>
                    <input type='text' name='category' onChange={handleChange} value={product.category}/><br/><br/>
                <input type='submit' value='Update'/>
                </form>
            </div>
          )
}

export default UpdateProduct