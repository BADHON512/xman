import ProductDetails from '@/components/products/ProductDetails';
import axios from 'axios';
import React from 'react';
const getProductDetails=async(id)=>{
  const {data}= await axios.get(`http://localhost:3000/api/product/${id}`)
  
  return data;
}

const page = async({params}) => {
   const product=await getProductDetails(params.id)
  
    return (
        <div>
            <ProductDetails product={product}/>
        </div>
    );
};

export default page;