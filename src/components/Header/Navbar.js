import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {Link}  from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { handleSidebar, handleCart } from "../../store/actions/products";
import useAuth from "../../Hooks/useAuth";
import '../Header/Navbar.css'

function Navbar(props) {
  const { user, logout } = useAuth();
  return (
    <div className="head">
      <div className="nav-center">
        <h3>Gadget BD</h3>
        <div className="nav-cart">
          <Link as={Link} to="/"> Home </Link>
        {user.email ? (
              <button className=" button" onClick={logout}>
                logout
              </button>
            ) : (
              <Link as={Link} to="/login">
                Login
              </Link>
            )}
          <FaCartPlus className="nav-icon" onClick={props.handleCart} />
          <div className="cart-items">{props.cartItems}</div>
        </div>
      </div>
    </div>
  );
}


const mapStatesToProps = state => {
  return { cartItems: state.products.cartItems };
};

export default connect(mapStatesToProps, { handleSidebar, handleCart })(Navbar);
