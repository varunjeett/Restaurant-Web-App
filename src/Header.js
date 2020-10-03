import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Header.css";
import logo from "./Media/logo.jpg";

function Header() {
  return (
    <nav className="header">

      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo of amazon" />
        </Link>
      </div>

      <div className="header__middle">
        <Link className="header__middle__options" to="/">
          <h5>Home</h5>
        </Link>

        <Link className="header__middle__options" to="/menu">
          <h5>Menu</h5>
        </Link>

        <Link className="header__middle__options" to="/review">
          <h5>Feedback</h5>
        </Link>

        <Link className="header__middle__options" to="/booking">
          <h5>Booking</h5>
        </Link>

      </div>

      <div className="header__social">
        <a href="https://www.instagram.com/"> {<InstagramIcon className="icons" />}</a>
        <a href="https://www.facebook.com/"> {<FacebookIcon className="icons" />}</a>
        <p className="header__text">Follow Us!!!</p>
      </div>

      <div className="header__right">

        <div className="header__option">
          <Link to="/admin" className="header__link">
            <div className="header__option__inside">
              <VerifiedUserIcon className="icons" />
              <h5 className="header__optionLine2">Admin</h5>
            </div>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;
