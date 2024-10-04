import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Find the product by ID
    const filteredProduct = items.find((product) => product.id === parseInt(id));
    setProduct(filteredProduct);

    // Fetch related products based on category
    if (filteredProduct) {
      const related = items.filter((p) => p.category === filteredProduct.category && p.id !== filteredProduct.id);
      setRelatedProducts(related);
    }
  }, [id]);

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-2">Buy Now</button>
          <button className="btn btn-warning mx-2">Add To Cart</button>
        </div>
      </div>
    <h1 className='text-center'>Related Products</h1>
      {/* Render related products */}
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
