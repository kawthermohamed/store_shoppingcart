import Navlink from "./navlinks";
import "./header.css";
import "../styles.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cartimg from "./shopping.png";
import { contextProvider } from "./Context";
function Header() {
  const [isActive, setActive] = useState(false);
  const { opencart, cartQuantity } = useContext(contextProvider);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">Homzawy</Link>
        </div>
        <div className="navbar">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={toggleClass}
          ></i>
          <ul className={isActive ? "active" : null}>
            <Navlink navlink="/" acontent="Home" />
            <Navlink navlink="/store" acontent="Store" />
            <Navlink navlink="/about" acontent="About" />
          </ul>
          <Link className="add" to="/">
            <img
              src={cartimg}
              alt="cart-img"
              onClick={() => {
                opencart();
              }}
            />
            <div className="item-count">{cartQuantity}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
