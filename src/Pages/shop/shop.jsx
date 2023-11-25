import React from 'react'
import Product from './Product'
import { PRODUCTS } from '../../data/products'

const Shop =() =>{
return (
<React.Fragment>
<h1 className="font-bold font-Krona my-5 text-purple-700 text-xl">shopy</h1>
<div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{PRODUCTS.map((productdata)=><Product key={productdata.id} data={productdata} />)}
</div>
</React.Fragment>
  )
}

export default Shop