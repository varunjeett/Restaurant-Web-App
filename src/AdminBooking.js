import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import ShowBooking from "./ShowBooking.js";
import "./Booking.css";
import { useStateValue } from "./StateProvider.js";
import logo from "./Media/logo.png";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";

function AdminBooking() {
  const [bookings, setBooking] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("Booking").onSnapshot((snapshot) =>
      setBooking(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <>
      <nav className="header">
        <a href="https://www.youtube.com/">
          <img className="header__logo highlight" src={logo} alt="logo of bunchOlunch" />
        </a>

        <div className="header__admin highlight">
          <Link to="/signup">
            <PersonAddIcon className="header__add__icon" fontSize="large" />
          </Link>
        </div>
      </nav>

      <div className="booking">
        <h2>Hii {user?.email} , Your Bookings</h2>
        {bookings?.map((book) => (
          <ShowBooking book={book} />
        ))}
      </div>
    </>
  );
}

export default AdminBooking;
