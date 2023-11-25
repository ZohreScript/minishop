import { createContext } from "react";
import { useCart } from "../hook/usecart";

export const shopContext = createContext({
cartItems:null,  
addToCart:()=>{},
removeFromCart:()=>{}
});


export const ShopContextProvider=(props)=>{
return (
<shopContext.Provider value={useCart()}>{props.children}
</shopContext.Provider>)
}
