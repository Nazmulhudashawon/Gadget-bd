import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../store/actions/products";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CartTotals(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-title text-center my-4">
          <button
            className="btn btn-outline-danger text-capitalize mb-4"
            onClick={props.clearCart}
          >
            clear cart
          </button>
      
          
          <h3>total: {props.cartTotal} TK</h3>
          <Link as={Link} to="/checkout">  
          <button
            className="btn btn-info text-capitalize mt-4"          
          >
          Procced to Check out
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ products }) => {
  const { cartSubTotal, cartTax, cartTotal } = products;
  return { cartSubTotal, cartTax, cartTotal };
};
export default connect(mapStateToProps, { clearCart })(CartTotals);
