import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { shopContext } from "../context/shopContext";
const Nav = () => {
  const { cartItems } = useContext(shopContext);
  const itemcount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
  return (
    <div className=" justify-between bg-purple-900 h-15 p-2">
      <div className="container flex justify-between font-bold text-white p-4 ">
        <a className="text-2xl text-yellow-300 font-Krona"> shop coding</a>
        <ul className="flex justify-between ">
          <li className="mx-2">
            <Link to="/">shop</Link>
          </li>
          <li className="mx-1 inline-block">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemcount > 0 && (
                <span className="inline-block w-4 h-4 z-10 bg-red-600 rounded-full text-xs">
                  {itemcount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
