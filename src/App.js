import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage";

import Products from "./pages/ProductsPage";
import AuthProvider from './Context/AuthProvider';

import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import { getProducts } from "./store/actions/products";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Sidecart from "./components/Sidecart";
import Sidebar from './components/Sidebar';
import Checkout from "./components/checkout/Checkout";

function App(props) {
  useEffect(() => {
    props.getProducts();
    
  }, []);

  return (
    <React.Fragment>
     
      <AuthProvider>    
      <Navbar />
      <Sidebar />
      <Sidecart />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={Default} />
      </Switch>
      </AuthProvider>
      <Footer />
    </React.Fragment>
  );
}

export default connect(null, { getProducts })(App);
