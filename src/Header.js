import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import DeckIcon from "@material-ui/icons/Deck";
import "./Header.css";
import logo from "./Media/logo.png";

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

        <Link className="header__middle__options" to="/about">
          <h5>About</h5>
        </Link>

        <Link className="header__middle__options" to="/menu">
          <h5>Menu</h5>
        </Link>

        <Link className="header__middle__options" to="/review">
          <h5>Feedback</h5>
        </Link>
      </div>

      <div className="header__social">
        <p className="header__text">Follow Us!!!</p>
        <a href="">{<InstagramIcon className="icons"/>}</a>
        <a href="">{<FacebookIcon className="icons" />}</a>
      </div>

      <div className="header__right">
        
        <div className="header__option">
          <Link to="/admin" className="header__link">
            <VerifiedUserIcon className="icons" />
            <span className="header__optionLine2">Admin</span>
          </Link>
        </div>

        <div className="header__option">
          <Link to="/booking" className="header__link">
            <DeckIcon  className="icons"/>
            <span className="header__optionLine2">Booking</span>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;
