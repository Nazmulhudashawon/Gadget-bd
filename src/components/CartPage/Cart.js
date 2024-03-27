import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart() {
  return (
    <section style={{marginBottom:"100px"}}  className="py-5 ">
      <div className="container">
       <h2 className="text-center fw-bolder">Shopping Cart</h2>
      </div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
}
export default Cart;
