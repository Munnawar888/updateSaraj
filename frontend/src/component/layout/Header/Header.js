import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";
import { SidebarData } from "./SidebarData";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header">
      <div className="header_container">
        <div className="menu_bar hover">
          <Link>
            <AiOutlineMenu onClick={showSidebar} />
          </Link>
        </div>
        <div className="header_logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="header_span">
          <span>
            <Link to="/wishlist">
              <AiFillHeart className="hover" />
            </Link>
          </span>
          <span>
            <Link to="/cart">
              <AiOutlineShoppingCart className="hover" />
            </Link>
          </span>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link className="nav-item" to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
