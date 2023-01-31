import React from "react";
import Footer from '../components/footer';
import Products from "../components/products";

function Shop() {
  return (
    <div>
      <div className="container border-bottom header">
      <Products/>        
      </div>
      <Footer />
    </div>
  );
}


export default Shop;