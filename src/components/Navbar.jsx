import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/project_logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Apps, Close } from "@mui/icons-material";
import { selectTotalCartItems } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const totalCartItems = useSelector(selectTotalCartItems);

  const toggleMenu = () => {
    setShowMenu((prevVal) => !prevVal);
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">
          <MenuIcon className="mobile_menu_icon" onClick={toggleMenu} />
          <img src={logo} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="navbar_list">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/performance" className="link">
              <li>Performance</li>
            </Link>
            <Link to="/forged" className="link">
              <li>Forged</li>
            </Link>
            <Link to="/flowforged" className="link">
              <li>FlowForged</li>
            </Link>

            <Link to="/cart" className="link">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
        <div className="navbar_icons">
          <Badge
            badgeContent={totalCartItems}
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "rgb(255, 165, 0)",
              },
            }}
          >
            <div className="icon">
              <ShoppingCartOutlinedIcon onClick={() => navigate("/cart")} />
            </div>
          </Badge>

          <div className="icon">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="icon">
            <LocationOnOutlinedIcon />
          </div>

          <div className="icon">
            <Apps />
          </div>
        </div>
      </div>

      <div
        className="mobile_menu"
        style={{ transform: showMenu ? "translateX(0)" : "translateX(-100%)" }}
      >
        <Close className="close_icon" onClick={toggleMenu} />
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/performance" className="link">
            <li>Performance</li>
          </Link>
          <Link to="/forged" className="link">
            <li>Forged</li>
          </Link>
          <Link to="/flowforged" className="link">
            <li>FlowForged</li>
          </Link>

          <Link to="/cart" className="link">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
