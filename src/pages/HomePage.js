import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Featured from "../components/HomePage/Featured";

function HomePage() {
  return (
    <React.Fragment>
      <Hero title="awesome gadgets">
        <Link to="/products"  className="main-link mt-3" >
          Our products
        </Link>
      </Hero>
      <Featured />
    </React.Fragment>
  );
}
export default HomePage;
