import React, {useEffect, useState} from "react";
import '../css/products.css';
import Product from "./product";
import Cart from "./cart";
import Header from "./header";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data.map(product => {
          return {...product, addedToCart: false, count: 1};
        })));
  }, []);

function changeCount(id, newCount) {
    const result = products.map(product => ({...product, count: product.id === id ? newCount : product.count}));
    setProducts(result);
  }

  function addProductToCart(id) {
    const result = [];
    for(let product of products) {
      if(product.id === id) {
        result.push({...product, addedToCart: true});
      } else {
        result.push(product);
      }
    }
    setProducts(result);
  }

  function removeProductFromCart(id) {
    const result = products.map(product => ({...product, addedToCart: product.id === id ? false : product.addedToCart}));
    setProducts(result);
  }

  return <>
    <Header/>
    <div className={'row p-5'}>
    <Cart products={products.filter(product => product.addedToCart)}
    removeProductFromCart={removeProductFromCart}
    changeCount={changeCount}
    />
    <div></div>
    {products.map(product => <Product
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
        key={product.id} product={product} />)}
  </div></>
}

export default Products;