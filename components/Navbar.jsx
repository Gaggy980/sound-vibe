import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";

import { Cart} from './'
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
const { showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className="navbar-container">
      
        <Link href="/" >
        <div className="logo">
          <BsSoundwave size={40} />
           <p className="logo-text">SOUND Vibe</p>
        </div>
        </Link>
     

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
