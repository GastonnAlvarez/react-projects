import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProducts] = useState();
  const { productId } = useParams();

  axios
    .get(`https://dummyjson.com/products/${productId}`)
    .then((res) => setProducts(res.data));
  return (
    <>
      {!product && <h2>Loading...</h2>}
      {product && (
        <>
          <h2>Product Details:{product.title}</h2>
          <img src={product.thumbnail} alt={product.title}/>
          <h3>{product.description}</h3>
          <Link to='/products'>Back to Product Page</Link>
        </>
      )}
    </>
  );
};

export default ProductDetails;
