import React from "react";
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Header.css";
import logo from './Media/footer__logo.png'

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

      <div className="header__right">
        <Link to="/admin" className="header__right__link">
          <div className="header__right__inside">
            <VerifiedUserIcon className="icons" />
            <h5 className="header__optionLine2">Admin</h5>
          </div>
        </Link>
      </div>

      <div className="drop__menu">
        <button className="dropdown"><i class="fa fa-bars"></i></button>
        <Link to="/admin" className="header__middle__right">
          <div className="header__right__inside">
            <VerifiedUserIcon className="icons" />
            <h5 className="header__optionLine2">Admin</h5>
          </div>
        </Link>
        <Link className="drop__menu__options" to="/">
          <h5>Home</h5>
        </Link>

        <Link className="drop__menu__options" to="/menu">
          <h5>Menu</h5>
        </Link>

        <Link className="drop__menu__options" to="/review">
          <h5>Feedback</h5>
        </Link>

        <Link className="drop__menu__options" to="/booking">
          <h5>Booking</h5>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
