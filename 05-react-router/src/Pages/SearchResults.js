import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from "../components/ProductList";
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/search?q=${searchParams.get("keywords")}`)
        .then(res=> setProducts(res.data.products))
    },[]);
  return (
    <>
      <h2>Search Results</h2>
      {products.length === 0 && <h2>Not found products...</h2>}
      {products.length && <ProductList products={products}/>}
    </>
  );
};

export default SearchResults;
