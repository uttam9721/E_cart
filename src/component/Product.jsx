import React from "react";
// import { items } from "./Data";
import { Link } from "react-router-dom";

const Product = ({items}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`} 
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                    </Link>
                    <h3>Price:{product.price}</h3>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      <button className="btn btn-primary mx-2">Buy Now</button>
                      <button className="btn btn-warning mx-2">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
