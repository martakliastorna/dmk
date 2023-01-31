import React from "react";
import Total from "./total";
import {Button } from "react-bootstrap";

function Cart({products, removeProductFromCart, changeCount}) {
  return <div className="container p-3">
    <h2>Кошик</h2>
    <ul className={''}> 
    {products?.map(product => <li className={"place-cart pb-4"} key={product.id}>{product.title}
    <div className={'ml-3 '}><div className={"mb-1"}><button className={'badge-style'}
            onClick={() =>(product.count <= 1) ? removeProductFromCart(product.id) : changeCount(product.id, product.count - 1)} >-</button>
      &nbsp;&nbsp;{product.count}&nbsp;&nbsp;
      <button className={'badge-style'}
            onClick={() => changeCount(product.id, product.count + 1)}>+</button>  
      </div>
      <Button className={'bg-dark text-white p-1'}
        onClick={() => removeProductFromCart(product.id)}>Видалити</Button>
    </div> </li>)}
  </ul> 
    <Total products={products}/> <Button variant={'dark'}>Оформити замовлення</Button>
  </div>
}

export default Cart;