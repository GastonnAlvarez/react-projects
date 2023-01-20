import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductsDetails';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=> setProducts(res.data.products))
    },[]);

  return (
    <>
      <h2>Products</h2>
      <Routes>
        <Route index path='/' element={<ProductList products={products} />}/>
        <Route path='/:productId' element={<ProductDetails/>} />
      </Routes>
    </>
  );
};

export default Products;
