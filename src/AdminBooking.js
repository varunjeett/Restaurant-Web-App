import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import ShowBooking from "./ShowBooking.js";
import "./AdminBooking.css";
import { useStateValue } from "./StateProvider.js";
import logo from "./Media/logo.jpg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";
import FeedbackIcon from "@material-ui/icons/Feedback";

function AdminBooking() {
  const [bookings, setBooking] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("Bookings")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
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
        <Link to="/admin">
          <img
            className="header__logo highlight"
            src={logo}
            alt="logo of bunchOlunch"
          />
        </Link>

        <h2>Hii {user?.email} , Your Bookings</h2>

        <div className="header__admin highlight">
          <Link to="/adminreview">
            <FeedbackIcon className="header__add__icon" fontSize="large" />
          </Link>
        </div>

        <div className="header__admin highlight">
          <Link to="/signup">
            <PersonAddIcon className="header__add__icon" fontSize="large" />
          </Link>
        </div>
      </nav>

      <div className="single__booking">
        {bookings?.map((book) => (
          <ShowBooking book={book} />
        ))}
      </div>
    </>
  );
}

export default AdminBooking;
