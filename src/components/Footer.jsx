import React from "react";
import "./Footer.css";
import sponsorLogo from "../images/sponsorlogo4.png";
import sponsorLogo2 from "../images/sponsorlogo2.png";
import sponsorLogo3 from "../images/sponsorlogo3.png";
import paymentMethods from "../images/paymentimg.png";
import instalogo from "../images/insta.png";
import fblogo from "../images/fb.png";
import ytlogo from "../images/yt.png";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sponsors">
        <h3>Official Sponsors</h3>

        <img src={sponsorLogo2} alt="" />
        <img src={sponsorLogo3} alt="" />
        <img src={sponsorLogo} alt="" />
      </div>

      <div className="links">
        <h3>Useful Links</h3>

        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="link">
            <li>Cart</li>
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
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="contact_wrapper">
          <div className="address">
            <LocationOn />
            <p>3101 River Rd Sodus</p>
          </div>
          <div className="phone">
            <Phone />
            <p>530-252-4679</p>
          </div>
          <div className="email">
            <Mail />
            <p>forged@contact.com</p>
          </div>
        </div>

        <img src={paymentMethods} alt="" />
      </div>

      <div className="social">
        <h3>Follow Us</h3>
        <div className="social_icons">
          <img src={fblogo} alt="" />
          <img src={instalogo} alt="" />
          <img src={ytlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
