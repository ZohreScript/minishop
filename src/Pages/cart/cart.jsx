import React, { useContext } from 'react'
import { PRODUCTS } from '../../data/products'
import { shopContext } from '../../context/shopContext'
import Product from '../shop/Product'

function Cart() {
  const { cartItems } = useContext(shopContext)

  return (
    <React.Fragment>
      
      <h1 className="font-bold font-Krona my-5 text-purple-700 text-xl">cartitems</h1>


      <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRODUCTS.map((P) => {
          if (cartItems?.some((i) => i.id === P.id && i.count > 0))
            return <Product data={P} ></Product>
        })}
      </div>
    </React.Fragment>
  )
}

export default Cart