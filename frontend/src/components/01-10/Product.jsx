import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Product.css'
import toast from 'react-hot-toast';
import api from '../../helpers/AxiosConfig';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        async function getProductDetails(){
            try{
                const { data } = await api.get(`/product/get-single-product?id=${id}`);
                if(data.success){
                    setProduct(data.product);
                }
            }catch(error){
                toast.error(error.response.data.message);
            }
            
        }
        if(id){
            getProductDetails();
        }
    },[id]);

    function backToProducts(){
        router('/products');
    }

  return (
    <div className='product-container'>
        <div className='product-image-div black-border'>
            <img src={product.image}/>
        </div>
        <div className='product-info-div black-border'>
            <h2>{product.name}</h2>
            {/* <h4 className='product-rating'>Rating ({product.rating.count}) : <span>{product.rating.rate}</span></h4> */}
            {/* <h4 className='product-rating'>Rating ({productRatingCount}) : <span>{productRating}</span></h4> */}
            <br/>
            <div>
                <h2>${product.price}</h2>
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
            <br/>
            <h4>{product.category}</h4>
            <button className='back-button' onClick={backToProducts}>Back to products</button>
        </div>
    </div>
  )
}

export default Product