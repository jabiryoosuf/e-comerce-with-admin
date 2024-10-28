import { Link } from "react-router-dom";
import Search from "../pages/search/Search";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModel from "../pages/shop/CartModel";

const Navbar = () => {
 

  const products = useSelector((state) => state.cart.products);
  console.log(products);


  const [isCartOPen, setIsCartOPen] = useState(false);
  const handleCartTogle = ()=>{
    setIsCartOPen(!isCartOPen)
  }

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* logo */}
        <div className="nav__logo ">
          <Link to="/">
            ECOM <span>.</span>
          </Link>
        </div>
        {/* navicon */}
        <div className="nav__icons relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartTogle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-shopping-bag-line"></i>
            </Link>
          </span>
        </div>
      </nav>
      {isCartOPen && <CartModel products={products} isOpen={isCartOPen} onClose={handleCartTogle}/>}
    </header>
  );
};

export default Navbar;
