import React from 'react';
import Filters from '../layouts/Filters';
import ProductItem from './ProductItems';
import CustomPagination from '../layouts/CustomPagination';
const ListProducts = ({data}) => {
  
  const Data= data?.product
   
    return (
        <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Filters />
  
            <main className="md:w-2/3 lg:w-3/4 px-3">
              {Data?.map((product,index) => (
                <ProductItem key={index} product={product} />
              ))}

              <CustomPagination resPerPage={data?.resPerPage} productCount={data?.filteredProductsCount}/>
            </main>
          </div>
        </div>
      </section>
    );
};

export default ListProducts;