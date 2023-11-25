import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";



const Product = (props) => {
  const { id, productname, productimage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

  const isIncart = cartItems?.some((item) => item.id === id);

  return (
    <div className="container max-w-sm rounded overflow-hidden shadow-xl border-2 border-gray-100 shadow-purple-200 hover:shadow-purple-500 m-2">
      <img src={productimage} alt="Product Image"  className="w-full" />
      <div className="px-6 py-4">
      <h5 className="font-bold text-xl mb-2">{productname}</h5>
      <p className="text-gray-700 font-Krona p-2 text-base">price: {price}$</p>
      </div>
      <div className="px-6 py-4">
      <button className="inline-block text-white bg-purple-800 rounded-full px-3 py-1 text-sm font-semibold mr-2" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="text-gray-700 font-Krona text-base">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isIncart && (
        <button
          className="inline-block text-white bg-purple-800 rounded-full px-3 py-1 text-sm font-semibold ml-2"
          onClick={()=> removeFromCart(id)}
        >
          -
        </button>
      )}
      </div>
    </div>
  );
};

export default Product;
