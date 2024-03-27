import React, { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../Product";
import ProductFilter from "./ProductFilter";
import {
  getProducts,
  setSingleProduct,
  addToCart
} from "../../store/actions/products";

function Products(props) {
  useEffect(() => {
    props.getProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <section className="py-2">
      <div className="container">
      <h2 className="text-center fw-bolder">Our Products</h2>
        <ProductFilter />
        <div className="row">
          <div className="col-10 mx-auto">
            <h6 className="text-title">
              total products: {props.products.length}
            </h6>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-2">
          {props.products.length === 0 && (
            <div className="col text-title text-center">
              sorry, no items matched your search
            </div>
          )}
          {props.products.map(product => (
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
  return { products: products.filteredProducts };
};

export default connect(mapStatesToProps, {
  getProducts,
  setSingleProduct,
  addToCart
})(Products);
