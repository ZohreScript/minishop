import React, { useState } from 'react'
import { createContext } from 'react'

export const shopContext=createContext(null) ;
export const ShopContextProvider=(props)=>{
const[cartItems,setCartItems]=useState([]);

const addToCart=(itemid)=>{
if(!cartItems?.find((item)=>item.id===itemid))
setCartItems([...cartItems,{id: itemid,count:1}])
else
 setCartItems(cartItems.map((item)=>{
 if(item.id=== itemid)
 return{...item,count:item.count+1}
 else return item
}))
 console.log(setCartItems);
}
const removeFromCart=(itemid)=>{
setCartItems(cartItems.map((i)=>{
    if (i.id === itemid)
    return {...i,count:i.count === 0 ? 0:i.count- 1}
    else return 1
}))
}
const contextvalue={cartItems,addToCart,removeFromCart}
return <shopContext.Provider value={contextvalue}>
    {props.children}
</shopContext.Provider>
}
