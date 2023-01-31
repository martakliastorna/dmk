import React, {useState} from "react";

import Burger from "./burger";
import Registration from "./registration";
import Nav from "./nav";
import Cart from "./cart";



function Header({products, removeProductFromCart, changeCount}) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
<header className="container p-3 border-bottom header">
  <div className="header-body">
        <div> <img className="logotype position-z" src="../images/logo.png" />
        </div>
        <Nav />
      <div className="main-page position-z">
        <img onClick = { () => setCartOpen(cartOpen = !cartOpen) } className="img-shop active-el mr-4" src="../images/shop.png" />
        <div className="registration-img"><img className="img-shop active" src="../images/person.png"/>
        <Registration/>
        </div>
            
        {cartOpen && (
    <Cart/>
            
            )}
      </div> 
      <Burger/>
  </div>
</header>
</>
  );
}

export default Header;