import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Product.css'
import toast from 'react-hot-toast';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        async function getProductDetails(){
            try{
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
                // console.log(data);
                setProduct(data);
                console.log(product);
            }catch(error){
                toast.error(error.message);
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
            <h2>{product.title}</h2>
            {/* <h4 className='product-rating'>Rating ({product.rating.count}) : <span>{product.rating.rate}</span></h4> */}
            {/* <h4 className='product-rating'>Rating ({productRatingCount}) : <span>{productRating}</span></h4> */}
            <br/>
            <div>
                <h2>${product.price}</h2>
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
            <br/>
            <h4>{product.description}</h4>
            <button className='back-button' onClick={backToProducts}>Back to products</button>
        </div>
    </div>
  )
}

export default Product