import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../Product";
import {
  getProducts,
  setSingleProduct,
  addToCart
} from "../../store/actions/products";

function Featured(props) {
  useEffect(() => {
    props.getProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <section className="py-5 mb-4">
      <div className="container">
      <h2 className="text-center fw-bolder">Featured Products</h2>
        <div className="row my-3">
          {props.featured.map(product => (
            <Product
              key={product.id}
              product={product}
              onSingle={props.setSingleProduct}
              onCart={props.addToCart}     
            />
          ))}
        </div>
    
       
      </div>
    </section>
  );
}
const mapStatesToProps = ({ products }) => {
  return { featured: products.featuredProducts };
};

export default connect(mapStatesToProps, {
  getProducts,
  setSingleProduct,
  addToCart
})(Featured);
