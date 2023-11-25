import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("coding_cart");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("coding_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemid) => {
    if (!cartItems?.find((item) => item.id === itemid))
      setCartItems([...cartItems, { id: itemid, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemid)
            return { ...item, count: item.count + 1 };
          else return item;
        })
      );
  };

  const removeFromCart = (itemid) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemid)
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        else return item;
      })
    );
  };

  return { cartItems, addToCart, removeFromCart };
};