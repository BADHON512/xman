import ListProducts from '@/components/products/ListProducts';
import axios from 'axios';
import queryString from 'query-string';
import React from 'react';

const getProducts = async (searchParams) => {

   const urlParams = {
      keyword: searchParams.keyword,
      page:searchParams.page,
      category:searchParams.category,
      "price[gte]":searchParams.min,
      "price[lte]":searchParams.max,
      "ratings[gte]":searchParams.ratings,

   }
   const searchQuery = queryString.stringify(urlParams)

   const { data } = await axios.get(`http://localhost:3000/api/product?${searchQuery}`)
   return data
}
const Home = async ({ searchParams }) => {

   const productData = await getProducts(searchParams)
   console.log(productData);
   return (
      <div>
         <ListProducts data={productData} />
      </div>
   );
};

export default Home;